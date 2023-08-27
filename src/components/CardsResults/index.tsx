import Box from "@mui/material/Box";
import { useContext } from "react";
import { CardsContext } from "../../contexts/CardsContext";
import CardMedia from "@mui/material/CardMedia";

const CardsResults = () => {
  const { cardsResults } = useContext<any>(CardsContext);
  if (!cardsResults) {
    return null;
  }
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
      }}
    >
      <CardMedia
        component="img"
        image={cardsResults?.image_uris?.border_crop}
        alt="Paella dish"
      />
    </Box>
  );
};

export default CardsResults;
