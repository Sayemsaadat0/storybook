import React from 'react';

type TypeProps = {
    variant : 'green' | 'yellow' | 'red',
}

const Light = ({variant = 'green'} : TypeProps) => {
    return (
        <div style={{backgroundColor : variant,}} >
            Here we are changing 
        </div>
    );
};

export default Light;