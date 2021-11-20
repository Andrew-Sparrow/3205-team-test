import {getBaseCurrency} from "../store/currencies/selectors"
import { useTypedSelector } from "./use-typed-selector";

export default function useBaseCurrency () {
  return useTypedSelector(getBaseCurrency);
}


