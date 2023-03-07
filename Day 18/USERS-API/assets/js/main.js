document.getElementById("load-user").addEventListener("click", function() {
  const countText = document.getElementById("user-count").value;
  const count = parseInt(countText);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data = data.slice(0, count);
      const userContainer = document.getElementById("users");
      userContainer.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const p = document.createElement("p");
        p.innerHTML = `
            <p class='user'>Name: <strong>${user.name}</strong> 
                <button onclick="getUserDetail(${user.id})" class="btn btn-outline-light">Get Details- ${user.id}</button>
            </p>`;
        userContainer.appendChild(p);
      }
    });
});

function getUserDetail(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const detail = document.getElementById("user-detail");
      detail.innerHTML = `
                <h2>Name: ${data.name}</h2>
                <h5>Email: ${data.email}</h5>
                <h5>Phone: ${data.phone}</h5>
            `;
    });
}
