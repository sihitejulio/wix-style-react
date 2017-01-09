import React, {Component, PropTypes} from 'react';
import InputWithOptions from 'wix-style-react/InputWithOptions';

const style = {
  display: 'inline-block',
  padding: '0 5px 0',
  width: '200px',
  lineHeight: '22px',
  marginBottom: '350px'
};

const options = [
  {id: '0', value: 'First option'},
  {id: '1', value: 'Second option'},
  {id: '2', value: 'Third option', disabled: true},
  {id: '3', value: 'Fourth option'},
  {id: '4', value: 'Fifth option'},
  {id: '5', value: 'Very long option text jldlkasj ldk jsalkdjsal kdjaklsjdlkasj dklasj'}
];

class ControlledInputWithOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectedId: -1
    };
  }

  render() {
    const onChange = event => {
      this.setState({value: event.target.value});
    };
    const onSelect = optionId => {
      const value = options.find(option => option.id === optionId).value;
      this.setState({
        value: value,
        selectedId: optionId
      });

      alert(`Selected option id=${optionId}, value=${value}`);
    };

    const onManuallyInput = value => {
      this.setState({
        selectedId: -1
      });
      alert(`Manually selected ${value}`);
    };

    const predicate = element =>
      this.state.value ?
      element.value.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1 :
      true;

    return (
      <InputWithOptions options={options.filter(predicate)} selectedId={this.state.selectedId} value={this.state.value} onChange={onChange} onSelect={onSelect} onManuallyInput={onManuallyInput}/>
    );
  }
}

export default () =>
  <div className="ltr" style={style}>
    <ControlledInputWithOptions/>
  </div>;