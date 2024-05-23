import { FC } from "react";
import { useRoutes } from "react-router-dom";
import { SignIn, SignUp } from '../components';

const AppRoutes: FC = () => {
  const routes = useRoutes([
    { path: '/log-in', element: <SignIn /> },
    { path: '/sign-up', element: <SignUp /> },
  ]);

  return routes;
};

export default AppRoutes;
