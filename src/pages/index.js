import React from "react";
import UsagePolicy from "./UsagePolicy";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing3/Hero";
import Works from "../sections/landing3/Works";

const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Works />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
