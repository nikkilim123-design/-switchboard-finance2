import Layout from '../components/Layout'
import Link from 'next/link'
export default function Home(){
  return (<Layout title="Business Asset Finance Broker — Switchboard Finance" description="Asset finance for trucks, construction equipment, plant and fit-outs.">
    <section className="hero">
      <div className="hero-grid">
        <div>
          <span className="kicker">Melbourne • Australia</span>
          <h1>Asset finance for Australian businesses. <span style={{color:'var(--accent)'}}>Fast, low‑friction.</span></h1>
          <p>We specialise in business asset finance — trucks, vehicles, construction & manufacturing equipment, medical and fit‑outs. Low‑doc pathways when full financials aren’t available.</p>
          <div className="cta">
            <Link className="btn primary" href="/contact">Get a quote</Link>
            <Link className="btn" href="/asset-finance">Need an asset loan?</Link>
          </div>
        </div>
        <div><img src="/hero.jpg" alt="Business asset finance" style={{width:'100%',borderRadius:14,border:'1px solid var(--border)'}}/></div>
      </div>
    </section>
    <section className="section">
      <div className="grid">
        <div className="card"><img src="/photos/transport-prime-mover.jpg" alt="Asset finance" style={{width:'100%',height:200,objectFit:'cover'}}/><div className="card-body"><h3>Asset finance</h3><p>Vehicles, trucks, yellow goods, plant & equipment. Low‑doc options.</p></div></div>
        <div className="card"><img src="/photos/manufacturing-forklift.jpg" alt="Commercial loans" style={{width:'100%',height:200,objectFit:'cover'}}/><div className="card-body"><h3>Commercial loans</h3><p>Working capital, invoice finance, commercial property.</p></div></div>
        <div className="card"><img src="/photos/office-fitout.jpg" alt="Home & investment" style={{width:'100%',height:200,objectFit:'cover'}}/><div className="card-body"><h3>Home & investment loans</h3><p>Owner‑occupier, investment and refinance.</p></div></div>
      </div>
    </section>
  </Layout>)
}
