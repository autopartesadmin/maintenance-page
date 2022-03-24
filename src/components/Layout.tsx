import React from "react";
import { SubHeader, Header, Footer } from "./";

interface LayoutProps {
  remderBanner: () => React.ReactNode;
  colorText?: "black" | "white";
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  remderBanner,
  colorText = "black",
}) => {
  return (
    <div className="relative overflow-hidden bg-[#EDF0F2]">
      <header>
        <SubHeader />
        <div
          className={`${
            colorText === "black" ? "lg:text-black text-white" : "text-white"
          }`}
        >
          <Header />
        </div>
        {remderBanner()}
      </header>
      <main className="container mx-auto mt-24 text-lg font-montserrat">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
