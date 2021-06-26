import {
  IconButton, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger
} from "@chakra-ui/react";
import React, { useState } from "react";
import FaIcon from "../../Icons";
import NotificationBox from "./NotificationBox";

const NotificationsIcon = () => {
  const [notifications, _setNotifications] = useState<Number[]>([
    0,
    1,
    2,
    3,
    4,
    6,
  ]);
  const renderNotifications = notifications.map((_notification, index) => (
    <NotificationBox key={index} />
  ));
  return (
    <>
      <Popover>
        {({ isOpen }) => (
          <>
            <PopoverTrigger>
              <IconButton
                aria-label="Search database"
                icon={
                  <FaIcon
                    style="far"
                    name="bell"
                    size="lg"
                    color={
                     isOpen ? "blue.300" : "gray.500"
                    }
                  />
                }
                variant="ghost"
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow bgColor="blue.200" />
              <PopoverBody py={0} overflow="auto" height="200">
                {renderNotifications}
              </PopoverBody>
            </PopoverContent>
          </>
        )}
      </Popover>
    </>
  );
};

export default NotificationsIcon;
