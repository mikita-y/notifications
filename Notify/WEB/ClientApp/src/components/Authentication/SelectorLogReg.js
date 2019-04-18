import React from 'react';

const SelectorLogReg = ({ selectLogReg }) => {
    return (
        <div>
            <button
                onClick={() => selectLogReg(0)}>
                Login
                </button>
            <button
                onClick={() => selectLogReg(1)}>
                Registry
                </button>
        </div>
    )
}

export default SelectorLogReg;