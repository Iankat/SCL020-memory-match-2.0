const playGame = document.getElementById("play").onclick = function () {
    location.href = "start.html";
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name)};

    const showName = window.onload = function () {
        document.getElementById("hi").innerHTML = `¡Hola ${localStorage.getItem(
          "name"
        )}!`;
    };

export {playGame, showName}; 