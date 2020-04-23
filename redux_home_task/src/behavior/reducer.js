import { LANGUAGE_CHANGED } from './actions';
const initialState = { language: '1033' };

export const rootReducer = (state = initialState, action) => {
    if (action.type === LANGUAGE_CHANGED)
    return {...state, language: action.payload}

  return state;
};
