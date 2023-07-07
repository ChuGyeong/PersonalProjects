# MEGABOX

<br>

> React를 이용한 메가박스 홈페이지입니다.  
> [바로가기](https://chugyeong.github.io/toy-project/megabox/dist/)를 통하여 접속하실 수 있습니다.

<br>

## 1. 사용기술

-  REACT
-  style component

<br>

## 2. 폴더 구조

```
components
 ┣ megabox
 ┃ ┣ Mega.jsx
 ┃ ┣ MegaItem.jsx
 ┃ ┣ MegaList.jsx
 ┃ ┣ MegaModal.jsx
 ┃ ┣ MegaSearch.jsx
 ┃ ┗ MegaTabs.jsx
 ┣ styled
 ┃ ┣ Global.js
 ┗ ┗ MegaStyle.js
```

<br>

## 3. 시연 영상

![MEGABOX](./md_images/megabox.gif)

<br>

## 4. 주요 기능

<br>

> 자세한 코드는 [바로가기](https://github.com/ChuGyeong/toy-project/tree/main/megabox) 를 통하여 확인할 수 있습니다.

<br>

<details>
<summary>데이터 가져오기 &#128204;</summary>
<div markdown="1">

<br>

```js
useEffect(() => {
   const url = `https://gist.githubusercontent.com/habi-er/ab331c60d55c02deb91175ad08c77296/raw/b3cf85feff299733c284d6a20336b69d48c3eb2f/movieList.json`;
   axios
      .get(url)
      .then(res => {
         setData(res.data);
         setLoading(true);
         setError(null);
         setOriginData(res.data);
      })
      .catch(error => {
         setData([]);
         setOriginData([]);
         setLoading(false);
         setError('api 주소를 확인하세요');
      });
}, []);
```

이 기능은 영화 목록 데이터를 가져오고 상태를 관리합니다. useEffect를 사용하여 컴포넌트가 마운트 될 때마다 API 호출을 수행합니다.

</div>
</details>
<details>
<summary>검색 기능 &#128204;</summary>
<div markdown="1">

<br>

```js
const onSearch = text => {
   setData(originData.filter(item => item.movieNm.includes(text)));
};
```

이 기능은 영화 제목을 기반으로 검색하여 목록을 필터링합니다. 검색 텍스트를 입력하면 onSearch 함수가 실행되어 현재 상태의 영화 목록을 업데이트합니다.

</div>
</details>
<details>
<summary>상영 여부 필터링 기능 &#128204;</summary>
<div markdown="1">

<br>

```js
const onIsScreen = name => {
   if (name === 'ALL') {
      setData(originData);
   } else {
      setData(originData.filter(item => item.isScreening === name));
   }
};
```

이 기능은 상영 여부를 기반으로 목록을 필터링합니다. 상영 여부를 선택하면 onIsScreen 함수가 실행되고 선택한 상영 여부에 맞는 영화 목록을 상태에 업데이트합니다.

</div>
</details>
<details>
<summary>팝업 창 기능 &#128204;</summary>
<div markdown="1">

<br>

```js
const onPopUp = item => {
   setIsModal(true);
   setModalItem(item);
};
```

이 기능은 선택한 영화의 상세 정보를 팝업 모달 창에 표시합니다. 영화 목록에서 특정 영화를 선택하면 onPopUp 함수가 실행되고, 선택한 영화의 정보를 모달에 표시합니다.

</div>
</details>
<details>
<summary>좋아요 기능 &#128204;</summary>
<div markdown="1">

<br>

```js
const showLike = id => {
   setData(
      data.map(item =>
         item.movieCd === id
            ? { ...item, islike: !item.islike, likeCnt: item.islike ? item.likeCnt - 1 : item.likeCnt + 1 }
            : item,
      ),
   );
```

이 기능은 영화 목록에서 각 영화의 좋아요 기능을 수행합니다. 좋아요 버튼을 클릭하면 해당 영화의 isLike와 likeCnt가 업데이트됩니다.

</div>
</details>
<details>
<summary>모달 창 배경 이미지 설정 &#128204;</summary>
<div markdown="1">

<br>

```js
<MegaModalBox bgimg={imageURL}>
```

영화에 대한 배경 이미지를 표시합니다. bgimg 속성 값을 통해 스타일링됩니다.

</div>
</details>

<br>

## 5. 프로젝트 목적

<br>

이 프로젝트는 영화 정보 및 검색 웹 애플리케이션의 일부 컴포넌트를 구현하는 것을 목적으로 합니다. 전체 프로젝트에서 다음과 같은 목적들을 달성하기 위해 작성되었습니다.

-  **영화 정보 제공**
   다양한 영화 정보를 제공하여 사용자들이 원하는 정보를 쉽게 찾을 수 있게 합니다. 영화의 상세 정보, 트레일러, 순위, 개봉일 등 다양한 정보를 제공할 수 있습니다.
-  **영화 검색 기능**  
   사용자가 영화 제목을 검색하여 관련된 영화 목록을 확인할 수 있는 기능을 제공합니다. 이를 통해 원하는 영화를 빠르게 찾을 수 있게 합니다.
-  **탭 메뉴를 통한 정렬 및 필터링**  
   다양한 기준에 따라 영화 목록을 정렬하고 필터링하는 기능을 제공합니다. 사용자는 원하는 기준에 따라 영화 목록을 손쉽게 찾을 수 있습니다.

이러한 목적을 통해 이 프로젝트는 영화 정보를 검색, 확인하는 것을 돕는 웹 애플리케이션을 제공합니다. 사용자들이 효율적으로 원하는 정보를 얻을 수 있도록 도움을 줍니다.
