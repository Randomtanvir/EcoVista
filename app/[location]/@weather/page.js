import React from "react";
import WeatherDetails from "./_components/WeatherDetails";
import NoLocationInfo from "@/components/NoLocationInfo";
import { getResolvedLatLon } from "@/lib/locationInfo";

const WeatherPage = async ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  const resolved = await getResolvedLatLon(location, latitude, longitude);

  if (resolved?.lat && resolved?.lon) {
    return <WeatherDetails lat={resolved.lat} lon={resolved.lon} />;
  } else {
    return <NoLocationInfo location={location} />;
  }
};

export default WeatherPage;
