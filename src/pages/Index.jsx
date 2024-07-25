import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";

const Index = () => {
  return (
    <main className="">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Index;
