# prime

> A _draft_ application created while attending [David Leuiliette (@flexbox)](https://davidl.fr/)'s **Road to React Native** workshop.

This app is built with React Native with the Expo CLI, allowing for a quick
feedback loop, and an easy to deploy application through OTA updates.

**Check it out :** [Demo on Expo](https://expo.dev/@eric.martin/prime)

## The stack

- `react-native` and `expo` as a baseline for the app
- `eslint` with `@react-native-community/eslint-config` as a base set of rules
- `react-query` as a data fetching/update/caching tool for API requests
- `react-navigation` as a navigation handler
- `react-paper` for rapid prototyping
- `@shopify/restyle` for rapid prototyping

Data is fetched from the [fake store API](https://fakestoreapi.com/)

## Getting started

Pretty simple, just install dependencies and launch Metro bundler.

```bash
yarn install && yarn start
```

## Todo

- [ ] Product details page
- [ ] Add product to basket
- [ ] Display payment sheet when click on "see basket" action
