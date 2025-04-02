export type State = {
  amount: string;
  term: string;
  rate: string;
  method: string;
  result: string;
  total: string;
};

export type Action =
  | { type: 'amount' | 'term' | 'rate'; payload: string }
  | { type: 'method'; payload: string }
  | { type: 'setResult'; payload: string }
  | { type: 'setTotal'; payload: string }
  | { type: 'clearAll' };

export type ErrorState = {
  amountError: boolean;
  termError: boolean;
  rateError: boolean;
  typeError: boolean;
};

export type ErrorAction =
  | {
      type: 'setAmountError' | 'setTermError' | 'setRateError' | 'setTypeError';
      payload: boolean;
    }
  | { type: 'clearAll' };
