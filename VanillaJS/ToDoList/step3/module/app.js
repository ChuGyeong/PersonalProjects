import get from './getEle.js';

const toDoList = get('form');
const makeListBox = get('form input');
const list = get('.wrap .toDoList');

class toDo {
   obj = [];
   num;
   init() {
      this.num = JSON.parse(localStorage.getItem('num')) || 0;
      this.show();
      toDoList.addEventListener('submit', e => {
         this.add();
         this.show();
         makeListBox.value = '';
      });
   }
   add() {
      if (makeListBox.value) {
         this.num++;
         this.obj = [...this.obj, { id: this.num, text: makeListBox.value, isCheck: false }];
         localStorage.setItem('obj', JSON.stringify(this.obj));
         localStorage.setItem('num', this.num);
      }
   }
   show() {
      this.obj = JSON.parse(localStorage.getItem('obj')) || [];
      list.innerHTML = '';
      this.obj.forEach(item => {
         const { id, text, isCheck } = item;
         let li = document.createElement('li');
         let content = document.createElement('input');
         let i = document.createElement('i');
         let deleteBtn = document.createElement('button');
         let modifyBtn = document.createElement('button');
         deleteBtn.classList.add('delete-btn');
         modifyBtn.classList.add('modify-btn');

         content.value = text;
         content.readOnly = true;

         if (!isCheck) {
            i.classList.add('xi-radiobox-blank');
            i.style.color = 'black';
            content.style.color = 'black';
            content.style.textDecorationLine = 'none';
         } else {
            i.classList.add('xi-check-circle');
            i.style.color = 'tomato';
            content.style.color = 'tomato';
            content.style.textDecorationLine = 'line-through';
            modifyBtn.style.display = 'none';
         }
         modifyBtn.textContent = '수정';
         deleteBtn.textContent = '삭제';

         li.append(i, content, modifyBtn, deleteBtn);
         list.append(li);

         this.modifyEvent(modifyBtn, id, content);
         this.deleteEvent(deleteBtn, id);
         this.ckeckEvent(i, isCheck, id);
      });
   }
   deleteEvent(deleteBtn, id) {
      deleteBtn.addEventListener('click', e => {
         this.obj = this.obj.filter(item => item.id !== id);
         localStorage.setItem('obj', JSON.stringify(this.obj));
         this.show();
      });
   }
   modifyEvent(modifyBtn, id, content) {
      modifyBtn.addEventListener('click', e => {
         if (content.readOnly) {
            content.style.backgroundColor = '#efefef';
            modifyBtn.textContent = '완료';
            content.focus();
         } else {
            content.style.backgroundColor = 'transparent';
            modifyBtn.textContent = '수정';
            this.obj.map(item => {
               if (item.id === id) {
                  item.text = content.value;
               }
            });
            localStorage.setItem('obj', JSON.stringify(this.obj));
         }
         content.readOnly = !content.readOnly;
      });
   }

   ckeckEvent(i, isCheck, id) {
      i.addEventListener('click', e => {
         this.obj.map(item => {
            if (item.id === id) {
               item.isCheck = !isCheck;
            }
         });
         localStorage.setItem('obj', JSON.stringify(this.obj));
         this.show();
      });
   }
}

const todo = new toDo();
todo.init();
