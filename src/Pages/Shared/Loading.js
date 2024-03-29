import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center ">
            <div className="w-16 h-16 border-b-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};

export default Loading;