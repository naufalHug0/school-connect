import React, { useEffect, useState } from "react"
import { View } from "react-native-ui-lib"
import AppNavigation from "./navigation/AppNavigation"

export default function () {
  const [showBlur, setShowBlur] = useState(false)

  // useEffect(() => {
  //   if (JailMonkey.isJailBroken()) {
  //     Alert.alert(
  //       "Exit App",
  //       "Your device is rooted",
  //       [{ text: "Close App", onPress: () => BackHandler.exitApp() }],
  //       { cancelable: false }
  //     )
  //   }

  //   const handleAppStateChange = (nextAppState: string) => {
  //     if (["background", "inactive"].includes(nextAppState)) {
  //       setShowBlur(true)
  //     } else {
  //       setShowBlur(false)
  //     }
  //   }

  //   AppState.addEventListener("change", handleAppStateChange)
  // }, [])

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
      <View flex>
        {/* <Provider store={store}> */}
          <AppNavigation />
        {/* </Provider> */}
        {/* {!showBlur && <Toast />} */}
      </View>
      // {showBlur && (
      //   <BlurView
      //     style={StyleSheet.absoluteFill}
      //     blurType="light"
      //     blurAmount={10}
      //   />
      // )}
    // </GestureHandlerRootView>
  )
}