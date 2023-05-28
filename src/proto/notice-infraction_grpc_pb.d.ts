// package: notice_infraction
// file: notice-infraction.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as notice_infraction_pb from "./notice-infraction_pb";

interface INoticeInfractionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    list: INoticeInfractionServiceService_IList;
}

interface INoticeInfractionServiceService_IList extends grpc.MethodDefinition<notice_infraction_pb.Empty, notice_infraction_pb.NoticeInfractionListResponse> {
    path: "/notice_infraction.NoticeInfractionService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<notice_infraction_pb.Empty>;
    requestDeserialize: grpc.deserialize<notice_infraction_pb.Empty>;
    responseSerialize: grpc.serialize<notice_infraction_pb.NoticeInfractionListResponse>;
    responseDeserialize: grpc.deserialize<notice_infraction_pb.NoticeInfractionListResponse>;
}

export const NoticeInfractionServiceService: INoticeInfractionServiceService;

export interface INoticeInfractionServiceServer extends grpc.UntypedServiceImplementation {
    list: grpc.handleUnaryCall<notice_infraction_pb.Empty, notice_infraction_pb.NoticeInfractionListResponse>;
}

export interface INoticeInfractionServiceClient {
    list(request: notice_infraction_pb.Empty, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
    list(request: notice_infraction_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
    list(request: notice_infraction_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
}

export class NoticeInfractionServiceClient extends grpc.Client implements INoticeInfractionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public list(request: notice_infraction_pb.Empty, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
    public list(request: notice_infraction_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
    public list(request: notice_infraction_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: notice_infraction_pb.NoticeInfractionListResponse) => void): grpc.ClientUnaryCall;
}
