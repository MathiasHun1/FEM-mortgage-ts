import { parseInput } from '../utils';
import { State, Action } from '../types/types';

export const initialState: State = {
  amount: '',
  term: '',
  rate: '',
  method: '',
  result: '',
  total: '',
};

export const inputReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'amount': {
      return parseInput(state, action, 'amount');
    }
    case 'term': {
      return action.payload.length > 3
        ? state
        : parseInput(state, action, 'term');
    }
    case 'rate': {
      return parseInput(state, action, 'rate');
    }
    case 'method': {
      return { ...state, method: action.payload };
    }

    case 'setResult': {
      return { ...state, result: action.payload };
    }
    case 'setTotal': {
      return { ...state, total: action.payload };
    }

    case 'clearAll': {
      return { ...initialState };
    }
    default:
      throw new Error(`unknown action: ${(action as any).type}`);
  }
};
