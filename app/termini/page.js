import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Termini di Servizio — BuroSemplice',
  description: 'Termini di Servizio di BuroSemplice: natura delle informazioni, limitazioni di responsabilità e condizioni d\'uso del sito.',
  alternates: { canonical: 'https://burosemplice.it/termini' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Termini di Servizio — BuroSemplice',
    description: 'Termini di Servizio di BuroSemplice: natura delle informazioni, limitazioni di responsabilità e condizioni d\'uso del sito.',
    url: 'https://burosemplice.it/termini',
  },
};

export default function TerminiPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Documento legale</div>
        <h1 className="page-title">Termini di Servizio</h1>
        <p className="page-sub">Ultimo aggiornamento: marzo 2026 · BuroSemplice</p>

        <div className="box-warn">
          <p><strong>Importante:</strong> BuroSemplice fornisce informazioni generali di carattere orientativo. Non siamo commercialisti, avvocati o consulenti fiscali. Le informazioni sul sito non costituiscono consulenza professionale e non sostituiscono il parere di un professionista qualificato.</p>
        </div>

        <div className="prose">
          <h2>1. Descrizione del servizio</h2>
          <p>BuroSemplice è un servizio informativo online che fornisce guide gratuite su pratiche burocratiche, adempimenti fiscali e situazioni della vita quotidiana degli italiani. Il sito è consultabile liberamente, senza registrazione obbligatoria.</p>
          <p>Usando BuroSemplice accetti questi Termini di Servizio. Se non li accetti, ti chiediamo di non usare il servizio.</p>

          <h2>2. Natura delle informazioni</h2>
          <p>Le guide e i contenuti di BuroSemplice sono redatti con cura e aggiornati periodicamente, ma hanno carattere <strong>puramente informativo e orientativo</strong>. In particolare:</p>
          <ul>
            <li>Le informazioni non costituiscono consulenza fiscale, legale, finanziaria o professionale di alcun tipo</li>
            <li>I numeri, le cifre e le scadenze indicate sono indicativi e possono variare in base alla situazione individuale</li>
            <li>La normativa cambia frequentemente: verifica sempre le informazioni con fonti ufficiali (Agenzia delle Entrate, INPS, sito del tuo Comune, ecc.)</li>
            <li>Per decisioni importanti — acquisto di casa, apertura di partita IVA, successioni — rivolgiti sempre a un professionista</li>
          </ul>

          <div className="box-info">
            <p>Le fonti ufficiali di riferimento sono: <strong>agenziaentrate.gov.it</strong>, <strong>inps.it</strong>, <strong>mef.gov.it</strong>, e i siti istituzionali del tuo Comune e Regione.</p>
          </div>

          <h2>3. Limitazione di responsabilità</h2>
          <p>BuroSemplice non si assume alcuna responsabilità per:</p>
          <ul>
            <li>Decisioni prese sulla base delle informazioni presenti sul sito</li>
            <li>Eventuali errori, imprecisioni o informazioni non aggiornate nei contenuti</li>
            <li>Danni diretti o indiretti derivanti dall&apos;uso o dall&apos;impossibilità di usare il servizio</li>
            <li>Interruzioni del servizio per manutenzione, problemi tecnici o cause di forza maggiore</li>
          </ul>
          <p>L&apos;utente utilizza il servizio a proprio rischio e responsabilità.</p>

          <h2>4. Proprietà intellettuale</h2>
          <p>Tutti i contenuti di BuroSemplice — testi, grafica, logo, struttura delle guide — sono di proprietà di BuroSemplice e protetti dalle leggi sul diritto d&apos;autore. È vietato:</p>
          <ul>
            <li>Copiare, riprodurre o distribuire i contenuti senza autorizzazione scritta</li>
            <li>Utilizzare i contenuti per scopi commerciali senza consenso</li>
            <li>Rimuovere o alterare le indicazioni di copyright</li>
          </ul>
          <p>È consentito condividere link alle guide e citare brevi estratti con indicazione della fonte (BuroSemplice — burosemplice.it).</p>

          <h2>5. Comportamento degli utenti</h2>
          <p>Usando BuroSemplice ti impegni a non:</p>
          <ul>
            <li>Usare strumenti automatici per estrarre contenuti dal sito (scraping)</li>
            <li>Tentare di accedere a parti non pubbliche del sito</li>
            <li>Usare il servizio per attività illegali o che violino diritti di terzi</li>
            <li>Intasare i server con richieste eccessive</li>
          </ul>

          <h2>6. Link a siti esterni</h2>
          <p>Le guide contengono link a siti istituzionali e di terze parti (es. agenziaentrate.gov.it, inps.it). BuroSemplice non è responsabile del contenuto di questi siti e non ne garantisce l&apos;aggiornamento o la disponibilità. I link sono forniti solo per comodità dell&apos;utente.</p>

          <h2>7. Modifiche al servizio</h2>
          <p>BuroSemplice si riserva il diritto di modificare, sospendere o interrompere il servizio in qualsiasi momento, con o senza preavviso. Ci riserviamo anche il diritto di modificare questi Termini di Servizio: le modifiche saranno efficaci dalla loro pubblicazione sul sito.</p>

          <h2>8. Legge applicabile e foro competente</h2>
          <p>Questi Termini sono regolati dalla legge italiana. Per qualsiasi controversia è competente il Foro del luogo di residenza o domicilio dell&apos;utente, come previsto dal Codice del Consumo (D.Lgs. 206/2005).</p>

          <h2>9. Contatti</h2>
          <p>Per domande su questi Termini scrivi a: <a href="mailto:info.burosemplice@gmail.com">info.burosemplice@gmail.com</a></p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
