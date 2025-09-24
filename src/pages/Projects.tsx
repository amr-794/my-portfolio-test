import React from 'react'
type Project = {id:number,title:string,desc:string,tech:string,link?:string}
const projects:Project[] = [
  {id:1,title:'Project One',desc:'A production-ready dashboard with real-time updates.',tech:'React, TypeScript, WebSocket', link:'#'},
  {id:2,title:'Project Two',desc:'Design system and component library used across multiple apps.',tech:'React, Storybook, TS', link:'#'},
  {id:3,title:'Project Three',desc:'High-performance static site and blog.',tech:'Vite, Markdown, SEO', link:'#'}
]

export default function Projects(){
  return (
    <section id="projects" className="section">
      <h2 style={{marginBottom:12}}>Selected Projects</h2>
      <div className="grid">
        {projects.map(p=>(
          <article className="card" key={p.id}>
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            <div style={{marginTop:10,fontSize:13,color:'var(--muted)'}}>{p.tech}</div>
            <div style={{marginTop:12}}>
              <a className="cta" href={p.link}>View</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
