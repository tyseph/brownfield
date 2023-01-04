import Header from "./component/Header";
import Routing from "./routes/Routing";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";


const App = () => {
  return (
    <Provider store={store}>
      {/* <Header /> */}
      <Routing />
      {/* <Footer /> */}
    </Provider>
  );
};

export default App;