import { CollabVMRectMessage } from "./CollabVMRectMessage.js";
import { CollabVMAudioMessage } from "./CollabVMAudioMessage.js";

export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
    rect?: CollabVMRectMessage | undefined;
    audio?: CollabVMAudioMessage | undefined;
}

export enum CollabVMProtocolMessageType {
    // JPEG Dirty Rectangle
    rect = 0,
    audio = 1
}
