async function fetchUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      if (!response.ok) {
         new Error("Ma'lumotni yuklashda xatolik");
      }
      const data = await response.json();
      const user = data.results[0];
  
      console.log(`Ism: ${user.name.first} ${user.name.last}`);
      console.log(`Jinsi: ${user.gender}`);
      console.log(`Email: ${user.email}`);
      console.log(`Rasm: ${user.picture.large}`);
  
      document.getElementById('user-card').innerHTML = `
        <img src="${user.picture.large}" alt="User Image">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p><strong>Jinsi:</strong> ${user.gender}</p>
        <p><strong>Email:</strong> ${user.email}</p>
             <button onclick="fetchUser()">Change user</button>
      `;
    } catch (error) {
      console.error('Xatolik yuz berdi:', error);
      document.getElementById('user-card').innerHTML = `<p style="color: red; text-align: center;">Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.</p>`;
    }
  }
  
  document.body.innerHTML = `
    <div class="user-container">
      <div id="user-card" class="user-card"></div>
 
    </div>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #609d9f;
        font-family: Arial, sans-serif;
      }
      .user-container {
        text-align: center;
      }
      .user-card {
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
        width: 300px;
        margin-bottom: 20px;
      }
      .user-card img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
        margin-bottom: 15px;
      }
      .user-card h2 {
        margin: 10px 0;
        color: #333;
      }
      .user-card p {
        color: #666;
        margin: 5px 0;
      }
      button {
        background-color: blue;
        color: white;
        border: none;
        padding: 7px 20px;
        font-size: 16px;
        cursor: pointer;
        border-radius: 5px;
        transition: background 0.3s;
      }
      button:hover {
        background-color: darkblue;
      }
    </style>
  `;
  
  fetchUser();
  
  
