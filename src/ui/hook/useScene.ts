import { useEffect } from "react";
import { Scene } from "../../common/constant/system";
import BattleScene from "../../game/scene/battle";
import TitleScene from "../../game/scene/title";
import { createSceneConfig } from "../../game/util/createSceneConfig";

const getScene = (scene: Scene) => {
  const scenes: Record<Scene, typeof Phaser.Scene> = {
    BATTLE: BattleScene,
    CAMPING: BattleScene,
    SELECT_CHARACTER: BattleScene,
    TITLE: TitleScene,
  };
  return scenes[scene];
};

export const useScene = (type: Scene) => {
  useEffect(() => {
    console.log("run");
    const { destroy } = new Phaser.Game(
      createSceneConfig({
        scene: getScene(type),
        parent: type,
      })
    );
    return () => {
      destroy(false);
    };
  }, [type]);
};
