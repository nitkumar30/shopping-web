import Router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./core/store";
function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
