function forEach(items, callback) {
  items.forEach((item) => callback(item));
}

test("TODO 11", () => {
  // const mockCallback = jest.fn((x) => 42 + x);
  const mockCallback = jest.fn((x) => 42 + x);

  // forEach([1, 2], mockCallback);
  forEach([1,2],mockCallback);

  // 此mock函数被调用了两次
  expect(mockCallback.mock.calls.length).toBe(2);
  // 第一次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  // 第二次调用函数时的第一个参数是 2
  expect(mockCallback.mock.calls[1][0]).toEqual(2);
  // 第一次函数调用的返回值是 43
  expect(mockCallback.mock.results[0].value).toEqual(43);
  // TODO 11: add assertion
});

test("TODO 12", () => {
  const mockFn = jest.fn();
  mockFn
    .mockReturnValueOnce(42)
    .mockReturnValueOnce("string")
    .mockReturnValue(true);

  // TODO 12: to add "expected" value
  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe("string");
  expect(mockFn()).toBe(true);

  // 这个是啥意思 没懂 - -！
  expect(mockFn()).toBe(true);
});
