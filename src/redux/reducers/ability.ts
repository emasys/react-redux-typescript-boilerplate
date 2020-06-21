import { EActionTypes } from '../actions/types';

export interface IAbilityEnt {
  name: string;
  url: string;
}

interface IPayload {
  ability: IAbilityEnt[];
  limit: number;
  offset: number;
}

interface IFetchAbility {
  type: EActionTypes.FETCH_ABILITY;
  payload: {
    data: IPayload;
    loading: boolean;
  };
}

export interface IAbility {
  ability: IAbilityEnt[];
  loading: boolean;
  limit: number;
  offset: number;
}

export const initialAbilityState = {
  loading: false,
  ability: [],
  limit: 0,
  offset: 0,
};

export function ability(
  state: IAbility = initialAbilityState,
  action: IFetchAbility
): any {
  switch (action.type) {
    case EActionTypes.FETCH_ABILITY:
      return {
        ...state,
        ability: action.payload.data?.ability || state.ability,
        loading: action.payload.loading,
        limit: action.payload.data?.limit || state.limit,
        offset: action.payload.data?.offset,
      };
    default:
      return state;
  }
}
