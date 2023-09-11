import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
   width: 100%;
   margin-bottom: 70px;
   h1 {
      margin: 0;
      font-size: 50px;
      padding: 30px 0;

      text-align: center;
      font-weight: 900;
      background: #161b21;
      text-shadow: 0 0.1em 20px rgba(0, 0, 0, 0.5), 0.05em -0.03em 0 rgba(0, 0, 0, 0.5),
         0.05em 0.005em 0 rgba(0, 0, 0, 0.5), 0em 0.08em 0 rgba(0, 0, 0, 0.5), 0.05em 0.08em 0 rgba(0, 0, 0, 0.5),
         0px -0.03em 0 rgba(0, 0, 0, 0.5), -0.03em -0.03em 0 rgba(0, 0, 0, 0.5), -0.03em 0.08em 0 rgba(0, 0, 0, 0.5),
         -0.03em 0 0 rgba(0, 0, 0, 0.5);
      span {
         transform: scale(0.9);
         display: inline-block;
      }
      span:first-child {
         animation: bop 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
      }
      span:last-child {
         animation: bopB 1s 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards infinite alternate;
      }
      a {
         color: #f3a950;
      }
   }
   @keyframes bop {
      0% {
         transform: scale(0.9);
      }
      50%,
      100% {
         transform: scale(1);
      }
   }

   @keyframes bopB {
      0% {
         transform: scale(0.9);
      }
      80%,
      100% {
         transform: scale(1) rotateZ(-3deg);
      }
   }
   ul {
      display: flex;
      li {
         width: 250px;
         text-align: center;
         border-radius: 0 0 60px 60px;
         margin: 0 -10px;
         background: #161b21;
         border: 3px solid #f3a950;
         a {
            display: block;
            color: #f3a950;
            font-weight: 700;
            cursor: pointer;
            padding: 20px;
         }
         &:first-child {
            margin: 0;
         }
      }
   }
`;
export const BookContainer = styled.div`
   .book-list {
      width: 1000px;
      margin: auto;
      h3 {
         color: #161b21;
         font-weight: 700;
         font-size: 25px;
         padding: 20px 0;
         text-align: center;
      }
      .book-table {
         width: 100%;

         .title {
            width: 30%;
         }
         .genre {
            width: 10%;
         }
         .author {
            width: 30%;
         }
         .bookcode {
            width: 10%;
         }
         tr {
            th {
               height: 50px;
               line-height: 50px;
               background: #161b21;
               font-weight: 700;
               color: #f3a950;
            }
            td {
               height: 50px;
               line-height: 50px;
               text-align: center;
               border-bottom: 1px solid #161b21;
               font-size: 16px;
               button {
                  border: none;
                  background: #161b21;
                  color: #f3a950;
                  padding: 7px 13px;
                  cursor: pointer;
                  &:first-child {
                     border-radius: 15px 0 0 15px;
                     border-right: 1px solid #f3a950;
                  }
                  &:last-child {
                     border-left: 1px solid #f3a950;
                     border-radius: 0 15px 15px 0;
                  }
               }
            }
         }
      }
   }
`;
export const BookForm = styled.div`
   .book-form {
      width: 800px;
      margin: auto;
      label {
         display: block;
      }
      input {
         width: 100%;
         outline: none;
         border: 1px solid #161b21;
         background: #161b21;
         padding: 20px 15px;
         height: 30px;
         margin: 5px 0 10px;
         box-sizing: border-box;
         color: #f3a950;
      }
   }
   h3 {
      color: #161b21;
      font-weight: 700;
      font-size: 25px;
      padding: 10px 0;
      text-align: center;
   }
   .btn-wrap {
      text-align: center;
      width: 800px;
      margin: auto;
      button {
         width: 50%;
         margin-top: 30px;
         cursor: pointer;
         border: none;
         background: #161b21;
         color: #f3a950;
         padding: 10px 30px;
         &:first-child {
            border-radius: 20px 0 0 20px;
            border-right: 1px solid #f3a950;
         }
         &:last-child {
            border-radius: 0 20px 20px 0;
            border-left: 1px solid #f3a950;
         }
      }
   }
`;
export const FooterContainer = styled.footer`
   height: 80px;
   background: #161b21;
   color: #f3a950;
   width: 100%;
   margin-top: 70px;
`;
