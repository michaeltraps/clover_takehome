import React, { FC, useState } from 'react'

import './card.css'

interface Props {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
  getLocation: (name: string) => void;
  setSelected: (character: object) => void;
  setModal: (bool: boolean) => void;
}

export interface Selected {
  name: string;
  status: string;
  species: string;
  img: string;
  location: string;
}

const Card: FC<Props> = ({ name, status, species, img, location, getLocation, setSelected, setModal }) => {
  return (
    <div className='rick__card'>
      <div className='rick__card-img'>
        <img src={img} alt='Rick and Morty character'/>
      </div>
      <div className='rick__card-stats'>
        <h4>Name: {name} </h4>
        <h4>Status: {status} </h4>
        <h4>Species: {species} </h4>
        <h4>Location: {location}</h4>
      </div>
      <div className='rick__card-more'>
        <button onClick={() => {
          getLocation(location)
          setSelected({name: name, status: status, species: species, img: img, location:location})
          setModal(true)
        }}>More Info</button>
      </div>
    </div>
  )
}

export default Card
