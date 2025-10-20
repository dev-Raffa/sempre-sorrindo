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
    url: 'coquetel-de-inauguracao-da-sempre-visao-em-franca-celebra-nova-fase-do-grupo-sempre',
    title:
      'Coquetel de inauguração da Sempre Visão em Franca celebra nova fase do Grupo Sempre',
    resume:
      'A clínica oftalmológica Sempre Visão inaugurou sua nova unidade em Franca com um elegante coquetel, marcando um importante passo na trajetória do Grupo Sempre.',
    imgUrl:
      'sempre-visao-chega-a-franca-com-tecnologia-e-cuidado-humanizado.JPG',
    text: `
      <h2>Coquetel de inauguração da Sempre Visão em Franca celebra nova fase do Grupo Sempre</h2>

      <p>No dia <strong>16 de outubro</strong>, a <strong>Sempre Visão</strong>, clínica oftalmológica integrante do <strong>Grupo Sempre</strong>, realizou um elegante coquetel de inauguração reunindo convidados especiais, parceiros, amigos e personalidades da região. O evento marcou a abertura oficial da nova unidade em Franca e celebrou mais um passo na trajetória de excelência do grupo, que também conta com a <strong>Sempre Sorrindo</strong>, referência em odontologia.</p>

      <p>Durante a noite, os convidados tiveram a oportunidade de conhecer as modernas instalações da clínica, projetadas para oferecer <strong>conforto</strong>, <strong>tecnologia de ponta</strong> e um <strong>atendimento humanizado</strong>. Os espaços foram cuidadosamente planejados, com equipamentos de última geração e estrutura completa para garantir a melhor experiência em saúde ocular.</p>

      <p>A nova unidade conta com <strong>centro cirúrgico próprio</strong>, permitindo a realização de procedimentos avançados como <strong>cirurgia de catarata sem fila</strong>, <strong>pterígio</strong>, <strong>cirurgias refrativas a laser</strong> e outros <strong>tratamentos oftalmológicos</strong>, reforçando o compromisso da Sempre Visão — e do Grupo Sempre — com qualidade, segurança e conveniência para os pacientes.</p>

      <p>O coquetel também foi um momento de celebração do sucesso do <strong>Grupo Sempre</strong>, que integra as marcas <strong>Sempre Visão</strong> e <strong>Sempre Sorrindo</strong>, unindo excelência em oftalmologia e odontologia. Entre conversas e networking, os convidados puderam conhecer a estrutura, os serviços e a dedicação da equipe, que mantém o padrão de qualidade e inovação que é marca do grupo.</p>

      <p>O evento foi um verdadeiro momento de <strong>união</strong>, <strong>inspiração</strong> e <strong>celebração</strong>, reafirmando o compromisso do <strong>Grupo Sempre</strong> em transformar vidas por meio da saúde, com <strong>cuidado</strong>, <strong>tecnologia</strong> e <strong>humanização</strong>.</p>
    `
  },
  {
    url: 'O-que-e-Implante-Dentario-Tire-todas-as-suas-duvidas-sobre-esse-tratamento-que-transforma-sorrisos',
    title:
      'O que é Implante Dentário? Tire todas as suas dúvidas sobre esse tratamento que transforma sorrisos',
    resume:
      'O implante dentário é um tratamento que substitui dentes perdidos, proporcionando uma nova chance de sorrir com confiança.',
    text: `
      <p>
          Se você já perdeu um ou mais dentes e está buscando uma solução definitiva, o <b>Implante Dentário</b> pode ser a resposta ideal. Este procedimento é cada vez mais procurado por quem deseja recuperar não só a estética do sorriso, mas também a saúde bucal e a qualidade de vida.
      </p>
      <p>
          Neste artigo, vamos explicar tudo o que você precisa saber sobre <b>implantes dentários:</b> o que são, como funcionam, quem pode fazer e quais são os principais benefícios.
      </p>
      <h3>O que é um Implante Dentário?</h3>
      <p>
          O implante dentário é uma estrutura feita geralmente de titânio, que é inserida no osso da mandíbula ou maxila para substituir a raiz do dente perdido. Sobre essa base é fixada uma prótese, que simula um dente natural — tanto na estética quanto na função.
      </p>
      <p>
          O resultado é um sorriso bonito, firme e funcional, que permite ao paciente voltar a comer, falar e sorrir com tranquilidade.
      </p>
      <h3>
          Quem pode colocar Implantes Dentários?
      </h3>
      <p>
          A maioria dos adultos pode realizar o procedimento.
      </p>
      <p>
          Na Sempre Sorrindo, o paciente passa por uma avaliação completa com exames de imagem e planejamento digital, garantindo máxima segurança em cada etapa.
      </p>
      <h3>
          Quais são os principais benefícios dos Implantes Dentários?
      </h3>
      <ul>
          <li>✅ Estética natural</li>
          <li>✅ Fala e mastigação restauradas</li>
          <li>✅ Prevenção da perda óssea</li>
          <li>✅ Substituição definitiva de próteses móveis</li>
          <li>✅ Melhora na autoestima e na qualidade de vida</li>
          <li>✅ Alta durabilidade</li>
      </ul>
      <h3>
          Como é feita a cirurgia de Implante Dentário?
      </h3>
      <p>A cirurgia é rápida e minimamente invasiva, realizada com anestesia local.</p>
      <p>Com os avanços tecnológicos, é possível realizar <strong>implantes com carga imediata</strong>, onde a prótese é colocada no mesmo dia da cirurgia.</p>
      <h3>
          Por que escolher a Sempre Sorrindo para fazer seu Implante Dentário?
      </h3>
      <p>
          Com 15 anos de experiência e presença em 12 unidades no interior de São Paulo, a Sempre Sorrindo se destaca por unir tecnologia, equipe altamente especializada e um atendimento humanizado que coloca o paciente no centro de tudo.
      </p>
      <p>
          Somos reconhecidos como a melhor e mais completa rede de clínicas odontológicas da região, e estamos prontos para te ajudar a recuperar o prazer de sorrir com segurança.
      </p>
      <p><strong>Agende uma avaliação gratuita e descubra se o Implante Dentário é indicado para você!</strong></p>
      <ul>
          <li>📞 (16) 98165-1441</li>
          <li><a href="https://clinicassempressorrindo.com.br" target="_blank" rel="noopener noreferrer">🌐 www.clinicassempressorrindo.com.br
      </a></li>
          <li>📍 Ribeirão Preto | Franca | Sertãozinho | Barretos | Bebedouro | Jaboticabal | Araraquara</li>
      </ul>
      <b>A vida e feita de sorrisos. E disso, a gente entende.</b>
    `,
    imgUrl: 'quem-pode-fazer-implante-dentario-clinicas-sempre-sorrindo.jpeg'
  },
  {
    url: 'Implante-Dentario-e-com-a-Sempre-Sorrindo-a-maior-rede-odontologica-do-interior-de-SP-oferece-o-tratamento-que-transforma-sorrisos',
    title:
      'Implante Dentário é com a Sempre Sorrindo: a maior rede odontológica do interior de SP oferece o tratamento que transforma sorrisos',
    resume:
      'A Sempre Sorrindo é a maior rede de clínicas odontológicas do interior paulista e referência em implantes dentários.',
    text: `
      <p>
      <strong> 
      Perdeu um ou mais dentes? Não adie a solução. Implantes dentários são a forma mais segura, moderna e definitiva de recuperar o seu sorriso — e a Sempre Sorrindo é referência absoluta no assunto.
      </strong>
      </p>
      <p>
       Com 15 anos de história, 12 unidades espalhadas pelo interior de São Paulo e prêmios que consagram sua excelência, <strong> a Sempre Sorrindo é a escolha certa para quem quer fazer um Implante Dentário com segurança, tecnologia e resultados incríveis.</strong>
      </p>
      <ul>
        <p>
            Por que fazer um Implante Dentário?
        </p>
        <li>
            ✔ Recupera a estética do sorriso
        </li>
        <li>
            ✔ Traz de volta a função da mastigação
        </li>
        <li>
            ✔ Melhora a autoestima e a fala
        </li>
        <li>
            ✔ Evita a perda óssea
        </li>
        <li>
            ✔ Substitui próteses móveis desconfortáveis
        </li>
    </ul>
    <p>
    E o melhor: é um procedimento rápido, seguro e com alto índice de sucesso, principalmente quando realizado por especialistas como os da Sempre Sorrindo.
    </p>
    <h3>
      12 unidades prontas para transformar o seu sorriso
    </h3>
    <ul>
      A Sempre Sorrindo está presente nas principais cidades do interior:
      <li>📍 Ribeirão Preto (5 clínicas)</li>
      <li>📍 Franca (2 clínicas)</li>
      <li>📍 Sertãozinho</li>
      <li>📍 Barretos</li>
      <li>📍 Bebedouro</li>
      <li>📍 Jaboticabal</li>
      <li>📍 Araraquara</li>
    </ul>
    <p>
      Com estrutura moderna, atendimento humanizado e profissionais altamente capacitados, nossas clínicas oferecem o que há de melhor em <strong>implantes dentários</strong> — tudo com preços acessíveis e condições facilitadas. São mais de 120 consultórios para garantir conforto para os nossos pacientes.
    </p>
    <h3>
      Não adie sua decisão: Implantes Dentários são um investimento em qualidade de vida
    </h3>
    <p>
      Quanto mais tempo você adia a reposição de um dente perdido, maiores são as consequências para sua saúde bucal. Faça como milhares de pessoas que já voltaram a sorrir com confiança e agende sua avaliação agora mesmo.
    </p>
    <ul> 
      <li>📞 Ligue ou envie uma mensagem para o WhatsApp: (16) 98165-1441</li>
      <li>🌐 Acesse nosso site e agende sua avaliação online: <a href="https://clinicassempresorrindo.com.br" target="_blank" rel="noopener noreferrer">clinicassempresorrindo.com.br</a></li>
      <li>📍 Visite uma de nossas clínicas e faça uma avaliação gratuita</li>
    </ul>
    <b>A vida e feita de sorrisos. E disso, a gente entende.</b>
    `,
    imgUrl: 'implante-dentario-clinicas-sempre-sorrindo.webp'
  },
  {
    url: 'sempre-visao-comemora-um-mes-de-vida-com-sucesso-absoluto',
    title: 'Sempre Visão comemora um mês de vida com sucesso absoluto',
    resume:
      'Com apenas um mês da inauguração o Dr. Raphael Brigagão e Dr. Breno Reis comemoram o sucesso da Sempre Visão.',
    text: `
    <p>Com um mês de vida <a href="https://semprevisao.com.br/" target= "__blank">Sempre Visão</a> já é motivo de orgulho para o Dr. Raphael Brigagão e Dr. Breno Reis.</p>
    <p>Já realizamos o sonho de muitos pacientes que voltaram a enxergar e estão felizes e realizados</p>.
    <p>Com sucesso absoluto nas cirurgias da catarata nós comemoramos esse marco na vida da Sempre Visão e estamos prontos para os próximos desafios.</p>
    <p>Se você sonha em realizar sua consulta vista, precisa de exames oftalmológicos ou de cirurgia de catarata sem filas e com segurança a Sempre Visão é escolhe certa.</p>
    `,
    imgUrl: 'WhatsApp Image 2025-03-16 at 12.37.22_11967203.jpg'
  },
  {
    url: 'grupo-sempre-inaugura-a-sempre-visao',
    title: 'Grupo Sempre inaugura a Sempre Visão',
    resume:
      'Aconteceu no dia 10 de Fevereiro de 2025 a inauguração da Sempre Visão, a clínica oftalmológica da sua família. Uma empresa do Grupo Sempre.',
    text: `<p>Com intuito de trazer ainda mais qualidade de vida e saúde para os pacientes das Clínicas Sempre Sorrindo, o grupo inova mais uma vez e em 2025 inaugura a <a href="https://semprevisao.com.br/" target= "__blank">Sempre Visão</a>, a clínica oftalmológica da sua família.<p/> 
    <p>Trazendo o conceito do grupo Sempre Sorrindo com serviço de excelência e tecnologia de ponta, com os melhores profissionais do mercado e uma estrutura completa, a <a href="https://semprevisao.com.br/" target= "__blank">Sempre Visão</a> conta com grande variedade de exames e um centro cirúrgico próprio o que garante para os nossos pacientes muito mais conforto, segurança e tranquilidade, possibilitando cirurgias de catarata sem filas, consultas vista e exames especializados.<p/>
    <p>Pois ver é viver. E disso, a gente entende.</p>`,
    imgUrl: 'WhatsApp Image 2025-03-16 at 11.24.51_29f2dab6.jpg'
  },
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
    'https://api-sempre-sorrindo.vercel.app/blog'
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
        remove: /[\/:;\[\]\{\}\|\*\#@!?"'.,%=\+]/g
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
