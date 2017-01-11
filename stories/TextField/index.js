import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InteractiveCodeExample from '../utils/Components/InteractiveCodeExample';

import ExampleStandard from './ExampleStandard';

storiesOf('6. Common', module)
    .add('6.3 TextField', () => {
        return (
            <div>
                <h1>Usage examples</h1>

                <InteractiveCodeExample title="Standard">
                    <ExampleStandard />
                </InteractiveCodeExample>
            </div>
        );
    });
