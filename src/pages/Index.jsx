import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-hidden">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default Index;
