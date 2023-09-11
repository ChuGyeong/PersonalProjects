import { peopleList } from './module/data.js';
import { showList, likeBtnMake } from './module/showObj.js';
import { get, getAll } from './module/getEle.js';

const viewBtn = get('.con-box .btn-wrap .view-btn'),
   deletebtn = get('.con-box .btn-wrap .delete-btn'),
   list = get('.con-box .list');
let likeBtn;

const printList = () => {
   list.innerHTML = '';
   list.innerHTML = showList(peopleList);
   likeBtn = getAll('.con-box .list .like-btn');
   likeBtnMake(likeBtn);
};

deletebtn.addEventListener('click', e => {
   list.innerHTML = '';
});
viewBtn.addEventListener('click', e => {
   printList();
});
printList();

// likeBtnMake(likeBtn);
