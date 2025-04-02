import { ErrorState, ErrorAction } from '../types/types';

export const initialErrorState: ErrorState = {
  amountError: false,
  termError: false,
  rateError: false,
  typeError: false,
};

export const errorReducer = (state: ErrorState, action: ErrorAction) => {
  switch (action.type) {
    case 'setAmountError': {
      return { ...state, amountError: action.payload };
    }
    case 'setTermError': {
      return { ...state, termError: action.payload };
    }
    case 'setRateError': {
      return { ...state, rateError: action.payload };
    }
    case 'setTypeError': {
      return { ...state, typeError: action.payload };
    }
    case 'clearAll': {
      const stateCopy: ErrorState = { ...state };

      for (const key in stateCopy) {
        stateCopy[key as keyof ErrorState] = false;
      }
      return stateCopy;
    }
    default: {
      throw new Error(`unknown action type: ${(action as any).type}`);
    }
  }
};
