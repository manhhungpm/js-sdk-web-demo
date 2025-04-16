"use client";

import { useEffect } from "react";
import { airflex } from "nextjs-airflex";
import Container from "./container";

export const AdsProductAirflex = () => {
  useEffect(() => {
    if (airflex) {
      airflex.pushAds({});
    }
  }, []);

  return (
    <div className="my-12">
      <Container className="md:min-w-full lg:min-w-fit">
        <ins
          className="adsbyairflex"
          data-ad-id="3f62147a-0738-4d87-91b8-69ba546f8f26"
          data-ad-type="PRODUCT"
          data-ad-format="auto"
        ></ins>
      </Container>
    </div>
  );
};
