// Exercise 5 : Users

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the div and console.log it
    const container = document.getElementById('container');
    console.log(container);

    // Change the name “Pete” to “Richard”
    const lists = document.querySelectorAll('ul.list');
    lists[0].children[1].textContent = 'Richard';

    // Delete the second <li> of the second <ul>
    lists[1].removeChild(lists[1].children[1]);

    // Change the name of the first <li> of each <ul> to your name
    lists.forEach(ul => {
        ul.children[0].textContent = 'Anas';
    });

    // Add a class called student_list to both of the <ul>'s
    lists.forEach(ul => ul.classList.add('student_list'));

    // Add the classes university and attendance to the first <ul>
    lists[0].classList.add('university', 'attendance');

    // Add a “light blue” background color and some padding to the <div>
    container.style.backgroundColor = 'lightblue';
    container.style.padding = '10px';

    // Do not display the <li> that contains the text node “Dan” 
    Array.from(lists[1].children).forEach(li => {
        if (li.textContent.trim() === 'Dan') {
            li.style.display = 'none';
        }
    });

    // Add a border to the <li> that contains the text node “Richard” 
    Array.from(lists[0].children).forEach(li => {
        if (li.textContent.trim() === 'Richard') {
            li.style.border = '2px solid black';
        }
    });

    // Change the font size of the whole body 
    document.body.style.fontSize = '20px';

    // Bonus: 
    if (container.style.backgroundColor === 'lightblue') {
        const firstUl = lists[0];
        const users = Array.from(firstUl.querySelectorAll('li')).map(li => li.textContent.trim());
        if (users.length >= 2) {
            alert(`Hello ${users[0]} and ${users[1]}`);
        }
    }
});
