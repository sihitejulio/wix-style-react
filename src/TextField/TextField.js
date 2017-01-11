import React, {Children} from 'react';
import {children, optional, once} from '../Composite/CompositeValidation';
import Label from '../Label';
import Input from '../Input';
import styles from './TextField.scss';
import {first, last} from 'lodash/fp';

export default function TextField(props) {
    const children = Children.toArray(props.children);
    const {hook} = props;

    return (
        <div className={styles.textField} {...hook}>
            {children.length === 2 ? <div className={styles.labelWrapper}>{first(children)}</div> : null}
            {last(children)}
        </div>
    );
}

TextField.displayName = 'TextField';

TextField.propTypes = {
    hook: React.PropTypes.string,
    children: children(optional(Label), once(Input))
};
