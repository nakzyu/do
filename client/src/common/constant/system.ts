export const SCENES = [
  "TITLE",
  "SELECT_CHARACTER",
  "CAMPING",
  "BATTLE",
] as const;

export type Scene = typeof SCENES[number];
