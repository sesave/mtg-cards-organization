import { useContext } from "react";
import { CardsContext } from "../contexts/CardsContext";
import * as Scry from "scryfall-sdk";

const useCards = () => {
  const { setCardsResults } = useContext<any>(CardsContext);
  const getCardsInfo = async (debouncedSearch: string) => {
    const results = await Scry.Cards.byName(debouncedSearch, true);
    console.log(results);
    setCardsResults(results);
  };

  return { getCardsInfo };
};

export default useCards;
