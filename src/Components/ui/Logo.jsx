import React from 'react';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <img src="logo.png" alt="" className='h-8 w-8'/>
            <h2 className='text-3xl font-bold text-primary'>Pathshala<span className='text-secondary'>BD</span></h2>
        </div>
    );
};

export default Logo;