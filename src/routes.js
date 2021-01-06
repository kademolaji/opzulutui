
import MainContent from "./components/Sidebars/MainContent.js";
import NewPage from "./components/Sidebars/NewPage.js";

var routes = [
  {
    path: "/student",
    name: "Dashboard",
    icon: "icon-speedometer",
    component: MainContent,
    layout: "/admin",
  },
  {
    path: "/new",
    name: "New Page",
    icon: "icon-list",
    component: NewPage,
    layout: "/admin",
  }
];
export default routes;
