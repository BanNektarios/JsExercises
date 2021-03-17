const socket = io('ws://localhost:8080');

socket.on('message', text => {

    const elem = document.createElement('li');
    elem.innerHTML = text;
    document.querySelector('ul').appendChild(elem)
})

document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.emit('message', text);
}