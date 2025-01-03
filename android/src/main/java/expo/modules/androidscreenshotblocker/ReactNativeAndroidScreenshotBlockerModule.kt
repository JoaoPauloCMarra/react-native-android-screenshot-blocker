package expo.modules.androidscreenshotblocker

import android.app.Activity
import android.view.WindowManager
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ReactNativeAndroidScreenshotBlockerModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("ReactNativeAndroidScreenshotBlocker")

        Function("preventScreenshots") { enabled: Boolean ->
            val activity = appContext.activityProvider?.currentActivity
            activity?.runOnUiThread {
                if (enabled) {
                    activity.window.addFlags(WindowManager.LayoutParams.FLAG_SECURE)
                } else {
                    activity.window.clearFlags(WindowManager.LayoutParams.FLAG_SECURE)
                }
            }
        }
    }
}