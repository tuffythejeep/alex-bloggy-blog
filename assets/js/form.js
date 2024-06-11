//created variables
const blogForm = document.getElementById("form");

// adding and event to the sumbit button
blogForm.addEventListener("create blog", function (event) {
  event.preventDefault();

  //created variables
  const title = document.getElementById("blog title").value;
  const content = document.getElementById("blog content").value;
  const username = document.getElementById("username").value;

  if (username === "" || title === "" || content === "") {
    event.preventDefault(); // Prevent form submission
  } else {
    const formData = {
      title: title,
      content: content,
      username: username,
    };

    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(formData);
    // Store the updated posts array in localStorage
    localStorage.setItem("posts", JSON.stringify(posts));

    // Redirect to the blog.html
    window.location.href = "blog.html";
  }
});
