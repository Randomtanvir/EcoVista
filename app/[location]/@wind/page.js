import React from "react";
import WindDetails from "./_components/WindDetails";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/locationInfo";

const WindPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WindDetails lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WindPage;
