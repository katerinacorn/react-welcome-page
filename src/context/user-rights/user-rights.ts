import { createContext } from "react";

export type UserRights = {
	DASHBOARD: boolean,
	HOME: boolean,
	ADMIN: boolean
};

export const UserRightsContext = createContext<UserRights>({} as UserRights);