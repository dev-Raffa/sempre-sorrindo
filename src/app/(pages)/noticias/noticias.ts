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
    title:
      'Implante Dentário: O Guia Completo para Recuperar seu Sorriso com Confiança',
    resume:
      'O que é um implante dentário? Quem pode fazer? Descubra as vantagens, como funciona a cirurgia de implante, os cuidados e responda suas dúvidas. Um guia completo para pacientes que buscam um sorriso novo e saudável.',
    url: 'Implante-Dentario-O-Guia-Completo-para-Recuperar-seu-Sorriso',
    imgUrl:
      'Mulher com sorriso saudável e completo, demonstrando o resultado de um implante dentário..png',
    text: `
                <article>
                <header>
                    <h1>Implante Dentário: O Guia Completo para Recuperar seu Sorriso com Confiança</h1>
                </header>
                
                <section id="o-que-e">
                    <p>Perder um ou mais dentes afeta não apenas a estética do sorriso, mas também a mastigação, a fala e a autoestima. Felizmente, o <strong>implante dentário</strong> é a solução mais moderna, segura e duradoura para substituir dentes perdidos, proporcionando um resultado completamente natural.</p>
                    <p>Neste guia completo, vamos explicar tudo o que você precisa saber sobre o tratamento com implantes dentários, desde o que são até como é o procedimento e os cuidados necessários.</p>
                </section>

                <section id="definicao">
                    <h2>O que é um Implante Dentário?</h2>
                    <p>O implante dentário é um pequeno pino, geralmente feito de <strong>titânio</strong> (um material biocompatível, que não causa rejeição), que funciona como uma raiz de dente artificial. Ele é fixado cirurgicamente no osso maxilar ou mandibular, no local onde o dente original foi perdido.</p>
                    <p>Após um período de cicatrização, chamado <strong>osseointegração</strong> (quando o osso se funde ao implante), uma coroa (prótese dentária) é parafusada ou cimentada sobre esse pino. O resultado é um dente novo, com aparência, sensação e função idênticas às de um dente natural.</p>
                </section>

                <section id="vantagens">
                    <h2>Principais Vantagens do Implante Dentário</h2>
                    <p>Optar por um implante dentário oferece benefícios significativos em comparação com outras soluções, como pontes móveis (dentaduras) ou pontes fixas:</p>
                    <ul>
                        <li><strong>Resultado Natural e Estético:</strong> A prótese sobre implante é feita sob medida, imitando perfeitamente a cor e o formato dos seus dentes naturais.</li>
                        <li><strong>Conforto e Segurança:</strong> Por ser fixo, o implante não se move durante a fala ou mastigação, eliminando o constrangimento de próteses soltas.</li>
                        <li><strong>Durabilidade:</strong> Com os cuidados adequados, um implante dentário pode durar a vida toda.</li>
                        <li><strong>Preservação Óssea:</strong> O implante estimula o osso, impedindo a reabsorção óssea que ocorre naturalmente após a perda de um dente.</li>
                        <li><strong>Melhora na Mastigação:</strong> Permite mastigar todos os alimentos com confiança, melhorando a digestão e a saúde geral.</li>
                        <li><strong>Não Desgasta Dentes Vizinhos:</strong> Ao contrário das pontes fixas, o implante não exige o desgaste dos dentes saudáveis ao lado.</li>
                    </ul>
                </section>

                <section id="quem-pode-fazer">
                    <h2>Quem Pode Fazer um Implante Dentário?</h2>
                    <p>Qualquer pessoa com boa saúde geral e que tenha perdido um ou mais dentes pode ser candidata a um implante. Os principais requisitos são:</p>
                    <ul>
                        <li><strong>Saúde Bucal:</strong> As gengivas devem estar saudáveis, sem doença periodontal ativa.</li>
                        <li><strong>Estrutura Óssea:</strong> É necessário ter uma quantidade e qualidade óssea suficiente para suportar o implante. Caso contrário, pode ser necessário um <strong>enxerto ósseo</strong>.</li>
                        <li><strong>Saúde Geral:</strong> Pacientes com diabetes ou hipertensão controladas geralmente podem realizar o procedimento. Pacientes fumantes têm uma taxa de sucesso menor e devem ser avaliados com mais critério.</li>
                    </ul>
                    <p>Uma avaliação detalhada com exames de imagem (como tomografia) é essencial para confirmar a viabilidade do tratamento.</p>
                </section>

                <section id="como-e-feito">
                    <h2>Como é Feita a Cirurgia de Implante Dentário? (O Passo a Passo)</h2>
                    <p>O tratamento com implante dentário é dividido em algumas etapas principais:</p>
                    <ol>
                        <li><strong>Planejamento:</strong> O dentista realiza uma avaliação completa com exames de imagem (Tomografia Computadorizada) para planejar a cirurgia, determinando a posição exata e o tamanho do implante.</li>
                        <li><strong>Cirurgia de Instalação:</strong> O procedimento é feito no consultório com anestesia local. O cirurgião-dentista faz uma pequena incisão na gengiva, prepara o osso e insere o pino de titânio.</li>
                        <li><strong>Osseointegração:</strong> Esta é a fase de cicatrização, que dura de 3 a 6 meses. Durante esse período, o osso se integra firmemente ao implante.</li>
                        <li><strong>Instalação da Prótese (Coroa):</strong> Após a osseointegração, o dentista reabre (se necessário) a gengiva, instala um conector (pilar) e, por fim, fixa a coroa dentária definitiva, feita sob medida.</li>
                    </ol>
                    <p>Em alguns casos, é possível realizar a <strong>carga imediata</strong>, onde uma coroa provisória é colocada no mesmo dia da cirurgia, especialmente em áreas estéticas.</p>
                </section>

                <section id="agendamento-cta">
                    <h2>Recupere a Função e a Estética do seu Sorriso</h2>
                    <p>O implante dentário é um investimento na sua saúde e qualidade de vida. Se você sofre com a falta de dentes, não espere mais.</p>
                    <a href="#agendamento" class="cta-button">Agende sua Avaliação para Implante Dentário</a>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes sobre Implantes Dentários</h2>
                    
                    <details class="faq-item">
                        <summary>A cirurgia de implante dentário dói?</summary>
                        <p>Não. A cirurgia é realizada com anestesia local, e o paciente não sente dor. O pós-operatório é geralmente tranquilo, com leve desconforto controlado por analgésicos e anti-inflamatórios prescritos pelo dentista.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Existe rejeição ao implante dentário?</summary>
                        <p>O termo "rejeição" não é correto, pois o titânio é biocompatível. O que pode ocorrer, embora seja raro (cerca de 2-5% dos casos), é uma falha na osseointegração, geralmente causada por infecção, tabagismo ou sobrecarga no implante antes do tempo.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quanto tempo dura todo o tratamento?</summary>
                        <p>O tempo total varia muito. Desde a cirurgia até a colocação da coroa final, o processo pode levar de 3 a 9 meses, dependendo do tempo de osseointegração e da necessidade de enxerto ósseo prévio.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Qual o preço de um implante dentário?</summary>
                        <p>O custo varia amplamente dependendo de fatores como o tipo de implante, a marca, a necessidade de enxerto ósseo, o tipo de prótese (coroa) e os honorários do profissional. Por isso, é fundamental uma avaliação individualizada para obter um orçamento preciso.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quais os cuidados que devo ter após o implante?</summary>
                        <p>Os cuidados são os mesmos de um dente natural: boa higiene bucal (escovação e fio dental) e visitas regulares ao dentista (a cada 6 meses) para manutenção e limpeza profissional.</p>
                    </details>
                </section>
            </article>
        `
  },
  {
    title:
      'Pós-Operatório do Implante Dentário: Cuidados, Alimentação e Recuperação',
    resume:
      'Fez um implante dentário? Saiba o que esperar do pós-operatório. Explicamos os cuidados essenciais, o que comer nos primeiros dias (alimentação líquida e pastosa), como higienizar e os sinais de alerta.',
    url: 'Pos-Operatorio-Implante-Dentario-Cuidados-Alimentacao-Recuperacao',
    imgUrl:
      'Alimentação líquida e pastosa para pós-operatório, incluindo uma tigela de sopa, iogurte e gelatina.png',
    text: `
                <article>
                <header>
                    <h1>Pós-Operatório do Implante Dentário: Guia de Cuidados para uma Recuperação Tranquila</h1>
                </header>
                
                <section id="introducao">
                    <p>A cirurgia de instalação do implante dentário é uma etapa crucial, mas o sucesso do tratamento depende diretamente dos <strong>cuidados no pós-operatório</strong>. Seguir as orientações do seu dentista à risca é fundamental para garantir uma cicatrização adequada, evitar infecções e permitir que a osseointegração ocorra perfeitamente.</p>
                    <p>Este guia foca exclusivamente no que você precisa fazer após o procedimento para ter uma recuperação rápida e sem complicações.</p>
                </section>

                <section id="primeiras-horas">
                    <h2>As Primeiras 48 Horas: A Fase Crítica</h2>
                    <p>Os dois primeiros dias após a cirurgia são os mais importantes para controlar o inchaço e o desconforto. Siga estas etapas:</p>
                    <ul>
                        <li><strong>Repouso Absoluto:</strong> Evite qualquer esforço físico, como trabalhar, carregar peso ou praticar esportes. Mantenha a cabeça mais elevada que o corpo ao deitar (use dois travesseiros).</li>
                        <li><strong>Compressas de Gelo:</strong> Aplique compressas de gelo na bochecha, do lado externo da cirurgia. Faça aplicações de 15 minutos, com pausas de 15 minutos, nas primeiras 24 a 48 horas. Isso reduz o inchaço (edema) e o sangramento.</li>
                        <li><strong>Medicação:</strong> Tome rigorosamente os medicamentos prescritos pelo seu dentista (antibióticos, anti-inflamatórios e analgésicos) nos horários corretos.</li>
                        <li><strong>Não Cuspa ou Bocheche:</strong> Nas primeiras 24 horas, evite cuspir ou fazer bochechos vigorosos. Isso pode desalojar o coágulo sanguíneo, essencial para a cicatrização, e causar sangramento.</li>
                        <li><strong>Não Fume:</strong> O cigarro é o maior inimigo da cicatrização. A nicotina prejudica a circulação sanguínea e aumenta drasticamente o risco de infecção e falha do implante.</li>
                    </ul>
                </section>

                <section id="alimentacao">
                    <h2>O que Comer Após a Cirurgia de Implante Dentário?</h2>
                    <p>A alimentação é uma das maiores dúvidas. A dieta deve ser líquida ou pastosa e, principalmente, <strong>fria ou morna</strong> nos primeiros 2 a 3 dias.</p>
                    
                    <h3>Dias 1-3 (Dieta Líquida/Pastosa Fria)</h3>
                    <ul>
                        <li>Sorvetes (sem pedaços)</li>
                        <li>Iogurtes e vitaminas (sem sementes)</li>
                        <li>Sopas frias (como gaspacho) ou mornas (batidas no liquidificador)</li>
                        <li>Purês frios ou mornos (batata, mandioquinha)</li>
                        <li>Gelatinas e pudins</li>
                    </ul>
                    <p><strong>Importante:</strong> Não utilize canudos, pois o movimento de sucção pode causar sangramento.</p>

                    <h3>Dias 4-7 (Dieta Pastosa Morna)</h3>
                    <p>Conforme o desconforto diminui, você pode evoluir para alimentos mais consistentes, mas ainda macios:</p>
                    <ul>
                        <li>Ovos mexidos</li>
                        <li>Arroz bem cozido (papa)</li>
                        <li>Peixes cozidos ou desfiados</li>
                        <li>Macarrão bem cozido</li>
                        <li>Frutas amassadas (banana, mamão)</li>
                    </ul>
                    <p><strong>Evite a todo custo:</strong> Alimentos quentes, duros (castanhas, torresmo, pão duro), crocantes (pipoca) ou que esfarelam (grãos e farofa), pois podem ferir o local ou entrar na ferida cirúrgica.</p>
                </section>

                <section id="higiene-oral">
                    <h2>Como Fazer a Higiene Bucal Pós-Implante?</h2>
                    <p>Manter a boca limpa é vital para prevenir infecções, mas exige cuidado.</p>
                    <ul>
                        <li><strong>Primeiras 24h:</strong> Não escove a área operada. Você pode escovar os outros dentes normalmente, com cuidado.</li>
                        <li><strong>Após 24h:</strong> Escove os dentes (incluindo a área operada) muito suavemente com uma escova de cerdas extra macias (cirúrgica).</li>
                        <li><strong>Bochechos:</strong> Seu dentista provavelmente prescreverá um antisséptico (como Clorexidina). Use-o conforme a orientação (geralmente 2x ao dia), fazendo bochechos leves, sem aplicar força.</li>
                        <li><strong>Fio Dental:</strong> Passe o fio dental nos outros dentes normalmente, mas evite a área próxima ao implante nos primeiros dias, até liberação do profissional.</li>
                    </ul>
                </section>

                <section id="sinais-de-alerta">
                    <h2>Sinais de Alerta: Quando Procurar seu Dentista?</h2>
                    <p>Um leve inchaço, um pequeno sangramento e algum desconforto são normais. No entanto, entre em contato com seu cirurgião-dentista imediatamente se notar:</p>
                    <ul>
                        <li><strong>Sangramento intenso</strong> que não para com a compressão.</li>
                        <li><strong>Dor forte</strong> que não melhora com a medicação prescrita.</li>
                        <li><strong>Inchaço que piora</strong> após o terceiro dia.</li>
                        <li><strong>Presença de pus</strong> ou gosto ruim na boca.</li>
                        <li><strong>Febre</strong> alta (acima de 38°C).</li>
                    </ul>
                </section>

                <section id="faq" class="faq-section">
                    <h2>Perguntas Frequentes sobre Pós-Operatório</h2>
                    
                    <details class="faq-item">
                        <summary>É normal o local do implante ficar roxo?</summary>
                        <p>Sim. O hematoma (mancha roxa ou amarelada na pele) pode ocorrer devido ao trauma cirúrgico e ao sangramento interno. É uma reação normal que desaparece sozinha em alguns dias.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quanto tempo dura o inchaço?</summary>
                        <p>O inchaço (edema) atinge seu pico em 48 a 72 horas (2 a 3 dias) após a cirurgia. A partir daí, ele deve começar a diminuir progressivamente.</p>
                    </details>

                    <details class="faq-item">
                        <summary>Quando posso voltar a trabalhar?</summary>
                        <p>Depende da sua atividade. Recomenda-se repouso de 2 a 3 dias para atividades de escritório. Atividades que exigem esforço físico ou muita fala devem esperar de 5 a 7 dias, ou conforme orientação médica.</p>
                    </details>
                    
                    <details class="faq-item">
                        <summary>Quando posso voltar a fazer atividade física?</summary>
                        <p>Atividades físicas intensas (como academia, corrida ou esportes) devem ser suspensas por pelo menos 7 a 14 dias, pois o aumento da pressão arterial pode causar sangramento e dor no local.</p>
                    </details>
                </section>
            </article>
        `
  },
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
