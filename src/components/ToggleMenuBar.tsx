import React, { useState, KeyboardEvent, MouseEvent, Fragment } from "react";
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "@clerk/clerk-react";

type Anchor = "right";

function ToggleMenuBar() {
  const [isOpen, setIsOpen] = useState({
    right: false,
  });

  const { isLoaded, userId, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(); // 로그아웃을 호출
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsOpen({ ...isOpen, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200, backgroundColor: "var(--color__white)" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ backgroundColor: "var(--color__white)" }}>
        {userId !== null ? (
          // 로그인된 상태에서는 로그아웃 버튼을 표시
          <ListItem>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              로그아웃
            </Button>
          </ListItem>
        ) : (
          // 로그인되지 않은 상태에서는 로그인 링크를 표시
          <ListItem key="로그인" disablePadding>
            <CustomLink to={"/login"}>
              <ListItemButton>
                <ListItemIcon sx={{ backgroundColor: "var(--color__white)" }}>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText
                  primary="로그인"
                  sx={{ backgroundColor: "var(--color__white)" }}
                />
              </ListItemButton>
            </CustomLink>
          </ListItem>
        )}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <GiHamburgerMenu
            size={24}
            color="var(--color__white)"
            onClick={toggleDrawer(anchor, true)}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={isOpen[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            ModalProps={{
              style: {
                backgroundColor: "rgba(3, 3, 3, 0.05)", // 배경 색상 및 투명도 설정
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}

export default ToggleMenuBar;

const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
