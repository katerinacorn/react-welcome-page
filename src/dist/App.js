"use strict";
exports.__esModule = true;
require("./App.css");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var songs_1 = require("./songs");
var lib_1 = require("react-cssfx-loading/lib");
var navigation_1 = require("./modules/navigation");
var welcome_page_1 = require("./modules/welcome-page/welcome-page");
var Player = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/player"); }); });
var Hook = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/user-card/user-card"); }); });
var Context = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/theme-switcher/theme-switcher"); }); });
var CV = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/cv/cv"); }); });
var Home = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/theme-switcher/home"); }); });
var Admin = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/theme-switcher/admin"); }); });
var Dashboard = react_1.lazy(function () { return Promise.resolve().then(function () { return require("./modules/theme-switcher/dashboard"); }); });
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_1.Suspense, { fallback: React.createElement("div", { className: "loader" },
                React.createElement(lib_1.BouncingBalls, { color: "crimson" })) },
            React.createElement(react_router_dom_1.BrowserRouter, null,
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(navigation_1.Navigation, null) },
                        React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(react_router_dom_1.Navigate, { to: "welcome-page" }) }),
                        React.createElement(react_router_dom_1.Route, { path: "welcome-page", element: React.createElement(welcome_page_1.WelcomePage, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "hook", element: React.createElement(Hook, { userId: '3' }) }),
                        React.createElement(react_router_dom_1.Route, { path: "player", element: React.createElement(Player, { songs: songs_1.songs }) }),
                        React.createElement(react_router_dom_1.Route, { path: "context/", element: React.createElement(Context, null) },
                            React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(react_router_dom_1.Navigate, { to: "home" }) }),
                            React.createElement(react_router_dom_1.Route, { path: "home", element: React.createElement(Home, null) }),
                            React.createElement(react_router_dom_1.Route, { path: "admin", element: React.createElement(Admin, null) }),
                            React.createElement(react_router_dom_1.Route, { path: "dashboard", element: React.createElement(Dashboard, null) })),
                        React.createElement(react_router_dom_1.Route, { path: "cv", element: React.createElement(CV, null) })))))));
}
exports["default"] = App;
