import Period from "../../components/Period";
import Recent from "../../components/Recent";
import Plan from "../../components/Plan";
import Story from "../../components/Story";
import TopBar from "../../components/shared/TopBar";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <Period />
      <Recent />
      <Plan />
      <Story />
    </>
  );
};

export default HomePage;
