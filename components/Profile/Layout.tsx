import { Stack } from "@chakra-ui/react";
import React from "react";
import { User } from "../../graphql/types";
import ProfileAvatar from "./Avatar";
import ProfileInfoCard from "./ProfileInfoCard/ProfileInfoCard";
import ProfilePics from "./ProfilePics";

type Props = {
  user: User;
};

const ProfileLayout = ({ user }: Props) => {
  return (
    <>
      <Stack direction="column">
        <Stack direction="row">
          <ProfileAvatar name={user.name} avatar={user.avatar} />
          <ProfileInfoCard
            name={user.name}
            dob={user.dob}
            location={user.location}
          />
        </Stack>
        <ProfilePics />
      </Stack>
    </>
  );
};

export default ProfileLayout;
