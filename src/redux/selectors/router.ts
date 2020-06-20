import { AppState } from '../../interfaces/common';

export const getPathname = (state: AppState) => state.router?.location.pathname;
