import store from "./redux/store";
import {Provider} from "react-redux";
import MainComponent from "./screens/MainComponent";


export default function App() {
  return (
      <>
          <Provider store={store}>
              <MainComponent/>
          </Provider>
      </>
  );
}
