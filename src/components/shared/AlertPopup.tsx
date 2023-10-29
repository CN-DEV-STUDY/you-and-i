import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import {Button} from "@/components/ui/Button.tsx";
import {useDispatch} from "react-redux";
import {closeAlertPopup} from "@/slices/popup/alertPopupSlice.ts";

type Props = {
  title: string;
  content: string;
  onClose?: () => void;
}
const AlertPopup = ({ title, content, onClose }: Props) => {
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(closeAlertPopup());
    onClose();
  }

  return (
    <div data-modal-backdrop="static" className="z-10 w-full h-full backdrop-blur-sm absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="w-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={onCloseHandler}>확인</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default AlertPopup;