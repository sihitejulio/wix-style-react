import React, {Children} from 'react';
import {children, optional, once} from '../Composite/CompositeValidation';
import Label from '../Label';
import Input from '../Input';

export default function TextField({children}) {
  const [label, input] = Children.toArray(children);
  return (
    <div>
      {label}
      {input}
    </div>
  );
}

TextField.displayName = 'TextField';

TextField.propTypes = {
  children: children(optional(Label), once(Input))
};
