import Card from "./Card";
import styled from "styled-components";
import Title from "./ui/Title";

type PlanCardProps = {
  title: string;
  plans: string;
};
const PlanCard = ({ title, plans }: PlanCardProps) => {
  return (
    <Card type="double">
      <Title type="tertiary" content={title} />
      <Text>{plans}</Text>
    </Card>
  );
};

export default PlanCard;

// style
const Text = styled.p`
  margin-top: 10px;
`;
