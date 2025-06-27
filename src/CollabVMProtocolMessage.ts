export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
}

export enum CollabVMProtocolMessageType {
    // JPEG Dirty Rectangle
    rect = 0,
    // File upload request/response
    file = 10,
    // File uploaded announcement
    file_uploaded = 11,
    // Process list
    process_list = 12,
    // Process kill
    process_kill = 13
    // 14-20 reserved for CollabVM File Uploads protocol additions
}