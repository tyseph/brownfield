import Header from "./component/Header";
import Routing from "./routes/Routing";
import Footer from "./component/Footer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Provider store={store}>
    <ToastContainer 
    position="top-right"
    autoClose={5000}
    limit={3}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"

    />
      {/* <Header /> */}

      <Routing />
    </Provider>
  );
};

export default App;