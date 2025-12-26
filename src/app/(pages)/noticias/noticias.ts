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
        title: '7 Mitos e Verdades sobre Implantes Dentários: O Que Ninguém Te Conta',
        resume: 'Será que implante rejeita? Dói muito? É só para idosos? Esclarecemos os 7 maiores mitos e verdades sobre implantes dentários para você perder o medo e decidir com segurança.',
        url: '7-Mitos-e-Verdades-sobre-Implantes-Dentarios',
        imgUrl: 'lupa-ampliando-um-implante-dentário_-simbolizando-a-descoberta-da-verdade-sobre-o-tratamento.webp',
        text: `
            <section id="introducao" class="mb-10">
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Quando o assunto é recuperar o sorriso, a internet está cheia de informações — algumas corretas, outras nem tanto. É comum ouvir que "o corpo rejeita o implante" ou que "o tratamento é doloroso demais". Essas histórias acabam afastando muitos pacientes da solução ideal para sua saúde bucal.</p>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Para ajudar você a separar a ficção da realidade, reunimos os <strong>7 maiores mitos e verdades sobre implantes dentários</strong>. Vamos esclarecer tudo agora mesmo.</p>
            </section>

            <section id="mito-1-rejeicao" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">1. Existe rejeição do organismo ao implante?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Mito</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A verdade:</strong> O titânio, material do qual o implante é feito, é <em class="italic">bioinerte</em>. Isso significa que o corpo humano não o reconhece como um invasor e, portanto, não produz anticorpos para atacá-lo. O que pode acontecer (em casos raros) é uma falha na osseointegração, geralmente causada por infecção bacteriana, má qualidade óssea ou tabagismo, mas não é uma "rejeição" imunológica como acontece em transplantes de órgãos.</p>
            </section>

            <section id="mito-2-dor" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">2. Colocar implante dói muito?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Mito</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A verdade:</strong> Parece assustador, mas a cirurgia de implante é, muitas vezes, mais tranquila que uma extração de dente. O procedimento é feito sob anestesia local potente. Durante a cirurgia, você não sente dor alguma. No pós-operatório, o desconforto é facilmente controlado com analgésicos simples e anti-inflamatórios.</p>
            </section>

            <section id="mito-3-idade" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">3. Idosos podem fazer implante dentário?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Verdade</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A explicação:</strong> Não existe limite máximo de idade para colocar implantes. O fator decisivo é a <strong>saúde geral</strong> do paciente (se ele pode passar por uma cirurgia) e a quantidade de osso disponível. Temos pacientes de 80, 90 anos recuperando a qualidade de vida com implantes todos os dias.</p>
            </section>

            <section id="mito-4-doenca-gengiva" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">4. O implante pode sofrer inflamação como o dente natural?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Verdade</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A explicação:</strong> Embora o implante não tenha cárie, a gengiva e o osso ao redor dele podem inflamar se não houver higiene adequada. Isso se chama <strong>mucosite</strong> ou <strong>peri-implantite</strong>. Por isso, escovação, fio dental e limpeza profissional periódica são obrigatórios para manter seu implante saudável.</p>
            </section>

            <section id="mito-5-resultado" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">5. O resultado fica artificial?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Mito</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A verdade:</strong> Isso ficou no passado. As próteses modernas, especialmente as de porcelana ou zircônia, são projetadas digitalmente para imitar a cor, a textura e a transparência dos seus dentes naturais. Muitas vezes, é impossível distinguir qual é o dente natural e qual é o implante.</p>
            </section>

            <section id="mito-6-fumar" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">6. Quem fuma não pode fazer implante?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Depende</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A explicação:</strong> O fumante <em>pode</em> fazer implante, mas o risco de falha é muito maior. O cigarro prejudica a circulação sanguínea e a cicatrização óssea. Recomendamos fortemente que o paciente pare de fumar ou reduza drasticamente o consumo nas semanas anteriores e posteriores à cirurgia para garantir o sucesso do tratamento.</p>
            </section>

            <section id="mito-7-caro" class="mb-8 p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3">7. Implante dentário é caro?</h2>
                <div class="flex items-start mb-2">
                    <span class="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-bold uppercase tracking-wide mr-2 mt-1">Mito</span>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed"><strong>A verdade:</strong> Se você considerar o custo-benefício, o implante é o tratamento mais econômico a longo prazo. Pontes e dentaduras precisam ser trocadas ou ajustadas com frequência e podem danificar outros dentes. O implante é um investimento definitivo que, bem cuidado, dura a vida toda.</p>
            </section>

            <section id="cta" class="mb-10 text-center bg-blue-50 p-8 rounded-lg shadow-sm border border-blue-100">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Tirou suas dúvidas? Agora dê o próximo passo!</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">Não deixe que mitos impeçam você de ter o sorriso que merece. Agende uma conversa com nossos especialistas para avaliar o seu caso individualmente.</p>
                <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-colors duration-200 no-underline">Quero Agendar Minha Avaliação</a>
            </section>
        `
    },
  {
    title: 'Enxerto Ósseo para Implante: O Que Fazer Quando "Falta Osso"?',
    resume:
      'Recebeu o diagnóstico de pouco osso para implante? Não se preocupe. Entenda o que é o enxerto ósseo dentário, os tipos (bovino, autógeno), como é feita a cirurgia de levantamento de seio maxilar e a recuperação.',
    url: 'Enxerto-Osseo-para-Implante-O-Que-Fazer-Quando-Falta-Osso',
    imgUrl:
      'Ilustração-3D-demonstrando-o-processo-de-enxerto-ósseo-dentário-para-suporte-de-implante.webp',
    text: `
            <section id="introducao" class="mb-10">
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Uma das situações mais frustrantes no consultório é quando o paciente chega animado para fazer um implante dentário, mas recebe a notícia: <em class="italic text-gray-800">"Você não tem altura ou espessura óssea suficiente"</em>.</p>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Antigamente, isso poderia impedir o tratamento. Hoje, graças ao <strong>enxerto ósseo</strong>, praticamente qualquer pessoa pode reconstruir a estrutura necessária para receber um implante com segurança e previsibilidade.</p>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Neste artigo, vamos explicar de forma simples como funciona essa "reconstrução" da sua base óssea.</p>
            </section>

            <section id="o-que-e" class="mb-10">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-5 border-b pb-2 border-gray-200">Por que o Osso "Desaparece"?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">O nosso osso alveolar (onde fica a raiz do dente) precisa de estímulo para se manter. Quando perdemos um dente, esse estímulo cessa, e o corpo entende que aquele osso não é mais necessário, iniciando um processo natural de <strong>reabsorção óssea</strong> (atrofia).</p>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">O uso prolongado de dentaduras móveis acelera esse processo. É aí que entra o enxerto: ele serve para devolver o volume e a altura perdidos, criando uma "fundação" sólida para o pino do implante.</p>
            </section>

            <section id="tipos-enxerto" class="mb-10">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-5 border-b pb-2 border-gray-200">Tipos de Enxerto Ósseo: Qual é o Melhor?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">Existem diferentes materiais que podem ser usados, e o cirurgião-dentista escolherá o melhor para o seu caso:</p>
                
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Xenógeno (Osso Bovino)</h3>
                        <p class="text-gray-700 mb-2">É o tipo mais utilizado atualmente. O material vem de origem bovina, processado em laboratório para ser estéril e biocompatível.</p>
                        <p class="text-sm text-green-700 font-semibold mt-2">Vantagem: Não requer uma segunda cirurgia no paciente para retirar osso.</p>
                    </div>

                    <div class="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Autógeno (Do Próprio Paciente)</h3>
                        <p class="text-gray-700 mb-2">Retira-se um bloco ou raspas de osso do próprio paciente (geralmente da mandíbula). É considerado o "padrão-ouro" biológico.</p>
                        <p class="text-sm text-blue-700 font-semibold mt-2">Vantagem: Risco zero de rejeição e cicatrização mais rápida.</p>
                    </div>
                </div>
                <p class="text-lg text-gray-700 leading-relaxed mt-6">Existem também os materiais sintéticos (feitos em laboratório), usados em casos específicos de pequenos preenchimentos.</p>
            </section>

            <section id="levantamento-seio" class="mb-10 bg-yellow-50 p-6 rounded-lg border border-yellow-100">
                <h2 class="text-2xl font-bold text-gray-800 mb-4">O Caso Especial: Levantamento de Seio Maxilar</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">Na arcada superior, próximo às bochechas, temos cavidades de ar chamadas <strong>Seios Maxilares</strong>. Quando perdemos os dentes de trás (molares e pré-molares) superiores, essas cavidades tendem a "descer", ocupando o espaço do osso.</p>
                <p class="text-lg text-gray-700 leading-relaxed">Nesses casos, realizamos um procedimento chamado <em>Sinus Lift</em> (Levantamento de Seio), onde elevamos a membrana dessa cavidade e preenchemos o espaço com enxerto ósseo, permitindo a instalação do implante.</p>
            </section>

            <section id="procedimento-tempo" class="mb-10">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-8 mb-5 border-b pb-2 border-gray-200">Como é a Cirurgia e o Tempo de Espera?</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">A cirurgia é feita no consultório, sob anestesia local, sendo indolor. Existem dois cenários possíveis:</p>
                <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                    <li><strong class="font-semibold text-gray-800">Enxerto + Implante Simultâneo:</strong> Se houver uma quantidade mínima de osso para travar o pino, podemos fazer o enxerto e instalar o implante no mesmo dia.</li>
                    <li><strong class="font-semibold text-gray-800">Enxerto Prévio:</strong> Se a perda óssea for muito grande, primeiro fazemos o enxerto, esperamos de <strong>6 a 9 meses</strong> para a cicatrização completa, e só depois instalamos o implante.</li>
                </ul>
            </section>

            <section id="cta" class="mb-10 text-center bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 class="text-2xl font-semibold text-gray-800 mb-4">Não desista do seu tratamento</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-6">A falta de osso tem solução. Agende uma avaliação com nossos especialistas em reconstrução óssea e descubra a melhor técnica para o seu caso.</p>
                <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-colors duration-200 no-underline">Agendar Avaliação de Enxerto</a>
            </section>

            <section id="faq" class="faq-section mt-12">
                <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-6 text-center">Dúvidas Frequentes sobre Enxerto</h2>
                
                <div class="space-y-4">
                    <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                            O corpo pode rejeitar o osso bovino?
                            <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                        </summary>
                        <div class="p-5 border-t border-gray-200">
                            <p class="text-lg text-gray-600 leading-relaxed">A rejeição imunológica é extremamente rara. O material passa por processos rigorosos de purificação (liofilização) que removem todas as proteínas orgânicas, deixando apenas a matriz mineral (cálcio), que serve de "andaime" para seu próprio osso crescer.</p>
                        </div>
                    </details>
                    
                    <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                            O pós-operatório do enxerto dói muito?
                            <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                        </summary>
                        <div class="p-5 border-t border-gray-200">
                            <p class="text-lg text-gray-600 leading-relaxed">Geralmente, o desconforto é um pouco maior que o de um implante simples, podendo haver mais inchaço (edema) e hematomas. No entanto, com a medicação correta e repouso, a dor é perfeitamente controlável.</p>
                        </div>
                    </details>

                    <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                            Quanto custa um enxerto ósseo?
                            <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                        </summary>
                        <div class="p-5 border-t border-gray-200">
                            <p class="text-lg text-gray-600 leading-relaxed">O valor varia dependendo da quantidade de material necessário (em gramas), do tipo de enxerto e da complexidade da cirurgia. É necessário um exame de tomografia para realizar um orçamento preciso.</p>
                        </div>
                    </details>
                </div>
            </section>
        `
  },
  {
    title:
      'Prótese Protocolo: A Solução Definitiva para Trocar a Dentadura Móvel',
    resume:
      'Cansado da dentadura solta? Conheça a Prótese Protocolo sobre Implantes. Descubra como funciona a "dentadura fixa", a diferença entre resina e porcelana, e recupere sua mastigação e autoestima.',
    url: 'Protese-Protocolo-A-Solucao-Definitiva-para-Trocar-a-Dentadura-Movel',
    imgUrl:
      'Pessoa madura sorrindo com confiança e segurança após tratamento com prótese protocolo fixa..webp',
    text: `
                
                <section id="introducao" class="mb-10">
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Se você usa dentadura, provavelmente conhece os desafios diários: o medo da prótese soltar ao falar ou sorrir, a dificuldade para mastigar alimentos mais duros e o céu da boca coberto que diminui o sabor da comida. Felizmente, a odontologia moderna oferece uma solução definitiva para esses problemas: a <strong class="font-semibold text-gray-800">Prótese Protocolo sobre Implantes</strong>.</p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Conhecida popularmente como "dentadura fixa", esse tratamento devolve não apenas a estética, mas a força da mastigação e a segurança que você perdeu.</p>
                </section>

                <section id="o-que-e" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">O que é a Prótese Protocolo?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">A Prótese Protocolo é uma reabilitação oral total. Diferente da dentadura comum, que se apoia na gengiva, o Protocolo é <strong class="font-semibold text-gray-800">parafusado sobre implantes dentários</strong> (geralmente de 4 a 6 implantes por arcada).</p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Isso significa que a prótese fica 100% fixa. Ela não se move, não machuca a gengiva e, no caso da arcada superior, <strong class="font-semibold text-gray-800">não cobre o céu da boca</strong>, permitindo que você sinta novamente a textura e o sabor real dos alimentos.</p>
                </section>

                <section id="vantagens" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Por que Trocar a Dentadura pelo Protocolo?</h2>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Fixação Total:</strong> Adeus aos adesivos para dentadura (Corega, etc). Você pode rir, tossir e falar sem medo.</li>
                        <li><strong class="font-semibold text-gray-800">Mastigação Eficiente:</strong> Com a estabilidade dos implantes, você volta a comer carnes, frutas crocantes e castanhas com facilidade.</li>
                        <li><strong class="font-semibold text-gray-800">Estética Rejuvenescida:</strong> O protocolo recupera a altura do rosto e o suporte labial, oferecendo um efeito de rejuvenescimento facial.</li>
                        <li><strong class="font-semibold text-gray-800">Conforto:</strong> Sem o plástico cobrindo o palato (céu da boca), o conforto é incomparável e a náusea desaparece.</li>
                    </ul>
                </section>

                <section id="tipos-materiais" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Tipos de Protocolo: Resina vs. Porcelana (Zircônia)</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">Existem dois materiais principais para a confecção dos dentes do protocolo. A escolha depende da estética desejada e do orçamento:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div class="bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Protocolo em Resina (Acrílico)</h3>
                            <p class="text-gray-700 mb-2">É a opção mais comum e acessível. Os dentes são feitos de acrílico de alta qualidade sobre uma barra metálica.</p>
                            <ul class="text-gray-600 text-sm list-disc list-inside mt-3">
                                <li>Mais leve (absorve impacto).</li>
                                <li>Custo mais baixo.</li>
                                <li>Estética muito satisfatória, porém sofre desgaste natural com os anos.</li>
                            </ul>
                        </div>

                        <div class="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 class="text-xl font-bold text-gray-800 mb-3">Protocolo em Zircônia (Porcelana)</h3>
                            <p class="text-gray-700 mb-2">O padrão-ouro da estética. Feito por tecnologia digital, sem metal, imitando o dente natural com perfeição.</p>
                            <ul class="text-gray-600 text-sm list-disc list-inside mt-3">
                                <li>Não mancha e não desgasta.</li>
                                <li>Brilho e translucidez idênticos ao dente natural.</li>
                                <li>Investimento mais alto.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="como-funciona" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Como é o Tratamento?</h2>
                    <ol class="list-decimal list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Planejamento Digital:</strong> Exames de tomografia para avaliar a quantidade de osso disponível.</li>
                        <li><strong class="font-semibold text-gray-800">Cirurgia:</strong> Instalação dos implantes (pinos de titânio). O procedimento é feito com anestesia local e, muitas vezes, sedação para maior conforto.</li>
                        <li><strong class="font-semibold text-gray-800">Prótese Provisória ou Carga Imediata:</strong> Em muitos casos, o paciente já sai da cirurgia com uma prótese fixa instalada (Carga Imediata), sem ficar sem dentes em nenhum momento.</li>
                        <li><strong class="font-semibold text-gray-800">Prótese Definitiva:</strong> Após a cicatrização final, a prótese definitiva (em resina ou zircônia) é confeccionada e instalada.</li>
                    </ol>
                </section>

                <section id="cta" class="mb-10 text-center bg-blue-50 p-8 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Volte a Sorrir com Segurança</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">Não deixe que a dentadura limite sua vida. Agende uma avaliação e descubra se o Protocolo é indicado para você.</p>
                    <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg! text-lg shadow-md hover:bg-green-700 transition-colors duration-200 no-underline">Quero Agendar Minha Avaliação</a>
                </section>

                <section id="faq" class="faq-section mt-12">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-6 text-center">Perguntas Frequentes sobre Prótese Protocolo</h2>
                    
                    <div class="space-y-4">
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Como limpar a prótese protocolo?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">A higiene deve ser feita com escova de dentes comum e o uso indispensável de fio dental especial (passa-fio) ou escovas interdentais para limpar o espaço entre a prótese e a gengiva. O uso de jato de água (Waterpik) também é muito recomendado.</p>
                            </div>
                        </details>
                        
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                É possível tirar a prótese em casa?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Não. O Protocolo é parafusado pelo dentista e só pode ser removido no consultório. Isso garante a segurança de que ela não vai cair. A manutenção para retirada e limpeza profunda é feita anualmente pelo dentista.</p>
                            </div>
                        </details>

                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quem usa dentadura há muitos anos pode fazer?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Sim, na maioria dos casos. Se houver pouca estrutura óssea devido ao uso prolongado da dentadura, pode ser necessário realizar um enxerto ósseo antes ou usar técnicas especiais (como implantes Zigomáticos). Uma tomografia é necessária para avaliar.</p>
                            </div>
                        </details>
                    </div>
                </section>
            
        `
  },
  {
    title:
      'Implante Dentário: O Guia Completo para Recuperar seu Sorriso com Confiança',
    resume:
      'O que é um implante dentário? Quem pode fazer? Descubra as vantagens, como funciona a cirurgia de implante, os cuidados e responda suas dúvidas. Um guia completo para pacientes que buscam um sorriso novo e saudável.',
    url: 'Implante-Dentario-O-Guia-Completo-para-Recuperar-seu-Sorriso',
    imgUrl:
      'Mulher com sorriso saudável e completo, demonstrando o resultado de um implante dentário..png',
    text: `
                <article class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
                <section id="o-que-e" class="mb-10">
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Perder um ou mais dentes afeta não apenas a estética do sorriso, mas também a mastigação, a fala e a autoestima. Felizmente, o <strong class="font-semibold text-gray-800">implante dentário</strong> é a solução mais moderna, segura e duradoura para substituir dentes perdidos, proporcionando um resultado completamente natural.</p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Neste guia completo, vamos explicar tudo o que você precisa saber sobre o tratamento com implantes dentários, desde o que são até como é o procedimento e os cuidados necessários.</p>
                </section>

                <section id="definicao" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">O que é um Implante Dentário?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">O implante dentário é um pequeno pino, geralmente feito de <strong class="font-semibold text-gray-800">titânio</strong> (um material biocompatível, que não causa rejeição), que funciona como uma raiz de dente artificial. Ele é fixado cirurgicamente no osso maxilar ou mandibular, no local onde o dente original foi perdido.</p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Após um período de cicatrização, chamado <strong class="font-semibold text-gray-800">osseointegração</strong> (quando o osso se funde ao implante), uma coroa (prótese dentária) é parafusada ou cimentada sobre esse pino. O resultado é um dente novo, com aparência, sensação e função idênticas às de um dente natural.</p>
                </section>

                <section id="vantagens" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Principais Vantagens do Implante Dentário</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Optar por um implante dentário oferece benefícios significativos em comparação com outras soluções, como pontes móveis (dentaduras) ou pontes fixas:</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Resultado Natural e Estético:</strong> A prótese sobre implante é feita sob medida, imitando perfeitamente a cor e o formato dos seus dentes naturais.</li>
                        <li><strong class="font-semibold text-gray-800">Conforto e Segurança:</strong> Por ser fixo, o implante não se move durante a fala ou mastigação, eliminando o constrangimento de próteses soltas.</li>
                        <li><strong class="font-semibold text-gray-800">Durabilidade:</strong> Com os cuidados adequados, um implante dentário pode durar a vida toda.</li>
                        <li><strong class="font-semibold text-gray-800">Preservação Óssea:</strong> O implante estimula o osso, impedindo a reabsorção óssea que ocorre naturalmente após a perda de um dente.</li>
                        <li><strong class="font-semibold text-gray-800">Melhora na Mastigação:</strong> Permite mastigar todos os alimentos com confiança, melhorando a digestão e a saúde geral.</li>
                        <li><strong class="font-semibold text-gray-800">Não Desgasta Dentes Vizinhos:</strong> Ao contrário das pontes fixas, o implante não exige o desgaste dos dentes saudáveis ao lado.</li>
                    </ul>
                </section>

                <section id="quem-pode-fazer" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Quem Pode Fazer um Implante Dentário?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Qualquer pessoa com boa saúde geral e que tenha perdido um ou mais dentes pode ser candidata a um implante. Os principais requisitos são:</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Saúde Bucal:</strong> As gengivas devem estar saudáveis, sem doença periodontal ativa.</li>
                        <li><strong class="font-semibold text-gray-800">Estrutura Óssea:</strong> É necessário ter uma quantidade e qualidade óssea suficiente para suportar o implante. Caso contrário, pode ser necessário um <strong class="font-semibold text-gray-800">enxerto ósseo</strong>.</li>
                        <li><strong class="font-semibold text-gray-800">Saúde Geral:</strong> Pacientes com diabetes ou hipertensão controladas geralmente podem realizar o procedimento. Pacientes fumantes têm uma taxa de sucesso menor e devem ser avaliados com mais critério.</li>
                    </ul>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Uma avaliação detalhada com exames de imagem (como tomografia) é essencial para confirmar a viabilidade do tratamento.</p>
                </section>

                <section id="como-e-feito" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Como é Feita a Cirurgia de Implante Dentário? (O Passo a Passo)</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">O tratamento com implante dentário é dividido em algumas etapas principais:</p>
                    <ol class="list-decimal list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Planejamento:</strong> O dentista realiza uma avaliação completa com exames de imagem (Tomografia Computadorizada) para planejar a cirurgia, determinando a posição exata e o tamanho do implante.</li>
                        <li><strong class="font-semibold text-gray-800">Cirurgia de Instalação:</strong> O procedimento é feito no consultório com anestesia local. O cirurgião-dentista faz uma pequena incisão na gengiva, prepara o osso e insere o pino de titânio.</li>
                        <li><strong class="font-semibold text-gray-800">Osseointegração:</strong> Esta é a fase de cicatrização, que dura de 3 a 6 meses. Durante esse período, o osso se integra firmemente ao implante.</li>
                        <li><strong class="font-semibold text-gray-800">Instalação da Prótese (Coroa):</strong> Após a osseointegração, o dentista reabre (se necessário) a gengiva, instala um conector (pilar) e, por fim, fixa a coroa dentária definitiva, feita sob medida.</li>
                    </ol>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Em alguns casos, é possível realizar a <strong class="font-semibold text-gray-800">carga imediata</strong>, onde uma coroa provisória é colocada no mesmo dia da cirurgia, especialmente em áreas estéticas.</p>
                </section>

                <section id="agendamento-cta" class="mb-10 text-center bg-gray-50 p-6 rounded-lg">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Recupere a Função e a Estética do seu Sorriso</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-6">O implante dentário é um investimento na sua saúde e qualidade de vida. Se você sofre com a falta de dentes, não espere mais.</p>
                    <a href="https://api.whatsapp.com/send?phone=5516981651441&text=Ol%C3%A1%20gostaria%20de%20saber%20como%20funciona%20a%20clinica!"  class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md hover:bg-blue-700 transition-colors duration-200 no-underline">Agende sua Avaliação para Implante Dentário</a>
                </section>

                <section id="faq" class="faq-section mt-12">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-6 text-center">Perguntas Frequentes sobre Implantes Dentários</h2>
                    
                    <div class="space-y-4">
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                A cirurgia de implante dentário dói?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Não. A cirurgia é realizada com anestesia local, e o paciente não sente dor. O pós-operatório é geralmente tranquilo, com leve desconforto controlado por analgésicos e anti-inflamatórios prescritos pelo dentista.</p>
                            </div>
                        </details>
                        
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Existe rejeição ao implante dentário?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">O termo "rejeição" não é correto, pois o titânio é biocompatível. O que pode ocorrer, embora seja raro (cerca de 2-5% dos casos), é uma falha na osseointegração, geralmente causada por infecção, tabagismo ou sobrecarga no implante antes do tempo.</p>
                            </div>
                        </details>

                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quanto tempo dura todo o tratamento?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">O tempo total varia muito. Desde a cirurgia até a colocação da coroa final, o processo pode levar de 3 a 9 meses, dependendo do tempo de osseointegração e da necessidade de enxerto ósseo prévio.</p>
                            </div>
                        </details>
                        
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Qual o preço de um implante dentário?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">O custo varia amplamente dependendo de fatores como o tipo de implante, a marca, a necessidade de enxerto ósseo, o tipo de prótese (coroa) e os honorários do profissional. Por isso, é fundamental uma avaliação individualizada para obter um orçamento preciso.</p>
                            </div>
                        </details>

                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quais os cuidados que devo ter após o implante?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Os cuidados são os mesmos de um dente natural: boa higiene bucal (escovação e fio dental) e visitas regulares ao dentista (a cada 6 meses) para manutenção e limpeza profissional.</p>
                            </div>
                        </details>
                    </div>
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
                <article class="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 font-sans">
                <section id="introducao" class="mb-10">
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">A cirurgia de instalação do implante dentário é uma etapa crucial, mas o sucesso do tratamento depende diretamente dos <strong class="font-semibold text-gray-800">cuidados no pós-operatório</strong>. Seguir as orientações do seu dentista à risca é fundamental para garantir uma cicatrização adequada, evitar infecções e permitir que a osseointegração ocorra perfeitamente.</p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Este guia foca exclusivamente no que você precisa fazer após o procedimento para ter uma recuperação rápida e sem complicações.</p>
                </section>

                <section id="primeiras-horas" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">As Primeiras 48 Horas: A Fase Crítica</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Os dois primeiros dias após a cirurgia são os mais importantes para controlar o inchaço e o desconforto. Siga estas etapas:</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Repouso Absoluto:</strong> Evite qualquer esforço físico, como trabalhar, carregar peso ou praticar esportes. Mantenha a cabeça mais elevada que o corpo ao deitar (use dois travesseiros).</li>
                        <li><strong class="font-semibold text-gray-800">Compressas de Gelo:</strong> Aplique compressas de gelo na bochecha, do lado externo da cirurgia. Faça aplicações de 15 minutos, com pausas de 15 minutos, nas primeiras 24 a 48 horas. Isso reduz o inchaço (edema) e o sangramento.</li>
                        <li><strong class="font-semibold text-gray-800">Medicação:</strong> Tome rigorosamente os medicamentos prescritos pelo seu dentista (antibióticos, anti-inflamatórios e analgésicos) nos horários corretos.</li>
                        <li><strong class="font-semibold text-gray-800">Não Cuspa ou Bocheche:</strong> Nas primeiras 24 horas, evite cuspir ou fazer bochechos vigorosos. Isso pode desalojar o coágulo sanguíneo, essencial para a cicatrização, e causar sangramento.</li>
                        <li><strong class="font-semibold text-gray-800">Não Fume:</strong> O cigarro é o maior inimigo da cicatrização. A nicotina prejudica a circulação sanguínea e aumenta drasticamente o risco de infecção e falha do implante.</li>
                    </ul>
                </section>

                <section id="alimentacao" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">O que Comer Após a Cirurgia de Implante Dentário?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">A alimentação é uma das maiores dúvidas. A dieta deve ser líquida ou pastosa e, principalmente, <strong class="font-semibold text-gray-800">fria ou morna</strong> nos primeiros 2 a 3 dias.</p>
                    
                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Dias 1-3 (Dieta Líquida/Pastosa Fria)</h3>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li>Sorvetes (sem pedaços)</li>
                        <li>Iogurtes e vitaminas (sem sementes)</li>
                        <li>Sopas frias (como gaspacho) ou mornas (batidas no liquidificador)</li>
                        <li>Purês frios ou mornos (batata, mandioquinha)</li>
                        <li>Gelatinas e pudins</li>
                    </ul>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4"><strong class="font-semibold text-gray-800">Importante:</strong> Não utilize canudos, pois o movimento de sucção pode causar sangramento.</p>

                    <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Dias 4-7 (Dieta Pastosa Morna)</h3>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Conforme o desconforto diminui, você pode evoluir para alimentos mais consistentes, mas ainda macios:</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li>Ovos mexidos</li>
                        <li>Arroz bem cozido (papa)</li>
                        <li>Peixes cozidos ou desfiados</li>
                        <li>Macarrão bem cozido</li>
                        <li>Frutas amassadas (banana, mamão)</li>
                    </ul>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4"><strong class="font-semibold text-gray-800">Evite a todo custo:</strong> Alimentos quentes, duros (castanhas, torresmo, pão duro), crocantes (pipoca) ou que esfarelam (grãos e farofa), pois podem ferir o local ou entrar na ferida cirúrgica.</p>
                </section>

                <section id="higiene-oral" class="mb-10">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-5 border-b pb-2 border-gray-200">Como Fazer a Higiene Bucal Pós-Implante?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Manter a boca limpa é vital para prevenir infecções, mas exige cuidado.</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-gray-700 leading-relaxed">
                        <li><strong class="font-semibold text-gray-800">Primeiras 24h:</strong> Não escove a área operada. Você pode escovar os outros dentes normalmente, com cuidado.</li>
                        <li><strong class="font-semibold text-gray-800">Após 24h:</strong> Escove os dentes (incluindo a área operada) muito suavemente com uma escova de cerdas extra macias (cirúrgica).</li>
                        <li><strong class="font-semibold text-gray-800">Bochechos:</strong> Seu dentista provavelmente prescreverá um antisséptico (como Clorexidina). Use-o conforme a orientação (geralmente 2x ao dia), fazendo bochechos leves, sem aplicar força.</li>
                        <li><strong class="font-semibold text-gray-800">Fio Dental:</strong> Passe o fio dental nos outros dentes normalmente, mas evite a área próxima ao implante nos primeiros dias, até liberação do profissional.</li>
                    </ul>
                </section>

                <section id="sinais-de-alerta" class="mb-10 bg-red-50 p-6 rounded-lg border border-red-200">
                    <h2 class="text-2xl md:text-3xl font-semibold text-red-800 mb-5">Sinais de Alerta: Quando Procurar seu Dentista?</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-4">Um leve inchaço, um pequeno sangramento e algum desconforto são normais. No entanto, entre em contato com seu cirurgião-dentista imediatamente se notar:</p>
                    <ul class="list-disc list-inside space-y-3 mb-6 ml-4 text-lg text-red-700 leading-relaxed">
                        <li><strong class="font-semibold">Sangramento intenso</strong> que não para com a compressão.</li>
                        <li><strong class="font-semibold">Dor forte</strong> que não melhora com a medicação prescrita.</li>
                        <li><strong class="font-semibold">Inchaço que piora</strong> após o terceiro dia.</li>
                        <li><strong class="font-semibold">Presença de pus</strong> ou gosto ruim na boca.</li>
                        <li><strong class="font-semibold">Febre</strong> alta (acima de 38°C).</li>
                    </ul>
                </section>

                <section id="faq" class="faq-section mt-12">
                    <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mt-10 mb-6 text-center">Perguntas Frequentes sobre Pós-Operatório</h2>
                    
                    <div class="space-y-4">
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                É normal o local do implante ficar roxo?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Sim. O hematoma (mancha roxa ou amarelada na pele) pode ocorrer devido ao trauma cirúrgico e ao sangramento interno. É uma reação normal que desaparece sozinha em alguns dias.</p>
                            </div>
                        </details>
                        
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quanto tempo dura o inchaço?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">O inchaço (edema) atinge seu pico em 48 a 72 horas (2 a 3 dias) após a cirurgia. A partir daí, ele deve começar a diminuir progressivamente.</p>
                            </div>
                        </details>

                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quando posso voltar a trabalhar?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Depende da sua atividade. Recomenda-se repouso de 2 a 3 dias para atividades de escritório. Atividades que exigem esforço físico ou muita fala devem esperar de 5 a 7 dias, ou conforme orientação médica.</p>
                            </div>
                        </details>
                        
                        <details class="faq-item border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                            <summary class="font-semibold text-xl p-5 cursor-pointer hover:bg-gray-50 flex justify-between items-center">
                                Quando posso voltar a fazer atividade física?
                                <span class="text-blue-500 transform transition-transform duration-200 details-marker">+</span>
                            </summary>
                            <div class="p-5 border-t border-gray-200">
                                <p class="text-lg text-gray-600 leading-relaxed">Atividades físicas intensas (como academia, corrida ou esportes) devem ser suspensas por pelo menos 7 a 14 dias, pois o aumento da pressão arterial pode causar sangramento e dor no local.</p>
                            </div>
                        </details>
                    </div>
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
