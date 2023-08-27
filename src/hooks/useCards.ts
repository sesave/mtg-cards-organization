import { useContext } from "react";
import { CardsContext } from "../contexts/CardsContext";
import * as Scry from "scryfall-sdk";

const useCards = () => {
  const getCardsInfo = async (debouncedSearch: string) => {
    const chalice = await Scry.Cards.byName(debouncedSearch);
    console.log(chalice.name, chalice.set);
  };

  return { getCardsInfo };
};

export default useCards;
