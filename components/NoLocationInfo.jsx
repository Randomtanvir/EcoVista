import React from "react";
import Card from "./Card";
import Link from "next/link";

const NoLocationInfo = () => {
  return (
    <Card>
      <p className="text-center bg-slate-600 py-1 flex items-center justify-center px-2 text-sm rounded text-zinc-300 mt-6  ">
        No LocationIn found
      </p>
      <Link
        className="bg-slate-600 py-1 flex items-center justify-center px-2 text-sm rounded text-zinc-300 mt-6 hover:bg-slate-700 transition-all"
        href="/"
      >
        Go To Your Location
      </Link>
    </Card>
  );
};

export default NoLocationInfo;
