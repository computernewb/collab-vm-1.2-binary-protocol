import { CollabVMRectMessage } from './CollabVMRectMessage.js';
import { CollabVMIaosAdvertisementMessage, CollabVMIaosChangeMediaMessage, CollabVMIaosEjectMediaMessage, CollabVMIaosMediaChangedMessage } from './iaos.js';
import { CollabVMVoteStartFailedMessage, CollabVMVoteEndedMessage, CollabVMVoteStartMessage, CollabVMVoteStatusMessage, CollabVMVotesEnabledMessage } from './votex.js';

export interface CollabVMProtocolMessage {
	type: CollabVMProtocolMessageType;
	rect?: CollabVMRectMessage | undefined;
	// iaos
	iaosAdvertisement?: CollabVMIaosAdvertisementMessage | undefined;
	iaosChangeMedia?: CollabVMIaosChangeMediaMessage | undefined;
	iaosEjectMedia?: CollabVMIaosEjectMediaMessage | undefined;
	iaosMediaChanged?: CollabVMIaosMediaChangedMessage | undefined;
	// votex
	voteStatus?: CollabVMVoteStatusMessage | undefined;
	voteEnded?: CollabVMVoteEndedMessage | undefined;
	voteStart?: CollabVMVoteStartMessage | undefined;
	voteStartFailed?: CollabVMVoteStartFailedMessage | undefined;
	votesEnabled?: CollabVMVotesEnabledMessage | undefined;
}

export enum CollabVMProtocolMessageType {
	// JPEG Dirty Rectangle
	rect = 0,
	// iaos
	iaosAdvertisement = 10,
	iaosChangeMedia = 11,
	iaosEjectMedia = 12,
	iaosMediaChanged = 13,
	// votex
	voteStatus = 21,
	voteEnded = 22,
	voteStart = 23,
	voteStartFailed = 24,
	votesEnabled = 25
}
