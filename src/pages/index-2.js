import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className ="hero">
      <div className ="heroGroup">
        <h1>BABY DONT YOU MOVE TOO FAST </h1>
        <p>Whats poppin young blood?</p>
        <p>Aminé did something with ONEPOINTFIVE🔥.</p>
        <Link to="/video"> Watch video</Link>
        <Link to="/page-2/">Listen</Link>
      </div>
    </div>
    
    {/* Adding Card.js component to the Index Page */}
    <div className="cards">
      <h2>This is a test</h2>
      <Card 
      title="Budgeters"
      text="12 Sections"
      />
    </div>
  </div>
 
)

export default IndexPage