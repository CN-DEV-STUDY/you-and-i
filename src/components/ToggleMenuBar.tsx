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
} from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { GiHamburgerMenu } from "react-icons/gi";

type Anchor = "right";

function ToggleMenuBar() {
  const [isOpen, setIsOpen] = useState({
    right: false,
  });

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
        {["로그인"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ backgroundColor: "var(--color__white)" }}>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ backgroundColor: "var(--color__white)" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
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
          >
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
}

export default ToggleMenuBar;
