import React, {Component} from 'react';
import TextFieldExample from './TextFieldTemplate';

class ExampleStandard extends Component {
    constructor() {
        super();
        this.state = {
            withLabel: true,
            label: {
                appearance: 'T1.1',
            },
            input: {
                size: 'normal'
            }
        };
    }

    updateState(componentName, obj) {
        this.setState(prevState => {
            prevState[componentName] = {...this.state[componentName], ...obj};
            Object.keys(prevState[componentName])
                .forEach((k) => !prevState[componentName][k] && delete prevState[componentName][k]);
            return prevState;
        });
    }

    render() {
        return (
            <from>
                <h2>TextField options</h2>
                <fieldset>
                    <ul>
                        <li><input type="checkbox"
                                   id="with-label"
                                   onChange={() => this.setState({withLabel: !this.state.withLabel})}
                                   checked={this.state.withLabel}/> <label htmlFor="with-label">with Label</label></li>
                        <li>
                            <label htmlFor="input-size">Size: </label>
                            <select id="input-size"
                                    onChange={(e) => this.updateState('input', {size: e.target.value})}>
                                <option value="normal">Normal</option>
                                <option value="large">Large</option>
                                <option value="small">Small</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="input-type">Type: </label>
                            <select id="input-type"
                                    onChange={(e) => this.updateState('input', {type: e.target.value})}>
                                <option value="">Normal</option>
                                <option value="number">Number</option>
                            </select>
                        </li>
                        <li>
                            <label>
                                None
                                <input type="radio" value="" name="withPrefix"
                                       onChange={(e) => this.updateState('input', {
                                           prefix: e.target.value,
                                           suffix: ''
                                       })}/>
                            </label>
                            <label>
                                Prefix
                                <input type="radio" value="$" name="withPrefix"
                                       onChange={(e) => this.updateState('input', {
                                           prefix: e.target.value,
                                           suffix: ''
                                       })}/>
                            </label>
                            <label>
                                Suffix
                                <input type="radio" value="Kg." name="withPrefix"
                                       onChange={(e) => this.updateState('input', {
                                           suffix: e.target.value,
                                           prefix: ''
                                       })}/>
                            </label>
                        </li>
                    </ul>

                </fieldset>
                <TextFieldExample {...this.state} onChange={this.props.onChange}/>
            </from>
        );
    }
}

export default (props) =>
    <ExampleStandard {...props}/>
;