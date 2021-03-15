import React from 'react';

const Card = ({url}) => {
    return (
        <div className="m-auto bg-gray-400 h-80 w-80 md:h-72 md:w-full">
            <img src={url} alt=""
                className=" w-full h-full object-cover" />
        </div>
    )
}

export default Card;
