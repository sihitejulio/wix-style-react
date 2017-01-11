import React, {Component} from 'react';
import TextField from '../../src/TextField';
import Input from '../../src/Input';
import Label from '../../src/Label';
import jsxToString from 'jsx-to-string';

export default class Form extends Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate(props) {
        props.onChange(jsxToString(this.getComponent()));
    }

    getComponent() {
        return (
            <TextField>
                {this.props.withLabel ? <Label {...this.props.label}>Input Label</Label> : null}
                <Input {...this.props.input}/>
            </TextField>
        );
    }

    render() {
        return this.getComponent();
    }
}
