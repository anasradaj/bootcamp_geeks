// Coloring Game - Original Logic with Dynamic Generation

document.addEventListener('DOMContentLoaded', function() {
    let color = null;
    let mousedown = false;

    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
    const paletteColors = [
        'red', 'orange', 'yellow',
        'green', 'blue', 'purple',
        'black', 'white', 'brown',
        'pink', 'cyan', 'lime',
        'navy', 'gold', 'gray',
        'maroon', 'teal', 'olive',
        'aqua', 'magenta', 'chocolate'
    ];
    const totalSlots = 24;

    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear';
    sidebar.appendChild(clearBtn);

    for (let i = 0; i < paletteColors.length; i++) {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = paletteColors[i];
        colorDiv.style.cursor = 'pointer';
        sidebar.appendChild(colorDiv);
    }
    for (let i = paletteColors.length + 1; i < totalSlots; i++) {
        const empty = document.createElement('div');
        sidebar.appendChild(empty);
    }

    main.innerHTML = '';
    const rows = 24;
    const cols = 60;
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        main.appendChild(cell);
        cell.style.cursor = 'crosshair';
    }

    let body = document.getElementsByTagName('body')[0];
    let color_blocks = document.querySelectorAll('#sidebar > div');
    let fill_blocks = document.querySelectorAll('#main > div');
    let clear_button = document.getElementsByTagName('button')[0];

    clear_button.addEventListener('click', function(){
        for (let fill_block of fill_blocks){
            fill_block.style.backgroundColor = 'white';
        }
    });

    body.addEventListener('mousedown', function(){
        mousedown = true;
    });
    body.addEventListener('mouseup', function(){
        mousedown = false;
    });

    for (let color_block of color_blocks){
        color_block.addEventListener('click', function(event){
            color = event.target.style.backgroundColor;
        });
    }

    for (let fill_block of fill_blocks){
        fill_block.addEventListener('mousedown', function(event){
            if (color != null) event.target.style.backgroundColor = color;
        });
        fill_block.addEventListener('mouseover', function(event){
            if (mousedown && color != null) event.target.style.backgroundColor = color;
        });
    }

});
