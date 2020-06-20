import { AppState } from '../../interfaces/common';
import { createSelector } from 'reselect';

const ability = (state: AppState) => state.ability;

export const getAbility = createSelector(ability, (data) => data);
