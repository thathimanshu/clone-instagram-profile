let postdiv = document.querySelector(".posts");

for(let i = 1;i<=26;i++){
    let post = document.createElement('img');
    post.classList='post';
    
    post.setAttribute("src", `assets/posts/postimg (${i}).jpg`);
    postdiv.appendChild(post);


    /* post.addEventListener("mouseenter",function (){
        let above = document.createElement(div);
        div.classList.append('hovered');
    }); */
}


