import { useRef } from "react";
import { Page } from "../components/Page";
import { Hero } from "../components/Hero";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import { AvailableUnitsListing } from "../components/AvailableUnitsListing/AvailableUnitsListing";
import background from "./building-background-01.jpg";

export function IndexPage() {
  const listingRef = useRef<HTMLDivElement>(null);

  const handleClickScroll = () => {
    if (listingRef.current) {
      window.scrollTo({
        top: listingRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Page>
      <Hero background={background} handleClickScroll={handleClickScroll} />
      <main>
        <Body handleClickScroll={handleClickScroll} />
        <AvailableUnitsListing ref={listingRef} />
      </main>
      <Footer />
    </Page>
  );
}
