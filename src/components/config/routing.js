import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterUser from "../pages/user/RegisterUser";
import Workshop from "../pages/workshop/Workshop";

import { ROLES } from "./authorization";
import NonAuthorized from "../shared/NonAuthorized";
import NotFound from "../shared/NotFound";
import UserDetail from "../pages/user/UserDetail";
import UserEdit from "../pages/user/UserEdit";
import WorkshopDetail from "../pages/workshop/WorkshopDetail";

const RoutingPaths = {
  home: { path: "/", description: "Home", component: Home },
  login: { path: "/login", description: "Login", component: Login },
  nonAuthorized: { path: "/non-authorized", component: NonAuthorized },
  user: {
    path: "/user",
    children: [
      {
        detail: {
          path: "/detail/:id",
          description: "See Details",
          authorization: ROLES.USER,
          component: UserDetail
        }
      },
      {
        register: {
          path: "/add",
          description: "Register",
          component: RegisterUser
        }
      },
      {
        edit: {
          path: "/edit/:id",
          description: "Edit",
          authorization: ROLES.USER,
          component: UserEdit
        }
      }
    ],
    description: "User"
  },
  workshop: {
    path: "/workshop",
    children: [
      {
        detail: {
          path: "/detail/:id",
          description: "See Details",
          component: WorkshopDetail
        }
      },
      { add: { path: "/add", description: "Add new" } },
      { edit: { path: "/edit/:id", description: "Edit" } }
    ],
    description: "Workshops",
    component: Workshop
  },
  notFound: { path: "*", component: NotFound }
};

module.exports = { RoutingPaths };
