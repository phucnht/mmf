export const MOCK_CONTENT =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const randomTokenID = () => {
  const mils = Date.now() % (1e9 + 7);
  const rand = Math.floor(Math.random() * 9e3) + 1e3;
  return `${mils}${rand}`;
};
