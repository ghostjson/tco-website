import Navbar from "@components/Navbar";
import ChatContextProvider from "@contexts/Chat";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
