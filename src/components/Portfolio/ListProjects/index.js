import React from "react"
import { Container, Project, Wrapper } from "./styles"
import { projects } from "../../../data/projects"

function ListProjects() {
 return (
  <Container>
   <h1>Alguns projetos pessoais</h1>
   <Wrapper>
    {projects.map(project => (
     <Project key={project.id}>
      <header>{project.name}</header>
      <span>{project.description}</span>
      <a href={project.url}>Saiba mais</a>
     </Project>
    ))}
   </Wrapper>
  </Container>
 )
}

export default ListProjects
