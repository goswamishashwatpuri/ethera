import { createContext, useContext } from "react";
import { registryItem } from "@/lib/types";

export const CurrentPageContext = createContext({
  currentPageData: {} as registryItem,
  setCurrentPageData: (prev: registryItem) => { },
});

export const useCurrentPageContext = () => {
  return useContext(CurrentPageContext);
};
