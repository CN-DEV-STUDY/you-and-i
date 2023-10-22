import TopBar from "@/components/shared/TopBar.tsx";
import {Outlet} from "react-router-dom";

const TopBarOnly = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default TopBarOnly;