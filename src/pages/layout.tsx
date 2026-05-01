import { Footer, Header } from "../components";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex grow flex-col mt-4 mb-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
