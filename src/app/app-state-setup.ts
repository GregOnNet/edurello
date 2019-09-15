import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  getSelectors,
  routerReducer,
  RouterReducerState
} from '@ngrx/router-store';

export interface AppState {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};

const routerFeature = createFeatureSelector<AppState, RouterReducerState>(
  'router'
);

export const { selectRouteParam } = getSelectors(routerFeature);
