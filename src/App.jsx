import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import HomePage from '@pages/HomePage';
import ProfessionalSalesPage from '@pages/ProfessionalSalesPage';
import Footer from '@components/Footer';
import AnimalPage from '@pages/AnimalPage';
import AnimalListPage from '@pages/AnimalListPage';
import LoginPage from '@pages/LoginPage';

const Section = () => {
  return (
    <section>
      <Sidebar />

      <div className="ml-[18rem] grow p-5">
        <Outlet />
        <Footer />
      </div>
    </section>
  );
};

const router = createBrowserRouter([
  {
    path: '',
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
        path: '/animal/:id',
        element: <AnimalPage />,
      },
      {
        path: '/list',
        element: <AnimalListPage />,
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
