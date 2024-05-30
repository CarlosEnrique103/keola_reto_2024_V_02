import { useSelector, useDispatch } from "react-redux";
import { AuthActions } from "../store/auth/slice";

const useAuthViewModel = () => {
  const dispatch = useDispatch();
  const { data, isLoading, hasError } = useSelector((state) => state.auth);

  const { fetchLogin } = AuthActions;

  return {
    data,
    isLoading,
    hasError,
    fetchLogin: (data) => dispatch(fetchLogin(data)),
  };
};

export default useAuthViewModel;
