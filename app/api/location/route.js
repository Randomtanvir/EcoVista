import { NextResponse } from "next/server";
import { getLocations } from "./location-util";
export const GET = async () => {
  try {
    const data = getLocations();
    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "No location found." },
        { status: 404 }
      );
    }
    // return Response.json(data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
