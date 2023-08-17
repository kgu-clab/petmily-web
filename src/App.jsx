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
import ContractPage from '@pages/ContractPage';
import GuidePage from '@pages/GuidePage';
import ShelterSalesPage from '@pages/ShelterSalesPage';
import PersonalSalesPage from '@pages/PersonalSalesPage';
import ScrollToTop from '@components/ScrollToTop';
import SalePage from '@pages/SalePage';
import SaleDetail from '@pages/SaleDetailPage';
import SignUpPage from '@pages/SignUpPage';
import SurveyPage from '@pages/SurveyPage';
import ErrorPage from '@pages/ErrorPage';
import AnimalSalePage from '@pages/AnimalSalePage';

const Section = () => {
  return (
    <section>
      <ScrollToTop />
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
    errorElement: <ErrorPage />,
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
        path: '/shelter',
        element: <ShelterSalesPage />,
      },
      {
        path: '/personal',
        element: <PersonalSalesPage />,
      },
      {
        path: '/animal/:id',
        element: <AnimalPage />,
      },
      {
        path: '/animal/sale/:id',
        element: <AnimalSalePage />,
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
        path: '/signup',
        element: <SignUpPage />,
      },
      {
        path: '/survey',
        element: <SurveyPage />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/guide',
        element: <GuidePage />,
      },
      {
        path: '/contract',
        element: <ContractPage />,
      },
      {
        path: '/store/used',
        element: <SalePage />,
      },
      {
        path: '/store/:id',
        element: <SaleDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
