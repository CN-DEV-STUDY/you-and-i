import Card from "./Card";

type RecentCardProps = {
  description: string
}
const RecentCard = ({description}: RecentCardProps) => {
  return <Card type='single' description={description}>Card</Card>
}

export default RecentCard;