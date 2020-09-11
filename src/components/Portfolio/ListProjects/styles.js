import styled from "styled-components"

export const Container = styled.div`
 padding: 10% 10px;
 margin: 25px auto auto;
 background-color: rgba(0, 0, 0, 0.1);

 h1 {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  color: var(--tertiary);
 }
`

export const Wrapper = styled.div`
 margin: 0 auto;
 padding: 17px 20px;
 width: 70%;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
`

export const Project = styled.div`
 border: solid 1px var(--primary);
 border-radius: 4px;
 padding: 10px;
 min-width: 200px;
 max-width: 280px;
 margin: 10px;
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

 a {
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  text-decoration: none;
  :hover {
   background-color: var(--quinary);
   color: var(--secondary);
  }
 }
`
