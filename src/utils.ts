import { State, Action } from './types/types';

export const parseInput = (
  state: State,
  action: Action,
  actionType: string
) => {
  const regex = /^[1-9][0-9]*(\.[0-9]*)?$|^0\.[0-9]*$|^$/;

  if (action.type !== 'clearAll' && regex.test(action.payload)) {
    return { ...state, [actionType]: action.payload };
  } else {
    return state;
  }
};

export const calculateRepay = (
  amount: number,
  years: number,
  rateInput: number
) => {
  let m = 0; //monthly payemnt
  const p = amount; //loan amount
  const r = rateInput / 100 / 12; // monthly rate %
  const n = years * 12; // total months

  m = p * ((r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
  return m;
};

export const calculateInterest = (amount: number, rateInput: number) => {
  let m = 0;
  const p = amount;
  const r = rateInput / 100;

  m = (p * r) / 12;
  return m;
};

export const normalizeString = (value: string) => {
  return value.replace(/,/g, '');
};

export const formatString = (value: string) => {
  return value === '' ? '' : Number(value).toLocaleString();
};
