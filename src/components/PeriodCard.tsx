import styled from "styled-components";
import periodImg from "./../assets/period.jpg";
import {useEffect, useState} from "react";
import {getPeriod} from "@/services/api/period/api.ts";

interface PeriodCardProps {
  period: number;
  startedAt: string;
}

function PeriodCard() {

  // state
  const [period, setPeriod] = useState<PeriodCardProps>({
    period: 0,
    startedAt: "",
  });

  // method
  const fetchPeriod = async () => {
    const data = await getPeriod();
    setPeriod(data);
  }

  // watch
  useEffect(() => {
    fetchPeriod();
  }, []);


  return (
    <Container>
      <RoundCard>
        <Text fontWeight={"bold"} fontSize={24}>
          {period.period}일
        </Text>
        <Text justifycontent={"flex-end"}>{period.startedAt}</Text>
      </RoundCard>
    </Container>
  );
}

export default PeriodCard;

// style
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  margin-bottom: 20px;
`;
const RoundCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  margin-top: 10px;
  padding: 10px 20px;
  height: 120px;
  border-radius: 10px;
  background-color: var(--color__white);
  background-image: url(${periodImg});
  background-size: cover;
  background-position: center bottom;
`;

const Text = styled.div<TextStyles>`
  display: flex;
  padding-top: 10px;
  color: var(--color__white);
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize}px;
  justify-content: ${(props) => props.justifycontent};
`;

type TextStyles = {
  fontWeight?: string;
  fontSize?: number;
  justifycontent?: string;
};
