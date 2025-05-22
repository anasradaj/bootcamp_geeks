// Exercise 6 : Change the navbar

document.addEventListener('DOMContentLoaded', function() {
    // Change the id attribute from navBar to socialNetworkNavigation
    const navBar = document.getElementById('navBar');
    navBar.setAttribute('id', 'socialNetworkNavigation');

    // Add a new <li> with text 'Logout' to the <ul>
    const ul = navBar.querySelector('ul');
    const newLi = document.createElement('li');
    const logoutText = document.createTextNode('Logout');
    newLi.appendChild(logoutText);
    ul.appendChild(newLi);

    // Use firstElementChild and lastElementChild to get first and last <li>
    const firstLi = ul.firstElementChild;
    const lastLi = ul.lastElementChild;
    console.log('First link text:', firstLi.textContent.trim());
    console.log('Last link text:', lastLi.textContent.trim());
});
