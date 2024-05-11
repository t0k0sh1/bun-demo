import { expect, test } from "bun:test";
import { greet } from "../src/greet";

test("should return hello world", () => {
	expect(greet("world")).toBe("Hello, world!");
});
