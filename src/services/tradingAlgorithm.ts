import Alpaca from '@alpacahq/alpaca-trade-api';
import * as Notifications from 'expo-notifications';

const alpaca = new Alpaca({
  keyId: 'YOUR_API_KEY',
  secretKey: 'YOUR_SECRET_KEY',
  paper: true,
});

export async function runTradingAlgorithm() {
  // Implement your trading algorithm logic here
  // This is a simple example that buys 1 share of AAPL if the price is below $150
  try {
    const aapl = await alpaca.getLatestQuote('AAPL');
    if (aapl.askprice < 150) {
      const order = await alpaca.createOrder({
        symbol: 'AAPL',
        qty: 1,
        side: 'buy',
        type: 'market',
        time_in_force: 'day'
      });
      console.log('Algorithmic trade executed:', order);
      sendNotification('Algorithmic Trade', 'Bought 1 share of AAPL');
    }
  } catch (error) {
    console.error('Error in trading algorithm:', error);
  }
}

async function sendNotification(title, body) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: null,
  });
}