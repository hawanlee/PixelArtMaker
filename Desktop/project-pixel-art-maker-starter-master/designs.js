// Select color input
var color = '#000000';
document.getElementById('colorPicker').addEventListener('change', function () {
    color = document.getElementById('colorPicker').value;
    console.log(color);
})

// Select size input
const input = document.querySelectorAll('input')
const table = document.querySelector('#pixelCanvas');
console.log(table);
var add = function (ev) {
    ev.preventDefault();
    input[2].remove();
    var s = [];
    s[0] = input[0].value;
    s[1] = input[1].value;
    makeGrid(s[0], s[1]);
}

input[2].addEventListener('click', add);

// When size is submitted by the user, call makeGrid()
function makeGrid(h, w) {
    var tr_build;
    for (let i = 0; i < h; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < w; j++) {
            tr_build = document.querySelectorAll('tr');
            const td = document.createElement('td');
            tr_build[i].appendChild(td);
        }
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            var ij = document.querySelectorAll('tr')[i].querySelectorAll('td')[j];
            ij.addEventListener('click', function () {
                document.querySelectorAll('tr')[i].querySelectorAll('td')[j].style.backgroundColor = color;
            })
            ij.addEventListener('dblclick', function () {
                document.querySelectorAll('tr')[i].querySelectorAll('td')[j].style.backgroundColor = 'white';
            })
        }
    }
}

