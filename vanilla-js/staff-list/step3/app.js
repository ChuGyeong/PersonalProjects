import { peopleList } from './module/data.js';
import { showList, likeBtnMake } from './module/showObj.js';

const viewBtn = document.querySelector('.con-box .btn-wrap .view-btn'),
   deletebtn = document.querySelector('.con-box .btn-wrap .delete-btn'),
   list = document.querySelector('.con-box .list');
let likeBtn;

const printList = () => {
   list.innerHTML = '';
   list.innerHTML = showList(peopleList);
   likeBtn = document.querySelectorAll('.con-box .list .like-btn');
   likeBtnMake(likeBtn);
};

deletebtn.addEventListener('click', e => {
   list.innerHTML = '';
});
viewBtn.addEventListener('click', e => {
   printList();
});
printList();
