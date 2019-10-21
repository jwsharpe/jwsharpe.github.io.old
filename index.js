const post_container = document.querySelector("#blog-body");

const posts = [
  {
    id: 0,
    title: "Implementing Simple Collision Handling with Ruby2D"
  },
  {
    id: 1,
    title: "Creating an Adaptive Card Layout with CSS Grid"
  },
  {
    id: 2,
    title: "Using Collection Select in Ruby on Rails"
  },
  ,
  {
    id: 3,
    title: "Spinning Up Desktop Apps as a Web Developer using Electron"
  },
  {
    id: 4,
    title: "Setting up Fetch Requests for a Rails API backend"
  }
];

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
