import slugify from 'slugify';

export interface PageData {
  url: string;
  title: string;
  text: string;
  resume: string;
  imgUrl: string;
}

// Dados diretamente no código
export const pagesLocal: PageData[] = [
  {
    url: 'clinica-sempre-sorrindo-chega-em-araraquara-sp-com-sua-1-unidade-na-cidade',
    title:
      'Clínica Sempre Sorrindo chega em Araraquara - SP com sua 1 unidade na cidade.',
    resume: `Aconteceu no dia 1 de outubro de 2024 a inauguração da primeira unidade da
        Clínica Sempre Sorrindo na cidade de Araraquara - SP .`,
    text: `
        <p>Aconteceu no dia 1 de outubro de 2024 a inauguração da primeira unidade da
        Clínica Sempre Sorrindo na cidade de Araraquara - SP.</p><br>
  
        <p>Com 14 anos de mercado, o grupo Sempre Sorrindo já é consolidado como a maior
        e melhor rede de clínicas odontológicas do interior paulista.
        Já presente em outras 6 cidades traz agora para Araraquara o que há de mais
        moderno e eficaz no mundo da odontologia.</p><br>
  
        <p>Com os melhores dentistas do mercado, a Sempre Sorrindo atende todas as áreas
        da odontologia e é referência em implantes dentários.</p><br>
  
        <p>Em Araraquara a clínica odontológica conta com elevador panorâmico e
        equipamentos de última geração para proporcionar muito mais conforto e segurança
        aos seus pacientes que não precisam sair da clínica para realizar seus exames e
        assim ter um diagnóstico muito mais preciso.</p><br>
  
        <p>Você de Araraquara que procura por uma clínica odontológica de confiança no
        centro da cidade, venha nos fazer uma visita na Rua Nove de Julho (Rua 2), número
        602.</p><br>
  
        <p>Ou se preferir agende sua consulta pelo WhatsApp (16) 98165-1441
        Porque a vida é feita de sorrisos. E disso, a gente entende.</p>
      `,
    imgUrl: 'Foto Blog - Inauguração Araraquara.jpg'
  },
  {
    url: 'inauguracao-da-2-unidade-da-clinica-sempre-sorrindo-na-cidade-de-franca-sp',
    title:
      'Inauguração da 2º unidade da Clínica Sempre Sorrindo na cidade de Franca - SP',
    resume: `No dia 11 de novembro de 2024, a Clínica Sempre Sorrindo realizou a inauguração
  de sua 2º unidade na cidade de Franca.`,
    text: `
  <p>No dia 11 de novembro de 2024, a Clínica Sempre Sorrindo realizou a inauguração
  de sua 2º unidade na cidade de Franca.</p><br>
  
  <p>Situada em um estratégico local, em frente ao principal terminal de ônibus da
  cidade, na Rua General T elles 1255, este novo espaço foi projetado para trazer
  ainda mais conforto e acessibilidade aos nossos pacientes, reafirmando nosso
  compromisso com o cuidado e a saúde bucal de todos.</p><br>
  
  <p>Com uma estrutura completa e equipada com tecnologia de ponta, a nova clínica
  Sempre Sorrindo conta com elevador e oferece um ambiente acolhedor, pensado
  para que cada atendimento seja uma experiência única.</p><br>
  
  <p>Nossos pacientes sabem que podem confiar que estão nas mãos dos melhores
  profissionais do mercado, preparados para prestar cuidados odontológicos de
  excelência em todas as áreas da odontologia, principalmente implantes dentários
  onde a Sempre Sorrindo é referência.</p><br>
  
  <p>A inauguração foi um grande sucesso, com um grande fluxo de atendimentos
  realizados e muitos sorrisos transformados.</p><br>
  
  <p>Esta nova unidade consolida ainda mais as Clínicas Sempre Sorrindo como a
  melhor e maior rede de clínicas odontológicas do interior paulista.</p><br>
  
  <p>Agradecemos a todos que nos visitaram e confiaram no nosso trabalho!
  Se você está em busca de um atendimento odontológico de excelência, não hesite
  em nos visitar.</p><br>
  
  <p>Agende sua consulta pelo  <a
              href="https://api.whatsapp.com/send/?phone=5517996824209&text&type=phone_number&app_absent=0"
              target="_blank"
            >WhatsApp</a> e venha conhecer nossa nova
  unidade na cidade de Franca - SP .</p><br>
  <p>Pois a vida é feita de sorrisos. E disso, a gente entende.</p><br>`,
    imgUrl: 'Foto Blog - Inauguração Franca.jpg'
  },
  {
    url: 'clinicas-sempre-sorrindo-14-anos-consecutivos-top-of-mind',
    title: 'Clínicas Sempre Sorrindo, 14 anos consecutivos Top Of Mind!',
    resume: `Neste dia 08 de dezembro de 2024 aconteceu o glamuroso evento do T op Of Mind
  2024 realizado em Ribeirão Preto pelo Grupo Acontece e mais uma vez a Sempre
  Sorrindo esteve presente.`,
    text: `
  <p>Neste dia 08 de dezembro de 2024 aconteceu o glamuroso evento do T op Of Mind
  2024 realizado em Ribeirão Preto pelo Grupo Acontece e mais uma vez a Sempre
  Sorrindo esteve presente.</p><br>
  
  <p>Com 14 anos de história o grupo Sempre Sorrindo recebeu pelo 14º ano
  consecutivo o título de MELHOR CLÍNICA ODONTOLÓGICA.</p><br>
  
  <p>Para nós o título reforça que seguimos no caminho da excelência, sendo referência
  em implantes dentários e atendendo a todas as áreas da odontologia com o que há
  de mais moderno a nível mundo.</p><br>
  
  <p>O prêmio T op Of Mind 2024 vem para se juntar a diversos outros prêmios estaduais,
  nacionais e até internacionais que as Clínicas Sempre Sorrindo têm acumulado ao
  longo da sua trajetória de sucesso.</p><br>
  
  <p>Nossa constante preocupação em sermos a maior e melhor rede de clínicas
  odontológicas do interior paulista é o que traz para você, nosso paciente, uma maior
  segurança ao escolher a Sempre Sorrindo para realizar o seu sonho dos implantes
  dentários.</p><br>
  
  <p>Quer transformar o seu sorriso, recuperar sua mastigação e mudar de vida?</p>
  <p>Agende já uma consulta conosco: WhatsApp (16) 98165-1441</p><br>
  
  <p>Porque a vida é feita de sorrisos. E disso, a gente entende.</p><br>`,
    imgUrl: 'Foto Blog - Top of Mind.jpg'
  }
];

export interface IBlog {
  id: number;
  title: string;
  resume: string;
  tag?: string;
  text: string;
  date: unknown;
  time: unknown;
  home?: number;
  status: number;
  image: string;
}

export async function getNews() {
  const newsOnBlog: IBlog[] = await fetch(
    'https://api.clinicassempresorrindo.com.br/blog'
  )
    .then((data) => data.json())
    .catch(() => {
      throw new Error('Failed to fetch data');
    });

  const newsPages = pagesLocal;

  newsOnBlog.map((blog) => {
    newsPages.push({
      text: blog.text,
      title: blog.title,
      resume: blog.resume,
      url: slugify(blog.title, {
        lower: true,
        remove: /[\/:;\[\]\{\}\|\*\#@!?"'%=\+]/g
      }),
      imgUrl: blog.image
    });
  });

  return newsPages;
}

export async function generateStaticParams() {
  const pages: PageData[] = await getNews();

  return pages.map((page) => ({
    slug: page.url
  }));
}
