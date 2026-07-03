export interface CollabVMIaosAdvertisementMessage {
	api: string;
	mediaKindSupported: Array<string>;
}

export interface CollabVMIaosChangeMediaMessage {
	id: string;
}

export interface CollabVMIaosEjectMediaMessage {
	kind: string;
}

export interface CollabVMIaosMediaChangedMessage {
	username: string;
	mediaKind: string;
	ejected: boolean;
	mediaName?: string;
}
