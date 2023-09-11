export function showList(peopleList) {
   const newObj = peopleList
      .map(item => {
         return `
    <li>
     <div class="img-box"><img src="${item.src}" alt="${item.name}" /></div>
     <div class="txt-box">
        <p>${item.name}</p>
        <p>${item.job}</p>
        <p>${item.tel}</p>
     </div>
     <button class="like-btn"><i class="xi-heart-o"></i></button>
  </li>
    `;
      })
      .join('');
   return newObj;
}

export function likeBtnMake(likeBtn) {
   likeBtn.forEach(item => {
      item.addEventListener('click', e => {
         if (item.children[0].className === 'xi-heart-o') {
            item.children[0].classList.replace('xi-heart-o', 'xi-heart');
            item.children[0].style.color = 'tomato';
         } else {
            item.children[0].classList.replace('xi-heart', 'xi-heart-o');
            item.children[0].style.color = 'black';
         }
      });
   });
}
