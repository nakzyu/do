import { useState } from "react";
import { Scene, SCENES } from "../../common/constant/system";
import GameScene from "../game-scene/GameScene";

export default function TestingTool() {
  const [curSceneType, setCurSceneType] = useState<Scene>("TITLE");

  const renderSceneByType = (type: Scene) => {
    return <GameScene type={type} />;
  };

  return (
    <div>
      <ul className="flex justify-center">
        {SCENES.map((str) => (
          <li
            className="p-2 cursor-pointer bg-red-50
            "
            key={str}
            onClick={() => {
              setCurSceneType(str);
            }}
          >
            {str}
          </li>
        ))}
      </ul>
      <div>{renderSceneByType(curSceneType)}</div>
    </div>
  );
}
