import { AppState } from "../type-defs";

export const getters = {
  isLoading: (state: AppState): boolean => state.isLoading,
  responseData: (state: AppState): any[] => state.responseData,
};
