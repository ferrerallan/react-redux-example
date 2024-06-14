
# React Redux Example

## Description

This repository provides an example of a web application built with React and Redux. The project demonstrates how to set up and use React for building the user interface and Redux for state management. This is useful for developers looking to build scalable and maintainable web applications with a predictable state container.

## Requirements

- Node.js
- npm or Yarn for package management

## Mode of Use

1. Clone the repository:
   ```bash
   git clone https://github.com/ferrerallan/react-redux-example.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-redux-example
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

## Implementation Details

- **src/**: Contains the React application source code.
- **src/store/**: Contains the Redux store setup and reducers.
- **src/actions/**: Contains the Redux action creators.
- **src/components/**: Contains the React components.
- **public/**: Contains the static assets and the HTML template.
- **package.json**: Configuration file for the Node.js project, including dependencies.

### Example of Use

Here is an example of how to create a simple Redux action and reducer:

**src/actions/index.js**
```javascript
export const increment = () => {{
  return {{
    type: 'INCREMENT'
  }};
}};

export const decrement = () => {{
  return {{
    type: 'DECREMENT'
  }};
}};
```

**src/reducers/counter.js**
```javascript
const counterReducer = (state = 0, action) => {{
  switch (action.type) {{
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }}
}};

export default counterReducer;
```

**src/reducers/index.js**
```javascript
import { combineReducers } from 'redux';
import counterReducer from './counter';

const allReducers = combineReducers({{
  counter: counterReducer
}});

export default allReducers;
```

This code defines Redux actions and a reducer for a simple counter application, demonstrating the use of Redux for state management.

## License

This project is licensed under the MIT License.

You can access the repository [here](https://github.com/ferrerallan/react-redux-example).
