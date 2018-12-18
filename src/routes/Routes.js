import App from "../App";
import Bedroom from '../../Bedroom.js'

var indexRoutes = [{
        path: "/Bedroom",
        name: "Bedroom",
        component: Bedroom
    },
    {
        path: "/",
        name: "App",
        component: App
    },
    // {path: "/login",name:"login",}
];
export default indexRoutes;