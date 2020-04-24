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
   overflow: auto;
   display: flex;
   flex-direction: column;
   text-align: center;

   header {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
   }

   section {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;

    h1 {
     text-align: center;
     margin-bottom: 10px;
    }
    img {
     max-width: 500px;
     max-height: 500px;
     border: 1px solid #000;
     margin-bottom: 10px;
    }

    section {
     display: flex;
     width: 100%;
     justify-content: space-around;
     flex-wrap: wrap;
     margin-bottom: 10px;

     img {
      margin-bottom: 10px;
      max-width: 300px;
      max-height: 300px;
     }
    }
   }
   footer {
    margin-top: 50px;
    align-self: center;
    text-align: center;
    max-width: 70%;
    p {
     margin-bottom: 30px;
    }
    img {
     width: 64px;
     height: 64px;
     border-radius: 50%;
    }
    nav {
     max-width: 50%;
     margin-bottom: 20px;
     display: flex;
     justify-content: space-around;
     margin-left: auto;
     margin-right: auto;
     img {
      width: 30px;
      height: 30px;
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
