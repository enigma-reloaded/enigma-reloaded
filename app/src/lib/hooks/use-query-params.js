import {
  useLocation
} from "react-router-dom";

export function useQueryParams(){
  return new URLSearchParams(useLocation().search);
}