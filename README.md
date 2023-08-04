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

<!-- REMINDERS -->

- div does not exist in react-native, remember this when you use rafce
- onclick is onpress for rn
- for target blank hrefs, you use Linking.openUrl(url) and for routes within, you use router.push(route)
- in onchange functions in rn, you immediately get the value of the change event ; instead of (e) => e.target.value, it becomes (value) => value
- onchange function doesn't exist in react native, it's onchangetext
- router.push takes you to a new page
- read on usecallback function react again

<!-- DOCUMENTATION FOR ERRORS ENCOUNTERED SO FAR AND HOW THEY WERE FIXED -->

a. Unmatched route : Fix - Didn't have a default export on homepage. // You removed react-native-unimodules.
b. Error while updating property showVerticalScrollIndicator : You put the value (false/true) in strings instead of boolean.
c. uri can't cast : you used src instead of src
d. renderItem (most occured in) forgetting to destructure, passing a value like a normal function {({})=>()} remember

<!-- BUILD -->

- stop server from running
- npm install -g expo cli (we don't need it)
- npm install -g eas-cli
- npx expo install expo-dev-client
- eas login
- eas build --profile development --platform android
- eas build --profile development --platform ios (in progress)

<!-- FOR DEPLOYMENT -->

- eas build --platform android/ios
- eas build --platform all
