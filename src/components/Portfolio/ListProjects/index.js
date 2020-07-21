import React from "react"
import { Container, Project } from "./styles"
import { projects } from "../../../data/projects"

function ListProjects() {
 return (
  <Container>
   {projects.map(project => (
    <Project key={project.id}>
     <header>{project.name}</header>
     <span>{project.description}</span>
     <a href={project.url}>Saiba mais</a>
    </Project>
   ))}
  </Container>
 )
}

export default ListProjects
