# fpsb [futureproof storybook]
- [fpsb [futureproof storybook]](#fpsb-futureproof-storybook)
  - [Once upon a time...](#once-upon-a-time)
  - [Installation](#installation)
  - [Using styles](#using-styles)
    - [Global Styles](#global-styles)
    - [Theme](#theme)
  - [Components](#components)
    - [Button](#button)
    - [Heading](#heading)
    - [Shapes](#shapes)
      - [Solid Shapes](#solid-shapes)
      - [Frame Shapes](#frame-shapes)
    - [Lists](#lists)
      - [Checklists](#checklists)
      - [NumberedList](#numberedlist)

## Once upon a time...

...Okay so it's very small at the moment but our [story begins here](https://<branch>--61c08e2a6b3b4d003ade4a12.chromatic.com) and we'd love you to continue it! This initial version has been put together in a Covid-19-induced stupor so be on the look out for bugs and, more excitingly, note down your ideas for new components by opening up [new issues](https://github.com/getfutureproof-projects/fpsb/issues/new) on the repo.


## Installation
`yarn add @getfutureproof/fpsb` or \
`npm i @getfutureproof/fpsb`

## View Storybook
The latest Storybook can be viewed [here](https://main--61c08e2a6b3b4d003ade4a12.chromatic.com). This has extended documentation and examples on using components in the fpsb library.

## Using styles

### Global Styles
normalize.css and some other basic rules can be added directly with the `GlobalStyles` component. *([See source code]((./src/styles/theme.ts)))*
```jsx
// index.jsx
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GlobalStyle } from "@getfutureproof/fpsb";


ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>, document.getElementById('root'));
```

### Theme
Included components come complete with their styling but if you'd like to go off-piste, some key values of futureproof branding eg. colour palette are available directly via the [theme](./src/styles/theme.ts)
```jsx
// GreatComponent.jsx
import { colors, typography } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    const divStyles = {
        color: colors.purple,
        backgroundColor: colors.coral,
        fontFamily: typography.type.body
    }

    return (
        <div style={divStyles}>
            What a great component.
        </div>
    );
};
```

## Components
A compact selection to get us going - help us expand! \
See the [Storybook](https://main--61c08e2a6b3b4d003ade4a12.chromatic.com)) for more extensive documentation and usage.

### Button
Buttons come in regular and inverted flavours
```jsx
// GreatComponent.jsx
import { Button } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    return (
        <div>
            <Button label="Click me..." />
            <Button
                label="I'm inverted"
                inverted
                colorway="coral"
            />
        </div>
    );
};
```

### Heading
```jsx
// GreatComponent.jsx
import { Heading } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    return (
        <div>
            <Heading
                content="Listen up!"
                color="lime"
                size="huge"/>
        </div>
    );
};
```

### Shapes
The four key shapes are:
- Angles
- Cog
- Shield
- Star

They come as solids and as cut-out frames - put whatever you like behind them!

#### Solid Shapes
```jsx
// GreatComponent.jsx
import { Shape } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    return (
        <div>
            <Shape kind="star" color="lemon">
        </div>
    );
};
```

#### Frame Shapes
```jsx
// GreatComponent.jsx
import { Frame } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    return (
        <div>
            <Frame kind="angles" color="violet">
        </div>
    );
};
```

### Lists
There are two basic List components
- Checked (Guarantee) Lists
- Numbered Lists

#### Checklists
```jsx
// GreatComponent.jsx
import { Checklist, ChecklistItem } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    return (
        <div>
            <Checklist>
            <ChecklistItem label='We do this' />
            <ChecklistItem label='We also do this' />
            <ChecklistItem label='We even do this' />
        </Checklist>
        </div>
    );
};
```

#### NumberedList
```jsx
// GreatComponent.jsx
import { NumberedList } from "@getufutureproof/fpsb";

const GreatComponent = () => {
    const coolThings = [
                'This thing',
                'That thing',
                'The other thing'
            ]

    return (
        <div>
            <NumberedList
                items={coolThings} />
        </div>
    );
};
```