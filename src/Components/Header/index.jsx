import React from "react";
import SearchInput from "./SearchInput";
import Logo from "../../assets/pokemon.svg";
import "./index.css";
export default function Index() {
  return (
    <div className="headerWithLogo">
      <img src={Logo} alt="Pokemon-Logo" width="25%" />
      <SearchInput />
    </div>
  );
}
