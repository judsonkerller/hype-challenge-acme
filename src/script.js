let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');

const verbosPermitidos = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim", "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor", "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre", "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca", "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero", "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte", "Canga"];

const adjetivosPermitidos = ["prepotente", "valioso", "legítimo", "desleixado", "natural", "inteligente", "disciplinado", "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo", "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio", "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor", "perfeccionista", "qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado", "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado", "windsurfista", "falso", "melhor", "terno"];

function getRandomTitle(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

btnRandom.addEventListener('click', () => {
  let index = getRandomTitle(0, verbosPermitidos.length-1, adjetivosPermitidos.length-1);
  result.innerText = verbosPermitidos[index] + " " +  adjetivosPermitidos[index];
});