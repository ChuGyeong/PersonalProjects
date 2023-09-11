import React, { useEffect, useRef, useState } from 'react';
import './Profile.scss';

const Profile = ({ profile }) => {
   const {
      agency,
      debut,
      birthdate,
      birthplace,
      height,
      korName,
      bloodType,
      education,
      family,
      engName,
      job,
      profileImg,
   } = profile;
   const [src, setSrc] = useState(0);

   const onBigImg = idx => {
      setSrc(idx);
   };

   useEffect(() => {
      setSrc(0);
      return;
   }, [profile]);

   return (
      <div className="profile">
         <div className="imgBox">
            <div className="bigImg">
               <img src={profileImg[src]} alt="" />
            </div>
            <ul>
               {profileImg.map((item, idx) => (
                  <li onClick={() => onBigImg(idx)} key={idx} style={{ opacity: idx === src ? '1' : '0.4' }}>
                     <img src={item} />
                  </li>
               ))}
            </ul>
         </div>
         <div className="txtBox">
            <table>
               <colgroup>
                  <col className="w1" />
                  <col className="w2" />
               </colgroup>
               <tbody>
                  <tr>
                     <td>이름</td>
                     <td>{korName}</td>
                  </tr>
                  <tr>
                     <td>영문이름</td>
                     <td>{engName}</td>
                  </tr>
                  <tr>
                     <td>직업</td>
                     <td>{job}</td>
                  </tr>
                  <tr>
                     <td>데뷔날짜</td>
                     <td>{debut}</td>
                  </tr>
                  <tr>
                     <td rowSpan={2}>출생</td>
                     <td>{birthdate}</td>
                  </tr>
                  <tr>
                     <td>{birthplace}</td>
                  </tr>
                  <tr>
                     <td>혈액형</td>
                     <td>{bloodType}</td>
                  </tr>
                  <tr>
                     <td>키</td>
                     <td>{height}</td>
                  </tr>
                  <tr>
                     <td>최종학력</td>
                     <td>{education}</td>
                  </tr>
                  <tr>
                     <td>가족관계</td>
                     <td>{family}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Profile;
