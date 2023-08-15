import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import HomePage from '@pages/HomePage';
import ProfessionalSalesPage from '@pages/ProfessionalSalesPage';
import Footer from '@components/Footer';
import AnimalPage from '@pages/AnimalPage';
import AnimalListPage from '@pages/AnimalListPage';
import LoginPage from '@pages/LoginPage';
import AnimalRegistrationPage from '@pages/AnimalRegistrationPage';
import MyPage from '@pages/MyPage';

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
        path: '/animal/registration',
        element: <AnimalRegistrationPage />,
      },
      {
        path: '/list',
        element: <AnimalListPage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
