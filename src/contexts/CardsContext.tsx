import React, { createContext, useState } from "react";
export type CardsType = {
  searchText: string;
  setSearchText: any;
  cardsResults: string;
  setCardsResults: any;
};
const CardsContext = createContext<CardsType | null>(null);

const CardsProvider = ({ children }: any) => {
  const [searchText, setSearchText] = useState<string>("");
  const [cardsResults, setCardsResults] = useState<any>({});

  return (
    <CardsContext.Provider
      value={{ searchText, setSearchText, cardsResults, setCardsResults }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsContext, CardsProvider };
