import React, { Component } from 'react';
import {storiesOf} from '@kadira/storybook';

import Markdown from '../utils/Components/Markdown';
import CodeExample from '../utils/Components/CodeExample';
import Readme from '../../src/Tooltip/README.md';

import ExamplePlacement from './ExamplePlacement';
import ExamplePlacementRaw from '!raw!./ExamplePlacement';
import ExampleBounce from './ExampleBounce';
import ExampleBounceRaw from '!raw!./ExampleBounce';
import ExampleTheme from './ExampleTheme';
import ExampleThemeRaw from '!raw!./ExampleTheme';
import ExampleCustomContent from './ExampleCustomContent';
import ExampleCustomContentRaw from '!raw!./ExampleCustomContent';

storiesOf('5. Others', module)
  .add('5.5 Tooltip', () => (
    <div>
      <Markdown source={Readme}/>
      <CodeExample title="Tooltip Placement" code={ExamplePlacementRaw}>
        <ExamplePlacement/>
      </CodeExample>
      <CodeExample title="Tooltip Bounce" code={ExampleBounceRaw}>
        <ExampleBounce/>
      </CodeExample>
      <CodeExample title="Tooltip Theme" code={ExampleThemeRaw}>
        <ExampleTheme/>
      </CodeExample>
      <CodeExample title="Tooltip Custom Content" code={ExampleCustomContentRaw}>
        <ExampleCustomContent/>
      </CodeExample>
    </div>
  ));