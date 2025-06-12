// Blog API Frontend JS
const postsDiv = document.getElementById('posts');
const form = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const postIdInput = document.getElementById('post-id');
const submitBtn = document.getElementById('submit-btn');
const cancelBtn = document.getElementById('cancel-btn');

async function fetchPosts() {
  const res = await fetch('/posts');
  const posts = await res.json();
  postsDiv.innerHTML = '';
  posts.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
      <div class="post-title">${escapeHtml(post.title)}</div>
      <div class="post-content">${escapeHtml(post.content)}</div>
      <div class="post-actions">
        <button onclick="editPost(${post.id})">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      </div>
    `;
    postsDiv.appendChild(postDiv);
  });
}

form.onsubmit = async e => {
  e.preventDefault();
  const id = postIdInput.value;
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  if (!title || !content) return;
  if (id) {
    await fetch(`/posts/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
  } else {
    await fetch('/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content })
    });
  }
  form.reset();
  postIdInput.value = '';
  submitBtn.textContent = 'Add Post';
  cancelBtn.style.display = 'none';
  fetchPosts();
};

window.editPost = function(id) {
  fetch(`/posts/${id}`)
    .then(res => res.json())
    .then(post => {
      postIdInput.value = post.id;
      titleInput.value = post.title;
      contentInput.value = post.content;
      submitBtn.textContent = 'Update Post';
      cancelBtn.style.display = 'inline-block';
    });
};

window.deletePost = async function(id) {
  if (!confirm('Delete this post?')) return;
  await fetch(`/posts/${id}`, { method: 'DELETE' });
  fetchPosts();
};

cancelBtn.onclick = () => {
  form.reset();
  postIdInput.value = '';
  submitBtn.textContent = 'Add Post';
  cancelBtn.style.display = 'none';
};

function escapeHtml(str) {
  return str.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
}

fetchPosts();
