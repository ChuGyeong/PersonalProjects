import React from 'react';
import './WorkActivity.scss';

const WorkActivity = ({ workActivity }) => {
   return (
      <div className="workActivity">
         <ul>
            {workActivity.map((item, idx) => {
               const { title, period, role, poster } = item;
               return (
                  <li key={idx}>
                     <img src={poster ? poster : 'https://via.placeholder.com/138x200'} alt={title} />
                     <div className="txtBox">
                        <p>{title}</p>
                        <p>
                           기간 <span>{period}</span>
                        </p>
                        <p>
                           <span>{role}</span>
                           {role ? '역' : ''}
                        </p>
                     </div>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default WorkActivity;
