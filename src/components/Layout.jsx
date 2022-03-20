import Navbar from "./Navbar";
import "../styles/components/layout-s.css";

export default function Layout({ children }) {
  return (
    <div className="layout-site">
      <Navbar />
      {children}
    </div>
  );
}
