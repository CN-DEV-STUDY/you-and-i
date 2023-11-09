import styled from "styled-components";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/Avatar";
import bImage from "./../../assets/mountains-7561636_1280.png";
import HamburgerMenu from "@/components/shared/HamburgerMenu.tsx";
import {useState} from "react";
import Cookies from "js-cookie";
import {COOKIE_NAME} from "@/services/types/user/types.ts";
import {useDispatch, useSelector} from "react-redux";
import {EventSourcePolyfill} from 'event-source-polyfill';
import {RootState} from "@/store.ts";

const TopBar = () => {

  // redux
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn)

  // state
  const [unreadNoticeCount, setUnreadNoticeCount] = useState(0);

  const fetchNotification = () => {

    const url = `${import.meta.env.VITE_BASE_URL}/notices/connect/${Cookies.get(COOKIE_NAME.EMAIL)}`;
    const eventSource = new EventSourcePolyfill(url, {
      headers: {
        Authorization: Cookies.get(COOKIE_NAME.ACCESS_TOKEN),
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
      setUnreadNoticeCount(Number(unreadNoticeCount));
      console.log(event);
    })
  }

  if (isLoggedIn) {
    fetchNotification()
  }

  return (
    <Container className="max-w-sm">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <HamburgerMenu unreadNoticeCount={unreadNoticeCount}/>
    </Container>
  );
};

export default TopBar;

// style
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  margin: 0 auto;
  background: var(--color__secondary) url(${bImage}) no-repeat center 0 / cover;
  padding: 40px 20px 118px
`;
