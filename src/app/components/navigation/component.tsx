import Link from 'next/link';

export const Navigation = () => {
  return (
    <nav className="header__nav" data-mobile="list">
      <ul className="header__nav-menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">A Sempre Sorrindo</Link>
        </li>
        <li>
          <Link href="/implante-dentario" className="text-yellow-400">
            Implante dentário
          </Link>
        </li>
        <li>
          <Link href="/tratamentos">Tratamentos</Link>
        </li>
        <li>
          <Link href="/unidades">Clínicas</Link>
        </li>
        <li>
          <Link href="/premios">Prêmios</Link>
        </li>
        <li>
          <Link href="/noticias">Notícias</Link>
        </li>
      </ul>
    </nav>
  );
};
