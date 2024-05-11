import { greet } from "./greet";

function main(args: string[] = process.argv.slice(2)): void {
	console.log(greet("world"));
}

main();
