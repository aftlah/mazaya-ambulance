import Lenis from "@studio-freight/lenis";
import { createContext, useContext } from "react";

export interface SmoothScrollContextType {
  lenis: Lenis | null;
}

export const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);
