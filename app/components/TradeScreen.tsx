import * as React from 'react';
import { View, Text, Input, Button } from 'tamagui';
import Alpaca from '@alpacahq/alpaca-trade-api';

const alpaca = new Alpaca({
  keyId: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  paper: true,
});

export function TradeScreen() {
  const [symbol, setSymbol] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const handleBuy = async () => {
    try {
      const order = await alpaca.createOrder({
        symbol: symbol,
        qty: parseInt(quantity),
        side: 'buy',
        type: 'market',
        time_in_force: 'day'
      });
      console.log('Order placed:', order);
      // Handle successful order
    } catch (error) {
      console.error('Error placing order:', error);
      // Handle error
    }
  };

  return (
    <View flex={1} padding="$4">
      <Text fontSize="$6" fontWeight="bold">Trade</Text>
      <Input
        placeholder="Symbol"
        value={symbol}
        onChangeText={setSymbol}
      />
      <Input
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
      />
      <Button onPress={handleBuy}>Buy</Button>
    </View>
  );
}