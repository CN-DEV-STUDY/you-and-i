import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/AlertDialog.tsx";

type Props = {
  open: boolean;
  title: string;
  content: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

const ConfirmPopup = ({open, title, content, onClose, onConfirm}: Props) => {

  const closeHandler = () => {
    open = false;
    onClose();
  }

  const confirmHandler = () => {
    open = false;
    onConfirm();
  }

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
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