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
      const serverEndpoint = "YOUR_SERVER_ENDPOINT"; // Replace with your server endpoint

      // Send the code to your server to exchange for an access token and user information
      axios
        .post(serverEndpoint, { code, clientId })
        .then((response) => {
          // If the authentication is successful, you can redirect to the chat page
          if (response.data.success) {
            window.location.href = "/chatpage"; // Replace with your chat page URL
          } else {
            // Handle authentication failure
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
