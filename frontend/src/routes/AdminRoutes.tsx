import { Route } from 'react-router';
import AdminLayout from '@layouts/AdminLayout';
import Dashboard from '@pages/Dashboard';

const AdminRoutes = (
  <Route element={<AdminLayout />}>
    <Route path="/dashboard" element={<Dashboard />} />
  </Route>
);

export default AdminRoutes;
