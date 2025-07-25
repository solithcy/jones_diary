// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user?: User;
		}
		interface User{
			id: number;
			username: string;
			token?: string;
		}
		interface Entry{
			id: number;
			content: string;
			category?: string;
			created: Date;
		}
		interface PageData {
			user?: User;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
