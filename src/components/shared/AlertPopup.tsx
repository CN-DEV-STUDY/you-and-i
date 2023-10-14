import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import {Button} from "@/components/ui/Button.tsx";

type Props = {
  message: string;
  onClose: () => void;
}
const AlertPopup = ({ message, onClose }: Props) => {
  return (
    <div className="z-10 w-full h-full backdrop-blur absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CardHeader>
          <CardTitle>축하합니다!</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{message}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onClose}>확인</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AlertPopup;