import { parseHTML } from "../utils/parseHTML.js";

const photoRenderer = {
  asDetails: (photo) => {
    let html = `
    <div class="photo-details">
    <h3>${photo.title}</h3>
    <h6>${photo.description}</h6>
    <p>Uploaded by <a href="user_profile.html">User ${photo.userId}</a> on ${photo.date}</p>

    <hr>

    <img src="${photo.url}" class="img-fluid">
    </div>
    `

    return parseHTML(html);
  },
  asCard: (photo) => {
    let html = `
    <div class="col-md-4">
    <a href="./photo_detail.html?photoId=${photo.photoId}">
    <div class="card bg-dark text-light">
        <img src="${photo.url}" class="card-img-top">

        <div class="card-body">
        <h5 class="card-title text-center">${photo.title}</h5>
        <p class="card-text">${photo.description}</p>
        <p class="text-end">
            @${photo.username}
            <img src="${photo.avatarUrl}" class="photo-user-avatar">
        </p>
        </div>
    </div>
    </a>
    </div>`;

    return parseHTML(html);
  },
};

export { photoRenderer };
