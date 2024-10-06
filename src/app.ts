import * as React from 'react';
import { registerRootComponent } from 'expo';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { MainStack } from './components/MainStack';

const App = () => (
  <TamaguiProvider config={config}>
    <MainStack />
  </TamaguiProvider>
);

registerRootComponent(App);