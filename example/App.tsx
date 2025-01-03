import { SafeAreaView, Text } from 'react-native'
import ReactNativeAndroidScreenshotBlocker from 'react-native-android-screenshot-blocker'

ReactNativeAndroidScreenshotBlocker.preventScreenshots(true)

export default function App() {
  // useScreenshotBlocking(true)

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 20, textAlign: 'center' }}>
        Take a screenshot on Android
      </Text>
    </SafeAreaView>
  )
}
