import Title from "./ui/Title";
import PeriodCard from "./PeriodCard";
import styled from "styled-components";
import SectionContainer from "@/components/SectionContainer.tsx";

function Period() {
  return (
    <SectionContainer>
      <Title type="secondary" content="Period" />
      <PeriodCard />
    </SectionContainer>
  );
}

export default Period;

