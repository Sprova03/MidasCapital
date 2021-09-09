import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselContainer } from "./Components/Carrusel/CarouselContainer";
import { BurgerMenu } from "./Components/BurgerMenu/BurgerMenu";
import { AppRouter } from "./Components/routers/AppRouter";

function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

export default App;
