`yarn global add detox-cli`

```
brew tap wix/brew

brew install applesimutils
```

`npx expo install jest-expo`

Ajouter ca dans le `package.json`

```
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
  ]
}
```

Ajouter ca dans le `app.json`

```
{
  "expo": {
    "plugins": ["@config-plugins/detox"]
  }
}
```

`yarn add "jest@^29" --dev`

`yarn add detox --dev`

`npx detox init -r jest`

Dans le `.detoxrc.js` remplacer `apps` par ce `apps` (et ne pas oublier de changer les `CustomInstallation.app` par le `nom_de_votre_app.app`)

```
apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath:
        "ios/build/Build/Products/Debug-iphonesimulator/CustomInstallation.app",
      build:
        "xcodebuild -workspace ios/CustomInstallation.xcworkspace -scheme CustomInstallation -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
    },
    "ios.release": {
      type: "ios.app",
      binaryPath:
        "ios/build/Build/Products/Release-iphonesimulator/CustomInstallation.app",
      build:
        "xcodebuild -workspace ios/CustomInstallation.xcworkspace -scheme CustomInstallation -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
    },
    "android.debug": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      build:
        "cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -",
      reversePorts: [8081],
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build:
        "cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -",
    },
  },
```

`detox build -c ios.sim.debug`

`detox test --configuration ios.sim.debug`

plus d'infos ici : https://docs.expo.dev/build-reference/e2e-tests/
et ici : https://docs.expo.dev/guides/testing-with-jest/
