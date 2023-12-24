let posts = document.querySelector(".posts");

function getlikes(){
    return Math.floor(Math.random() * (200)) + 300;
}
function getComments(){
    return (Math.floor(Math.random() * (5000)) + 5000).toLocaleString();
}

function dull(){
    this.querySelector('img').style.opacity = 0.7;
    this.querySelector('.hovered').style.opacity = 1;
}
function bright(){
    this.querySelector('img').style.opacity = 1;
    this.querySelector('.hovered').style.opacity = 0;
}

function showcross(){
    let spanElement = document.createElement('span');
    spanElement.classList.add('material-symbols-outlined');
    spanElement.classList.add('cross');
    spanElement.textContent = 'close';
    document.body.appendChild(spanElement);

    spanElement.addEventListener('click',removeImg);
}

function showImg(){
    let post = this.querySelector(' img');
    let num = post.src.match(/\((\d+)\)/);

    let img = document.createElement('img');
    img.setAttribute("src", `assets/posts/postimg (${num[1]}).jpg`);
    img.classList.add('image');
    document.querySelector("body").appendChild(img);
    img.style.opacity=1;

    showcross();
}
function removeImg(){
    let img = document.querySelector('.image');
    img.remove();
    removeCross();
}
function removeCross(){
    let cross = document.querySelector('.cross');
    cross.remove();
}
for (let i = 1; i <= 26; i++) {
  let post = document.createElement('div');
  post.classList = 'post';

  let postImage = document.createElement('img');
  postImage.setAttribute("src", `assets/posts/postimg (${i}).jpg`);
  post.appendChild(postImage);

  let hoveredDiv = document.createElement('div');
  hoveredDiv.classList = 'hovered';

  hoveredDiv.innerHTML = `<span class="material-symbols-outlined hrt">favorite</span><span>${getlikes()}K</span> <span class="space"></span><span class="material-symbols-outlined">comment</span><span>${getComments()}</span>`;

  post.appendChild(hoveredDiv);

  posts.appendChild(post);

  post.addEventListener('mouseenter',dull);
  post.addEventListener('mouseleave',bright);
  post.addEventListener('click',showImg);
}


