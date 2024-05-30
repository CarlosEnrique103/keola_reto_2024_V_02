import useAuthViewModel from "../view-models/useAuthModel";

const useAuthController = () => {
  const { data, hasError, isLoading, fetchLogin } = useAuthViewModel();

  return {
    data,
    hasError,
    isLoading,
    fetchLogin,
  };
};

export default useAuthController;
