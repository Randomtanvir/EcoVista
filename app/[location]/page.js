import React from "react";
import LocationDetails from "./_components/LocationDetails";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/locationInfo";

const LocationPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <LocationDetails lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo />;
  }
};

export default LocationPage;
