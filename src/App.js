import React from 'react';
import { useState, useEffect } from "react";
import Card from './components/Card';
import Heading from './components/Heading';
import Loading from './components/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [Images, setImages] = useState([])
  const [Query, setQuery] = useState('')

  const getimages = async function(){
    const apiRoot="https://api.unsplash.com";
    const key="9eerWLt2jCjXYNKCJTxL0pnoUMtWZf5I33FlNPexADA" ;
    
    await fetch(`${apiRoot}/photos/random?client_id=${key}&count=10&query=${Query}`)
      .then(res => res.json())
      .then( data => setImages([...Images, ...data]))
  }

  useEffect(()=>{
    getimages()
  },[])

  useEffect(()=>{
    {/*const SearchImages = async function(){
      const apiRoot="https://api.unsplash.com";
      const key="9eerWLt2jCjXYNKCJTxL0pnoUMtWZf5I33FlNPexADA" ;
      console.log(Query)
      await fetch(`${apiRoot}/photos/random?client_id=${key}&count=10&query=${Query}`)
        .then(res => res.json())
        .then( data => setImages(data))
    }
    SearchImages()*/}
    setImages([])
  },[Query])

  return (
    <div className="App">
      <Heading searchQuery={(q)=>setQuery(q)}/>
      <InfiniteScroll
        dataLength={Images.length}
        next={getimages}
        hasMore={true}
        loader={<Loading/>}
        style={{
          overflow: 'hidden',
        }}
      >
        <div className="grid grid-cols-1 p-16 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:p-20">
          {Images.map(image => {
              return <Card key={image.id} url={image.urls.small} />
          })}
        </div>
      </InfiniteScroll>

    </div>
  );
}

export default App;
