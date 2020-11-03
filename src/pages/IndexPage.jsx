import React, { useRef } from "react";
import { Page } from "../components/Page";
import { Hero } from "../components/Hero";
import { Body } from "../components/Body";
import { Footer } from "../components/Footer";
import background from "./building-background-01.jpg";
import useGoogleOptimize from "@react-hook/google-optimize";

import { AvailableUnitsListing } from "../components/AvailableUnitsListing/AvailableUnitsListing";

export const IndexPage = () => {
  const listingRef = useRef();

  const handleClickScroll = () => {
    window.scrollTo({
      top: listingRef.current.offsetHeight,
      behavior: "smooth",
    });
  };

  const ABTest = useGoogleOptimize("cc_W-MvdRWKEAr1T0sFG9A", [true, false]);

  return (
    <Page>
      <Hero background={background} handleClickScroll={handleClickScroll} />
      <main>
        <Body handleClickScroll={handleClickScroll} />
        {ABTest ? null : <AvailableUnitsListing ref={listingRef} />}
      </main>
      <Footer />
    </Page>
  );
};
