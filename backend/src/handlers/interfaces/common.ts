import { Request, Response } from 'express';

export interface BaseRequestBody<Tbody> extends Request {
  body: Tbody;
}

export interface LoginBody extends BaseRequestBody<{ username: string; password: string }> {}

export interface TextResponse extends Response {
  response:string
}
