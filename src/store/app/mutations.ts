import { AppState, MutationTypes } from '../type-defs';

export const mutations = {
  [MutationTypes.GET_DATA](state: AppState, value: any[]): void {
    state.responseData = value;
  },
  [MutationTypes.IS_LOADING](state: AppState, value: boolean): void {
    state.isLoading = value;
  }
};
