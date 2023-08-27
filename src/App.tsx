import "./App.css";
import { CardsProvider } from "./contexts/CardsContext";
import Home from "./views/Home";

function App() {
  return (
    <>
      <CardsProvider>
        <Home />
      </CardsProvider>
    </>
  );
}

export default App;
