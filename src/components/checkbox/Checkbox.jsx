import React from 'react';
import Input from '@/components/Input/Input';

const Checkbox = ({
    disabled=false,
    checked=false, 
    label, 
    onChange,
    ...restProps
}) => {
  return (
    <label style={{fontSize: '1.4 rem'}}>
        <Input 
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            {...restProps}
        /> {""}
        {label}

    </label>
  )
}

export default Checkbox