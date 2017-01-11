import _ from 'lodash/fp';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {textFieldTestkitFactory, componentFactory, textFieldDriverFactory} from './testkit/TextField';

describe('TextField', () => {

    const createDriver = _.compose(textFieldDriverFactory, componentFactory);

    it('should contain native textField', () => {
        const driver = createDriver({appearance: 'T1'});
        expect(driver.getTagName()).toBe('textField');
    });

    it('should render children', () => {
        const children = 'inner text';

        const driver = createDriver({appearance: 'T1', children});

        expect(driver.getTextFieldTextContent()).toBe(children);
    });

    it('should support `for` attribute', () => {
        const forAttr = 'some_id';
        const driver = createDriver({appearance: 'T1', for: forAttr});

        expect(driver.getAttr('for')).toBe(forAttr);
    });

    it('should support `id` attribute', () => {
        const id = 'some_id';
        const driver = createDriver({appearance: 'T1', id});

        expect(driver.getAttr('id')).toBe(id);
    });

    it('should apply class by appearance', () => {
        const appearance = 'T1.1';
        const driver = createDriver({appearance});

        expect(driver.getClassList()).toContain('t1_1');
    });
});

describe('testkit', () => {
    it('should create new driver', () => {
        const div = document.createElement('div');
        const id = 'myId';

        const wrapper = div.appendChild(ReactTestUtils.renderIntoDocument(<div><TextField id={id} appearance="T1">textField</TextField>
        </div>));

        const driver = textFieldTestkitFactory({wrapper, id});
        expect(driver.getAttr('id')).toBe(id);
    });
});
