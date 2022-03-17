import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-main">
      <Navbar />
      {children}
    </div>
  );
}
