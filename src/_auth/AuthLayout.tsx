import { Navigate, Outlet } from "react-router-dom";

export const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 items-center justify-center flex-col">
            <Outlet />
          </section>
          <img
            src="./assets/images/side-img.svg"
            alt="side-img"
            className="hidden lg:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};
