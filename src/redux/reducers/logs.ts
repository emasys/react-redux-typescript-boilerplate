import { EActionTypes } from '../actions/types';

export interface ILog {
  url: string;
  time: string;
}

interface ISaveLog {
  type: EActionTypes.SAVE_LOG;
  payload: ILog;
}

export const initialLogState = []

export function logs(
  state: ILog[] = initialLogState,
  action: ISaveLog
): ILog[] {
  switch (action.type) {
    case EActionTypes.SAVE_LOG:
      return [...state, action.payload];
    default:
      return state;
  }
}
