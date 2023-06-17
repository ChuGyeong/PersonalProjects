import React from 'react';
import './Character.scss';

const Character = ({ data }) => {
   const { name, imgUrl, character } = data;

   return (
      <div className="character">
         <div className="imgBox">
            <img src={imgUrl} alt={name} />
            <p>
               더 글로리 <span>{name}</span>
            </p>
         </div>
         <table>
            <colgroup>
               <col className="w1" />
               <col className="w2" />
            </colgroup>
            <tbody>
               <tr>
                  <td>출생</td>
                  <td>{character.age}</td>
               </tr>
               <tr>
                  <td>가족</td>
                  <td>{character.family}</td>
               </tr>
               <tr>
                  <td>직업</td>
                  <td>{character.job}</td>
               </tr>
               <tr>
                  <td>별명</td>
                  <td>{character.nickname}</td>
               </tr>
               <tr>
                  <td>배우</td>
                  <td>{character.actor}</td>
               </tr>
               <tr>
                  <td colSpan={2}>{character.des}</td>
               </tr>
            </tbody>
         </table>
      </div>
   );
};

export default Character;
