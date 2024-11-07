react apps

## Build Process

- This phase involves transpiling JSX to JavaScript, bundling the code, and optimizing it for production.
- The output is usually static files (HTML, CSS, and JavaScript) that are served to the browser.
- No Virtual DOM exists at this stage.

## Runtime

- When the browser loads the JavaScript, React starts executing.
- The React components render and create the initial Virtual DOM tree based on the component structure and their state.
- This Virtual DOM representation is then used to efficiently update the actual DOM when necessary.

## Virtual DOM

- React takes the created components which are in JSX and converts them into a tree of virtual DOM elements, which is stored in memory.

##React Fiber:

## React Fiber

- React Fiber is a new version of React's core, introduced in React 16. It makes React apps faster and more responsive, especially for big and complex apps.

- In simpler terms, React Fiber is like a smarter engine under the hood of React that makes it faster and more responsive. It allows React to handle complex UI updates more efficiently, resulting in a smoother user experience.

### Steps Involved in React Fiber

1. **Reconciliation**: React Fiber breaks down the rendering work into units of work and spreads it out over multiple frames. This allows React to pause and resume work as needed.
2. **Scheduling**: React Fiber prioritizes updates based on their urgency. High-priority updates, like user interactions, are handled first, while less critical updates are deferred.
3. **Commit Phase**: Once all the units of work are completed, React Fiber commits the changes to the DOM in a single, efficient batch.
4. **Error Handling**: React Fiber improves error handling by allowing React to catch and recover from errors within components, making the app more resilient.

## Does Fiber Architecture and Reconciliation Get Created During Build?

- No, the Fiber architecture and reconciliation process are not created during the build phase.
- They are part of the runtime process.
- During runtime, React uses Fiber to manage and update the Virtual DOM efficiently.
- The build phase only prepares the static files (HTML, CSS, JavaScript) for deployment.


## Hooks

- `useState` -> Hooks are functions that let you hook into React state and lifecycle.
- `useEffect` -> Runs side effects after render, useful for data fetching, subscriptions, or DOM updates.
- `useRef` -> Provides a mutable ref object to directly access a DOM element.
- `useId` -> Generates a unique ID for accessibility or other unique identifier needs.
- `useContext` -> Allows you to subscribe to React context without introducing nesting.
- `useReducer` -> An alternative to `useState` for managing complex state logic.
- `useMemo` -> Memoizes a value so that it is only recomputed when one of the dependencies has changed.
- `useCallback` -> Returns a memoized callback function that only changes if one of the dependencies has changed.
- `useLayoutEffect` -> Similar to `useEffect`, but it fires synchronously after all DOM mutations.
- `useImperativeHandle` -> Customizes the instance value that is exposed when using `ref` in parent components.
- `useDebugValue` -> Can be used to display a label for custom hooks in React DevTools.

## React Router

- React Router is a library for routing in React apps.
- It allows navigation between views, changes the browser URL, and syncs the UI with the URL.
- Routes are declared using components, making them easy to manage.
- Supports dynamic routing, nested routes, and route parameters.
- Features include lazy loading, route guards, and custom route rendering.


## React roter hooks
### Important Hooks in React Router

- `useHistory` -> Provides access to the history instance that you may use to navigate.
- `useLocation` -> Returns the current location object, which represents the current URL.
- `useParams` -> Returns an object of key/value pairs of URL parameters.
- `useRouteMatch` -> Attempts to match the current URL to a given path and returns match data.
- `useNavigate` -> Allows programmatic navigation between routes.
- `useLoaderData` -> Accesses pre-fetched data for the current route.


These hooks are essential for handling navigation, accessing route parameters, and managing the current location in a React Router application.