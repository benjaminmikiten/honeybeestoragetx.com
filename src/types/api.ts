/**
 * API Response Types
 * Based on the U-Haul storage location API response
 */

export interface Coordinates {
  Latitude: number;
  Longitude: number;
}

export interface Address {
  AddressLine1: string;
  AddressLine2: string;
  City: string;
  Country: string;
  County: string | null;
  DestinationLatitude: number;
  DestinationLongitude: number;
  DestinationState: string | null;
  FormattedAddress: string | null;
  Location: Coordinates;
  OriginLatitude: number;
  OriginLongitude: number;
  PostalCode: string;
  State: string | null;
}

export interface Coupon {
  Description: string;
  Instructions: string;
}

export interface FacilityFeature {
  Description: string;
  ImageUrl: string;
}

export interface DayHours {
  Close: string;
  IsOpen: boolean;
  Open: string;
}

export interface WeeklyHours {
  Friday: DayHours;
  Monday: DayHours;
  Saturday: DayHours;
  Sunday: DayHours;
  Thursday: DayHours;
  Tuesday: DayHours;
  Wednesday: DayHours;
}

export interface HoursOfOperation {
  Gate: WeeklyHours;
  Office: WeeklyHours;
}

export interface LocationFeature {
  Description: string;
}

export interface LocationService {
  Amount: number;
  Description: string;
  LocationServiceNumber: string;
  Taxable: string;
}

export interface InsuranceOption {
  Description: string;
  Due: number;
  InsuranceId: string;
  MonthlyRate: number;
  Percentage: number;
  Quantity: number;
  Selected: boolean;
  Tax: number;
  Total: number;
}

export interface PortableInfo {
  IsPortable: boolean;
  OnSiteOnly: boolean;
  WaiveDeliveryFee: boolean;
}

export interface Unit {
  BonusComments: string;
  CubicFootage: number;
  Height: number;
  InsuranceOptions: InsuranceOption[];
  IsCampusStorage: boolean;
  Length: number;
  Monthly: number;
  OrderGrouping: string;
  Portable: PortableInfo;
  RentableObjectId: string;
  RoomSizeReservationRules: unknown | null;
  ServiceCharges: unknown | null;
  SizeDescriptionsField: string[];
  SquareFootage: number;
  TotalUnits: number;
  UnitFeature: unknown | null;
  UnitId: string;
  UnitSize: string;
  UnitStorageGuide: unknown | null;
  UnitTypeImage: unknown | null;
  VacantUnits: number;
  Width: number;
}

export interface Location {
  Address: Address;
  AllowsReservations: boolean;
  Coupons: Coupon[];
  FacilityFeatures: FacilityFeature[];
  HoursOfOperation: HoursOfOperation;
  LocationFeatures: LocationFeature[];
  LocationServices: LocationService[];
  Name: string;
  Phone: string;
  ReservationDates: string[];
  ReservationNotBelowPercentage: string;
  ReservationNotBelowTotalUnits: string;
  ReviewFee: number;
  Units: Unit[];
}

export interface LocationResponse {
  Location: Location;
  Success: boolean;
  ErrorMessage: string;
}

export interface APIError {
  error: true;
  message: string;
}

export type LocationAPIResponse = LocationResponse | APIError;
