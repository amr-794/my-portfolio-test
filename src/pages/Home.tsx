import React from 'react'
export default function Home(){
  return (
    <section id="home" className="section hero">
      <div className="hero-left">
        <h1 className="h1">Hi, I’m Your Name — I build beautiful web apps.</h1>
        <p className="lead">I am a Frontend Engineer specializing in React, TypeScript, and polished UI/UX. I design and build products that people love to use.</p>
        <a className="cta" href="#projects">See my work</a>
      </div>
      <div style={{width:280}}>
        <div style={{borderRadius:12,overflow:'hidden',background:'#081026',padding:14}}>
          <img alt="profile" src="/src/assets/profile-placeholder.png" style={{width:'100%',display:'block',borderRadius:8}}/>
          <div style={{paddingTop:10,color:'var(--muted)',fontSize:13}}>Full-stack & UI-focused developer</div>
        </div>
      </div>
    </section>
  )
}
