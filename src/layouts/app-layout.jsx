import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10 animate-fadeIn">
        Developed 💻 by{" "}
        <span className="font-bold underline decoration-white underline-offset-4">
          Edwin Gonzalez
        </span>{" "}
         &copy; {currentYear} All rights reserved.
      </div>
    </div>
  );
};

export default AppLayout;
