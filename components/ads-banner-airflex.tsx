"use client";

import { useEffect } from "react";
import { airflex } from "nextjs-airflex";
import Container from "./container";

export const AdsBannerAirflex = () => {
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
          data-ad-id="93cc89ad-f1d9-4674-a8e1-6df6f55805a7"
          data-ad-type="BANNER"
          data-ad-format="auto"
        ></ins>
      </Container>
    </div>
  );
};
