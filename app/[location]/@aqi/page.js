import React from "react";
import AQIdetails from "./_components/AQIdetails";
import { getResolvedLatLon } from "@/lib/locationInfo";
import NoLocationInfo from "@/components/NoLocationInfo";

const AQIpage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <AQIdetails lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default AQIpage;
