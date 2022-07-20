import React from 'react'
import DescriptionCard from './DescriptionCard'
import AbilitiesCard from "./AbilitiesCard";

export default function index() {
  return (
    <div className='Description'>
      <DescriptionCard />
      <AbilitiesCard />
    </div>
  );
}
