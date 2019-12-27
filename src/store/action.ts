import { States } from "./store";

export const toggleSuccess = (
  { state }: { state: States },
  isSuccess: boolean
) => {
  state.isSuccess = isSuccess;
};

export const toggleLoading = (
  { state }: { state: States },
  isLoading: boolean
) => {
  state.isLoading = isLoading;
};
