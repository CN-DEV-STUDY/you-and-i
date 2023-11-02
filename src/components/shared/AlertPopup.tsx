import {useDispatch} from "react-redux";
import {closeAlertPopup} from "@/slices/popup/alertPopupSlice.ts";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/AlertDialog.tsx";

type Props = {
  title: string;
  content: string;
  onClose?: () => void;
}
const AlertPopup = ({ title, content, onClose }: Props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeAlertPopup());
    onClose && onClose();
  }

  return (
    <AlertDialog open>
      <AlertDialogContent className="w-11/12 rounded shadow-gray-950">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeHandler}>확인</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertPopup;