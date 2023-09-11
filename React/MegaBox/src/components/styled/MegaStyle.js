import Styled, { styled } from 'styled-components';

//Mega
export const MegaContainer = styled.div`
   width: 1200px;
   margin: auto;
   h1 {
      text-align: center;
      margin: 50px;
   }
`;
//MegaTabs
export const MegaTabBox = styled.ul`
   width: 100%;
   display: flex;
   li {
      border: 1px solid #999;
      color: #999;
      width: 200px;
      margin-left: -1px;
      text-align: center;
      padding: 10px 0;
      cursor: pointer;
   }
`;
//MegaSearch
export const MegaSearchForm = styled.form`
   text-align: right;
   margin: 20px;
   margin-right: 0;
   input {
      padding: 10px;
      border: 1px solid #999;
   }
`;
//MegaList
export const MegaListBox = styled.div`
   span {
      margin-right: 20px;
      cursor: pointer;
      &:nth-child(3) {
         cursor: default;
      }
   }
   ul {
      padding: 20px;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
   }
`;
//MegaItem
export const MegaListItem = styled.li`
   width: 250px;

   img {
      width: 100%;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
         transform: scale(1.05);
      }
   }
   h3 {
      position: relative;
      text-indent: 30px;
      img {
         width: 20px;
         position: absolute;
         left: 0;
         top: 50%;
         transform: translateY(-50%);
      }
      font-size: 20px;
      margin: 5px 0;
      font-weight: 700;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
   }
   div {
      width: 100%;
      position: relative;
      p {
         &:last-child {
            position: absolute;
            bottom: 0;
            right: 0;
         }
      }
   }
   .btn-wrap {
      button {
         display: inline-block;
         vertical-align: middle;
         height: 40px;
         margin-right: 5px;
         margin-top: 10px;
         border: none;
         color: #fff;
         padding: 0 15px;
         background: #503396;
         border-radius: 15px;
         i {
            margin-right: 5px;
         }
         &:first-child {
            cursor: pointer;
         }
      }
   }
`;
//MegaModal
export const MegaModalBox = styled.div`
   .bg {
      left: 0;
      top: 0;
      position: fixed;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      z-index: 10;
   }
   article {
      width: 1000px;
      height: 500px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      position: fixed;
      z-index: 10;
      overflow: hidden;
      background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props => props.bgimg});
      background-size: 120%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
         rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      .details {
         .iframe-box {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
         }
         .text-box {
            width: 390px;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #999;
            h3 {
               font-size: 25px;
               font-weight: 500;
               margin-bottom: 20px;
               color: #efefef;
            }
            span {
               display: block;
               transition: 0.3s;
               &:hover {
                  color: #efefef;
               }
               &:last-child {
                  display: block;
                  margin-top: 20px;
               }
            }
         }
      }
   }
`;
