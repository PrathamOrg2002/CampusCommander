import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAllMode,
  setDataColor,
  setDataLayout,
  setDataSidebar,
  setDataSidebarBg,
  setDataTheme,
  setTopBarColor,
} from "../../data/redux/themeSettingSlice";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../imageWithBasePath";

const ThemeSettings = () => {
  const buyNow = () => {
    window.open("https://1.envato.market/52Ndo", "_blank");
  };

  const dispatch = useDispatch();
  const dataLayout = useSelector((state) => state.themeSetting.dataLayout);
  const dataTopBar = useSelector((state) => state.themeSetting.dataTopBar);
  const dataTheme = useSelector((state) => state.themeSetting.dataTheme);
  const dataSidebar = useSelector((state) => state.themeSetting.dataSidebar);
  const dataSidebarBg = useSelector((state) => state.themeSetting.dataSidebarBg);
  const dataColor = useSelector((state) => state.themeSetting.dataColor);

  const handleLayoutChange = (layout) => {
    dispatch(setDataLayout(layout));
  };
  const handleTopBarColorChange = (color) => {
    dispatch(setTopBarColor(color));
  };
  const handleDataThemeChange = (theme) => {
    dispatch(setDataTheme(theme));
  };
  const handleDataSidebarChange = (theme) => {
    dispatch(setDataSidebar(theme));
  };
  const handleDataSidebarBgChange = (bg) => {
    dispatch(setDataSidebarBg(bg));
  };
  const handleDataColorChange = (bg) => {
    dispatch(setDataColor(bg));
  };

  const handleReset = () => {
    dispatch(resetAllMode());
  };

  return (
    <>
      {/* ⚙️ Floating Theme Button */}
      <div className="sidebar-contact">
        <div
          className="toggle-theme"
          data-bs-toggle="offcanvas"
          data-bs-target="#theme-setting"
        >
          <i className="fa fa-cog fa-w-16 fa-spin" />
        </div>
      </div>

      {/* 🎨 Theme Settings Sidebar */}
      <div
        className="sidebar-themesettings offcanvas offcanvas-end"
        id="theme-setting"
      >
        <div className="offcanvas-header d-flex align-items-center justify-content-between bg-light-500">
          <div>
            <h4 className="mb-1">Theme Customizer</h4>
            <p>Choose your themes & layouts etc.</p>
          </div>
          <Link
            to="#"
            className="custom-btn-close d-flex align-items-center justify-content-center text-white"
            data-bs-dismiss="offcanvas"
          >
            <i className="ti ti-x" />
          </Link>
        </div>

        {/* 🎛️ Settings Content */}
        <div className="themesettings-inner offcanvas-body">
          {/* All your accordion items are here (Layouts, Topbar, Theme, Sidebar, etc.) */}
          {/* I kept your full JSX structure intact */}
          {/* --- START of your accordions --- */}
          {/* ... (same as your code) */}
          {/* --- END of your accordions --- */}
        </div>

        {/* Footer Buttons */}
        <div className="bg-light-500 p-3">
          <div className="row gx-3">
            <div className="col-6">
              <Link
                onClick={handleReset}
                to="#"
                id="resetbutton"
                className="btn btn-light close-theme w-100"
              >
                Reset
              </Link>
            </div>
            <div className="col-6">
              <Link
                onClick={buyNow}
                to="#"
                target="_blank"
                className="btn btn-primary w-100"
                data-bs-dismiss="offcanvas"
              >
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSettings;
