import { GET_DATA } from './actions';
import { getCivilizationsData } from '../ducks/civilizations';
import { paths } from '../config';

export const getDataMiddleware = store => next => action => {
    if(action.type === GET_DATA) {
        switch(action.path) {
            case paths.civilizations: return store.dispatch(getCivilizationsData(action.path));
        }
    }

    next(action);
};