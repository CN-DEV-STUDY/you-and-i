import React from "react";
import Title from "./ui/Title";
import PeriodCard from "./PeriodCard";
import styled from "styled-components";

function Period() {
  return (
    <Section>
      <Title type="secondary" content="Period" />
      <PeriodCard />
    </Section>
  );
}

export default Period;

const Section = styled.div`
  width: 100%;
  height: 170px;
  margin-bottom: 20px;

  background-color: var(--color__secondary);
`;
