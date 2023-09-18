"use client";
// Redirect.js
import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";

const Redirect = () => {
  const clientId =
    "678612018769-t6up75qeqummcqipijeni9spmakf11pd.apps.googleusercontent.com";
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code"); // Get the code from the URL query parameters

    if (code) {
      const serverEndpoint = `http://64.226.125.111:8000/users/login/google?code=${code}`; // Replace with your server endpoint

      // Send the code to your server to exchange for an access token and user information
      axios
        .post(serverEndpoint)
        .then((response) => {
            console.log(response)
          if (response.status === 200) {

          } else {
          }
        })
        .catch((error) => {
          // Handle error
        });
    } else {
      // Handle missing code in the URL
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
      <h1 className="font-extrabold">Loading...</h1>
    </div>
  );
};

export default Redirect;
