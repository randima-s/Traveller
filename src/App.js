
import './App.css';
import MainComponent from './components/MainComponent';
import {HashRouter} from "react-router-dom";
import {ConfigureStore} from "./redux/configureStore";
import {Provider} from "react-redux";

const store=ConfigureStore();

function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <MainComponent />
    </HashRouter>
    </Provider>
  );
}

export default App;
