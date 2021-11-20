// import {TypedUseSelectorHook, useSelector} from "react-redux";
// import {RootState} from "../store/root-reducer";
import {getBaseCurrency} from "../store/currencies/selectors"
import { useTypedSelector } from "./use-typed-selector";

// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function useBaseCurrency () {
  return useTypedSelector(getBaseCurrency);
}


