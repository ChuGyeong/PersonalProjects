import { staffList } from './module/data.js';
import { get, getAll } from './module/getEle.js';

const deleteBtn = get('.btn-wrap .delete-btn');
const viewBtn = get('.btn-wrap .view-btn');
const hideBtn = get('.btn-wrap .hide-btn');
const list = get('.list');
const addList = get('.add-list');
const ProfileBox = get('.add-list form');
const ProfileName = get('.add-list .profile #name');
const ProfileJob = get('.add-list .profile #job');
const ProfileTel = get('.add-list .profile #tel');
const ProfileImg = get('.add-list .profile #img');
const userAddBtn = get('.add-list .add-btn');
let storedStaffList;
let num;

class Staff {
   init() {
      num = JSON.parse(localStorage.getItem('num')) || staffList.length;
      if (num === staffList.length) {
         localStorage.setItem('storedStaffList', JSON.stringify([...staffList]));
         num++;
         localStorage.setItem('num', num);
      }
      this.show();
      this.event();
   }
   event() {
      hideBtn.addEventListener('click', e => {
         addList.classList.toggle('on');
         if (addList.classList.contains('on')) {
            hideBtn.textContent = '명단추가 숨기기';
         } else {
            hideBtn.textContent = '명단추가 보이기';
         }
      });

      deleteBtn.addEventListener('click', e => {
         list.innerHTML = '';
      });
      viewBtn.addEventListener('click', e => {
         this.show();
      });

      ProfileBox.addEventListener('submit', e => {
         this.add();
         this.show();
         this.txtReset();
      });
   }
   add() {
      if (!ProfileName.value || !ProfileJob.value || !ProfileTel.value || !ProfileImg.value) return;
      num++;
      storedStaffList = [
         ...storedStaffList,
         {
            id: num,
            name: ProfileName.value,
            job: ProfileJob.value,
            tel: ProfileTel.value,
            src: ProfileImg.value,
            isCheck: false,
         },
      ];
      localStorage.setItem('storedStaffList', JSON.stringify(storedStaffList));
      localStorage.setItem('num', num);
   }

   txtReset() {
      ProfileName.value = '';
      ProfileJob.value = '';
      ProfileTel.value = '';
      ProfileImg.value = '';
      ProfileName.focus();
   }

   show() {
      storedStaffList = JSON.parse(localStorage.getItem('storedStaffList')) || [];
      list.innerHTML = '';
      storedStaffList.forEach(item => {
         const { id, name, job, tel, src, isCheck } = item;
         let li = document.createElement('li');
         let imgBox = document.createElement('div');
         let img = document.createElement('img');
         let txtBox = document.createElement('div');
         let userName = document.createElement('p');
         let userJob = document.createElement('p');
         let userTel = document.createElement('p');
         let btnBox = document.createElement('div');
         let likeBtn = document.createElement('button');
         let likeIcon = document.createElement('i');
         let resignationBtn = document.createElement('button');

         imgBox.classList.add('img-box');
         txtBox.classList.add('txt-box');
         btnBox.classList.add('btn-box');

         img.setAttribute('src', src);
         img.setAttribute('alt', name);
         userName.textContent = name;
         userJob.textContent = job;
         userTel.textContent = tel;

         if (!isCheck) {
            likeIcon.classList.add('xi-heart-o');
            likeIcon.style.color = 'black';
         } else {
            likeIcon.classList.add('xi-heart');
            likeIcon.style.color = 'tomato';
         }
         resignationBtn.textContent = '퇴사';

         likeBtn.append(likeIcon);
         imgBox.append(img);
         txtBox.append(userName, userJob, userTel);
         btnBox.append(likeBtn, resignationBtn);
         li.append(imgBox, txtBox, btnBox);
         list.append(li);
         this.ckeck(likeBtn, isCheck, id);
         this.resignation(resignationBtn, id);
      });
   }

   resignation(resignationBtn, id) {
      resignationBtn.addEventListener('click', e => {
         storedStaffList = storedStaffList.filter(item => item.id !== id);
         localStorage.setItem('storedStaffList', JSON.stringify(storedStaffList));
         this.show();
      });
   }

   ckeck(likeBtn, isCheck, id) {
      likeBtn.addEventListener('click', e => {
         storedStaffList.map(item => {
            if (item.id === id) {
               item.isCheck = !isCheck;
            }
         });
         localStorage.setItem('storedStaffList', JSON.stringify(storedStaffList));
         this.show();
      });
   }
}
const staff = new Staff();
staff.init();
