import React from "react";
import Icon306752Gaming from "../components/Icons/Icon-306752-gaming";
import Icon588288VideogameLogo from "../components/Icons/Icon-588288-videogame-logo";
import Icon871450VideogameLogo from "../components/Icons/Icon-871450-videogame-logo";

function PlatformIcon({ name }) {
  const sonyMap = {
    playstation: <Icon588288VideogameLogo kind="033-sony" />,
    playstation1: <Icon588288VideogameLogo kind="039-playstation" />,
    playstation2: <Icon588288VideogameLogo kind="004-ps2" />,
    playstation3: <Icon588288VideogameLogo kind="003-ps3" />,
    playstation4: <Icon588288VideogameLogo kind="001-ps4" />,
    playstation5: <Icon871450VideogameLogo kind="029-play station" />,
    "ps-vita": <Icon588288VideogameLogo kind="002-psvita" />,
    psp: <Icon588288VideogameLogo kind="011-psp" />,
  };

  /* <Icon871450VideogameLogo kind="029-play station" />, */

  const nintendoMap = {
    nintendo: <Icon588288VideogameLogo kind="040-nintendo" />,
    "nintendo-switch": <Icon871450VideogameLogo kind="019-nintendo switch" />,
    "nintendo-3ds": <Icon306752Gaming kind="023-game console" />,
    "nintendo-ds": <Icon871450VideogameLogo kind="017-nintendo ds" />,
    "nintendo-dsi": <Icon871450VideogameLogo kind="017-nintendo ds" />,
    "wii-u": <Icon588288VideogameLogo kind="036-wii-u" />,
    wii: <Icon588288VideogameLogo kind="037-wii" />,
    gamecube: <Icon588288VideogameLogo kind="040-nintendo" />,
    "nintendo-64": <Icon588288VideogameLogo kind="010-super-mario" />,
    "game-boy-advance": <Icon871450VideogameLogo kind="010-game boy" />,
    "game-boy-color": <Icon306752Gaming kind="009-game control" />,
    "game-boy": <Icon306752Gaming kind="009-game control" />,
    snes: <Icon306752Gaming kind="024-game controller" />,
    nes: <Icon306752Gaming kind="025-game console" />,
  };

  const segaMap = {
    sega: <Icon588288VideogameLogo kind="035-sega" />,
    // genesis: "genesis",
    // "sega-saturn": "sega-saturn",
    // "sega-cd": "sega-cd",
    // "sega-32x": "sega-32x",
    // "sega-master-system": "sega-master-system",
    // dreamcast: "dreamcast",
    // "game-gear": "game-gear",
  };

  const platforms = { ...sonyMap, ...nintendoMap, ...segaMap };

  const getPlatformIcon = (name) =>
    platforms[name] || <Icon306752Gaming kind="028-gamer" />;

  return getPlatformIcon(name);
}
export default PlatformIcon;
