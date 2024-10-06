import { createTamagui } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/themes';

const interFont = createInterFont();

const appConfig = createTamagui({
  fonts: {
    body: interFont,
    heading: interFont,
  },
  themes,
  tokens,
  shorthands,
});

export type AppConfig = typeof appConfig;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig;