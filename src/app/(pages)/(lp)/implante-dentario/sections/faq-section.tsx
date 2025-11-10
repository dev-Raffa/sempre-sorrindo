import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

export default function FaqSection() {
  const faqs = [
    {
      question: 'O que são implantes dentários?',
      answer:
        'Implantes dentários são raízes artificiais, geralmente feitas de titânio, que são inseridas no osso maxilar para substituir a raiz de um dente natural perdido. Sobre esse implante, é colocada uma prótese dentária que substitui a parte visível do dente.'
    },
    {
      question: 'O procedimento de implante dentário dói?',
      answer:
        'O procedimento é realizado com anestesia local, o que garante que você não sinta dor durante a cirurgia. Após o procedimento, é normal sentir um desconforto leve a moderado, que pode ser controlado com medicamentos prescritos pelo dentista.'
    },
    {
      question: 'Quanto tempo dura um implante dentário?',
      answer:
        'Com os cuidados adequados, os implantes dentários podem durar por toda a vida. É importante manter uma boa higiene bucal, visitar o dentista regularmente e seguir todas as recomendações de cuidados pós-operatórios.'
    },
    {
      question: 'Qualquer pessoa pode fazer implantes dentários?',
      answer:
        'A maioria das pessoas pode receber implantes dentários, mas é necessário ter uma boa saúde geral e quantidade óssea suficiente. Durante a consulta inicial, realizamos uma avaliação completa para determinar se você é um bom candidato para o procedimento.'
    },
    {
      question: 'Quanto tempo leva para completar o tratamento com implantes?',
      answer:
        "O tempo total do tratamento varia de acordo com cada caso. Em geral, pode levar de 3 a 6 meses desde a colocação do implante até a instalação da prótese definitiva. Em alguns casos, é possível realizar a chamada 'carga imediata', onde a prótese provisória é instalada no mesmo dia da cirurgia."
    },
    {
      question: 'Os implantes dentários são perceptíveis?',
      answer:
        'Não. Os implantes dentários modernos são projetados para se parecerem e funcionarem como dentes naturais. A prótese que é colocada sobre o implante é personalizada para combinar com a cor, forma e tamanho dos seus dentes naturais.'
    },
    {
      question: 'Qual é o custo de um implante dentário?',
      answer:
        'O custo varia dependendo do número de implantes necessários, do tipo de prótese escolhida e se procedimentos adicionais, como enxerto ósseo, são necessários. Durante a consulta, fornecemos um orçamento detalhado e discutimos opções de pagamento e financiamento.'
    },
    {
      question: 'Como devo cuidar dos meus implantes dentários?',
      answer:
        'Os implantes dentários requerem os mesmos cuidados que os dentes naturais: escovação duas vezes ao dia, uso de fio dental diariamente e visitas regulares ao dentista. Também pode ser recomendado o uso de escovas interdentais e irrigadores orais para uma limpeza mais completa.'
    }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => {
      return {
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      };
    })
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#203c89] md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Tire suas dúvidas sobre implantes dentários e nossos procedimentos.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg text-[#203c89] font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="https://wa.me/5516981651441?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20implantes%20dentários."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
