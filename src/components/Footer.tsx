export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark flex-shrink-0 py-4">
      <div className="px-[18px] md:px-12 lg:px-16 max-w-container mx-auto text-center">
        <p className="text-white/80 text-base leading-tight pb-1">
          &copy; {currentYear} Honey Bee Storage
        </p>
        <p className="text-white/80 text-base leading-tight pb-1">
          <sup>*</sup> No trucks or trailers available to rent at this location.
        </p>
        <p className="text-white/80 text-base leading-tight pb-1">
          <sup>**</sup> Minimum 6 month lease.
        </p>
        <p className="text-white/80 text-base leading-tight pb-1">
          <sup>***</sup> Only fully operational/roadworthy vehicles are to be
          stored. i.e. no non-running or "project" vehicles.
        </p>
        <p className="text-white/80 text-base leading-tight pb-1">
          By providing your contact information, you consent to receive
          recurring messages from our business. Message frequency may vary. You
          may reply STOP to opt out at any time or HELP for additional
          information. Standard message and data rates may apply."
        </p>
        <p className="text-white/80 text-base leading-tight">
          No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes. All the above categories exclude text
          messaging originator opt-in data and consent; this information will
          not be shared with any third parties.
        </p>
      </div>
    </footer>
  );
}
