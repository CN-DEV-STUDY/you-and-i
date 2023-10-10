import Card from "./Card";
import randomImg from "./../assets/oc-gonzalez-FbN2z3bEaSs-unsplash.jpg";


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
  height: 66%;
  object-fit: cover;
`;
