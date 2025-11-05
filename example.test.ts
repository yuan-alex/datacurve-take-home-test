import { describe, test, expect } from "bun:test";

describe("Basic Math Operations", () => {
  test("addition works correctly", () => {
    expect(2 + 2).toBe(4);
  });

  test("subtraction works correctly", () => {
    expect(5 - 3).toBe(2);
  });

  test("multiplication works correctly", () => {
    expect(3 * 4).toBe(12);
  });

  test("division works correctly", () => {
    expect(10 / 2).toBe(5);
  });
});

describe("String Operations", () => {
  test("string concatenation works", () => {
    expect("Hello" + " " + "World").toBe("Hello World");
  });

  test("string length is correct", () => {
    expect("Bun".length).toBe(3);
  });
});

describe("Array Operations", () => {
  test("array push works", () => {
    const arr = [1, 2, 3];
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test("array length is correct", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(arr.length).toBe(5);
  });
});

