// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var notice$infraction_pb = require('./notice-infraction_pb.js');

function serialize_notice_infraction_Empty(arg) {
  if (!(arg instanceof notice$infraction_pb.Empty)) {
    throw new Error('Expected argument of type notice_infraction.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notice_infraction_Empty(buffer_arg) {
  return notice$infraction_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_notice_infraction_NoticeInfractionListResponse(arg) {
  if (!(arg instanceof notice$infraction_pb.NoticeInfractionListResponse)) {
    throw new Error('Expected argument of type notice_infraction.NoticeInfractionListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_notice_infraction_NoticeInfractionListResponse(buffer_arg) {
  return notice$infraction_pb.NoticeInfractionListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NoticeInfractionServiceService = exports.NoticeInfractionServiceService = {
  list: {
    path: '/notice_infraction.NoticeInfractionService/List',
    requestStream: false,
    responseStream: false,
    requestType: notice$infraction_pb.Empty,
    responseType: notice$infraction_pb.NoticeInfractionListResponse,
    requestSerialize: serialize_notice_infraction_Empty,
    requestDeserialize: deserialize_notice_infraction_Empty,
    responseSerialize: serialize_notice_infraction_NoticeInfractionListResponse,
    responseDeserialize: deserialize_notice_infraction_NoticeInfractionListResponse,
  },
};

exports.NoticeInfractionServiceClient = grpc.makeGenericClientConstructor(NoticeInfractionServiceService);
