import { Link, Stack } from "expo-router";
import { View, Text } from "@tamagui/core";

const NotFoundScreen = () => (
  <>
    <Stack.Screen options={{ title: "Oops!" }} />
    <View>
      <Text>This screen doesn't exist.</Text>
      <Link href="/">
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  </>
);

export default NotFoundScreen;
