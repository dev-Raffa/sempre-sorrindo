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
          <Link href="/tratamentos">Tratamentos</Link>
        </li>
        <li>
          <Link href="/clinicas">Clinicas</Link>
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
