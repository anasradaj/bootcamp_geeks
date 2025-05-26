(function(username) {
    const userContainer = document.getElementById('userContainer');
    
    // Create user info div
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';
    
    // Create and set up profile picture
    const profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = 'https://www.w3schools.com/howto/img_avatar.png'; // Default avatar
    profilePic.alt = 'Profile Picture';
    
    // Create welcome text
    const welcomeText = document.createElement('span');
    welcomeText.textContent = `Welcome, ${username}!`;
    
    // Append elements
    userInfo.appendChild(profilePic);
    userInfo.appendChild(welcomeText);
    userContainer.appendChild(userInfo);
})("John"); 