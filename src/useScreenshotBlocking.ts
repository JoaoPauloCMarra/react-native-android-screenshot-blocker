import { useEffect } from 'react'
import { Platform } from 'react-native'

import ReactNativeAndroidScreenshotBlockerModule from './ReactNativeAndroidScreenshotBlockerModule'

const useScreenshotBlocking = (enabled: boolean) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      ReactNativeAndroidScreenshotBlockerModule.preventScreenshots(enabled)
    }
  }, [enabled])
}

export default useScreenshotBlocking
