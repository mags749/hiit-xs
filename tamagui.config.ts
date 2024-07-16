import { createMedia } from "@tamagui/react-native-media-driver";
import { createTamagui, createTokens } from "@tamagui/core"; // or '@tamagui/core'

const media = createMedia({
  xs: { maxWidth: 660 },
  gtXs: { minWidth: 660 + 1 },
  sm: { maxWidth: 860 },
  gtSm: { minWidth: 860 + 1 },
  md: { maxWidth: 980 },
  gtMd: { minWidth: 980 + 1 },
  lg: { maxWidth: 1120 },
  gtLg: { minWidth: 1120 + 1 },
  short: { maxHeight: 820 },
  tall: { minHeight: 820 },
  hoverNone: { hover: "none" },
  pointerCoarse: { pointer: "coarse" },
});

const size = {
  0: 0,
  1: 5,
  2: 10,
};

export const tokens = createTokens({
  size,
  space: { ...size, "-1": -5, "-2": -10 },
  radius: { 0: 0, 1: 3 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: "#fff",
    black: "#000",
  },
});

const themes = {
  light: {
    bg: "#f2f2f2",
    color: tokens.color.black,
  },
  dark: {
    bg: "#000000",
    color: tokens.color.white,
  },
};

const appConfig = createTamagui({
  media,
  themes,
  tokens,
});

export type AppConfig = typeof appConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;
