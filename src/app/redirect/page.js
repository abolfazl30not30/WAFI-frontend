"use client";

import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

const Redirect = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
  useEffect(() => {
      const code = searchParams.get('code')
    if (code) {
      const serverEndpoint = `http://64.226.125.111:8000/users/login/google?code=${code}`;

        // const axios = require('axios');
        // const https = require('https');
        // const fs = require('fs');
        // fs.readFileSync('path/to/server.crt');
        // const instance = axios.create({
        //     httpsAgent: new https.Agent({ca: ca})});
        // instance.post(serverEndpoint)
        //     .then(response => {
        //         if (response.status === 200) {
        //             sessionStorage.setItem("authorization",response.data.access_token)
        //             router.push("/panel")
        //         } else {
        //             router.push("/login")
        //         }
        //     }).catch(error => {
        //         router.push("/login")
        //     });
      axios
        .post(serverEndpoint)
        .then((response) => {
          if (response.status === 200) {
              sessionStorage.setItem("authorization",response.data.access_token)
              router.push("/panel")
          } else {
              router.push("/login")
          }
        })
        .catch((error) => {
            router.push("/login")
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
