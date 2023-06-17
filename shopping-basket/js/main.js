'use strict';
(function () {
   // 상품 목록
   let productList = [
      {
         id: 1,
         brand: 'UGG',
         engName: `(W) UGG Sport Yeah Slide Bright White`,
         korName: '(W) 어그 스포츠 예 슬라이드 브라이트 화이트',
         price: 92000,
         quantity: 10,
         imgSrc: './img/item_img_01.png',
      },
      {
         id: 2,
         brand: 'Glowny',
         engName: `Glowny I'm Lony Keyring`,
         korName: '글로니 아임 로니 키링',
         price: 320000,
         quantity: 3,
         imgSrc: './img/item_img_02.jpg',
      },
      {
         id: 3,
         brand: 'Sporty & Rich',
         engName: `Sporty & Rich 94 Running Club T-Shirt White`,
         korName: '스포티 앤 리치 94 러닝 클럽 티셔츠 화이트',
         price: 59000,
         quantity: 6,
         imgSrc: './img/item_img_03.png',
      },
      {
         id: 4,
         brand: 'Martine Rose',
         engName: `Martine Rose Classic Short Sleeve T-Shirt Black`,
         korName: '마틴 로즈 클래식 숏슬리브 티셔츠 블랙',
         price: 250000,
         quantity: 7,
         imgSrc: './img/item_img_04.jpg',
      },
      {
         id: 5,
         brand: 'Crocs',
         engName: `Crocs Classic Crocs Sandal White`,
         korName: '크록스 클래식 크록스 샌들 화이트',
         price: 30000,
         quantity: 3,
         imgSrc: './img/item_img_05.png',
      },
      {
         id: 6,
         brand: 'Diesel',
         engName: `Diesel 1DR Mini Bag Plaque Black`,
         korName: '디젤 1DR 미니백 플라크 블랙',
         price: 394000,
         quantity: 4,
         imgSrc: './img/item_img_06.jpg',
      },
      {
         id: 7,
         brand: 'Buly 1803',
         engName: `
      Buly 1803 Lait Virginal Body Lotion Makassar 190ml (Korean Ver.)`,
         korName: '불리 1803 레 비지날 바디 로션 마카사르 190ml (국내 정식 발매 제품)',
         price: 77000,
         quantity: 5,
         imgSrc: './img/item_img_07.png',
      },
      {
         id: 8,
         brand: 'Chanel',
         engName: `
      Chanel Backpack Grained Shiny Calfskin & Gold Black`,
         korName: '샤넬 백팩 그레인드 샤이니 카프스킨 & 골드 메탈 블랙',
         price: 9088000,
         quantity: 8,
         imgSrc: './img/item_img_08.jpg',
      },
      {
         id: 9,
         brand: 'Human Made',
         engName: `
      Human Made 6 Panel Twill Cap #1 Black`,
         korName: '휴먼 메이드 6 패널 트윌 캡 #1 블랙',
         price: 121000,
         quantity: 8,
         imgSrc: './img/item_img_09.jpg',
      },
      {
         id: 10,
         brand: 'Estee Lauder',
         engName: `
      Estee Lauder Advanced Night Repair Synchronized Multi Recovery Complex 50ml (Korean Ver.)`,
         korName:
            '에스티 로더 어드밴스드 나이트 리페어 싱크로나이즈드 멀티 리커버리 컴플렉스 50ml (국내 정식 발매 제품)',
         price: 130000,
         quantity: 4,
         imgSrc: './img/item_img_10.jpg',
      },
      {
         id: 11,
         brand: 'Miu Miu',
         engName: `
      Miu Miu Matelasse Nappa Leather Mini Bag Marina Blue`,
         korName: '미우 미우 마테라쎄 나파 가죽 미니백 마리나 블루',
         price: 2075000,
         quantity: 8,
         imgSrc: './img/item_img_11.jpg',
      },
      {
         id: 12,
         brand: 'Onitsuka Tiger',
         engName: `
      Onitsuka Tiger Mexico 66 Black White`,
         korName: '오니츠카 타이거 멕시코 66 블랙 화이트',
         price: 165000,
         quantity: 10,
         imgSrc: './img/item_img_12.png',
      },
      {
         id: 13,
         brand: 'Thom Browne',
         engName: `
      (W)Thom Browne Pique Rib Gusset Tennis Dress Navy`,
         korName: '(W)톰브라운 피케 립 거싯 테니스 드레스 네이비',
         price: 629000,
         quantity: 9,
         imgSrc: './img/item_img_13.jpg',
      },
      {
         id: 14,
         brand: 'Aesop',
         engName: `
      Aesop Resurrection Aromatique Hand Wash with Pump 500ml (Korean Ver.)`,
         korName: '이솝 레저렉션 아로마틱 핸드 워시 펌프 포함 500ml (국내 정식 발매 제품)',
         price: 41000,
         quantity: 2,
         imgSrc: './img/item_img_14.jpg',
      },
      {
         id: 15,
         brand: 'Nike',
         engName: `
      (W) Nike Cortez Gorge Green and Malachite`,
         korName: '(W) 나이키 코르테즈 골지 그린 앤 말라카이트',
         price: 125000,
         quantity: 4,
         imgSrc: './img/item_img_15.png',
      },
      {
         id: 16,
         brand: 'Vivienne Westwood',
         engName: `
      Vivienne Westwood Thin Lines Flat Orb Bracelet Silver`,
         korName: '비비안 웨스트우드 씬 라인 플랫 오브 브레이슬릿 실버',
         price: 119000,
         quantity: 4,
         imgSrc: './img/item_img_16.png',
      },
      {
         id: 17,
         brand: 'Puma',
         engName: `
      (W) Puma x Dua Lipa Cell Dome King ML Trainer Silver Pink`,
         korName: '(W) 푸마 x 두아 리파 셀 돔 킹 ML 트레이너 실버 핑크',
         price: 119000,
         quantity: 7,
         imgSrc: './img/item_img_17.png',
      },
      {
         id: 18,
         brand: 'Ganni',
         engName: `
      (W) Ganni Smiley T-Shirt Bright White`,
         korName: '(W) 가니 스마일리 티셔츠 브라이트 화이트',
         price: 88000,
         quantity: 6,
         imgSrc: './img/item_img_18.png',
      },
      {
         id: 19,
         brand: 'Asics',
         engName: `
      (W) Asics Gel-Venture 8 Black Frosted Rose`,
         korName: '(W) 아식스 젤 벤쳐 8 블랙 프로스티드 로즈',
         price: 110000,
         quantity: 5,
         imgSrc: './img/item_img_19.png',
      },
      {
         id: 20,
         brand: 'Human Made',
         engName: `
      Human Made Graphic T-Shirt #13 White`,
         korName: '휴먼 메이드 그래픽 티셔츠 #13 화이트',
         price: 177000,
         quantity: 8,
         imgSrc: './img/item_img_20.jpg',
      },
      {
         id: 21,
         brand: 'Aesop',
         engName: `
      Aesop Resurrection Aromatique Hand Balm 75ml (Korean Ver.)`,
         korName: '이솝 레저렉션 아로마틱 핸드 밤 75ml (국내 정식 발매 제품)',
         price: 30000,
         quantity: 6,
         imgSrc: './img/item_img_21.jpg',
      },
      {
         id: 22,
         brand: 'Hunter',
         engName: `
      (W) Hunter Bloom Sandal Black`,
         korName: '(W) 헌터 블룸 샌들 블랙',
         price: 80000,
         quantity: 1,
         imgSrc: './img/item_img_22.png',
      },
      {
         id: 23,
         brand: 'Cosymosy',
         engName: `
      Cosymosy Ugly Bird Keyring White`,
         korName: '코지모지 어글리 버드 키링 화이트',
         price: 43000,
         quantity: 9,
         imgSrc: './img/item_img_23.png',
      },
      {
         id: 24,
         brand: 'Ganni',
         engName: `
      (W) Ganni Smiley T-Shirt Lilac Sachet - 22FW`,
         korName: '(W) 가니 스마일리 티셔츠 라일락 사쉐 - 22FW',
         price: 119000,
         quantity: 6,
         imgSrc: './img/item_img_24.jpg',
      },
      {
         id: 25,
         brand: 'Nars',
         engName: `
      Nars Blush Sex Appeal (Korean Ver.)`,
         korName: '나스 블러쉬 섹스어필 (국내 정식 발매 제품)',
         price: 38000,
         quantity: 2,
         imgSrc: './img/item_img_25.jpg',
      },
      {
         id: 26,
         brand: 'Nonfiction',
         engName: `
      Nonfiction Perfume In The Shower 100ml (Korean Ver.)`,
         korName: '논픽션 퍼퓸 인 더 샤워 100ml (국내 정식 발매 제품)',
         price: 139000,
         quantity: 2,
         imgSrc: './img/item_img_26.png',
      },
      {
         id: 27,
         brand: 'Burberry',
         engName: `
      (W) Burberry Check Cotton Sneakers Soft Fawn`,
         korName: '(W) 버버리 체크 코튼 스니커즈 소프트 펀',
         price: 523000,
         quantity: 8,
         imgSrc: './img/item_img_27.png',
      },
      {
         id: 28,
         brand: 'Toteme',
         engName: `
      (W) Toteme Regular Fit Denim Dark Vintage Wash`,
         korName: '(W) 토템 레귤러 핏 데님 다크 빈티지 워시',
         price: 245000,
         quantity: 6,
         imgSrc: './img/item_img_28.jpg',
      },
      {
         id: 29,
         brand: 'Sporty & Rich',
         engName: `
      Sporty & Rich Wellness Ivy T-Shirt White`,
         korName: '스포티 앤 리치 웰니스 아이비 티셔츠 화이트',
         price: 60000,
         quantity: 3,
         imgSrc: './img/item_img_29.png',
      },
      {
         id: 30,
         brand: 'Crocs',
         engName: `
      (W) Crocs Boca Strappy Wedge Black`,
         korName: '(W) 크록스 보카 스트래피 웨지 블랙',
         price: 47000,
         quantity: 4,
         imgSrc: './img/item_img_30.png',
      },
      {
         id: 31,
         brand: 'Courreges',
         engName: `
      (W) Courreges Reedition Bumpy Contrast T-Shirt Heritage White Black`,
         korName: '(W) 꾸레쥬 리에디션 범피 콘트라스트 티셔츠 헤리티지 화이트 블랙',
         price: 252000,
         quantity: 5,
         imgSrc: './img/item_img_31.jpg',
      },
      {
         id: 32,
         brand: 'Mischief',
         engName: `
      Mischief Rhombus Light Weight Backpack Black - The Hyundai Seoul Exclusivek`,
         korName: '미스치프 롬버스 라이트 웨이트 백팩 블랙 - 더 현대 서울 한정',
         price: 104000,
         quantity: 5,
         imgSrc: './img/item_img_32.jpg',
      },
      {
         id: 33,
         brand: 'New Balance',
         engName: `
      New Balance 408 Silver`,
         korName: '뉴발란스 408 실버',
         price: 77000,
         quantity: 1,
         imgSrc: './img/item_img_33.png',
      },
      {
         id: 34,
         brand: 'Onitsuka Tiger',
         engName: `
      Onitsuka Tiger Mexico 66 Vintage Birch Cactus Green`,
         korName: '오니츠카 타이거 멕시코 66 빈티지 버치 캑터스 그린',
         price: 200000,
         quantity: 9,
         imgSrc: './img/item_img_34.png',
      },
      {
         id: 35,
         brand: 'Nike',
         engName: `
      Nike Gym Club Duffle Bag 24L Pale Vanilla`,
         korName: '나이키 짐 클럽 더플백 24L 페일 바닐라',
         price: 200000,
         quantity: 3,
         imgSrc: './img/item_img_35.jpg',
      },
      {
         id: 36,
         brand: 'Refa',
         engName: `
      Refa 4 Carat (Korean Ver.)`,
         korName: '리파 4 캐럿 (국내 정식 발매 제품)',
         price: 130000,
         quantity: 2,
         imgSrc: './img/item_img_36.jpg',
      },
      {
         id: 37,
         brand: 'Nike',
         engName: `
      (W) Nike Cortez PRM Black`,
         korName: '(W) 나이키 코르테즈 프리미엄 블랙',
         price: 138000,
         quantity: 7,
         imgSrc: './img/item_img_37.png',
      },
      {
         id: 38,
         brand: 'Nike',
         engName: `
      Nike x Jacquemus Air Humara LX Light Bone and Gold`,
         korName: '나이키 x 자크뮈스 에어 휴마라 LX 라이트 본 앤 골드',
         price: 295000,
         quantity: 2,
         imgSrc: './img/item_img_38.png',
      },
      {
         id: 39,
         brand: 'Wooyoungmi',
         engName: `
      Wooyoungmi Cotton Lenticular Back Logo T-shirt Black - 23SS`,
         korName: '우영미 코튼 렌티큘러 백로고 티셔츠 블랙 - 23SS',
         price: 275000,
         quantity: 5,
         imgSrc: './img/item_img_39.jpg',
      },
      {
         id: 40,
         brand: 'Adidas',
         engName: `
      (W) Adidas Gazelle Indoor Pulse Mint Solar Orange`,
         korName: '(W) 아디다스 가젤 인도어 펄스 민트 솔라 오렌지',
         price: 210000,
         quantity: 2,
         imgSrc: './img/item_img_40.png',
      },
   ];
   let basketList = [];
   let orderSheetList = [];

   function get(target) {
      return document.querySelector(target);
   }
   function getAll(target) {
      return document.querySelectorAll(target);
   }

   //쇼핑리스트
   let itemListBox = get('.con-box .item-list');
   //장바구니 이동여부 팝업창
   let popup = get('.con-box .basket-bg');
   let keepShopping = get('.con-box .basket-bg .pop-up .keep-shopping');
   let shoppingCart = get('.con-box .basket-bg .pop-up .shopping-cart');
   //장바구니
   let basket = get('.con-box .basket');
   //장바구니 닫기 버튼
   let basketClose = get('.con-box .basket .list-header .close');
   //장바구니 버튼
   let basketBtn = get('.con-box .product-btn .basket-btn');
   let basketBtnNum = get('.con-box .product-btn .basket-btn span');
   //상품 리스트 출력
   let itemList, itemImg, itemTitle, itemBrand, itemEngName, itemKorName, itemPrice, itemQuantity, btnWish, cnt;
   //장바구니 출력
   const basketAllCheck = get('.con-box .basket .basket-list tr th input[type="checkbox"]');
   const basketTable = get('.con-box .basket .basket-list tbody');
   const basketItemTotal = get('.con-box .basket .basket-list tfoot tr td');
   let basketTableTr,
      basketTableTd1,
      basketTableTd2,
      basketTableTd3,
      basketTableTd4,
      basketQuantityBox,
      basketQuantityBtnBox,
      basketQuantityUpBtn,
      basketQuantityDownBtn,
      basketQuantityUpIco,
      basketQuantityDownIco,
      basketItemCheck,
      basketItemName,
      basketItemImg,
      basketItemQuantity,
      basketItemPrice;
   const sequenceBox = get('.con-box .product-btn select');
   //주문창
   const orderSheet = get('.con-box .order-sheet-bg'),
      orderSheetClose = get('.con-box .order-sheet-bg .close'),
      orderSheetTable = get('.con-box .order-sheet-bg .pop-up .order-box .order-list tbody'),
      body = get('body');
   const moreBtn = get('.con-box .more');
   let moreCnt = 8;
   //장바구니 선택상품삭제 버튼
   const deleteSelectedProductBtn = get('.con-box .basket .basket-btn-wrap .delete-selected-product-btn'),
      //장바구니 선택상품주문 버튼
      selectiveProductOrdersBtn = get('.con-box .basket .basket-btn-wrap .selective-product-order-btn'),
      //장바구니 비우기
      emptytBtn = get('.con-box .basket .basket-btn-wrap .empty-btn'),
      //장바구니 전체선택
      selectAllBtn = get('.con-box .basket .basket-btn-wrap .select-all-btn'),
      //장바구니 주문하기 버튼
      allProductOrdersBtn = get('.con-box .basket .basket-btn-wrap .all-product-order-btn');
   //주문서 결제하기 버튼
   const payingBtn = get('.con-box .order-sheet-bg .pop-up .order-box .paying-btn');

   //상품리스트 출력
   const makeProductList = () => {
      itemListBox.innerHTML = '';
      for (let i = 0; i < moreCnt; i++) {
         itemList = document.createElement('li');
         itemImg = document.createElement('img');
         itemTitle = document.createElement('div');
         itemBrand = document.createElement('p');
         itemEngName = document.createElement('p');
         itemKorName = document.createElement('p');
         itemPrice = document.createElement('p');
         itemQuantity = document.createElement('p');

         itemList.dataset.id = productList[i].id;
         itemList.dataset.name = productList[i].korName;
         itemList.dataset.quantity = productList[i].quantity;
         itemList.dataset.imgSrc = productList[i].imgSrc;

         itemImg.setAttribute('src', productList[i].imgSrc);
         itemImg.setAttribute('alt', productList[i].korName);

         itemTitle.classList.add('item-title');
         itemBrand.classList.add('item-brand');
         itemEngName.classList.add('item-product-name');
         itemKorName.classList.add('item-name');
         itemPrice.classList.add('item-price');
         itemQuantity.classList.add('item-quantity');

         itemEngName.textContent = productList[i].engName;
         itemKorName.textContent = productList[i].korName;
         itemBrand.textContent = productList[i].brand;

         if (productList[i].quantity === 0) {
            itemQuantity.innerHTML = `<span>sold out<span>`;
            itemImg.style.opacity = '0.3';
            itemPrice.textContent = '-';
         } else {
            itemQuantity.innerHTML = `남은 수량: <span>${productList[i].quantity}</span>`;
            itemImg.style.opacity = '1';
            itemPrice.textContent = `${productList[i].price.toLocaleString()}원`;
         }
         btnWish = document.createElement('button');
         btnWish.textContent = '장바구니 담기';

         btnWish.classList.add('btn-wish');
         itemTitle.append(itemBrand, itemEngName, itemKorName, itemPrice, itemQuantity);
         itemList.append(itemImg, itemTitle, btnWish);
         itemListBox.append(itemList);

         btnWish = getAll('.con-box .item-list li .btn-wish');
         itemList = getAll('.con-box .item-list li');
         itemKorName = getAll('.con-box .item-list li .item-name');
         itemImg = getAll('.con-box .item-list li img');
         itemQuantity = getAll('.con-box .item-list li .item-quantity');
         itemPrice = getAll('.con-box .item-list li .item-price');
      }
      btnWishMake();
      if (moreCnt >= productList.length) {
         moreBtn.style.display = 'none';
      }
   };

   //장바구니 버튼 수량 변경
   const basketWishNum = () => {
      if (basketList.length) {
         basketBtnNum.style.display = 'block';
         basketBtnNum.textContent = basketList.length;
      } else {
         basketBtnNum.style.display = 'none';
      }
   };

   // 장바구니 담기 버튼
   const btnWishMake = () => {
      btnWish.forEach((btnWish, idx) => {
         btnWish.addEventListener('click', e => {
            if (productList[idx].quantity > 0) {
               popup.classList.add('on');
               body.style.overflow = 'hidden';
               let isInBasket = false,
                  currentNum = -1;

               basketList.forEach((basketItem, idx) => {
                  if (basketItem.id === Number(e.currentTarget.parentElement.dataset.id)) {
                     isInBasket = true;
                     currentNum = idx;
                  }
               });
               //장바구니 리스트에 동일한 제품이 있다면 수량 증가
               if (isInBasket) {
                  basketList[currentNum].quantity += 1;
                  //없다면 추가
               } else {
                  basketList.push({
                     id: productList[idx].id,
                     name: productList[idx].korName,
                     price: productList[idx].price,
                     imgSrc: productList[idx].imgSrc,
                     quantity: 1,
                  });
               }
               //상품 리스트 수량 변경
               productList[idx].quantity = productList[idx].quantity - 1;
               if (productList[idx].quantity === 0) {
                  itemQuantity[idx].innerHTML = `<span>sold out<span>`;
                  itemImg[idx].style.opacity = '0.3';
                  itemPrice[idx].textContent = '-';
               } else {
                  itemQuantity[idx].innerHTML = `남은 수량: <span>${productList[idx].quantity}</span>`;
                  itemImg[idx].style.opacity = '1';
                  itemPrice[idx].textContent = `${productList[idx].price.toLocaleString()}원`;
               }
               makeBasketList();
               basketWishNum();
            }
         });
      });
   };

   const makeBasketList = () => {
      basketTable.innerHTML = '';
      basketAllCheck.checked = false;
      // 장바구니 아이템 출력
      basketList.forEach(basketItem => {
         basketTableTr = document.createElement('tr');
         basketTableTd1 = document.createElement('td');
         basketItemCheck = document.createElement('input');
         basketItemImg = document.createElement('img');
         basketTableTd2 = document.createElement('td');
         basketItemName = document.createElement('p');
         basketTableTd3 = document.createElement('td');
         basketQuantityBox = document.createElement('div');
         basketItemQuantity = document.createElement('input');
         basketQuantityBtnBox = document.createElement('div');
         basketQuantityUpBtn = document.createElement('button');
         basketQuantityUpIco = document.createElement('i');
         basketQuantityDownBtn = document.createElement('button');
         basketQuantityDownIco = document.createElement('i');
         basketTableTd4 = document.createElement('td');
         basketItemPrice = document.createElement('p');

         basketItemCheck.setAttribute('type', 'checkbox');
         basketItemCheck.setAttribute('name', 'item-ckeck');
         basketItemCheck.setAttribute('data-id', basketItem.id);
         basketItemImg.setAttribute('src', basketItem.imgSrc);
         basketItemImg.setAttribute('alt', basketItem.name);
         basketItemQuantity.setAttribute('type', 'number');

         basketItemName.classList.add('basket-item-name');
         basketQuantityBox.classList.add('basket-item-quantity');
         basketQuantityBtnBox.classList.add('btn-up-down');
         basketQuantityUpIco.classList.add('xi-angle-up-thin');
         basketQuantityDownIco.classList.add('xi-angle-down-thin');
         basketItemPrice.classList.add('basket-item-price');

         basketItemName.textContent = basketItem.name;
         basketItemPrice.textContent = `${(basketItem.price * basketItem.quantity).toLocaleString()}원`;
         basketItemQuantity.value = basketItem.quantity;

         basketTableTd1.append(basketItemCheck, basketItemImg);
         basketTableTd2.append(basketItemName);
         basketQuantityUpBtn.append(basketQuantityUpIco);
         basketQuantityDownBtn.append(basketQuantityDownIco);
         basketQuantityBtnBox.append(basketQuantityUpBtn, basketQuantityDownBtn);
         basketQuantityBox.append(basketItemQuantity, basketQuantityBtnBox);
         basketTableTd3.append(basketQuantityBox);
         basketTableTd4.append(basketItemPrice);
         basketTableTr.append(basketTableTd1, basketTableTd2, basketTableTd3, basketTableTd4);
         basketTable.append(basketTableTr);

         // 장바구니 상품 체크 박스
         basketItemCheck = getAll('.con-box .basket .basket-list tr td input[type="checkbox"]');
         basketItemQuantity = getAll('.con-box .basket .basket-list tr td .basket-item-quantity input');
         basketQuantityUpBtn = getAll(
            '.con-box .basket .basket-list tr td .basket-item-quantity .btn-up-down button:nth-child(1)',
         );
         basketQuantityDownBtn = getAll(
            '.con-box .basket .basket-list tr td .basket-item-quantity .btn-up-down button:nth-child(2)',
         );
      });

      if (basketList.length) {
         //장바구니 합계
         let basketItemSum = 0;
         for (let i = 0; i < basketList.length; i++) {
            basketItemSum += Number(basketList[i].price) * Number(basketList[i].quantity);
         }
         basketItemTotal.textContent = `합계: ${basketItemSum.toLocaleString()}원`;
      } else {
         basketItemTotal.textContent = '';
      }
      qttUpDownBtn();
      quantityNum();
   };

   //주문서 출력
   const makeorderSheetList = () => {
      orderSheetTable.innerHTML = '';
      orderSheetList.forEach(orderItem => {
         orderSheetTable.innerHTML += ` <tr>
   <td>
      <img
         src=${orderItem.imgSrc}
         alt="${orderItem.name}" />
      <span class="basket-item-name"
         >${orderItem.name}</span
      >
   </td>
   <td>${orderItem.quantity}</td>
   <td>무료</td>
   <td>${(orderItem.price * orderItem.quantity).toLocaleString()}원</td>
</tr>`;
      });
   };

   // 장바구니 상단 선택버튼
   const allCheck = () => {
      if (basketList.length) {
         basketItemCheck.forEach(itemCheck => {
            itemCheck.addEventListener('click', e => {
               let isAllCheck = true;
               basketItemCheck.forEach(item => {
                  if (!item.checked) {
                     isAllCheck = false;
                  }
               });
               if (isAllCheck) {
                  basketAllCheck.checked = true;
               } else {
                  basketAllCheck.checked = false;
               }
            });
         });
      }
   };

   const qttUpDownBtn = () => {
      //수량 증가 버튼
      basketQuantityUpBtn.forEach((upBtn, idx) => {
         upBtn.addEventListener('click', e => {
            productList.forEach(item => {
               //데이터 id 비교
               if (item.id === Number(basketItemCheck[idx].dataset.id)) {
                  if (item.quantity !== 0) {
                     //상품리스트 배열 수량 감소
                     item.quantity = item.quantity - 1;
                     basketItemQuantity[idx].value = Number(basketItemQuantity[idx].value) + 1;
                     basketList.forEach(basketItem => {
                        //장바구니 배열 수량 증가
                        if (item.id === basketItem.id) {
                           basketItem.quantity = Number(basketItem.quantity) + 1;
                        }
                     });
                  }
               }
            });
            makeProductList();
            makeBasketList();
         });
      });

      //수량 감소 버튼
      basketQuantityDownBtn.forEach((DownBtn, idx) => {
         DownBtn.addEventListener('click', e => {
            productList.forEach(item => {
               if (item.id === Number(basketItemCheck[idx].dataset.id)) {
                  if (basketItemQuantity[idx].value > 1) {
                     item.quantity = item.quantity + 1;
                     basketItemQuantity[idx].value = Number(basketItemQuantity[idx].value) - 1;
                     basketList.forEach(basketItem => {
                        if (item.id === basketItem.id) {
                           basketItem.quantity = Number(basketItem.quantity) - 1;
                        }
                     });
                  }
               }
            });
            makeProductList();
            makeBasketList();
         });
      });
   };

   //장바구니 input 수량 변경
   const quantityNum = () => {
      const changeQtt = (qtt, idx) => {
         productList.forEach(item => {
            if (item.id === Number(basketItemCheck[idx].dataset.id)) {
               basketList.forEach(basketItem => {
                  if (item.id === basketItem.id) {
                     //범위값 초과일 때
                     if (Number(qtt.value) > basketItem.quantity + item.quantity) {
                        qtt.value = basketItem.quantity + item.quantity;
                        item.quantity = 0; //원본배열
                        basketItem.quantity = Number(qtt.value); //장바구니 배열 수량 = input 값
                        //범위값 미만일 때
                     } else if (Number(qtt.value) <= 0) {
                        item.quantity = basketItem.quantity + item.quantity - 1;
                        qtt.value = 1;
                        basketItem.quantity = Number(qtt.value);
                        //정상 범위
                     } else {
                        item.quantity += basketItem.quantity - Number(qtt.value);
                        basketItem.quantity = Number(qtt.value);
                     }
                  }
               });
            }
         });
         makeProductList();
         makeBasketList();
         basketWishNum();
      };
      basketItemQuantity.forEach((qtt, idx) => {
         qtt.addEventListener('blur', e => {
            changeQtt(qtt, idx);
         });
         qtt.addEventListener('keydown', e => {
            if (e.keyCode === 13) {
               changeQtt(qtt, idx);
            }
         });
      });
   };

   makeProductList();

   //더보기 버튼
   moreBtn.addEventListener('click', e => {
      moreCnt += 8;
      makeProductList();
   });

   // 장바구니 버튼
   basketBtn.addEventListener('click', e => {
      basket.classList.add('on');
      body.style.overflow = 'hidden';
      allCheck();
   });
   // 계속 쇼핑하기
   keepShopping.addEventListener('click', e => {
      popup.classList.remove('on');
      body.style.overflow = 'visible';
   });
   // 장바구니 이동
   shoppingCart.addEventListener('click', e => {
      popup.classList.remove('on');
      basket.classList.add('on');
      body.style.overflow = 'hidden';
      allCheck();
   });
   // 장바구니 닫기
   basketClose.addEventListener('click', e => {
      basket.classList.remove('on');
      body.style.overflow = 'visible';
   });

   //장바구니 선택 상품 삭제
   deleteSelectedProductBtn.addEventListener('click', e => {
      basketItemCheck.forEach(CheckItem => {
         if (CheckItem.checked) {
            const selectedProductId = Number(CheckItem.dataset.id);
            let selectedProductQuantity = 0;

            // 선택된 상품의 수량을 가져오고, 장바구니에서 제거
            basketList = basketList.filter(basketItem => {
               if (basketItem.id === selectedProductId) {
                  selectedProductQuantity = basketItem.quantity;
                  return false; // 해당 상품을 제거하기 위해 false를 반환
               }
               return true; // 그 외의 상품은 유지하기 위해 true를 반환
            });

            // productList 배열에서 선택된 상품의 수량을 되돌리기
            productList.forEach(item => {
               if (item.id === selectedProductId) {
                  item.quantity += selectedProductQuantity;
               }
            });
            makeProductList();
            makeBasketList();
            basketWishNum();
         }
      });
   });

   //장바구니 선택상품주문버튼
   selectiveProductOrdersBtn.addEventListener('click', e => {
      orderSheetList = [];
      basketItemCheck.forEach(itemCheck => {
         if (itemCheck.checked) {
            orderSheet.classList.add('on');
            basketList.forEach(basketItem => {
               if (basketItem.id === Number(itemCheck.dataset.id)) {
                  orderSheetList.push({
                     id: basketItem.id,
                     name: basketItem.name,
                     price: basketItem.price,
                     imgSrc: basketItem.imgSrc,
                     quantity: basketItem.quantity,
                  });
               }
            });
         }
      });
      makeorderSheetList();
   });

   //장바구니 주문하기 버튼
   allProductOrdersBtn.addEventListener('click', e => {
      orderSheetList = [];
      orderSheet.classList.add('on');
      basketList.forEach(basketItem => {
         orderSheetList.push({
            id: basketItem.id,
            name: basketItem.name,
            price: basketItem.price,
            imgSrc: basketItem.imgSrc,
            quantity: basketItem.quantity,
         });
      });
      makeorderSheetList();
   });

   //주문서 닫기버튼
   orderSheetClose.addEventListener('click', e => {
      orderSheet.classList.remove('on');
   });

   //주문서 결제하기 버튼
   payingBtn.addEventListener('click', e => {
      basketList = basketList.filter(basketItem => {
         return !orderSheetList.some(orderItem => orderItem.id === basketItem.id);
      });
      orderSheetList = [];
      makeProductList();
      makeBasketList();
      basketWishNum();
      orderSheetTable.innerHTML = '';
      orderSheet.classList.remove('on');
      basket.classList.remove('on');
      body.style.overflow = 'visible';
   });

   //장바구니 전체선택
   selectAllBtn.addEventListener('click', e => {
      basketItemCheck.forEach(basketItemCheck => {
         basketItemCheck.checked = true;
      });
      basketAllCheck.checked = true;
   });

   //장바구니 전체선택 상단버튼
   basketAllCheck.addEventListener('change', e => {
      if (basketAllCheck.checked) {
         basketItemCheck.forEach(basketItemCheck => {
            basketItemCheck.checked = true;
         });
      } else {
         basketItemCheck.forEach(basketItemCheck => {
            basketItemCheck.checked = false;
         });
      }
   });

   //장바구니 비우기
   emptytBtn.addEventListener('click', e => {
      basketList.forEach(basketItem => {
         productList.forEach(item => {
            if (item.id === basketItem.id) {
               item.quantity += basketItem.quantity;
            }
         });
      });
      basketList = [];
      makeProductList();
      makeBasketList();
      basketWishNum();
      basketItemTotal.textContent = '';
   });

   sequenceBox.addEventListener('change', e => {
      if (sequenceBox.value === 'name') {
         productList.sort(function (a, b) {
            let nameA = a.korName;
            let nameB = b.korName;
            if (nameA < nameB) {
               return -1;
            }
            if (nameA > nameB) {
               return 1;
            }
            return 0;
         });
      } else if (sequenceBox.value === 'quantity') {
         productList.sort(function (a, b) {
            if (a.quantity > b.quantity) {
               return 1;
            }
            if (a.quantity < b.quantity) {
               return -1;
            }
            return 0;
         });
      }
      makeProductList();
   });
})();
