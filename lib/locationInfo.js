export const getLocationData = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getLocationLatLonList = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/location`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getLocationLatLon = async (locName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/location/${locName}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getResolvedLatLon = async (locName, lat, lon) => {
  if (lat && lon) {
    return { lat, lon };
  }

  const locationLatLon = await getLocationLatLon(locName);
  if (locationLatLon.latitude && locationLatLon.longitude) {
    const lat = locationLatLon.latitude;
    const lon = locationLatLon.longitude;
    return { lat, lon };
  }
};
