import styled from "styled-components"
import img from "../../assets/background.jpeg"

export const Styles = styled.div`
 background-image: url(${img});
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 opacity: 0.9;
 position: relative;
 width: 100vw;
 height: 100vh;

 div {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;

  main {
   background-color: #eff1f3;
   height: 100%;
   width: 70%;

   header {
    width: 100%;
    height: 35%;
    /* background-color: red; */
   }

   section {
    width: 100%;
    height: 50%;
    /* background-color: blue; */
   }
   footer {
    height: 15%;
    width: 100%;
    /* background-color: green; */
   }
  }

  aside {
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100%;
   width: 30%;
   section {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
     width: 145px;
     height: 150px;
     border-radius: 50%;
    }
    span {
     font-size: 1.5em;
     font-weight: 500px;
     color: #fff;
     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    button {
     border: 0;
     cursor: pointer;
     margin-top: 10px;
     padding: 10px;
     color: #272727;
     font-size: 14px;
     background-color: #fed766;
     border-radius: 5px;
    }
   }
  }
 }
`
