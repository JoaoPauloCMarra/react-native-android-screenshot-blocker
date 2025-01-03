import ExpoModulesCore

public class ReactNativeAndroidScreenshotBlockerModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ReactNativeAndroidScreenshotBlocker")

    Function("preventScreenshots") { (enabled: Bool) in
      // No-op for iOS
    }
  }
}
