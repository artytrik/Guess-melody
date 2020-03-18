export const GameType = {
  ARTIST: `artist`,
  GENRE: `genre`
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const AppRoute = {
  LOGIN: `/login`,
  LOSE: `/lose`,
  RESULT: `/result`,
  ROOT: `/`
};
