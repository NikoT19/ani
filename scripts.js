
// const apiUrl = "https://gogoanime.dev/api"; // API URL
// const animeList = document.getElementById("animeList");
// const searchInput = document.getElementById("searchInput");
// const videoModal = document.getElementById("videoModal");
// const animeVideo = document.getElementById("animeVideo");
// const closeBtn = document.querySelector(".close");

// // Поиск аниме
// searchInput.addEventListener("keyup", async (e) => {
//   const query = e.target.value;
//   if (query.length > 2) {
//     const response = await fetch(`${apiUrl}/search?keyw=${query}`);
//     const data = await response.json();
//     displayAnimeList(data);
//   }
// });

// // Отображение списка аниме
// function displayAnimeList(animeArray) {
//   animeList.innerHTML = "";
//   animeArray.forEach((anime) => {
//     const animeCard = document.createElement("div");
//     animeCard.classList.add("anime-card");
//     animeCard.innerHTML = `
//       <img src="${anime.animeImg}" alt="${anime.animeTitle}">
//       <h3>${anime.animeTitle}</h3>
//       <button onclick="watchAnime('${anime.animeId}')">Watch</button>
//     `;
//     animeList.appendChild(animeCard);
//   });
// }

// // Открытие видео
// async function watchAnime(animeId) {
//   const response = await fetch(`${apiUrl}/anime-details/${animeId}`);
//   const data = await response.json();
//   animeVideo.src = data.episodesList[0].episodeUrl;
//   videoModal.style.display = "block";
// }

// // Закрытие модального окна
// closeBtn.onclick = () => {
//   videoModal.style.display = "none";
//   animeVideo.src = "";
// };

// window.onclick = (event) => {
//   if (event.target == videoModal) {
//     videoModal.style.display = "none";
//     animeVideo.src = "";
//   }
// };
