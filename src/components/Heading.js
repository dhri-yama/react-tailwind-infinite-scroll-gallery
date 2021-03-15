import React, { useState } from 'react'

const Heading = ({searchQuery}) => {
    const [Text, setText] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault();
        searchQuery(Text)
    }
    return (
        <div style={{height: "60vh"}} className="m-8 relative">
            <img src="https://source.unsplash.com/random" alt=""
             className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
            <div className="flex h-full flex-col items-center justify-center relative">
                <h1 className="text-5xl lg:text-6xl text-white tracking-wider mb-6 font-serif ">
                    <span className="text-yellow-400">Splash</span>Splash </h1>
                <p className="text-md text-center font-thin text-white tracking-wider mb-6">The internet’s source of freely-usable images.<br/>
                        Powered by creators everywhere</p>
                
                <form onSubmit={onSubmit}>
                    <input 
                    onChange={e => setText(e.target.value)}
                    placeholder="Search" type="text"
                    className="bg-transparent text-white border-b-2 focus:outline-none w-52 lg:w-96 h-10 px-4"/>
                    <button className="bg-yellow-400 h-10 w-16 md:w-20 rounded text-white border-gray-50 mx-2" type="submit">Search</button>
                </form>
            </div>
        </div>
    )
}

export default Heading;
