import React from "react";
import SearchImput from "../atoms/SearchImput";
import SearchButton from "../atoms/SearchButton";

export function Search() {
  return (
    <div>
        <SearchImput className={'Search-imput'}/>
        <SearchButton/>
    </div>
  )
}
