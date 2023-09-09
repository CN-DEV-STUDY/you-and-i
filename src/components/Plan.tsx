import SectionContainer from "./SectionContainer";
import Title from "./ui/Title";
import Card from "./Card";
import VerticalScroll from "./VerticalScroll";
import PlanCard from "./PlanCard";


const Plan = () => {
  return <SectionContainer>
    <Title type='secondary' content="Plan" />
    <VerticalScroll>
      <PlanCard title="2023-09-30" plans={Array.from("")} />
      <PlanCard title="2023-08-05" plans={Array.from("")} />
      <PlanCard title="2023-08-03" plans={Array.from("")} />
      <PlanCard title="2023-08-01" plans={Array.from("")} />
    </VerticalScroll>
  </SectionContainer>
}

export default Plan;
