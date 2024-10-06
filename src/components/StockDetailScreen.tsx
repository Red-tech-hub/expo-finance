import * as React from 'react';
import { View, Text } from 'tamagui';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory-native';

export function StockDetailScreen({ route }) {
  const { symbol } = route.params;
  const [stockData, setStockData] = React.useState([]);

  React.useEffect(() => {
    fetchStockData(symbol);
  }, [symbol]);

  const fetchStockData = async (symbol) => {
    // Fetch stock data here
    // For now, we'll use dummy data
    setStockData([
      { x: new Date(2023, 0, 1), y: 50 },
      { x: new Date(2023, 1, 1), y: 53 },
      { x: new Date(2023, 2, 1), y: 57 },
      { x: new Date(2023, 3, 1), y: 62 },
      { x: new Date(2023, 4, 1), y: 60 },
    ]);
  };

  return (
    <View flex={1} padding="$4">
      <Text fontSize="$6" fontWeight="bold">{symbol} Details</Text>
      <VictoryChart>
        <VictoryLine data={stockData} />
        <VictoryAxis dependentAxis />
        <VictoryAxis
          tickFormat={(x) => new Date(x).getMonth() + 1}
        />
      </VictoryChart>
    </View>
  );
}