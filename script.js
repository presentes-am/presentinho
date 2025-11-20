const memories = [
  {
  title: "O Primeiro Dia Se Vendo Pessoalmente",
  text: "Eu ainda não vivi isso com vc, mas eu vou, eu vou te ver vindo na minha direção, meio tímida, meio nervosa, e eu vou sentir meu coração batendo rápido só de pensar que finalmente vou poder te tocar de verdade..."
},
{
  title: "O Primeiro Abraço Real",
  text: "Quando eu te abraçar pela primeira vez eu sei que minha cabeça vai simplesmente desligar, eu vou te apertar com cuidado, mas forte o suficiente pra vc sentir que eu esperei por isso o tempo inteiro..."
},
{
  title: "A Primeira Vez Te Segurando Pela Mão",
  text: "Não vai ser só mão dada, vai ser aquele toque que arrepia, aquele encaixe perfeito que faz eu pensar \"Era isso que eu tava esperando...\""
},
{
  title: "O Primeiro Beijo Pessoalmente",
  text: "Eu quero sentir vc chegando devagar, aquele beijo suave que vira um sorriso no meio, e eu juro que vou guardar esse momento como se fosse uma cena de filme..."
},
{
  title: "A Noite De Filme De Verdade Juntos",
  text: "Eu quero vc encostada em mim, roubando minha coberta, me cutucando quando eu me distraio, rindo das minhas reações exageradas e me pedindo carinho no cabelo..."
},
{
  title: "Dormir Juntos Pela Primeira Vez",
  text: "Eu quero vc deitada comigo, respirando baixinho, as pernas enroscadas nas minhas, e eu ali, bobo, olhando pra vc dormindo e pensando que nunca me senti tão em paz..."
},
{
  title: "O Primeiro Café Da Manhã Junto",
  text: "Eu quero te ver sonolenta, mexendo no cabelo, reclamando do sono e depois sorrindo pra mim como se aquilo fosse a melhor rotina do mundo..."
},
{
  title: "Nosso Primeiro Passeio De Verdade",
  text: "Andar com vc, tirando foto, rindo, falando bobeira, tropeçando de propósito pra eu te segurar, tudo isso vai virar uma memória que eu nunca vou esquecer..."
},
{
  title: "Conhecer Sua Família",
  text: "Eu vou ficar nervoso, mas vou segurar firme, porque só de pensar em fazer parte do seu mundo já me deixa feliz de um jeito que não cabe no peito..."
},
{
  title: "Você Conhecer A Minha Família",
  text: "Vou te apresentar como o amor da minha vida, e eu sei que minha mãe vai te olhar com aquele sorriso de \"Eu sabia que meu filho ia achar alguém especial\""
},
{
  title: "Nossa Primeira Viagem Juntos",
  text: "Eu quero vc dormindo no meu ombro no transporte, rindo do vento bagunçando seu cabelo, tirando foto de tudo e dizendo que quer guardar cada detalhe..."
},
{
  title: "O Dia Que Vamos Montar Nosso Cantinho",
  text: "Caixas jogadas no chão, nós dois cansados mas felizes, colocando as coisas no lugar e imaginando como vai ser nossa vida ali..."
},
{
  title: "Nosso Primeiro Jantar Em Casa",
  text: "Cozinhar com vc vai ser uma bagunça deliciosa, com música tocando, vc roubando comida da panela e eu te abraçando por trás enquanto mexe algo..."
},
{
  title: "O Dia Que Vamos Perceber Que Já Somos Família",
  text: "Entre uma risada, um abraço, um olhar longo demais, a gente vai entender que se encontrou de verdade..."
},
{
  title: "O Pedido De Casamento",
  text: "Eu não vou conseguir falar direito, minhas mãos vão tremer, e quando vc sorrir daquele jeitinho eu vou saber que tudo na minha vida fez sentido..."
},
{
  title: "Planejar O Casamento",
  text: "Vai ter bagunça, ansiedade, risada, ideias malucas, você animada escolhendo detalhes e eu bobo só admirando a mulher da minha vida..."
},
{
  title: "O Dia De Te Ver No Altar",
  text: "Eu sei que vou chorar, eu sei que minhas pernas vão tremer, eu sei que quando vc entrar eu vou perder o ar..."
},
{
  title: "A Cerimônia",
  text: "Nossas mãos juntas, sua voz tremendo, minha voz falhando, e a certeza absoluta de que eu esperei a vida inteira por esse momento..."
},
{
  title: "A Lua De Mel",
  text: "Não importa o lugar, importa vc grudada em mim, rindo, aproveitando, vivendo, como se o mundo inteiro tivesse sumido..."
},
{
  title: "Nosso Primeiro Lar Depois De Casados",
  text: "A sensação de abrir a porta e saber que é oficialmente o nosso lugar no mundo, onde cada canto vai ter um pedacinho da gente..."
},
{
  title: "Nosso Primeiro Pet",
  text: "Vc escolhendo um nome fofo, eu dizendo que o nome é estranho, e no final nós dois mimando o bichinho como se fosse um bebê..."
},
{
  title: "A Decisão De Ter Um Filho Ou Filha",
  text: "A conversa longa, sincera, cheia de sonhos, medos, e um brilho no seu olho que vai me fazer querer esse futuro mais do que tudo..."
},
{
  title: "A Primeira Foto Da Gravidez",
  text: "Eu segurando sua barriga ainda pequena, te abraçando por trás, sorrindo como se nada no mundo pudesse superar aquele momento..."
},
{
  title: "A Primeira Compra De Coisinhas Do Neném",
  text: "Vc escolhendo roupinhas pequenas demais, emocionada, e eu tentando fingir que não tô quase chorando junto..."
},
{
  title: "O Dia Do Nascimento",
  text: "Eu segurando sua mão, dizendo que vc é forte, incrível, e quando o neném nascer eu sei que vou desabar de emoção..."
},
{
  title: "A Primeira Noite Como Pais",
  text: "Cansados, com olheiras, mas sorrindo de um jeito que só quem tá vivendo um amor enorme entende..."
},
{
  title: "Nosso Primeiro Dia No Parque Com Nosso Filho Ou Filha",
  text: "Igual vc imaginou, algodão doce, foto fofa, pintura no rosto, vídeos do neném rindo, e vc dizendo que essa é a vida que sempre sonhou..."
},
{
  title: "O Primeiro Desenho Que Nosso Filho Ou Filha Vai Fazer Da Gente",
  text: "Um rabisco todo torto mas que vai ficar grudado na geladeira pra sempre..."
},
{
  title: "A Primeira Noite Tranquila Depois De Muito Tempo",
  text: "O neném dormindo, vc deitada comigo no sofá, minha mão na sua cintura, e nós dois pensando que tudo valeu a pena..."
}
];

let index = 0;
const titleEl = document.getElementById("memory-title");
const textEl = document.getElementById("memory-text");
const nextBtn = document.getElementById("next-btn");
const memoryBox = document.getElementById("memory-box");

function loadMemory() {
  memoryBox.style.opacity = 0;
  setTimeout(() => {
    titleEl.textContent = memories[index].title;
    textEl.textContent = memories[index].text;
    memoryBox.style.opacity = 1;
  }, 300);
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % memories.length;
  loadMemory();
});

loadMemory();

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();

document.documentElement.style.scrollBehavior = "smooth";