# Expo Router Example

Use [`expo-router`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.

## 🚀 How to use

```sh
npx create-expo-app -e with-router
```

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)

Learning React Native 23|07|2023.
Commands run:

- npx create-expo-app@latest --example with-router ./
<!-- (expo font for custom fonts, axios for data fetching as usual, and react-native-dotenv allows us to work with environment variables (does this mean that we can't work with environment variables without this?)) -->
- npm install expo-font axios react-native-dotenv
- npm install -g expo-cli
- expo-cli start --tunnel // shouldn't do this because expo cli comes with the project now. REFER TO: https://blog.expo.dev/the-new-expo-cli-f4250d8e3421. RUN npx expo start || npm start
- The package @expo/ngrok@^4.1.0 is required to use tunnels, would you like to install it globally?

<!-- Notes for just necessity -->

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press j │ open debugger
› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

<!-- DOCUMENTATION FOR ERRORS ENCOUNTERED SO FAR AND HOW THEY WERE FIXED -->

a. Unmatched route : Fix - Didn't have a default export on homepage. // You removed react-native-unimodules.
