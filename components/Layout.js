import Head from 'next/head'
import Link from 'next/link'
export default function Layout({title='Switchboard Finance', description='Business asset finance.', children}){
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://switchboard.finance';
  const ogImg = url + '/wordmark.svg';
  const jsonLd = {"@context":"https://schema.org","@type":"FinancialService","name":"Switchboard Finance","url":url,"image":ogImg};
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <link rel="icon" href="/logo-icon.svg"/>
      <meta property="og:image" content={ogImg}/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
    </Head>
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img className="logo" src="/logo-icon.svg" alt="Switchboard Finance logo"/>
          <img className="wordmark" src="/wordmark.svg" alt="Switchboard Finance"/>
        </div>
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/asset-finance">Asset finance</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
    <main className="container">{children}</main>
    <footer className="container footer">© {new Date().getFullYear()} Switchboard Finance</footer>
  </>)
}
