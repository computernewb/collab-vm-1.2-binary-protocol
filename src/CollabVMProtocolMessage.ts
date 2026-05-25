import { CollabVMRectMessage } from "./CollabVMRectMessage.js";
import { CollabVMAudioMessage } from "./CollabVMAudioMessage.js";
import { CollabVMAudioFormatMessage } from "./CollabVMAudioFormatMessage.js";

export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
    rect?: CollabVMRectMessage | undefined;
    audio?: CollabVMAudioMessage | undefined;
    audioFormat?: CollabVMAudioFormatMessage | undefined;
}

export enum CollabVMProtocolMessageType {
    // JPEG Dirty Rectangle
    rect = 0,
    audio = 1,
    audioFormat = 2
}
