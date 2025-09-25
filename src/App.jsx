import "./App.css"
import { Header } from './components/index';
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <>
      <Header />
      <main className="pb-15 md:pt-[70px]">
        <Outlet />
      </main>
      <Analytics />
    </>
  );
};

export default App;
