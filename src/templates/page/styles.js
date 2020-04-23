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

 h1 {
  color: #31343b;
 }

 div {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;

  main {
   background-color: #eff1f3;
   height: 100%;
   width: 70%;
   padding-top: 10px;
   overflow: auto;
   display: flex;
   flex-direction: column;

   header {
    max-width: 90%;
    margin-left: 20px;
   }

   section {
    height: 50%;
   }
   footer {
    align-self: center;
    text-align: center;
    max-width: 100%;
    p {
     margin-left: 10%;
     margin-right: 10%;
     margin-bottom: 30px;
    }
    img {
     width: 64px;
     height: 64px;
     border-radius: 50%;
    }
    nav {
     background-color: #31343b;
     width: 100%;
     margin-bottom: 0;
     padding-top: 30px;
     padding-bottom: 30px;
     display: flex;
     align-items: center;
     justify-content: center;

     a {
      font-size: 30px;
      background-color: #0073b1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 20%;
     }
    }
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
