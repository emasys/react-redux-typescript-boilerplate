import { EActionTypes } from './types';
import { ILog } from '../reducers/logs';

interface IResponse {
  type: EActionTypes;
  payload: { data: any; loading: boolean };
}
export const setValue = (type: EActionTypes, data: any): IResponse => {
  return {
    type,
    payload: {
      data,
      loading: data ? false : true,
    },
  };
};

export const saveLog = (payload: ILog) => {
  return {
    type: EActionTypes.SAVE_LOG,
    payload,
  };
};
