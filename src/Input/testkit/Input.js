import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import Input from '../Input';
import styles from './Input.scss';
import $ from 'jquery';

const inputDriverFactory = ({component, wrapper}) => {
  const $component = $(component);
  const input = $component.find('input')[0];
  const clearButton = $(component).find(`.${styles.clearButton}`);

  return {
    trigger: (trigger, event) => ReactTestUtils.Simulate[trigger](input, event),
    focus: () => input.focus(),
    clickClear: () => ReactTestUtils.Simulate.click(clearButton[0]),
    enterText: keys => {
      input.value = keys;
      ReactTestUtils.Simulate.change(input);
    },
    getValue: () => input.value,
    getDefaultValue: () => input.defaultValue,
    getTabIndex: () => input.tabIndex,
    getReadOnly: () => input.readOnly,
    hasExclamation: () => $component.find(`.${styles.exclamation}`).length === 1,
    hasError: () => component.classList.contains(styles.hasError),
    getUnit: () => $component.find(`.${styles.unit}`)[0].textContent,
    hasMagnifyingGlass: () => $component.find(`.${styles.magnifyingGlass}`).length === 1,
    hasMenuArrow: () => $component.find(`.${styles.menuArrow}`).length === 1,
    hasClearButton: () => clearButton.length > 0,
    isRTL: () => component.className.indexOf(styles.rtl) >= 0,
    isFocusedStyle: () => component.classList.contains(styles.hasFocus),
    isHoveredStyle: () => component.classList.contains(styles.hasHover),
    isOfStyle: style => component.className.indexOf(styles[style]) >= 0,
    isOfSize: size => component.classList.contains(styles[`size-${size}`]),
    isFocus: () => document.activeElement === input,
    exists: () => $component.find('input').length > 0,
    hasIconLeft: () => !$component.find(`.${styles.prefix}`).is(':empty'),
    setProps: props => {
      ReactDOM.render(<div ref={r => component = r}><Input {...props}/></div>, wrapper);
    }
  };
};


const componentFactory = (props = {}) => {
  let component;
  const wrapperDiv = document.createElement('div');
  ReactDOM.render(<div ref={r => component = r}><Input {...props}/></div>, wrapperDiv);
  return {component: component.childNodes[0], wrapper: wrapperDiv};
};

const inputTestkitFactory = ({wrapper, dataHook}) => {
  const component = $(wrapper).find(`[data-hook='${dataHook}']`);
  return inputDriverFactory({component, wrapper});
};

export {inputTestkitFactory, componentFactory, inputDriverFactory};
