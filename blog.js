const post_container = document.querySelector("#blog-body");

// from posts.js
posts.forEach(renderPost);

function renderPost(post) {
  const h2 = document.createElement("h2");
  h2.className = "post-title";

  const a = document.createElement("a");
  a.href = `posts/${post.id}.html`;
  a.innerText = post.title;
  h2.appendChild(a);

  post_container.appendChild(h2);
}
