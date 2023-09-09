import React from "react";
import styled from "styled-components";
import periodImg from "./../assets/period.jpg";

function PeriodCard() {
  return (
    <Container>
      <RoundCard />
    </Container>
  );
}

export default PeriodCard;

// style
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;
const RoundCard = styled.div`
  width: 100%;
  margin-top: 10px;
  height: 130px;
  border-radius: 10px;
  background-color: var(--color__white);
  background-image: url(${periodImg});
  background-size: cover;
  background-position: center bottom;
`;
