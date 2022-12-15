import { RootStore } from "@state/RootStore";
import React from "react";
import { ViewProps } from "react-native";
import { StoreContext } from "./Store.context";

export function StoreProvider(props: Pick<ViewProps, "children">): JSX.Element {
	return (
		<StoreContext.Provider value={new RootStore()}>
			{props.children}
		</StoreContext.Provider>
	);
}
