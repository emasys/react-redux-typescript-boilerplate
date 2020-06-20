import { EActionTypes } from './types';
import { Dispatch } from 'redux';
import { setValue, saveLog } from './common';
import { instance } from '../../config/axiosConfig';

export const fetchAbilities = (
  limit: number = 10,
  offset: number = 0
) => async (dispatch: Dispatch<any>) => {
  dispatch(
    setValue(EActionTypes.FETCH_ABILITY, null)
  );
  try {
    const url = `ability/?limit=${limit}&offset=${offset}`;
    dispatch(saveLog({ url, time: new Date().toISOString() }));
    const { data } = await instance.get(url);
    dispatch(
      setValue(EActionTypes.FETCH_ABILITY, {
        ability: data.results,
        limit,
        offset,
      })
    );
  } catch (error) {
    // handle your error
  }
};
