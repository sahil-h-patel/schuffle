import { Route } from 'react-router';
import AuthLayout from '@layouts/AuthLayout';
import SignupLayout from '@layouts/SignupLayout';
import Login from '@pages/Login';
import Signup from '@pages/Signup';
import Connect from '@pages/Connect';

const AuthRoutes = (
  <>
   <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
  </Route>
  <Route element={<SignupLayout/>}>
    <Route path="/signup" element={<Signup />} />
    <Route path="/connect" element={<Connect />}/>
  </Route>
  </>
);

export default AuthRoutes;
