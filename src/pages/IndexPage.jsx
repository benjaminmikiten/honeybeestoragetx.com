import React from "react";
import { Page } from "../components/Page";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import background from "./building-background-01.jpg";

import { AvailableUnitsListing } from "../components/AvailableUnitsListing/AvailableUnitsListing";

export const IndexPage = () => {
  return (
    <Page>
      <Hero background={background} />
      <AvailableUnitsListing />
      <Footer />
    </Page>
  );
};
