import AdminRoutes from '@routes/AdminRoutes'
import AuthRoutes from '@routes/AuthRoutes'
import MainRoutes from '@routes/MainRoutes'
import { Routes } from 'react-router';

function App() {
  return (
    <Routes>
      {AdminRoutes}
      {AuthRoutes}
      {MainRoutes}
    </Routes>
  );
}

export default App;