import { ApplicationError } from '@/protocols';

export function AmountBetGreaterError(): ApplicationError {
  return {
    name: 'AmountBetGreaterError',
    message: `The value of Amount Bet can not greater then balance of participant`,
  };
}
