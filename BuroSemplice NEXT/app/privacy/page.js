import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import '../utility.css';

export const metadata = {
  title: 'Privacy Policy — BuroSemplice',
  description: 'Privacy Policy di BuroSemplice: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
  alternates: { canonical: 'https://burosemplice.it/privacy' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Privacy Policy — BuroSemplice',
    description: 'Privacy Policy di BuroSemplice: come trattiamo i tuoi dati, cookie tecnici, diritti GDPR e come contattarci.',
    url: 'https://burosemplice.it/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav variant="scheda" />

      <div className="page-wrap">
        <div className="page-tag">Documento legale</div>
        <h1 className="page-title">Privacy Policy</h1>
        <p className="page-sub">Ultimo aggiornamento: marzo 2026 · Titolare: BuroSemplice</p>

        <div className="box-info">
          <p>Versione breve: non raccogliamo dati personali per vendere pubblicità. Non cediamo i tuoi dati a nessuno. Usi il sito, leggi le guide, esci. Fine.</p>
        </div>

        <div className="prose">
          <h2>1. Chi siamo</h2>
          <p>BuroSemplice è un servizio informativo che aiuta i cittadini italiani a orientarsi nella burocrazia e nelle pratiche della vita quotidiana. Il titolare del trattamento dei dati è BuroSemplice (<a href="mailto:info.burosemplice@gmail.com">info.burosemplice@gmail.com</a>).</p>

          <h2>2. Quali dati raccogliamo</h2>
          <h3>Dati di navigazione (automatici)</h3>
          <p>Come qualsiasi sito web, i nostri server registrano automaticamente alcune informazioni tecniche quando lo visiti:</p>
          <ul>
            <li>Indirizzo IP (anonimizzato)</li>
            <li>Tipo di browser e sistema operativo</li>
            <li>Pagine visitate e tempo di permanenza</li>
            <li>Sito da cui provieni (referrer)</li>
          </ul>
          <p>Questi dati vengono usati esclusivamente per statistiche aggregate (quante persone leggono la scheda 730, da quale dispositivo, ecc.) e non vengono mai associati alla tua identità.</p>

          <h3>Dati che ci fornisci volontariamente</h3>
          <p>Al momento, BuroSemplice è un sito informativo gratuito. Non è richiesta registrazione né inserimento di dati personali per leggere le guide. Se in futuro attiveremo funzionalità a pagamento (schede personalizzate), ti chiederemo i dati strettamente necessari per erogare il servizio — e ti informeremo in modo chiaro prima di raccoglierli.</p>

          <h3>Cookie</h3>
          <p>Utilizziamo esclusivamente cookie tecnici, necessari al funzionamento del sito. Non utilizziamo cookie di profilazione o di tracciamento pubblicitario. Non è necessario il consenso per i cookie tecnici.</p>

          <h2>3. Per cosa usiamo i dati</h2>
          <p>I dati di navigazione anonimizzati ci servono per:</p>
          <ul>
            <li>Capire quali guide sono più utili e migliorarle</li>
            <li>Identificare problemi tecnici del sito</li>
            <li>Misurare le prestazioni generali del servizio</li>
          </ul>
          <p>Non utilizziamo i dati per pubblicità mirata, profilazione commerciale o cessione a terzi.</p>

          <h2>4. Con chi condividiamo i dati</h2>
          <p>Non vendiamo, non affittiamo e non cediamo i tuoi dati personali a terze parti. I dati tecnici aggregati (es. numero di visite mensili) possono essere condivisi con servizi di hosting e analytics. I fornitori attuali sono:</p>
          <ul>
            <li><strong>Vercel</strong> — hosting del sito (Privacy Policy: vercel.com/legal/privacy-policy)</li>
            <li><strong>Vercel Analytics</strong> — statistiche di visita aggregate e anonime</li>
          </ul>
          <p>Tutti i fornitori sono selezionati per la conformità al GDPR.</p>

          <h2>5. Conservazione dei dati</h2>
          <p>I log tecnici del server vengono conservati per un massimo di 30 giorni, poi eliminati automaticamente. Non conserviamo dati personali oltre il necessario.</p>

          <h2>6. I tuoi diritti (GDPR)</h2>
          <p>In base al Regolamento Europeo 2016/679 (GDPR), hai il diritto di:</p>
          <ul>
            <li><strong>Accesso</strong> — sapere quali dati abbiamo su di te</li>
            <li><strong>Rettifica</strong> — correggere dati inesatti</li>
            <li><strong>Cancellazione</strong> — chiedere l&apos;eliminazione dei tuoi dati</li>
            <li><strong>Portabilità</strong> — ricevere i tuoi dati in formato leggibile</li>
            <li><strong>Opposizione</strong> — opporti al trattamento</li>
          </ul>
          <p>Per esercitare questi diritti scrivi a <a href="mailto:info.burosemplice@gmail.com">info.burosemplice@gmail.com</a>. Risponderemo entro 30 giorni.</p>
          <p>Se ritieni che i tuoi diritti siano stati violati, puoi presentare reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener">garanteprivacy.it</a>).</p>

          <h2>7. Minori</h2>
          <p>BuroSemplice non raccoglie consapevolmente dati da minori di 14 anni. Se ritieni che un minore ci abbia fornito dati personali, contattaci a <a href="mailto:info.burosemplice@gmail.com">info.burosemplice@gmail.com</a>.</p>

          <h2>8. Modifiche a questa policy</h2>
          <p>Possiamo aggiornare questa Privacy Policy in caso di modifiche al servizio o alla normativa. La data di &quot;ultimo aggiornamento&quot; in cima alla pagina indica quando è stata modificata l&apos;ultima volta. Per modifiche sostanziali, ti avviseremo con un avviso visibile sul sito.</p>

          <h2>9. Contatti</h2>
          <p>Per qualsiasi domanda sulla privacy scrivi a: <a href="mailto:info.burosemplice@gmail.com">info.burosemplice@gmail.com</a></p>
        </div>
      </div>

      <Footer variant="utility" />
    </>
  );
}
