const $btn = document.querySelector('#search-btn');
const $text = document.querySelector('#search-text');
const $result = document.querySelector('#result');
const $moreBtn = document.querySelector('#more-search-btn');
const url = 'https://dapi.kakao.com/v2/search/web';
const headers = { Authorization: 'KakaoAK 353604713f91789f535f97190d765a6d' };
let page; // 현재 페이지

function getUl(data) {
  // ul 반환
  const { documents } = data;

  const li = documents.map((doc) => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a>`;
  });

  return `<ul class="list-group list-group-flush">${li.join('')}</ul>`;
}

// 검색 성공
function successSearch(data) {
  $result.innerHTML = getUl(data);
}

// 더 보기 성공
function successMore(data) {
  const { meta } = data;

  // 현재 마지막 페이지인지 확인
  if (meta.is_end) {
    // eslint-disable-next-line no-alert
    alert('마지막 페이지 입니다');
  } else {
    $result.innerHTML += getUl(data);
  }
}

function error() {
  // eslint-disable-next-line no-console
  console.log('데이터를 가져올 수 없습니다');
}

// 검색
function search() {
  const { value } = $text;

  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');

    return false;
  }

  page = 1; // page를 1로 초기화

  fetch(`${url}?query=${value}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(successSearch)
    .catch(error);

  return true;
}

// 더 보기
function moreView() {
  const { value } = $text;

  if (value === '') {
    // eslint-disable-next-line no-alert
    alert('검색어를 입력하세요');

    return false;
  }

  page += 1; // 1page 증가

  fetch(`${url}?query=${value}&page=${page}`, { headers })
    .then((res) => res.json())
    .then(successMore)
    .catch(error);

  return true;
}

$btn.addEventListener('click', search);
$moreBtn.addEventListener('click', moreView);
