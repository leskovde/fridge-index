import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { styleReset } from "react95";
import { AppState } from "./store";
import { createGlobalStyle, ThemeProvider, css } from "styled-components";

import themes from "./themes";

import Viewport from "./components/Viewport/Viewport";


const mapStateToProps = (state: AppState) => ({
    theme: state.user.theme,
    background: state.user.background,
    vintageFont: state.user.vintageFont,
    fontSize: state.user.fontSize,
    scanLines: state.user.scanLines,
    scanLinesIntensity: state.user.scanLinesIntensity,
});

function App({
               theme,
               background,
               vintageFont,
               fontSize,
               scanLines,
               scanLinesIntensity,
             }: ReturnType<typeof mapStateToProps>) {
    return (
        <Viewport maxHeight={896} maxWidth={450}>
        <ThemeProvider theme={themes[theme]}>
          <>
            <BrowserRouter>
              <>
                <Routes>
                  <Route exact path={"/coins/:coin"} component={undefined} />
                  <Route exact path={"/search"} component={undefined} />
                  <NavBar />
                </Routes>
                <Routes>
                  <Route exact path={"/coins"} component={Dashboard} />
                  <Route exact path={"/coins/:coin"} component={CoinDetails} />
                  <Route exact path={"/search"} component={CoinSearch} />
                  <Route path={"/wallet/"} component={Wallet} />
                  <Route exact path={"/news"} component={News} />
                  <Route exact path={"/settings"} component={Settings} />
                  <Navigate exact from={"/"} to={"/coins"} />
                </Routes>
              </>
            </BrowserRouter>
          </>
        </ThemeProvider>
      </Viewport>
  );
};

export default App;
