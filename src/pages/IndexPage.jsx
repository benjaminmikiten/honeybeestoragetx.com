import React, { useRef } from "react";
import { Page } from "../components/Page";
import { Hero } from "../components/Hero";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import background from "./building-background-01.jpg";

import { AvailableUnitsListing } from "../components/AvailableUnitsListing/AvailableUnitsListing";

export const IndexPage = () => {
  const listingRef = useRef();

  const handleClickScroll = () => {
    window.scrollTo({
      top: listingRef.current.offsetHeight,
      behavior: "smooth",
    });
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
};
