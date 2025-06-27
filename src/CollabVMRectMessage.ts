import { CollabVMProtocolMessage, CollabVMProtocolMessageType } from "./CollabVMProtocolMessage.js";

export interface CollabVMRectMessage extends CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType.rect;
    rect: {
        x: number;
        y: number;
        data: Uint8Array;
    };
}