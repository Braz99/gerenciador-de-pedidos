import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <main className="layout-main">
      <Navbar />
      {children}
    </main>
  );
}
