import { CheckCircle, Clock, Smile, ThumbsUp } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Smile className="h-10 w-10 text-[#ffc700]" />,
      title: 'Estética Natural',
      description:
        'Implantes que se assemelham aos dentes naturais, devolvendo a beleza do seu sorriso.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-[#ffc700]" />,
      title: 'Conforto e Funcionalidade',
      description:
        'Recupere a capacidade de mastigar, falar e sorrir com total confiança.'
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#ffc700]" />,
      title: 'Durabilidade',
      description:
        'Com os cuidados adequados, os implantes podem durar por toda a vida.'
    },
    {
      icon: <Clock className="h-10 w-10 text-[#ffc700]" />,
      title: 'Procedimento Rápido',
      description:
        'Tecnologia avançada para um processo mais rápido e confortável.'
    }
  ];

  return (
    <section id="beneficios" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#203c89] md:text-4xl">
            Benefícios dos Implantes Dentários
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Descubra como os implantes dentários podem transformar sua qualidade
            de vida e devolver a confiança no seu sorriso.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-[#203c89]">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5516981651441?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20benefícios%20dos%20implantes%20dentários."
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
            Tire suas dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
