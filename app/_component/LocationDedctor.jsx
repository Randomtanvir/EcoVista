"use client";

import LoadingSpin from "@/components/LoadingSpin";
import Image from "next/image";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDedctor = () => {
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const pathName = useParams();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("latitude", position.coords.latitude);
        params.set("longitude", position.coords.longitude);
        setLoading(false);
        router.push(`/current?${params.toString()}`);
      });
    }
  }, [searchParams, router, pathName]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="Loading..."
            height={500}
            width={500}
            className="border rounded-md my-4"
          />
          <div className="text-2xl">
            Loading...
            <LoadingSpin />
          </div>
        </>
      )}
    </div>
  );
};

export default LocationDedctor;
