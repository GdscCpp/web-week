import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export interface BaseRequestBody<Tbody> extends Request {
  body: Tbody;
}

export interface BaseParamsRequest<T extends ParamsDictionary> extends Request {
  params: T;
}


export interface LoginBody extends BaseRequestBody<{ username: string; password: string }> {}

export interface TextResponse extends Response {
  response: string;
}
