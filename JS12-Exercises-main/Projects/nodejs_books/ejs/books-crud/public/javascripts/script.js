let btnDelete = document.getElementById("btnDelete")
btnDelete.addEventListener('click', () => {
    fetch('/list', {
        method: 'delete',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
            id: 173
        })
    })
})