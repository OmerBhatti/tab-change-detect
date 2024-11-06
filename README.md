# useTabChangeDetect

`useTabChangeDetect` is a custom React hook that allows you to detect tab switches or changes in visibility, triggering a callback when the specified number of tab switches has occurred.

## Installation

You can install `useTabChangeDetect` via npm or yarn:

```bash
npm install use-tab-change-detect
```

or

```bash
yarn add use-tab-change-detect
```

## Usage

To use the `useTabChangeDetect` hook, simply call it inside your component and provide a callback that should be triggered when the tab switch count exceeds the `timesAllowed` threshold. Optionally, you can set a custom value for `timesAllowed` (default is `0`).

### Example

```javascript
import React, { useState } from 'react';
import useTabChangeDetect from 'use-tab-change-detect';

const App = () => {
  const [message, setMessage] = useState("You're on the current tab!");

  const handleTabChange = () => {
    setMessage("Tab switched!");
  };

  useTabChangeDetect(handleTabChange, 2);  // Set to trigger after 2 tab switches

  return (
    <div>
      <h1>{message}</h1>
      <p>Switch tabs and see the magic!</p>
    </div>
  );
};

export default App;
```

In the example above, the `handleTabChange` function is triggered after the tab is switched twice.

## How It Works

- `useTabChangeDetect` listens to both the `visibilitychange` and `blur` events to detect tab changes.
- When a tab switch occurs (i.e., when the tab is either hidden or blurred), the hook increments a count (`tabSwitchCount`).
- Once the `tabSwitchCount` exceeds the specified threshold (`timesAllowed`), the callback function is triggered.

### Parameters

- `callback` (required): A function that is called when the number of tab switches exceeds `timesAllowed`.
- `timesAllowed` (optional, default `0`): The number of tab switches that need to occur before the `callback` is invoked. This value defaults to `0`, meaning the callback will trigger on the first tab switch.

### Cleanup

The hook automatically cleans up event listeners when the component using the hook is unmounted, ensuring there are no memory leaks.

## License

MIT License. See LICENSE for more information.