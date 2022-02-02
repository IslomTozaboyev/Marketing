import React from 'react';

const MySelect = ({ children }) => {
    return <select className='form-select'>
        <option value="123">{children}</option>
    </select>;
};

export default MySelect;
