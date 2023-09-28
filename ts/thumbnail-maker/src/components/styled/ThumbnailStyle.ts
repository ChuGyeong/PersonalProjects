import Styled, { styled } from 'styled-components';

export const ThumbnailMakerContainer = styled.div`
   width: 100%;
   margin: 50px 0;
   .inner {
      padding: 35px 70px;
      box-sizing: border-box;
      border: 1px solid #000;
      width: 1000px;
      margin: auto;
   }
`;

export const HeaderContainer = styled.header`
   margin-bottom: 5px;
   h1 {
      font-size: 60px;
      text-transform: uppercase;
      font-weight: 900;
   }
   .author a {
      display: flex;
      align-items: center;
      img {
         width: 50px;
         height: 50px;
         border-radius: 50%;
         margin-right: 15px;
      }
      span {
         font-weight: 900;
      }
   }
`;

export const MainContainer = styled.main`
   .preview {
      border: 1px solid #ccc;
      position: relative;
      ul {
         height: 400px;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         li {
            font-size: 20px;
            &:nth-child(1) {
               font-size: 55px;
               font-weight: 700;
            }
            &:nth-child(2) {
            }
            &:nth-child(3) {
               position: absolute;
               bottom: 20px;
            }
         }
      }
   }
   .contents {
      margin-top: 35px;
      .options {
         margin-top: 25px;
         border-bottom: 1px solid #efefef;
         padding-bottom: 25px;
         display: flex;
         align-items: center;
         span {
            width: 20%;
            font-size: 18px;
            font-weight: 700;
         }
         .btns {
            display: flex;
            justify-content: space-between;
            width: 79%;
            button {
               width: 32%;
               height: 40px;
               border-radius: 20px;
               border: none;
               background: #efefef;
               font-size: 16px;
               cursor: pointer;
            }
         }
      }
      .text-inputs {
         display: flex;
         justify-content: space-between;
         input {
            width: 32%;
            height: 40px;
            border-radius: 20px;
            border: 1px solid #ccc;
            text-indent: 10px;
            font-size: 16px;
         }
      }
   }
   .management {
      display: flex;
      justify-content: center;
      margin-top: 50px;
      button {
         width: 40%;
         height: 40px;
         border-radius: 20px;
         border: none;
         background: #efefef;
         font-size: 16px;
         font-weight: 700;
         cursor: pointer;
         &:nth-child(1) {
            margin-right: 10px;
         }
      }
   }
`;
