import { CollabVMProtocolMessage, CollabVMProtocolMessageType } from "./CollabVMProtocolMessage";

export interface UploadFileRequest extends CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType.file;
    filename: string;
    filesize?: number;
}