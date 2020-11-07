import React from "react";
import { Provider } from "react-redux";
import { ReduxComponent } from "./components/ReduxComponent";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <ReduxComponent />
    </Provider>
  );
}

export default App;
