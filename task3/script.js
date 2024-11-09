document.addEventListener('DOMContentLoaded', () => {
  // Image Carousel
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Porsche_911_Turbo_S_Exclusive_Series_IMG_0698.jpg/1200px-Porsche_911_Turbo_S_Exclusive_Series_IMG_0698.jpg',
    'https://a.d-cd.net/71435c4s-960.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Porsche-img_0305.jpg',
    'https://a.d-cd.net/26dbf65s-960.jpg',
    'https://i.pinimg.com/736x/43/74/3a/43743a487d5b48061de4a0b47785345d.jpg',
    'https://images.motoroso.com/c3/a1/large-c3a1f3516f7860ced9b37415896b9535f21714bd.jpg',
  ];

  const carouselImage = document.getElementById('carousel-image');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let currentIndex = 0;

  function showImage(index) {
    carouselImage.src = images[index];
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  nextBtn.addEventListener('click', nextImage);
  prevBtn.addEventListener('click', prevImage);

  setInterval(nextImage, 3000);

  showImage(currentIndex);

  // Random Users
  const fetchUsersButton = document.getElementById('fetch-users');
  const loadingIndicator = document.getElementById('loading');
  const errorMessage = document.getElementById('error');
  const userGrid = document.getElementById('user-grid');
  const randomUsersContainer = document.getElementById('random-users-container');

  fetchUsersButton.addEventListener('click', fetchRandomUsers);

  function fetchRandomUsers() {
    loadingIndicator.style.display = 'block';
    errorMessage.style.display = 'none';
    userGrid.innerHTML = '';

    fetch('https://randomuser.me/api/?results=10')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        displayUsers(data.results);
        randomUsersContainer.classList.add('loaded');
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        errorMessage.style.display = 'block';
      })
      .finally(() => {
        loadingIndicator.style.display = 'none';
      });
  }

  function displayUsers(users) {
    users.forEach((user) => {
      const userItem = document.createElement('div');
      userItem.classList.add('user-item');

      const userImage = document.createElement('img');
      userImage.src = user.picture.thumbnail;
      userImage.alt = `${user.name.first} ${user.name.last}`;

      const userName = document.createElement('p');
      userName.textContent = `${user.name.first} ${user.name.last}`;

      const userEmail = document.createElement('p');
      userEmail.textContent = user.email;

      userItem.appendChild(userImage);
      userItem.appendChild(userName);
      userItem.appendChild(userEmail);

      userGrid.appendChild(userItem);
    });
  }
});
