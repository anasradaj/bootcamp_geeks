function myMove() {
    const elem = document.getElementById("animate");
    const container = document.getElementById("container");
    let pos = 0;
    const maxPos = container.clientWidth - elem.clientWidth;
    clearInterval(elem._intervalId);
    elem.style.left = '0px';
    elem.style.top = '0px'; 
    elem._intervalId = setInterval(frame, 1);
    function frame() {
        if (pos >= maxPos) {
            clearInterval(elem._intervalId);
            elem.dataset.atEnd = 'true';
        } else {
            pos++;
            elem.style.left = pos + "px";
            elem.dataset.atEnd = 'false';
        }
    }
}

// Drop button to drop #animate to the bottom of the container 
window.addEventListener('DOMContentLoaded', function() {
    const dropBtn = document.createElement('button');
    dropBtn.id = 'dropBtn';
    dropBtn.textContent = 'Drop me';
    dropBtn.style.marginLeft = '10px';
    document.body.insertBefore(dropBtn, document.getElementById('container').nextSibling);

    const elem = document.getElementById("animate");
    const container = document.getElementById("container");
    dropBtn.addEventListener('click', function() {
        if (elem.style.left.replace('px','') == (container.clientWidth - elem.clientWidth).toString()) {
            let pos = 0;
            const maxPos = container.clientHeight - elem.clientHeight;
            clearInterval(elem._dropIntervalId);
            elem._dropIntervalId = setInterval(function() {
                if (pos >= maxPos) {
                    clearInterval(elem._dropIntervalId);
                } else {
                    pos++;
                    elem.style.top = pos + 'px';
                }
            }, 1);
        }
    });


// Make drop button run away from mouse if not at end
    dropBtn.addEventListener('mouseenter', function() {
        const left = parseInt(elem.style.left) || 0;
        const maxPos = container.clientWidth - elem.clientWidth;
        if (left < maxPos) {
            dropBtn.style.position = 'absolute';
            dropBtn.style.left = (Math.random() * (window.innerWidth - 100)) + 'px';
            dropBtn.style.top = (Math.random() * (window.innerHeight - 50)) + 'px';
        } else {
            dropBtn.style.position = '';
            dropBtn.style.left = '';
            dropBtn.style.top = '';
        }
    });
});