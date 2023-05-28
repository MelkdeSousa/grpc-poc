import { ServerUnaryCall, sendUnaryData } from '@grpc/grpc-js'

export type RPC<Request, Response> = (
  call: ServerUnaryCall<Request, Response>,
  callback: sendUnaryData<Response>,
) => void
