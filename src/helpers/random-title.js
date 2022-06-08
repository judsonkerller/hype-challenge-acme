const verbosPermitidos = ["Armário", "Navio", "Mala", "Base", "Hidroavião", "Revista", "Carretel", "Minissaia", "Tamborim", "Andador", "Geladeira", "Estátua", "Rolo", "Crachá", "Peneira", "Bafômetro", "Desentupidor", "Guarda-chuva", "Espanador", "Escudo", "Raquete", "Vaso sanitário", "Lancheira", "Cofre", "Helióstato", "Medalha", "Foguete", "Lata", "Sintetizador", "Grampo", "Bucha", "Catraca", "Alfinete", "Caneca", "Fita", "Moeda", "Gel", "Maquete", "Interfone", "Gaveta", "Helicóptero", "Vela de cera", "Quimono", "Necessaire", "Machado", "Tecido", "Vareta de freio", "Obra de arte", "Canga"];

const adjetivosPermitidos = ["prepotente", "valioso", "legítimo", "desleixado", "natural", "inteligente", "disciplinado", "louvável", "amargurado", "honesto", "odioso", "vergonhoso", "horroroso", "magnífico", "gordo", "romântico", "sublime", "mesquinho", "injusto", "medroso", "otário", "quente", "intenso", "Sábio", "zeloso", "desapegado", "faceiro", "companheiro", "empenhado", "espantoso", "traidor", "perfeccionista", "qualificado", "feio", "tolerante", "orgulhoso", "ignorante", "lutador", "desejado", "exigente", "nostálgico", "próspero", "compreensivo", "excelente", "estourado", "malvado", "windsurfista", "falso", "melhor", "terno"];


const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

const randomTitle = () => {
  const verboLength = verbosPermitidos.length;
  const adjetivoLength = adjetivosPermitidos.length;

  const verboIndex = Math.ceil(getRandomNumber(0, verboLength - 1));
  const verbo = verbosPermitidos[verboIndex];

  const adjetivoIndex = Math.ceil(getRandomNumber(0, adjetivoLength - 1));
  const adjetivo = adjetivosPermitidos[adjetivoIndex];

  return `${verbo} ${adjetivo}`;
};

export default randomTitle;