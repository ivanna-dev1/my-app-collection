"use client";
import React from 'react';
import "./style.css";

export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className='mood-board-item' style={{ backgroundColor: color }}>
      <img className='mood-board-image' src={image} alt={description} />
      <p className='mood-board-text'>{description}</p>
    </div>
  );
};

export default function MoodBoard() {
  const profiles = [
    {
      id: 1,
      color: '#e74c3c',
      image: "/projects/mood-board/images/market.png",
      description: "Christmas Mood",
    },
    {
      id: 2,
      color: '#5A0E24',
      image: "/projects/mood-board/images/gifts.png",
      description: "Christmas Mood",
    },
    {
      id: 3,
      color: 'rgb(4 9 45)',
      image: "/projects/mood-board/images/champagne.jpg",
      description: "Christmas Mood",
    },
    {
      id: 4,
      color: 'rgb(5 21 19)',
      image: "/projects/mood-board/images/ribbons.jpg",
      description: "Christmas Mood",
    },
    {
      id: 5,
      color: 'rgb(156, 198, 219)',
      image: "/projects/mood-board/images/reindeer.png",
      description: "Christmas Mood",
    },
    {
      id: 6,
      color: 'rgb(9 92 75)',
      image: "/projects/mood-board/images/imagencup.png",
      description: "Christmas Mood",
    }
  ];

  return (
    <div className='mood-board'>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board-box">
        {profiles.map((profile) => (
          <MoodBoardItem
            key={profile.id}
            color={profile.color}
            image={profile.image}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
}
