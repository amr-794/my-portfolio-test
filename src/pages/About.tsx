import React from 'react'
export default function About(){
  return (
    <section id="about" className="section">
      <h2 style={{marginBottom:12}}>About me</h2>
      <p className="lead">I build accessible, performant, and maintainable web applications using modern tools and best practices. My stack: React, TypeScript, Vite, CSS-in-JS / modern CSS.</p>
      <div style={{display:'flex',gap:12,marginTop:14}}>
        <div style={{flex:1}} className="card">
          <strong>Experience</strong>
          <p className="project-desc">3+ years building production React apps, components libraries, and design systems.</p>
        </div>
        <div style={{flex:1}} className="card">
          <strong>Skills</strong>
          <p className="project-desc">React • TypeScript • Vite • Tailwind / CSS • Testing • Performance</p>
        </div>
      </div>
    </section>
  )
}
