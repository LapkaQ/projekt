import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header className="p-2">header</header>
      <main className="flex flex-col justify-center items-center grow">
        <Outlet />
      </main>
      <footer className="p-2">footer</footer>
    </>
  );
};

export default Layout;
