import autosize from "autosize";
import React, {ForwardedRef, useEffect} from "react";

type Props = {
  value: string;
}


const useAutoFocus = (textareaRef: React.MutableRefObject<HTMLTextAreaElement>) => {
  // textarea에 autosize 적용
  autosize(textareaRef.current);

  // 컴포넌트가 마운트되면 textarea에 포커스
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return textareaRef;
};

export default useAutoFocus;