// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Char = {
		char : string;
		idx : number;
		animationDelay: string;
	}
	type Chars = Char[];
}

export {};
