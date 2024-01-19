import { sum } from "../utils";
import { describe, it } from "vitest";

describe.concurrent("Testing sum util", () => {
  it("adds 1 + 2 to equal 3", async ({ expect }) => {
    expect(sum(1, 2)).toBe(3);
  });
  it("adds 3 + 2 to equal 5", async ({ expect }) => {
    expect(sum(3, 2)).toBe(5);
  });
  it("adds -2 and 0 to equal -2", async ({ expect }) => {
    expect(sum(-2, 0)).toBe(-2);
  });
});
