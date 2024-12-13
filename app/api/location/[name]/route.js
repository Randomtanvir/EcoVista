import { NextResponse } from "next/server";
import { getLocationByName } from "../location-util";

export const GET = async (_request, { params: { name } }) => {
  try {
    if (!name) {
      return NextResponse.json(
        { error: "location name required" },
        { status: 400 }
      );
    }
    const data = getLocationByName(name);
    if (!data) {
      // optional validation
      return NextResponse.json(
        { error: "No location found." },
        { status: 401 }
      );
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
};
