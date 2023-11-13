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

	type CvItem = {
		label: string;
		sole?: boolean;
		href: string;
		desc: string;
	}

	type CvItems = CvItem[];

	type Link = {
		label: string;
		href: string;
	}

	type Links = Link[];

	type Icons = {
		[key: string]: Song;
	};
}

export {};
