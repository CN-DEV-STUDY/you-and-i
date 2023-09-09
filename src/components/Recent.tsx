import Title from "./ui/Title";
import SectionContainer from "./SectionContainer";
import VerticalScroll from "./VerticalScroll";
import RecentCard from "./RecentCard";

type RecentProps = {
  description: string
}
const Recent = ({description}: RecentProps) => {
  return <SectionContainer>
    <Title type="secondary" content="Recent"/>
    <VerticalScroll>
      <RecentCard description="Hello World" />
      <RecentCard description="Hello World" />
      <RecentCard description="Hello World" />
      <RecentCard description="Hello World" />
    </VerticalScroll>
  </SectionContainer>
}

export default Recent;

