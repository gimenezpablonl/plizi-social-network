import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppContext } from "./AppContext";

interface Props {
  token: string;
};

const withAuthentication = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & Props> => ({
  token,
  ...props
}: Props) =>
  { 
    const { user } = useAppContext();
    const router = useRouter();
    useEffect(() => {
      if (!user) router.push("/login");
    });

    return user ? <Component token={token} {...props as P }/> : null;
  };


export default withAuthentication;