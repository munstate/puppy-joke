/*async function fetchJokesAndDogImage(category) {
  try {
    // Chuck Norris Joke 가져오기
    let jokeUrl = 'https://api.chucknorris.io/jokes/random';
    if (category) {
      jokeUrl += `?category=${category}`;
    }
    const jokeResponse = await fetch(jokeUrl);
    const jokeData = await jokeResponse.json();

    // Dog Image 가져오기
    const dogResponse = await fetch('https://api.thedogapi.com/v1/images/search');
    const dogData = await dogResponse.json();

    // Chuck Norris Joke와 Dog Image를 화면에 표시
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = `<p>${jokeData.value}</p>`; // Chuck Norris Joke를 추가
    const dogImage = document.getElementById('dog-image');
    dogImage.src = dogData[0].url; // Dog Image를 화면에 표시
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 카테고리 버튼에 클릭 이벤트 추가
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    fetchJokesAndDogImage(category);
  });
});*/

/*async function fetchData(category) {
  try {
    let jokeUrl = 'https://api.chucknorris.io/jokes/random' ;
    if(cartegory) {
      jokeUrl += `?category=${category}`;
    }

    const [jokeResponse, dogResponse] = await Promise.all([
      fetch(jokeUrl),
      fetch('https://api.thedogapi.com/v1/images/search')
    ]); //API가져왔자나

    const jokeData = await jokeResponse.json();
    const dogData = await dogResponse.json();

    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerText = jokeData.value; // Chuck Norris 농담을 화면에 출력

    const dogImage = document.getElementById('dog-image');
    dogImage.src = dogData[0].url; // 강아지 사진을 화면에 출력
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

//카테고리 선택시 해당 카테고리의 데이터를 가져와 화면에 출력
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    fetchData(category);*/

  /*async function fetchData() {
    try {
      const [jokeResponse, dogResponse] = await Promise.all([
        fetch('https://api.chucknorris.io/jokes/random'),
        fetch('https://api.thedogapi.com/v1/images/search')
      ]);

      const jokeData = await jokeResponse.json();
      const dogData = await dogResponse.json();

      const jokeContainer = document.getElementById('joke-container');
      jokeContainer.innerText = jokeData.value; // Chuck Norris 농담을 화면에 출력
      const dogImage = document.getElementById('dog-image');
      dogImage.src = dogData[0].url; // 강아지 사진을 화면에 출력
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
    
// 버튼 클릭 시 새로운 데이터 가져오기
document.getElementById('fetch-data-btn').addEventListener('click', () => {
  fetchData();
});

// 페이지 로드 시 한 번 데이터를 가져옴
fetchData();
*/
async function fetchData() {
  try {
    const [jokeResponse, dogResponse] = await Promise.all([
      fetch('https://api.chucknorris.io/jokes/random'),
      fetch('https://api.thedogapi.com/v1/images/search')
    ]);

    const jokeData = await jokeResponse.json();
    const dogData = await dogResponse.json();

    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerText = jokeData.value; // Chuck Norris 농담을 화면에 출력

    const dogImage = document.getElementById('dog-image');
    dogImage.src = dogData[0].url; // 강아지 사진을 화면에 출력
    
    const fetchdatabtn = document.getElementById('fetch-data-btn').addEventListener('click', fetchData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


  

