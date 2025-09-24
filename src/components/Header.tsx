import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <div className="brand">
        <div className="logo">YN</div>
        <div>
          <div style={{fontWeight:700}}>Your Name</div>
          <div style={{fontSize:12,color:'var(--muted)'}}>Frontend Engineer • Designer</div>
        </div>
      </div>
      <nav className="nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
