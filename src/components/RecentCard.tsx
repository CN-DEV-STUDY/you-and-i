import Card from "./Card";
import randomImg from "./../assets/tree-7823514.jpg";
import styled from "styled-components";

type RecentCardProps = {
  description: string;
};
const RecentCard = ({ description }: RecentCardProps) => {
  return (
    <Card type="single" description={description}>
      <Image src={randomImg} alt="Somethin went wrong" />
    </Card>
  );
};

export default RecentCard;

// styled
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
