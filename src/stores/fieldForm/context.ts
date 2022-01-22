import React, { useContext } from "react";
import { FieldFormContextType } from "./types";
import { initState } from "./states";
export const FieldFormContext = React.createContext<FieldFormContextType>({
  state: initState,
  dispatch: () => {},
});
export const useFieldFormContext = (): FieldFormContextType =>
  useContext(FieldFormContext);
