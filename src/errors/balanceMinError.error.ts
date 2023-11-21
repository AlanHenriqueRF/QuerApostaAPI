import { ApplicationError } from '@/protocols';

export function balanceMinError(): ApplicationError {
  return {
    name: 'balanceMinError',
    message: `Invalid balance: Balance inicial must be greater or igual to R$10,00`,
  };
}
