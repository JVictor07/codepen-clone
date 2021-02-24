import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/global";

import ScreensHome from "../Home";

const ScreensRoutes = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={ScreensHome} />
      </Switch>

      <ToastContainer
        draggable
        rtl={false}
        closeOnClick
        pauseOnHover
        autoClose={5000}
        pauseOnFocusLoss
        newestOnTop={false}
        position="top-right"
        hideProgressBar={false}
      />

      <GlobalStyle />
    </ThemeProvider>
  </Router>
);

export default ScreensRoutes;
