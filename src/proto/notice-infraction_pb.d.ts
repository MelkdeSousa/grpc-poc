// package: notice_infraction
// file: notice-infraction.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class NoticeInfractionResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): NoticeInfractionResponse;
    getCode(): string;
    setCode(value: string): NoticeInfractionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoticeInfractionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NoticeInfractionResponse): NoticeInfractionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoticeInfractionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoticeInfractionResponse;
    static deserializeBinaryFromReader(message: NoticeInfractionResponse, reader: jspb.BinaryReader): NoticeInfractionResponse;
}

export namespace NoticeInfractionResponse {
    export type AsObject = {
        id: string,
        code: string,
    }
}

export class NoticeInfractionListResponse extends jspb.Message { 
    clearNoticesList(): void;
    getNoticesList(): Array<NoticeInfractionResponse>;
    setNoticesList(value: Array<NoticeInfractionResponse>): NoticeInfractionListResponse;
    addNotices(value?: NoticeInfractionResponse, index?: number): NoticeInfractionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoticeInfractionListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: NoticeInfractionListResponse): NoticeInfractionListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoticeInfractionListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoticeInfractionListResponse;
    static deserializeBinaryFromReader(message: NoticeInfractionListResponse, reader: jspb.BinaryReader): NoticeInfractionListResponse;
}

export namespace NoticeInfractionListResponse {
    export type AsObject = {
        noticesList: Array<NoticeInfractionResponse.AsObject>,
    }
}
