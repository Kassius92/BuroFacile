import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SchemaOrg from '@/components/SchemaOrg';
import OpenMenuButton from '@/components/OpenMenuButton';
import './home.css';

export const metadata = {
  title: 'ZeroBurocrazia — La burocrazia italiana, finalmente zero',
  description: 'ZeroBurocrazia semplifica la burocrazia italiana: guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico.',
  alternates: { canonical: 'https://zeroburocrazia.it' },
  openGraph: { url: 'https://zeroburocrazia.it', images: [{ url: '/oghome.png', width: 1200, height: 630 }] },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ZeroBurocrazia',
  url: 'https://zeroburocrazia.it',
  description: 'ZeroBurocrazia semplifica la burocrazia italiana: guide gratuite su 730, ISEE, SPID, NASpI, mutui, partita IVA e molto altro. Scritte come te le spiegherebbe un amico.',
  inLanguage: 'it-IT',
  publisher: {
    '@type': 'Organization',
    name: 'ZeroBurocrazia',
    url: 'https://zeroburocrazia.it',
    email: 'info@zeroburocrazia.it',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://zeroburocrazia.it/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const guides = [
  { emoji: '\u{1F9FE}', title: 'Faccio il 730', desc: 'Come funziona, quando farlo, quali detrazioni puoi avere, e come massimizzare il rimborso.', tag: 'Scadenza: settembre 2026', href: '/730' },
  { emoji: '\u{1F4CB}', title: "Faccio l'ISEE", desc: 'A cosa serve, dove farlo, documenti necessari. Se devi chiedere un bonus, parti da qui.', tag: 'Guida base', href: '/isee' },
  { emoji: '\u{1FAAA}', title: 'Faccio lo SPID', desc: 'Serve per tutto: INPS, Agenzia Entrate, bonus. Come farlo gratis in 15 minuti.', tag: 'Primo passo', href: '/spid' },
];

export default function HomePage() {
  return (
    <>
      <Nav variant="home" />
      <ScrollReveal />
      <SchemaOrg schemas={[websiteSchema]} />

      <section className="h-hero">
        <div className="hero-badge">100% gratuito per iniziare</div>
        <h1>La burocrazia italiana, <em>finalmente</em> semplice.</h1>
        <p>Scegli la tua situazione, leggi la guida completa, scopri quanto ti costa e cosa ti spetta. Senza giri di parole.</p>
        <div className="hero-cta-group">
          <a href="#situazioni" className="btn-primary">Esplora le guide</a>
          <a href="#come-funziona" className="btn-secondary">Come funziona?</a>
        </div>
      </section>

      <div className="social-proof">
        <p>Guide verificate &middot; Aggiornate al 2026 &middot; Scritte in italiano vero</p>
      </div>

      <section className="situations" id="situazioni">
        <div className="container">
          <div className="situations-header r">
            <div className="section-label">Le guide</div>
            <h2 className="section-title">Cosa sta succedendo nella tua vita?</h2>
            <p className="section-subtitle">Tocca la tua situazione e leggi la guida completa. Gratuita, senza registrazione.</p>
          </div>
          <div className="situations-grid">
            {guides.map((g, i) => (
              <Link key={i} href={g.href} className="situation-card r">
                <span className="card-emoji">{g.emoji}</span>
                <div className="card-title">{g.title}</div>
                <div className="card-desc">{g.desc}</div>
                <span className="card-tag">{g.tag}</span>
              </Link>
            ))}
          </div>
          <OpenMenuButton />
        </div>
      </section>

      <section className="how-it-works" id="come-funziona">
        <div className="container">
          <div className="how-header r" style={{ textAlign: 'center' }}>
            <div className="section-label">Come funziona</div>
            <h2 className="section-title">Tre passi. Nessun giro di parole.</h2>
          </div>
          <div className="steps">
            <div className="step r">
              <div className="step-number">1</div>
              <h3>Scegli la situazione</h3>
              <p>Mi sposo, compro casa, faccio il 730... Tocca quello che ti riguarda.</p>
            </div>
            <div className="step r">
              <div className="step-number">2</div>
              <h3>Leggi la guida gratis</h3>
              <p>Tutto quello che devi sapere: costi, documenti, bonus, errori da evitare. Gratis al 100%.</p>
            </div>
            <div className="step r">
              <div className="step-number">3</div>
              <h3>Personalizza per te</h3>
              <p>Con la tua città, il tuo stipendio, la tua età. I numeri esatti per la tua situazione. Gratis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="preview" id="esempio">
        <div className="container">
          <div className="preview-container">
            <div className="preview-content r">
              <div className="section-label">Esempio</div>
              <h2 className="section-title">Dalla guida generica ai <em>tuoi</em> numeri</h2>
              <p className="section-subtitle">La guida gratuita ti dice tutto. Quella personalizzata ti dice tutto <strong>per te</strong>: costi esatti, bonus a cui hai diritto tu, uffici della tua città.</p>
              <Link href="/730" className="btn-primary" style={{ display: 'inline-block', marginTop: 8 }}>Prova con il 730</Link>
            </div>
            <div className="preview-card r">
              <div className="preview-card-header">
                <span>Scheda personalizzata</span>
                <h3>Faccio il 730 — Marco, Milano</h3>
              </div>
              <div className="preview-card-body">
                <div className="preview-item"><div className="preview-icon green">💰</div><div className="preview-item-text"><h4>Il tuo rimborso stimato</h4><p>Con le tue spese mediche e il mutuo, rimborso stimato: 840-1.100€</p></div></div>
                <div className="preview-item"><div className="preview-icon orange">📍</div><div className="preview-item-text"><h4>Il tuo CAF più vicino</h4><p>CAF CGIL, Via Palmanova 22, Milano — Prenota al 02-XXXXXXX</p></div></div>
                <div className="preview-item"><div className="preview-icon brown">📅</div><div className="preview-item-text"><h4>Le tue scadenze</h4><p>Precompilata online dal 30 aprile, scadenza invio 30 settembre 2026</p></div></div>
                <div className="preview-item"><div className="preview-icon green">🎯</div><div className="preview-item-text"><h4>Detrazioni che ti perdi</h4><p>Spese sportive figlio, abbonamento ATM, assicurazione vita — valgono ~320€</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="prezzi">
        <div className="container">
          <div className="pricing-header r">
            <div className="section-label">Prezzi</div>
            <h2 className="section-title">Leggere è gratis. Personalizzare anche.</h2>
            <p className="section-subtitle">Le guide complete sono gratuite per sempre. La scheda personalizzata con i tuoi numeri esatti? Anche quella.</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card r">
              <div className="pricing-label">Le guide</div>
              <div className="pricing-price">0€</div>
              <p className="pricing-desc">Tutto quello che devi sapere, per sempre.</p>
              <ul className="pricing-features">
                <li>Tutte le guide complete</li>
                <li>Costi, documenti, bonus</li>
                <li>Errori da evitare</li>
                <li>Aggiornate ogni anno</li>
              </ul>
              <a href="#situazioni" className="btn-secondary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Leggi gratis</a>
            </div>
            <div className="pricing-card featured r">
              <div className="pricing-label">Personalizzata</div>
              <div className="pricing-price">Gratis</div>
              <p className="pricing-desc">I numeri esatti per la tua vita.</p>
              <ul className="pricing-features">
                <li>Tutto della guida gratuita</li>
                <li>Importi calcolati su di te</li>
                <li>Uffici e contatti della tua città</li>
                <li>Bonus a cui hai diritto tu</li>
                <li>Promemoria scadenze via email</li>
              </ul>
              <Link href="/ordina" className="btn-primary" style={{ width: '100%', display: 'block', textAlign: 'center' }}>Personalizza — Gratis</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <h2>La burocrazia non dovrebbe essere<br />un lavoro a tempo pieno.</h2>
        <p>Inizia gratis. Nessuna registrazione, nessun vincolo.</p>
        <a href="#situazioni" className="btn-light">Esplora le guide</a>
      </section>

      <Footer variant="home" />
    </>
  );
}
