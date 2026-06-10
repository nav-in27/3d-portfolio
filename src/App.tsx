import { lazy, Suspense } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

const CharacterModel = lazy(() => import("./components/Character"));

function App() {
  return (
    <main className="main-body">
      <MainContainer>
        <Suspense fallback={null}>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </main>
  );
}

export default App;
