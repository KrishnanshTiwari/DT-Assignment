import React from 'react';
import './body.css';
import Collapsible from 'react-collapsible';
import Box1 from '../box1/Box1';
import Box2 from '../box2/Box2';
import Box3 from '../box3/Box3';
import Box4 from '../box4/Box4';

function GridItem({ title, description, children }) {
  return (
    <div className="grid">
      <div className="grid-black">
        <h3>{title}</h3>
        <div className="info">
          <span>i</span>
        </div>
      </div>
      <div className='para'><span>Description:</span>{description}</div>
      <div className="overflow">{children}</div>
    </div>
  );
}

function Body() {
  return (
    <div className="main">
      <GridItem
        title="Technical Project Management"
        description=" Story of Alignment Scope of Agility Specific Accountable Staggering Approach"
      >
        <Box1 />
      </GridItem>

      <GridItem
        title="Threadbuild"
        description=" Watch the video and thread build, and jot out key threads while watching that video."
      >
        <div className="overflow">
          <Collapsible trigger="Thread A +" triggerWhenOpen='Thread A -' open='true'>
            <Box2 />
          </Collapsible>
        </div>
      </GridItem>

      <GridItem
        title="Structure your Pointers"
        description=" Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world."
      >
        <div className="overflow">
          <Box3 />
        </div>
      </GridItem>

      <GridItem
        title="4SA Method"
        description=" To explore more read more"
      >
        <div className="overflow">
          <Box4 />
        </div>
      </GridItem>
    </div>
  );
}

export default Body;
