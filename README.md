# react-best-modal

[![NPM version](http://img.shields.io/npm/v/react-best-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-best-modal)
[![NPM downloads](http://img.shields.io/npm/dm/react-best-modal.svg?style=flat-square)](https://www.npmjs.com/package/react-best-modal)
[![Build Status](http://img.shields.io/travis/madou/react-best-modal/master.svg?style=flat-square)](https://travis-ci.org/madou/react-best-modal)
[![codecov](https://codecov.io/gh/madou/react-best-modal/branch/master/graph/badge.svg)](https://codecov.io/gh/madou/react-best-modal)

Simple is best. Accessible out of the box, tiny api, bring your own styles. **React 16+ only.**

## Usage

```sh
npm install react-focus-lock react-best-modal --save
```

```javascript
import React from 'react';
import BestModal from 'react-best-modal';
import { render } from 'react-dom';

const appRoot = document.getElementById('root');

const App = ({ showModal, closeModal }) => (
  <div>
    Hi Mom!
    {showModal && (
      <BestModal onRequestClose={closeModal} appRoot={appRoot}>
        <button>Hello, World!</button>
      </BestModal>
    )}
  </div>
);

render(<App />, appRoot);
```

**NOTE**: It is _required_ that you have an element inside your modal that is focusable. Essentially, any input or button.

## Styling

It's up to you to style and position your modal. Want to disable scrolling content behind your modal? You have to do it yourself. [There's an example implementation here.](https://madou.github.io/react-best-modal/?selectedKind=BestModal&selectedStory=disable%20body%20scroll&)

### Transitions

`react-best-modal` works perfectly with [`ReactTransitionGroup`](https://reactcommunity.org/react-transition-group/).

## Even. More. Accessible.

If you're driving home for the ultimate accessible modal, make sure to use `aria-labelledby` and `aria-describedby`, for title and description of the modal, like so:

```javascript
<BestModal
  onRequestClose={closeModal}
  appRoot={appRoot}
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Hello, World!</h2>
  <p id="modal-description">This is a modal, hello worlding!</p>
</BestModal>
```

## Focus

* Focus will be trapped inside the modal when mounted.
* Focus will automatically jump to the modal's first element when mounted, and will return to the previous focused element when unmounted.

## Multiple modals (modals in modals)

This isn't supported. It's also bad practice to show many modals at a time.

## API

### `BestModal`

```javascript
import BestModal from 'react-best-modal';
```

#### Props

| prop           | type                       | required | description                                                                                     |
| -------------- | -------------------------- | -------- | ----------------------------------------------------------------------------------------------- |
| children       | ReactNode                  | yes      | Your modal markup.                                                                              |
| onRequestClose | (e: KeyboardEvent) => void | yes      | Callback when the modal wants to close. Up to you to action it.                                 |
| appRoot        | HTMLElement                | yes      | Root of your application. The modal will add and remove accessible attributes when appropriate. |

All other props that are valid on a `HTMLElement` are passed through.
