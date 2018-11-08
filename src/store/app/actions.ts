import { MutationTypes } from '../type-defs/';
import { ActionContext } from 'vuex';
import { AppState } from '../type-defs';

const API_URL = 'https://jsonplaceholder.typicode.com/comments?postId=1';

export const actions = {
  getData
};

function getData({commit}: ActionContext<AppState, any>) {
  commit(MutationTypes.IS_LOADING, true);
  return fetch(API_URL)
    .then(response => response.json())
    .then((json: any[]) => {
      commit(MutationTypes.GET_DATA, json);
      commit(MutationTypes.IS_LOADING, false);
    });
}
