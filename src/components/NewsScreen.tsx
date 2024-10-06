import * as React from 'react';
import { View, Text, ScrollView } from 'tamagui';
import axios from 'axios';

export function NewsScreen() {
  const [news, setNews] = React.useState([]);

  React.useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://api.example.com/crypto-news');
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  return (
    <ScrollView flex={1} padding="$4">
      <Text fontSize="$6" fontWeight="bold">Crypto News</Text>
      {news.map((item, index) => (
        <View key={index} marginVertical="$2">
          <Text fontSize="$4" fontWeight="bold">{item.title}</Text>
          <Text fontSize="$3">{item.summary}</Text>
        </View>
      ))}
    </ScrollView>
  );
}