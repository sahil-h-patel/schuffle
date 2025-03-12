import { Route } from 'react-router';
import AuthLayout from '@layouts/AuthLayout';
import SignupLayout from '@layouts/SignupLayout';
import Login from '@pages/auth/Login';
import ForgotPassword from '@pages/auth/ForgotPassword';
import Signup from '@pages/auth/signup-flow/Signup';
import Connect from '@pages/auth/signup-flow/Connect';
import Select from '@pages/auth/signup-flow/Select';
import Verify from '@pages/auth/signup-flow/Verify';

const AuthRoutes = (
  <>
   <Route element={<AuthLayout />}>
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />

  </Route>
  <Route element={<SignupLayout/>}>
    <Route path="/signup" element={<Signup />} />
    <Route path="/connect" element={<Connect />}/>
    <Route path="/select" element={<Select />}/>
    <Route path="/verify" element={<Verify />}/>
  </Route>
  </>
);

export default AuthRoutes;
