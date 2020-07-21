import styled from "styled-components"

export const Container = styled.div`
 width: 100%;
 display: flex;
 padding: 0% 10% 10% 10%;
 justify-content: space-around;
 flex-wrap: wrap;
`

export const Project = styled.div`
 display: flex;
 flex-direction: column;
 border: solid 1px var(--primary);
 border-radius: 4px;
 margin-bottom: 50px;
 padding: 10px;
 min-width: 100px;
 max-width: 250px;
 min-height: 150px;
 flex-grow: 2;
 header {
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
  font-weight: 800;
  color: var(--quinary);
 }

 span {
  margin-top: 10px;
  color: var(--tertiary);
  font-size: 13px;
  text-align: center;
  opacity: 0.5;
 }

 button {
  margin-top: 15px;
  width: 100px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  border: solid 1px var(--quinary);
  background-color: transparent;
  color: var(--tertiary);
  font-weight: 800;
  opacity: 0.9;
  :hover {
   background-color: var(--quinary);
   color: var(--secondary);
  }
 }
`
