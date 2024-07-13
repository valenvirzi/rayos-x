import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const Index = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Index;
