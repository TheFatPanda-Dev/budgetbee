import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import "./App.css";

import AppRoutes from "./AppRoutes";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const iconList = Object.keys(Icons)
    .filter((key) => key !== "fas" && key !== "prefix")
    .map((icon) => Icons[icon]);

library.add(...iconList);

function App() {
    return (
        <HeroUIProvider>
            <div className="App select-none">
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </HeroUIProvider>
    );
}

export default App;
