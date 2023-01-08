export const createSceneConfig = (config: Phaser.Types.Core.GameConfig) => {
  return {
    type: Phaser.AUTO,
    width: "100%",
    height: "100%",
    ...config,
  };
};
