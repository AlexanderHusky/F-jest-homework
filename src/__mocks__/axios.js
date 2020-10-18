export default {
  get: jest.fn(() =>

    Promise.resolve({
      data: {
        name: "Yunpeng",
      },
    })
  ),
  post: jest.fn(() => Promise.resolve({ data: {} }).catch((err) => err)),
};
