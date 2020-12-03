import React from "react";
import { Provider } from "react-redux";
import { Connected } from "./components/Connected";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Connected />
    </Provider>
  );
}

export default App;
