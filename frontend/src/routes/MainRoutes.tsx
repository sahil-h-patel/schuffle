import { Route } from 'react-router';
import MainLayout from '@layouts/MainLayout';
import Home from '@pages/Home';
import About from '@pages/About';

const MainRoutes = (
  <Route element={<MainLayout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
);

export default MainRoutes;
