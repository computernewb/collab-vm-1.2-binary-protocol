export class CollabVMCapabilities {
	// Support for JPEG screen rects in binary msgpack format
	bin: boolean;
	// Support for AnyOS functionality
	iaos: boolean;
	// Support for extended vote functionality
	votex: boolean;

	constructor() {
		this.bin = false;
		this.iaos = false;
		this.votex = false;
	}
}
