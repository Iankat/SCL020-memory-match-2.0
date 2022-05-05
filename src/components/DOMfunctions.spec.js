/* import {showName}  from "./DOMfunctions.js";

test('shows name', () => {
  require("./DOMfunctions.js");  
  document.body.innerHTML =`
  <h2 class="title" id="hi">¡Hola !</h2>
    `;
  

    const getUserName = document.getElementById("hi");
    let name = document.getElementById("name").value;
    getUserName.value = 'Hola Ana';
    expect(name.innerHTML).toBe('<div>Hola Ana</div>');
  }); */

  beforeEach(() => {
    jest.resetModules();
  });

test('starts game and gets the name after a click', () => {
  
  //ToDo: Importar el start.html en vez de copiar y pegar el contenido (OPCIONAL)
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


    //ToDo: Probablemente esto está generando el console.error, revisar una forma alternativa de emular un click.
    //genera un click en "play", lo que debería gatillar playGame, lo que debería guardar el nombre en localStorage
    document.getElementById("play").click()
    
    //Esto hace exactamente lo mismo que la linea anterior
    //document.getElementById("play").dispatchEvent(new MouseEvent('click'),{bubbles: true})
    
    //localStorage debería tener el nombre testeado
    expect(localStorage.getItem("name")).toBe("Ricardo");
  });