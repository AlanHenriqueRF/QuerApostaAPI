import { ApplicationError, RequestError } from '@/protocols';
import { Request, Response, NextFunction } from 'express';

export function handleApplicationErrors(
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {

  if (err.name === 'InvalidDataError') {
    return res.status(400).send({
      message: err.message,
    });
  }

  if (err.name === 'balanceMinError') {
    return res.status(400).send({
      message: err.message,
    });
  }

  if (err.name === 'NotFoundError') {
    return res.status(404).send({
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}