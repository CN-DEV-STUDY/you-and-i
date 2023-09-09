import Card from "./Card";
import styled from "styled-components";
import Title from "./ui/Title";

type PlanCardProps = {
  title: string;
  plans: string[];
};
const PlanCard = ({ title, plans }: PlanCardProps) => {
  return (
    <Card type="double">
      <Title type="tertiary" content={title} />
    </Card>
  );
};

export default PlanCard;

// style
const Container = styled.div`
  height: 100%;
`;
