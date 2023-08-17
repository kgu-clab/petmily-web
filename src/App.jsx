import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import HomePage from '@pages/HomePage';
import ProfessionalSalesPage from '@pages/sales/ProfessionalSalesPage';
import Footer from '@components/Footer';
import AnimalPage from '@pages/animal/AnimalPage';
import AnimalListPage from '@pages/sales/AnimalListPage';
import LoginPage from '@pages/auth/LoginPage';
import AnimalRegistrationPage from '@pages/sales/AnimalRegistrationPage';
import MyPage from '@pages/mypage/MyPage';
import ContractPage from '@pages/contract/ContractPage';
import GuidePage from '@pages/guide/GuidePage';
import ShelterSalesPage from '@pages/sales/ShelterSalesPage';
import PersonalSalesPage from '@pages/sales/PersonalSalesPage';
import ScrollToTop from '@components/ScrollToTop';
import StorePage from '@pages/store/StorePage';
import SaleDetail from '@pages/store/SaleDetailPage';
import SignUpPage from '@pages/auth/SignUpPage';
import SurveyPage from '@pages/auth/SurveyPage';
import ErrorPage from '@pages/ErrorPage';
import AnimalSalePage from '@pages/sales/AnimalSalePage';

const Section = () => {
  return (
    <section>
      <Sidebar />

      <ScrollToTop>
        <Outlet />
        <Footer />
      </ScrollToTop>
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
        path: '/contract/:reqId/:boardId',
        element: <ContractPage />,
      },
      {
        path: '/store/used',
        element: <StorePage />,
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
