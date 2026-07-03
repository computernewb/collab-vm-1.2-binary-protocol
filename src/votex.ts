export enum VoteType {
	VoteReset = 'VoteReset',
	VoteReboot = 'VoteReboot',
	VoteIaosInsertMedia = 'VoteIaosInsertMedia',
	VoteIaosEjectMedia = 'VoteIaosEjectMedia'
}

export interface CollabVMVoteStatusMessage {
	started: boolean;
	voteType: string;
	voteIntentStr: string;
	data: any;
	voteTime: number;
	startedByUser: string;
	yesVotes: Array<string>;
	noVotes: Array<string>;
}

export interface CollabVMVoteEndedMessage {
	voteType: string;
	voteIntentStr: string;
	voteSucceeded: boolean;
}

export interface CollabVMVoteStartMessage {
	voteType: string;
}

export interface CollabVMVoteStartFailedMessage {
	voteType: string;
	error: string;
	cooldownTime?: number;
}

export interface CollabVMVotesEnabledMessage {
	// this array should only include votes which can be started via the VoteStartMessage, NOT votes which are started via other mechanisms (iaos stuff)
	votesEnabled: Array<VoteType>;
}
