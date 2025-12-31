/**
 * Parses SizeDescriptionsField strings into structured data
 * 
 * Pattern analysis from sample data:
 * 1. "Drive Up  Outside Level No Climate Drivethrough"
 * 2. "RV/Boat/Vehicle/Parking 1st Floor Covered Level No Climate Electricity"
 * 3. "RV/Boat/Vehicle/Parking No Climate Drivethrough No Electricity"
 * 
 * Patterns identified:
 * - Unit type/category at the start (may contain slashes)
 * - Location descriptors: "Outside Level", "1st Floor", "Covered Level"
 * - Climate: "No Climate" (or potentially "Climate")
 * - Features: "Drivethrough", "Electricity", "No Electricity"
 */

// Known categories/patterns - ordered by specificity (longest first)
const UNIT_TYPES = [
  'RV/Boat/Vehicle/Parking',
  'Drive Up',
  'RV',
  'Boat',
  'Vehicle',
  'Parking',
];

// Location descriptors - ordered by specificity (longest/most specific first)
const LOCATION_DESCRIPTORS = [
  '1st Floor Covered Level',
  '2nd Floor Covered Level',
  '3rd Floor Covered Level',
  '1st Floor',
  '2nd Floor',
  '3rd Floor',
  'Outside',
  'Covered',
  'Inside',
  'Inside',
  'Outside',
  'Level'
];

const CLIMATE_KEYWORDS = {
  hasClimate: ['Climate Controlled', 'Climate Control', 'Climate'],
  noClimate: ['No Climate'],
};

// Features - ordered by specificity (longest first for negative features)
const FEATURES = {
  positive: ['Drivethrough', 'Electricity', 'Covered', 'Accessible'],
  negative: ['No Electricity', 'No Drivethrough'],
};

/**
 * Parses a SizeDescriptionsField string into structured data
 * @param {string} description - The description string to parse
 * @returns {Object} Parsed data with unitType, location, climate, features
 */
export const parseSizeDescription = (description) => {
  if (!description || typeof description !== 'string') {
    return {
      unitType: null,
      location: null,
      climate: null,
      features: [],
      raw: description,
    };
  }

  const result = {
    unitType: null,
    location: null,
    climate: null,
    features: [],
    raw: description,
  };

  // Normalize spacing (replace multiple spaces with single space)
  let text = description.trim().replace(/\s+/g, ' ');
  
  // Try to identify unit type (usually at the start, check longest first)
  for (const type of UNIT_TYPES) {
    if (text.startsWith(type)) {
      result.unitType = type;
      // Remove the type and any following space
      text = text.substring(type.length).trim();
      break;
    }
  }

  // Check for climate control (check "No Climate" first, then positive)
  for (const keyword of CLIMATE_KEYWORDS.noClimate) {
    if (text.includes(keyword)) {
      result.climate = 'No Climate';
      text = text.replace(keyword, '').trim();
      break;
    }
  }
  
  if (!result.climate) {
    for (const keyword of CLIMATE_KEYWORDS.hasClimate) {
      if (text.includes(keyword)) {
        result.climate = 'Climate Controlled';
        text = text.replace(keyword, '').trim();
        break;
      }
    }
  }

  // Check for location descriptors (check longest/most specific first)
  for (const location of LOCATION_DESCRIPTORS) {
    if (text.includes(location)) {
      result.location = location;
      text = text.replace(location, '').trim();
      break;
    }
  }

  // Check for features (check negative features first since they're longer)
  const allFeatures = [...FEATURES.negative, ...FEATURES.positive];
  for (const feature of allFeatures) {
    if (text.includes(feature)) {
      result.features.push(feature);
      text = text.replace(feature, '').trim();
    }
  }

  // Clean up any remaining double spaces and normalize
  result.remaining = text.replace(/\s+/g, ' ').trim();

  return result;
};

/**
 * Parses an array of SizeDescriptionsField strings
 * @param {string[]} descriptions - Array of description strings
 * @returns {Object[]} Array of parsed description objects
 */
export const parseSizeDescriptions = (descriptions = []) => {
  if (!Array.isArray(descriptions)) {
    return [];
  }
  return descriptions.map(parseSizeDescription);
};

