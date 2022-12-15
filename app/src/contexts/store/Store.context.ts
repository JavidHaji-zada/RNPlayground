import React from "react";
import { RootStore } from "@state/RootStore";

export const StoreContext = React.createContext<RootStore | null>(null);
