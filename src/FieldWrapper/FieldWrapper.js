// @flow
import React, { type Element } from 'react';

import _FieldWrapper, { Label, DescriptionText, HintText, OptionalText, ValidationText } from './styled';
import { Flex } from '../primitives';

type Props = {
  a11yId?: string,
  children: Function | Element<any>,
  className?: string,
  description?: string | Element<any>,
  hint?: string | Element<any>,
  isFullWidth?: boolean,
  isOptional?: boolean,
  isRequired?: boolean,
  label?: string | Element<any>,
  state?: string,
  validationText?: string
};

const FieldWrapper = ({
  a11yId,
  children,
  description,
  hint,
  isFullWidth,
  isOptional,
  isRequired,
  label,
  state,
  validationText,
  ...props
}: Props) => {
  const elementProps = { isFullWidth, isRequired, a11yId, state, marginTop: 'xxsmall' };
  return (
    <_FieldWrapper display="inline-block" isFullWidth={isFullWidth} {...props}>
      {label && (
        <Flex alignItems="center">
          {typeof label === 'string' ? <Label htmlFor={a11yId}>{label}</Label> : label}
          {isOptional && <OptionalText>OPTIONAL</OptionalText>}
        </Flex>
      )}

      {typeof description === 'string' ? <DescriptionText>{description}</DescriptionText> : <div>{description}</div>}

      {typeof children === 'function' ? children({ elementProps }) : React.cloneElement(children, elementProps)}

      {typeof hint === 'string' ? <HintText>{hint}</HintText> : <div>{hint}</div>}

      {validationText && <ValidationText color={state}>{validationText}</ValidationText>}
    </_FieldWrapper>
  );
};

FieldWrapper.defaultProps = {
  a11yId: undefined,
  className: undefined,
  description: undefined,
  hint: undefined,
  isFullWidth: false,
  isOptional: undefined,
  isRequired: undefined,
  label: undefined,
  name: undefined,
  state: undefined,
  validationText: undefined
};

export default FieldWrapper;
