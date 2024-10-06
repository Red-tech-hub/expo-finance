import * as React from 'react';
import { View, Text, Switch, Button } from 'tamagui';

export function SettingsScreen() {
  const [theme, setTheme] = React.useState('green');
  const [notifications, setNotifications] = React.useState(true);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    // Apply theme change logic here
  };

  return (
    <View flex={1} padding="$4">
      <Text fontSize="$6" fontWeight="bold">Settings</Text>
      <View marginVertical="$4">
        <Text fontSize="$4">Theme</Text>
        <Button onPress={() => changeTheme('green')}>Green</Button>
        <Button onPress={() => changeTheme('orange')}>Orange</Button>
        <Button onPress={() => changeTheme('red')}>Red</Button>
      </View>
      <View marginVertical="$4">
        <Text fontSize="$4">Notifications</Text>
        <Switch
          checked={notifications}
          onCheckedChange={setNotifications}
        />
      </View>
    </View>
  );
}