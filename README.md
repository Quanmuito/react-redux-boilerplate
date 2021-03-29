# React app template with TypeScript & Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Use either `npm` or `yarn` but `not both`.

This template already comes with all needed packages. In case you want to install manually, check the dependencies in `package.json` file. All packages had been updated to the `lastest major verion`, up to `March 2021`. To install, run:

```
npm install
```

or

```
yarn install
```

## Features

### `Main features`

-   Redux
-   Redux-thunk
-   Redux-saga
-   React-router

### `Visualize`

-   SASS
-   React-bootstrap
-   Material-UI

### `Deploy`

-   Gh-pages

### `Format`

-   Prettier
-   ESLint
-   Husky & lint-staged

### `Testing`

-   React Testing Library
-   Jest

The template comes with ready-made code for a very simple working demo (products list). To play around with it, run:

```
npm start
```

or

```
yarn start
```

## Modify or add new features

Follow the file/folder structure as explained below to make necessary changes. For Redux, most of the time, you can copy existing files, modify something in there to make a new feature.

## Folder structure

-   `src/assets`: Images and style. For example:

    ```
    src/assets/images/no-image.png
    src/assets/scss/index.scss
    ```

-   `src/components`: React components. For each component, it's better to put it in a separate folder. For example:

    ```
    src/components/Button/index.tsx
    src/components/Button/Button.scss
    src/components/Button/Button.stories.tsx
    src/components/Button/Button.test.tsx
    ```

-   `src/hooks`: Custom hooks. For example:

    ```
    src/hooks/useProduct.ts
    src/hooks/useUser.ts
    ```

-   `src/redux`: Everything (such as actions, reducers, sagas etc) related to Redux

    -   `src/redux/actions`: For Redux actions
    -   `src/redux/reducers`: For Redux reducers
    -   `src/redux/sagas`: For Redux sagas
    -   `src/redux/store.ts`: The Redux store
    -   `src/redux/initialState.ts`: The initial state for Redux store

    If there are multiple un-related features, split action/reducer/saga into different files. For example:

    ```
    src/redux/actions/product.ts
    src/redux/actions/order.ts
    src/redux/actions/ui.ts
    ```

    ```
    src/redux/reducers/product.ts
    src/redux/reducers/order.ts
    src/redux/reducers/ui.ts
    ```

    ```
    src/redux/sagas/product.ts
    src/redux/sagas/order.ts
    src/redux/sagas/ui.ts
    ```

-   `src/types`: TypeScript's type definitions.

-   `src/Routes.tsx`: Defines all the React router routes to different pages.

This template is suitable for rather small apps. For bigger apps, a better & more organized way is to split the folder structure into features, something like:

```
sr/feature1
--components
--redux
----action.ts
----reducer.ts
----saga.ts

src/feature2
--components
--redux
----action.ts
----reducer.ts
----saga.ts

src/redux
--action.ts
--reducer.ts
--saga.ts
--store.ts
```
