import Link from 'next/link';
import Image from 'next/image';
import defaultImage from '../../../../../../public/img/lp-implant-top.jpg';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white py-16">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid items-center gap-8 md:grid-cols-custom md:gap-12">
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Recupere seu{' '}
              <span className="bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">
                sorriso
              </span>{' '}
              com implantes dentários
            </h1>
            <p className="mb-6 text-lg text-gray-600 md:text-xl">
              Transforme sua qualidade de vida com implantes dentários de alta
              qualidade. Procedimentos modernos, indolores e com resultados
              naturais.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start">
              <Link
                href="https://wa.me/5516981651441?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20implantes%20dentários."
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
              >
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar Avaliação Gratuita
              </Link>
              <Link
                href="#beneficios"
                className="inline-flex items-center justify-center rounded-full border border-sky-600 px-6 py-3 text-base font-medium text-sky-600 transition-all hover:bg-sky-50"
              >
                Saiba Mais
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              * Avaliação inicial sem compromisso
            </p>
          </div>
          <div className="relative flex mx-auto h-64 w-64 md:h-auto md:w-full lg:h-[450px] items-center justify-center">
            <Image
              src={defaultImage}
              alt="Paciente com sorriso perfeito após implantes dentários"
              width={450}
              height={450}
              className="rounded-full object-cover shadow-xl md:rounded-xl"
              priority
            />
            <div className="absolute -bottom-4 -right-4 rounded-[8px] bg-white p-3 shadow-lg md:-bottom-6 md:-right-6 md:p-4">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    98% de satisfação
                  </p>
                  <p className="text-xs text-gray-500">Pacientes satisfeitos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-sky-100 opacity-30 blur-3xl"></div>
      <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
    </section>
  );
}
