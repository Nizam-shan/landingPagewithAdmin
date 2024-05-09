// /** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import React from "react";
// import logo from "assets/images/logo.png";
// import logo from "../assets/images/logo.png";
// import logoWhite from "assets/images/logo-white.png";
// import logoWhite from "../assets/images/logo-white.png";

export default function Logo({ isWhite }) {
  const logo = "/static/Guru.png";
  const logoWhite = "/static/Guru.png";
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
      }}
    >
      <Image src={isWhite ? logoWhite : logo} alt="IBS PVT LTD" />
    </Link>
  );
}
