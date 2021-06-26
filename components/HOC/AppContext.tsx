import Cookies from "js-cookie";
import { createContext, useContext } from "react";
import { User } from "../../graphql/types";

type Action = {
  type: string;
  data?: User;
};

const cookie = Cookies.get("user");
export const initialState: User = cookie ? JSON.parse(cookie) : undefined;

type Context = {
  user: User | undefined;
  handleAuthentication: React.Dispatch<Action>;
};

const AppContext = createContext<Context>({
  user: initialState,
  handleAuthentication: () => {},
});

export const sessionReducer = (_state: User | undefined, action: Action) => {
  console.log(_state, action);
  switch (action.type) {
    case "login": {
      Cookies.set("user", JSON.stringify(action.data));
      return action.data;
    }
    case "register": {
      return action.data;
    }
    case "logout": {
      Cookies.remove("user");
      return undefined;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const useAppContext = () => useContext(AppContext);
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;
