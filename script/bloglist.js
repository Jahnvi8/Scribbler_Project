function delPost(post) {
    const del = document.getElementById(post);
    del.parentNode.removeChild(del);
}

function openPost(author, heading, content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
            author.innerText)}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}
// scribbler_project\ html\ post.html