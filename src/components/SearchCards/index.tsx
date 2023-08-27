import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { CardsContext, CardsType } from "../../contexts/CardsContext";
import useCards from "../../hooks/useCards";
import { useDebounce } from "usehooks-ts";

const SearchCards = () => {
  const { searchText, setSearchText } = useContext<any>(CardsContext);
  const { getCardsInfo } = useCards();
  const debouncedSearch = useDebounce<string>(searchText, 500);

  const setText = (event: any) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearch) {
      getCardsInfo(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <TextField
      label="fullWidth"
      id="fullWidth"
      value={searchText}
      onChange={setText}
    />
  );
};

export default SearchCards;
