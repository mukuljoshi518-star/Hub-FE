import { CrimeReportTable } from "../pages/crimereports/LifeTracker";
import { Login } from "../pages/formdata/login";

export const AppRoutes = [{
    
        path: '/login',
        Component: Login,
        exact: true,
        roles: ['employee', 'user', 'super_admin', 'hr'],
        modules: ['Login'],
      
  }

]