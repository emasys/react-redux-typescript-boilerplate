import { History } from 'history';
import { ILog } from '../../redux/reducers/logs';
import { IAbility } from '../../redux/reducers/ability';

export interface AppState {
  router?: History;
  logs: ILog[];
  ability: IAbility
}
