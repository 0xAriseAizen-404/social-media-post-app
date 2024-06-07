import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};
