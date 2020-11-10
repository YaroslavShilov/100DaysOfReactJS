import React from "react";
import { Header, Footer } from "./components/Layouts";
import Exercises from "./components/Exercises";

function App(props) {
  return (
    <>
      <Header />

      <Exercises />

      <Footer />
    </>
  );
}

export default App;
