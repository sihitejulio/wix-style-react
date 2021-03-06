import React from 'react';
import typography, {convertFromUxLangToCss, convertFromCssToUxLang} from '../Typography';

export default function Label(props) {

  const {id, appearance, children, for: forAttr} = props;
  const className = typography[convertFromUxLangToCss(appearance)];

  return (
    <label className={className} id={id} htmlFor={forAttr}>
      {children}
    </label>
  );
}

Label.displayName = 'Label';

const acceptableAppearances = Object.keys(typography).map(key => convertFromCssToUxLang(key)).filter(type => type.startsWith('T'));

Label.propTypes = {
  id: React.PropTypes.string,
  for: React.PropTypes.string,
  appearance: React.PropTypes.oneOf(acceptableAppearances).isRequired,
  children: React.PropTypes.any
};
