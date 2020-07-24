import styled from "styled-components"

export const Container = styled.div`
 width: 100%;
 padding: 0 25px 10% 25px;
 display: flex;
 align-items: center;
 justify-content: center;

 form {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: solid 1px var(--link);
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  h1 {
   font-size: 26px;
   font-weight: 500;
   text-align: center;
   margin: 0 0 10px;
   color: var(--tertiary);
  }
  span,
  label {
   color: var(--white);
   font-size: 14px;
   line-height: 16px;
   font-weight: 600;
   margin-top: 15px;
   opacity: 0.7;
  }
  input {
   height: 40px;
   padding: 10px;
   border-radius: 3px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   background-color: rgba(0, 0, 0, 0.1);
   color: #f6f6f6;
   margin-top: 8px;
   transition: border 0.15s ease;
   font-size: 16px;
   &:focus {
    border-color: #7289da;
   }
  }

  textarea {
   padding: 10px;
   border-radius: 3px;
   border: 1px solid rgba(0, 0, 0, 0.3);
   background-color: rgba(0, 0, 0, 0.1);
   color: #f6f6f6;
   margin-top: 8px;
   transition: border 0.15s ease;
   font-size: 16px;
   &:focus {
    border-color: #7289da;
   }
  }

  button {
   background-color: var(--link);
   color: var(--white);
   font-weight: 800;
   font-size: 16px;

   margin: 20px 0 0;
   padding: 10px;
  }
 }
`
