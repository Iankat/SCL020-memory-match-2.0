beforeEach(() => {
    jest.resetModules();
  });

test('starts game and gets the name after a click', () => {
  
  document.body.innerHTML =`
    <body class="index">
        <div id="root">
            <h1>Aprende jugando</h1>
            <div class="playButton">
            <input required type="text" id="name" placeholder="Ingresa tu nombre" />
            <button id="play">Jugar</button>
            </div>
        </div>
    </body>
    `;
    //Se agrega el nombre para testear
    document.getElementById("name").value = "Ricardo"

    //Disponibiliza las funciones que vamos a testear
    require("./DOMfunctions.js")

    //genera un click en "play", lo que debería gatillar playGame, lo que debería guardar el nombre en localStorage
    document.getElementById("play").dispatchEvent(new MouseEvent('click'),{bubbles: true})
    
    //localStorage debería tener el nombre testeado
    expect(localStorage.getItem("name")).toBe("Ricardo");
  });