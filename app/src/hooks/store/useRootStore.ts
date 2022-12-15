import React from "react";
import { StoreContext } from "@contexts/store";
import { RootStore } from "@state/RootStore";

export function useRootStore(): RootStore {
	return React.useContext(StoreContext)!;
}
