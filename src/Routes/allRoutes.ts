// dashboard
import Ecommerce from "pages/Dashboards/Ecommerce";

import UserProfile from "pages/Authentication/UserProfile";
import Login from "pages/Authentication/Login";
import Logout from "pages/Authentication/LogOut";
import Register from "pages/Authentication/Register";
import Qvac from 'pages/Qvac';

interface RouteObject {
  path: string;
  component: React.ComponentType<any>; // Use React.ComponentType to specify the type of the component
  exact?: boolean;
}

const authProtectedRoutes: Array<RouteObject> = [
  // Dashboard in template 
  // { path: "/", component: Ecommerce },
  // { path: "/dashboard", component: Ecommerce },
  // Dashboard
  { path: "/", component: Ecommerce },
  { path: "/dashboard", component: Ecommerce },
  
  // profile
  { path: "/user-profile", component: UserProfile },
];

const publicRoutes = [

  // authentication
  { path: "/login", component: Login },
  { path: "/logout", component: Logout },
  { path: "/register", component: Register },
  {
    path: '/qvac', // Route path for QVAC
    component: Qvac, // The Qvac component
  },   //added my qvac landing page component in route 
] 

export { authProtectedRoutes, publicRoutes };
