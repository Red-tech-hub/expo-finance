import * as React from 'react';
import { View, Text, Button } from 'tamagui';
import { VictoryPie } from 'victory-native';

export function HomeScreen({ navigation }) {
  const [totalProfit, setTotalProfit] = React.useState(0);
  const [trades, setTrades] = React.useState([]);

  // Fetch total profit and trades data here

  return (
    <View flex={1} padding="$4">
      <Text fontSize="$6" fontWeight="bold">Dashboard</Text>
      <View marginVertical="$4">
        <Text fontSize="$5">Total Profit: ${totalProfit.toFixed(2)}</Text>
      </View>
      <VictoryPie
        data={[
          { x: "Stocks", y: 35 },
          { x: "Crypto", y: 40 },
          { x: "Cash", y: 25 }
        ]}
        width={300}
        height={300}
      />
      <Button onPress={() => navigation.navigate('Trade')}>Go to Trade</Button>
      <Button onPress={() => navigation.navigate('News')}>Go to News</Button>
      <Button onPress={() => navigation.navigate('Settings')}>Settings</Button>
    </View>
  );
}