import styled from "styled-components";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/Avatar";
import bImage from "./../../assets/mountains-7561636_1280.png";
import HamburgerMenu from "@/components/shared/HamburgerMenu.tsx";
import {memo, useEffect, useState} from "react";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {setHasUnreadNotice} from "@/slices/notice/noticeSlice.ts";
import {useDispatch} from "react-redux";
import { EventSourcePolyfill } from 'event-source-polyfill';

const TopBar = () => {
  const dispatch = useDispatch();
  const [unreadNoticeCount, setUnreadNoticeCount] = useState(0);
  const fecthNotification = () => {

    const url = `${import.meta.env.VITE_BASE_URL}/notice/connect/${Cookies.get(COOKIE_NAME.EMAIL)}`;
    const eventSource = new EventSourcePolyfill(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get(COOKIE_NAME.ACCESS_TOKEN)}`,
      },
    });

    eventSource.onmessage = (event) => {
      console.log(event);
    }

    eventSource.onerror = (event) => {
      eventSource.close();
      console.log(event);
    }

    eventSource.onopen = (event) => {
      console.log("open")
      console.log(event);
    }

    eventSource.addEventListener("unreadNoticeCount", (event) => {
      const {data: unreadNoticeCount} = event;
      dispatch(setHasUnreadNotice({hasUnreadNotice: Number(unreadNoticeCount) > 0}));
      setUnreadNoticeCount(Number(unreadNoticeCount));
      console.log(event);
    })

  }

  useEffect(() => {
    fecthNotification();
  }, [])

  return (
    <Container>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <HamburgerMenu unreadNoticeCount={unreadNoticeCount}/>
    </Container>
  );
};

export default memo(TopBar);

// style
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  background: var(--color__secondary) url(${bImage}) no-repeat center 0 / cover;
  padding: 40px 20px 118px

`;
