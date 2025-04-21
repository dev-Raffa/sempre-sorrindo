import Image from 'next/image';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Fiz implantes na Sempre Sorrindo e foi a melhor decisão que tomei. A equipe é extremamente profissional e atenciosa. O resultado superou minhas expectativas!'
    },
    {
      name: 'João Oliveira',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Após anos com problemas dentários, finalmente recuperei meu sorriso e autoestima. O atendimento é excelente e o Dr. Paulo é um profissional excepcional.'
    },
    {
      name: 'Ana Souza',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Tinha muito medo de fazer implantes, mas a equipe da Sempre Sorrindo me deixou super tranquila. O procedimento foi rápido e praticamente indolor. Recomendo!'
    },
    {
      name: 'Carlos Mendes',
      image: '/placeholder.svg?height=80&width=80',
      rating: 5,
      text: 'Excelente clínica! Ambiente moderno, equipe atenciosa e resultados perfeitos. Meus implantes ficaram tão naturais que ninguém percebe que não são meus dentes originais.'
    }
  ];

  return (
    <section id="depoimentos" className="bg-sky-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#203c89] md:text-4xl">
            O que nossos clientes estão dizendo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Confira os depoimentos de pacientes que transformaram seus sorrisos
            com a Sempre Sorrindo.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-6 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-4 flex items-center space-x-4">
                <Image
                  src={testimonial.image || '/placeholder.svg'}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full hidden"
                />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5516981651441?text=Olá!%20Vi%20os%20depoimentos%20no%20site%20e%20gostaria%20de%20agendar%20uma%20consulta."
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
            Quero transformar meu sorriso também
          </a>
        </div>
      </div>
    </section>
  );
}
