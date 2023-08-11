import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from '@components/Sidebar';
import Home from '@pages/Home';
import Root from '@pages/Root';

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
        element: <Root />,
      },
      {
        path: 'home',
        element: <Home />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
