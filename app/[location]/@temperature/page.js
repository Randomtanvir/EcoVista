import React from "react";
import TempDetails from "./_components/TempDetails";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/locationInfo";

const TemperaturePage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <TempDetails lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default TemperaturePage;
