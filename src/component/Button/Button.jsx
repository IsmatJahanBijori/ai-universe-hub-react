import React from 'react';

const Button = (props) => {
    // console.log(props)
    const {children}=props
    return (
        <div className='flex justify-center my-4'>
        <button className="btn btn-primary center">{children}</button>
        </div>
    );
};

export default Button;