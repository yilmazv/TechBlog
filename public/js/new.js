const newFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const titleEl = document
    .querySelector(`input[name="post-title"]`)
    .value.trim();
  const contentEl = document
    .querySelector(`input[name="content"]`)
    .value.trim();

  // Send a POST request to the API endpoint
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify({ titleEl, contentEl }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, redirect the browser to the profile page
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
