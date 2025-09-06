import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { base_path } from "./environment";

// ✅ CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/css/feather.css";
import "./index.scss";
import "./style/icon/boxicons/boxicons/css/boxicons.min.css";
import "./style/icon/weather/weathericons.css";
import "./style/icon/typicons/typicons.css";
import "./style/icon/fontawesome/css/fontawesome.min.css";
import "./style/icon/fontawesome/css/all.min.css";
import "./style/icon/ionic/ionicons.css";
import "./style/icon/tabler-icons/webfont/tabler-icons.css";

// ✅ Redux store
import store from "./core/data/redux/store";
import { Provider } from "react-redux";

// ✅ Routes
import ALLRoutes from "./feature-module/router/router";

// ✅ Bootstrap JS (optional, for modals, dropdowns, etc.)
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// ✅ Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

// ✅ Render app
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={base_path}>
        <ALLRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
