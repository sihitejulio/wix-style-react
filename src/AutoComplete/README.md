# AutoComplete component

> Input with auto suggestions

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| options | array of option | [] | - | Array of objects. Objects must have an Id and a value. If value is '-', a divider will be rendered instead. |
| onSelect | func | - | - | Callback function called whenever the user selects a different option in the list |
| onManuallyInput | func | noop | - | Callback when the user pressed the Enter key or Tab key after he wrote in the Input field - meaning the user selected something not in the list |
| value | string | '' | - | The value of the input |
| predicate | func | () => true | - | Callback predicate for the filtering options function |
| placeholder | string | '' | - | Shown when no option is selected |
| id | string or number | '' | - | An identifier of the component |
| ***All of the InputWithOptions Props are also available for this component*** | | | | |


## Option

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| id | string or number | - | + | The id of the option, should be unique |
| value | string or node | - | + | Can be a text or a react elements, if text is '-', a divider will render at that position. |
