import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog.tsx";
import {useDispatch} from "react-redux";
import {closeConfirmPopup} from "@/slices/popup/confirmPopupSlice.ts";

type Props = {
  open: boolean;
  title: string;
  content: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmPopup = ({open, title, content, onClose, onConfirm}: Props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(closeConfirmPopup());
    onClose && onClose();
  }

  const confirmHandler = () => {
    dispatch(closeConfirmPopup());
    onConfirm && onConfirm();
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="w-11/12 rounded shadow-gray-950">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black">{title}</AlertDialogTitle>
          <AlertDialogDescription>{content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={closeHandler}>취소</AlertDialogCancel>
          <AlertDialogAction onClick={confirmHandler}>확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmPopup;