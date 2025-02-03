/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backup.clinicassempresorrindo.com.br',
        port: '',
        pathname: '/storage/app/uploads/**',
        search: ''
      }
    ]
  },
  async redirects() {
    return [
      {
        source:
          '/:path(contato|institucional|trabalhe-conosco|videos|home).html',
        destination: '/',
        permanent: true
      },
      {
        source: '/:path(contato|institucional|trabalhe-conosco|videos|home)',
        destination: '/',
        permanent: true
      },
      {
        source: '/noticias.html',
        has: [
          {
            type: 'query',
            key: 'tag'
          }
        ],
        destination: '/noticias',
        permanent: true
      },
      {
        source: '/pages/clinicas.html',
        destination: '/unidades',
        permanent: true
      },
      {
        source: '/pages/clinicas',
        destination: '/unidades',
        permanent: true
      },
      {
        source: '/unidades/favicon.ico',
        destination: '/unidades',
        permanent: true
      },
      {
        source:
          '/noticias/57/vereador-lincoln-fernandes-visita-a-mals-nova-clinica-sempre-sorrindo-em-ribeirao-preto.html',
        destination: '/noticias',
        permanent: true
      },
      {
        source: '/SempreSorrindo/pages/premios',
        destination: '/premios',
        permanent: true
      },
      {
        source: '/clinica/11/:slug.html',
        destination: '/unidades/barretos',
        permanent: true
      },
      {
        source: '/clinica/25/:slug.html',
        destination: '/unidades/bebedouro',
        permanent: true
      },
      {
        source: '/clinica/13/:slug.html',
        destination: '/unidades/franca',
        permanent: true
      },
      {
        source: '/clinica/28/:slug.html',
        destination: '/unidades/jaboticabal',
        permanent: true
      },
      {
        source: '/clinica/27/:slug.html',
        destination: '/unidades/ribeirao-preto-1',
        permanent: true
      },
      {
        source: '/clinica/17/:slug.html',
        destination: '/unidades/ribeirao-preto-2',
        permanent: true
      },
      {
        source: '/clinica/16/:slug.html',
        destination: '/unidades/ribeirao-preto-3',
        permanent: true
      },
      {
        source: '/clinica/15/:slug.html',
        destination: '/unidades/ribeirao-preto-4',
        permanent: true
      },
      {
        source: '/clinica/14/:slug.html',
        destination: '/unidades/ribeirao-preto-5',
        permanent: true
      },
      {
        source: '/clinica/12/:slug.html',
        destination: '/unidades/sertaozinho',
        permanent: true
      },
      {
        source:
          '/noticias/81/tratamento-dentario-em-criancas-diminui-89-na-pandemia-e-especialista-faz-alerta.html',
        destination:
          '/noticias/tratamento-dentario-em-criancas-diminui-89percent-na-pandemia-e-especialista-faz-alerta',
        permanent: true
      },
      {
        source:
          '/noticias/104/quando-levar-o-bebe-ao-dentista-pela-1o-vez.html',
        destination: '/noticias/quando-levar-o-bebe-ao-dentista-pela-1a-vez',
        permanent: true
      },
      {
        source:
          '/noticias/106/compromisso-social-do-grupo-sempre-sorrindo---apae-ribeirao-preto.html',
        destination:
          '/noticias/compromisso-social-do-grupo-sempre-sorrindo-apae-ribeirao-preto',
        permanent: true
      },
      {
        source:
          '/noticias/108/melhor-video-de-aniversario-da-sempre-sorrindo---ano-de-2021.html',
        destination:
          '/noticias/melhor-video-de-aniversario-da-sempre-sorrindo-ano-de-2021',
        permanent: true
      },
      {
        source:
          '/noticias/124/o-mes-da-crianca-encerramos-com-muita-gratidaon.html',
        destination: '/noticias/o-mes-da-crianca-encerramos-com-muita-gratidao',
        permanent: true
      },
      {
        source:
          '/noticias/41/premio-de-qualidade--aguia-americana-melhores-do-ano-2021.html',
        destination:
          '/noticias/premio-de-qualidade-aguia-americana-melhores-do-ano-2021',
        permanent: true
      },
      {
        source: '/noticias/177/lroticcal-eyewear.html',
        destination: '/noticias/loticcal-eyewear',
        permanent: true
      },
      {
        source:
          '/noticias/199/clinicas-sempre-sorrindo-participa-da-39o-festa-do-quitute-de-jaboticabal-em-comemoracao-ao-aniversario-de-195-anos-da-cidade.html',
        destination:
          '/noticias/clinicas-sempre-sorrindo-participa-da-39a-festa-do-quitute-de-jaboticabal-em-comemoracao-ao-aniversario-de-195-anos-da-cidade',
        permanent: true
      },
      {
        source:
          '/noticias/59/sempre-sorrindo-prestigia-o-trabalho-qdoutores-de-patasq-de-ricardo-cazarotte.html',
        destination:
          '/noticias/sempre-sorrindo-prestigia-o-trabalho-doutores-de-patas-de-ricardo-cazarotte',
        permanent: true
      },
      {
        source:
          '/noticias/92/premio-internacional-qlatin-american-quality-awards-2020q.html',
        destination:
          '/noticias/premio-internacional-latin-american-quality-awards-2020',
        permanent: true
      },
      {
        source:
          '/noticias/99/inauguracao-clinica-odontologica-da-apae---ribeirao-preto.html',
        destination:
          '/noticias/inauguracao-clinica-odontologica-da-apae-ribeirao-preto',
        permanent: true
      },
      {
        source:
          '/noticias/108/melhor-video-de-aniversario-da-sempre-sorrindo---ano-de-2021.html',
        destination:
          '/noticias/melhor-video-de-aniversario-da-sempre-sorrindo-ano-de-2021',
        permanent: true
      },
      {
        source: '/noticias/:id/:slug(.+).html',
        destination: '/noticias/:slug',
        permanent: true
      },
      {
        source: '/pages/:slug(.+).html',
        destination: '/:slug',
        permanent: true
      },
      {
        source: '/pages/:slug/:innerSlug(.+)\\.html',
        destination: '/:slug/:innerSlug',
        permanent: true
      },
      {
        source: '/pages/:slug(.+)',
        destination: '/:slug',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
