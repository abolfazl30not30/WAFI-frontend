import React from "react";
import Header from "@/components/home/Header";
import Chat from "@/components/home/Chat";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";

export default function page() {
  return (
    <>
      <Header />
      <Chat />
      <Section3 />
      <Section4 />
    </>
  );
}
