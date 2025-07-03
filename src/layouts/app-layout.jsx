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
      <div className="p-10 bg-gray-800 mt-10 animate-fadeIn text-center">
        <div className="inline-flex items-center justify-center gap-2">
          <span>Developed 💻 by</span>
          <img
            src="/Logo_Edwin_White.png"
            alt="Edwin Gonzalez Logo"
            className="h-10 w-auto"
          />
          <span>&copy; {currentYear} All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
