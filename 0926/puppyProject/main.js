const randomImgUrl = 'https://dog.ceo/api/breeds/image/random/48';
const allBreedsUrl = 'https://dog.ceo/api/breeds/list/all';
const requestForRDI = new XMLHttpRequest();
const requestForAB = new XMLHttpRequest();
const header = document.getElementById('header');
const puppiesContainer = document.getElementById('puppies-container');
const filterInput = document.getElementById('filter-input');
const filterButton = document.getElementById('filter-button');
const filterBreed = document.getElementById('filter-breed');
const resetButton = document.getElementById('reset-button');
const moreButton = document.getElementById('more-button');
const topButton = document.getElementById('top-button');
const puppiesOnScreen = [];

window.addEventListener('load', () => {
  requestForAB.open('GET', allBreedsUrl);
  requestForAB.addEventListener('load', () => {
    const response = JSON.parse(requestForAB.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      filterBreed.appendChild(option);
    });
  });
  requestForAB.send();
});

function fetchImages() {
  requestForRDI.open('GET', randomImgUrl);
  requestForRDI.send();
}

window.addEventListener('load', () => {
  fetchImages();
  requestForRDI.addEventListener('load', () => {
    const response = JSON.parse(requestForRDI.response);
    response.message.forEach((url) => puppiesOnScreen.push(url));
    renderImages(puppiesOnScreen);
  });
});

function renderImages(urls) {
  puppiesContainer.innerHTML = '';
  urls.forEach((url) => {
    const div = document.createElement('div');
    div.classList.add('img');
    div.style.backgroundImage = `url(${url})`;
    puppiesContainer.appendChild(div);
  });
}

resetButton.addEventListener('click', () => {
  location.reload();
});

moreButton.addEventListener('click', () => {
  fetchImages();
});

topButton.addEventListener('click', () => {
  scrollTo({ top: 0 });
});

filterButton.addEventListener('click', (e) => {
  e.preventDefault();
  filterPuppies(filterInput.value);
});

filterBreed.addEventListener('change', (e) => {
  if (e.target.value === 'all') {
    renderImages(puppiesOnScreen);
    return;
  }
  filterPuppies(e.target.value);
});

function filterPuppies(q) {
  const filteredPuppies = puppiesOnScreen.filter((url) => url.match(q));
  renderImages(filteredPuppies);
}
