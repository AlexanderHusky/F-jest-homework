import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    // 不怎么会 回顾自动mock的知识，和4个流程
    await expect(getUsers()).resolves.toEqual({ name: "Yunpeng" });
  });
});
