import { Routes } from 'react-router';
import MainRoutes from './MainRoutes';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      {MainRoutes}
      {AdminRoutes}
      {AuthRoutes}
    </Routes>
  );
};

export default AppRoutes;
