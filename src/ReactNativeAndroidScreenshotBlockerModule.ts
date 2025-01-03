import { NativeModule, requireNativeModule } from 'expo'

declare class ReactNativeAndroidScreenshotBlockerModule extends NativeModule {
  preventScreenshots(enabled: boolean): void
}

export default requireNativeModule<ReactNativeAndroidScreenshotBlockerModule>(
  'ReactNativeAndroidScreenshotBlocker'
)

console.log('Android Screenshot Blocker loaded')
