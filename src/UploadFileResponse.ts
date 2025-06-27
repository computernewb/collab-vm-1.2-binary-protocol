import { CollabVMProtocolMessage, CollabVMProtocolMessageType } from "./CollabVMProtocolMessage";

export type UploadFileError =
    'kFileUploads_BadFilename' |
    'kFileUploads_FileTooLarge' |
    'kFileUploads_CooledDown' |
    'kFileUploads_TempBan' |
    'kFileUploads_Banned' |
    'kFileUploads_LoginRequired' |
    'kFileUploads_NoPermission' |
    'kFileUploads_AgentDown' |
    'kFileUploads_BadRequest' |
    'kFileUploads_InternalError';

export interface UploadFileSuccessResponse extends CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType.file;
    success: true;
    endpoint: string;
    token: string;
    captcha: false | {
        type: 'hcaptcha' | 'recaptcha' | 'turnstile';
        siteKey: string;
    }
}

export interface UploadFileErrorResponse extends CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType.file;
    success: false;
    error: UploadFileError;
}