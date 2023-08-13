import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import HomePage from '@pages/HomePage';
import ProfessionalSalesPage from '@pages/ProfessionalSalesPage';
import LoginPage from '@pages/LoginPage';

const Section = () => {
  return (
    <section>
      <Sidebar />

      <div className="ml-[18rem] grow p-5">
        <Outlet />
      </div>
    </section>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Section />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/professional',
        element: <ProfessionalSalesPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
