let mode = 'light';
let button = document.getElementById('button');
let body = document.querySelector('body');

button.onclick = function () {
    if (mode == 'light') {
        button.classList.remove('light-element');
        button.classList.add('dark-element');
        body.classList.remove('light-body');
        body.classList.add('dark-body');
        mode = 'dark';
    } else {
        button.classList.remove('dark-element');
        button.classList.add('light-element');
        body.classList.remove('dark-body');
        body.classList.add('light-body');
        mode = 'light';
    }
}
