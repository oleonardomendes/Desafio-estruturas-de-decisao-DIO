// Solicita o nome do herói
let nome = "Goku";

// Solicita a quantidade de XP do herói
let xp = "10.000"

// Variável para armazenar o nível do herói
let nivel;

// Função para determinar a faixa de XP
function determinarFaixaXP(xp) {
  if (xp < 1.000) return 'faixa1';
  if (xp >= 1.000 && xp <= 2.000) return 'faixa2';
  if (xp >= 2.001 && xp <= 5.000) return 'faixa3';
  if (xp >= 5.001 && xp <= 7.000) return 'faixa4';
  if (xp >= 7.001 && xp <= 8.000) return 'faixa5';
  if (xp >= 8.001 && xp <= 9.000) return 'faixa6';
  if (xp >= 9.001 && xp <= 10.000) return 'faixa7';
  if (xp >= 10.001) return 'faixa8';
  return 'invalido';
}

// Determina a faixa de XP
const faixaXP = determinarFaixaXP(xp);

// Estrutura de decisão para determinar o nível com base na faixa de XP
switch (faixaXP) {
  case 'faixa1':
    nivel = "Ferro";
    break;
  case 'faixa2':
    nivel = "Bronze";
    break;
  case 'faixa3':
    nivel = "Prata";
    break;
  case 'faixa4':
    nivel = "Ouro";
    break;
  case 'faixa5':
    nivel = "Platina";
    break;
  case 'faixa6':
    nivel = "Ascendente";
    break;
  case 'faixa7':
    nivel = "Imortal";
    break;
  case 'faixa8':
    nivel = "Radiante";
    break;
  default:
    nivel = "XP inválida";
}

// Exibe a mensagem final com o nome e o nível do herói
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
