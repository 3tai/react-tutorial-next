'use client';
// import
import { useState } from 'react';

// LikeButton component
export default function LikeButton() {
    // state
    const [likes, setLikes] = useState(0);
    // handle like button click
    function handleClick() {
        setLikes(likes + 1);
      }
    // component
    return(
        <button onClick={handleClick}>Like ({likes})</button>
    )
    
}

