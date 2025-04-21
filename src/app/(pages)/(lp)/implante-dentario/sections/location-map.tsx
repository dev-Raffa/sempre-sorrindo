'use client';

import { useState, useMemo, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IUnidade, unidades } from '@/app/(pages)/unidades/unidades';

export default function LocationMap() {
  // Agrupar unidades por cidade
  const cidadesUnidades = useMemo(() => {
    const cidades: { [key: string]: Partial<IUnidade>[] } = {};

    unidades.forEach((unidade) => {
      if (!unidade.cidade) return;

      if (!cidades[unidade.cidade]) {
        cidades[unidade.cidade] = [];
      }

      cidades[unidade.cidade].push(unidade);
    });

    return cidades;
  }, []);

  // Lista de cidades ordenadas alfabeticamente
  const cidades = useMemo(() => {
    return Object.keys(cidadesUnidades).sort();
  }, [cidadesUnidades]);

  const [cidadeSelecionada, setCidadeSelecionada] = useState(cidades[0]);
  const [unidadeSelecionada, setUnidadeSelecionada] = useState<string>('0');

  // Unidades da cidade selecionada
  const unidadesDaCidade = useMemo(() => {
    return cidadesUnidades[cidadeSelecionada] || [];
  }, [cidadeSelecionada, cidadesUnidades]);

  // Unidade atual selecionada
  const unidadeAtual = useMemo(() => {
    const index = Number.parseInt(unidadeSelecionada);
    return unidadesDaCidade[index];
  }, [unidadesDaCidade, unidadeSelecionada]);

  // Resetar o índice da unidade selecionada quando mudar de cidade
  useEffect(() => {
    setUnidadeSelecionada('0');
  }, [cidadeSelecionada]);

  // Chave única para forçar a recriação do iframe quando mudar de unidade
  const mapKey = useMemo(() => {
    return `${cidadeSelecionada}-${unidadeSelecionada}-${Date.now()}`;
  }, [cidadeSelecionada, unidadeSelecionada]);

  return (
    <section id="localizacao" className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#203c89] md:text-4xl">
            Nossas unidades
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A Sempre Sorrindo está presente em várias cidades para melhor
            atender você. Encontre a unidade mais próxima e agende sua consulta.
          </p>
        </div>

        <div className="mb-8 text-center">
          <Tabs value={cidadeSelecionada} onValueChange={setCidadeSelecionada}>
            <TabsList className="inline-flex h-auto flex-wrap justify-center gap-2 bg-transparent">
              {cidades.map((cidade) => (
                <TabsTrigger
                  key={cidade}
                  value={cidade}
                  className="rounded-[4px] border border-[#0d205a] bg-white text-[#0d205a] data-[state=active]:bg-[#0d205a] data-[state=active]:text-[#ffc700]"
                >
                  {cidade}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {unidadesDaCidade.length > 1 && (
          <div className="mb-8 text-center">
            <p className="mb-2 text-gray-700">Nossas unidades:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {unidadesDaCidade.map((unidade, index) => (
                <button
                  key={index}
                  onClick={() => setUnidadeSelecionada(index.toString())}
                  className={`rounded-[4px] border px-4 py-2 text-sm transition-colors ${
                    unidadeSelecionada === index.toString()
                      ? 'border-[#0d205a] bg-[#0d205a] text-[#ffc700]'
                      : 'border-[#0d205a] bg-white text-[#0d205a] hover:bg-gray-50'
                  }`}
                >
                  {unidade.endereco?.split(',')[0]}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mx-auto w-full overflow-hidden rounded-xl shadow-lg">
          {/* Usar uma chave única para forçar a recriação do iframe */}
          <div key={mapKey} className="w-full">
            {unidadeAtual?.mapa}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-sky-50 p-4 text-center">
              <h3 className="mb-2 font-bold text-gray-900">Endereço</h3>
              <p className="text-gray-600">{unidadeAtual?.endereco}</p>
              <p className="text-gray-600">CEP: {unidadeAtual?.cep}</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-4 text-center">
              <h3 className="mb-2 font-bold text-gray-900">
                Horário de Funcionamento
              </h3>
              <p className="text-gray-600">Segunda a Sexta: 8h às 19h</p>
              <p className="text-gray-600">Sábados: 8h às 13h</p>
            </div>
            <div className="rounded-lg bg-sky-50 p-4 text-center">
              <h3 className="mb-2 font-bold text-gray-900">Contato</h3>
              {unidadeAtual?.contato?.telefones.map((telefone, index) => (
                <p key={index} className="text-gray-600">
                  {telefone}
                </p>
              ))}
              <p className="mt-2 text-gray-600">CRO: {unidadeAtual?.cro}</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href={`https://wa.me/${unidadeAtual?.contato?.whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20unidade%20${cidadeSelecionada}.`}
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
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
