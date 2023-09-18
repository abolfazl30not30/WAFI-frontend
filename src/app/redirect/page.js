"use client";

import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Redirect = () => {

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    if (code) {
      const serverEndpoint = `http://64.226.125.111:8000/users/login/google?code=${code}`;

      axios
        .post(serverEndpoint)
        .then((response) => {
          if (response.status === 200) {
              console.log(response)
              sessionStorage.setItem("authorization",response.data.access_token)
          } else {
          }
        })
        .catch((error) => {

        });
    } else {

    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="Confused.svg"
        alt="login image"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "20%", height: "auto" }}
      />
      <h1 className="mt-2 font-extrabold">Loading...</h1>
    </div>
  );
};

export default Redirect;
