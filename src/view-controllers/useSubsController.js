import useSubsViewModel from "../view-models/useSubsModel";

const useSubsController = () => {
  const { data, hasError, isLoading, fetchSubs } = useSubsViewModel();

  return {
    data,
    hasError,
    isLoading,
    fetchSubs,
  };
};

export default useSubsController;
