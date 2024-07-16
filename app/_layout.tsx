import { Stack } from "expo-router";

import { TamaguiProvider } from "@tamagui/core";
import { tamaguiConfig } from "../tamagui.config";

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
        }}
      >
        {/* <Stack.Screen name="home" options={{}} /> */}
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
      </Stack>
    </TamaguiProvider>
  );
}
