import { useSelector, useDispatch } from "react-redux";
import { SubsActions } from "../store/subs/slice";

const useSubsViewModel = () => {
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector((state) => state.subs);

  const { fetchSubs } = SubsActions;

  return {
    data,
    isLoading,
    hasError,
    fetchSubs: () => dispatch(fetchSubs()),
  };
};

export default useSubsViewModel;
