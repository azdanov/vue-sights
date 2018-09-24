import { toKebabCase } from "@/utils";
describe("utils", () => {
  describe("toKebabCase", () => {
    test("should convert to kebab case", () => {
      expect(toKebabCase("Hello World")).toBe("hello-world");
    });
  });
});
