import SectionContainer from "./SectionContainer";
import Title from "./ui/Title";
import VerticalScroll from "./VerticalScroll";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <SectionContainer>
      <Title type="secondary" content="Plans" />
      <VerticalScroll>
        <PlanCard
          title="2023-09-30"
          plans="1. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String \n 2. A random string Very Very Long Long String "
        />
        <PlanCard title="2023-08-05" plans="A random string" />
        <PlanCard title="2023-08-03" plans="A random string" />
        <PlanCard title="2023-08-01" plans="A random string" />
      </VerticalScroll>
    </SectionContainer>
  );
};

export default Plan;
