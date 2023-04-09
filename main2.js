

let btnColor = document.getElementById('btnColor');

btnColor.addEventListener('click', cambiaColor);

let section = document.querySelector("section");

let parrafo = document.querySelector("p");


function cambiaColor() {

    // document.body.style.background = "linear-gradient(25deg, #ff0000, #0000ff, red, green, blue)";
    
    section.classList.add("sectionclass");
    parrafo.className =  "parrafo";
    parrafo.innerText = "Hola a todos!";
    document.querySelector("section").animate([
        // keyframes
        { backgroundPosition: '0% 50%' }, 
        { backgroundPosition: '100% 50%' },
        { backgroundPosition: '0% 50%' }
      ], { 
        
        duration: 19000,
        iterations: Infinity
      });

      btnColor.style.display = 'none';


   


}
