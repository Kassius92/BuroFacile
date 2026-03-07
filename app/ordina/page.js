import OrdinaForm from './OrdinaForm';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Scheda personalizzata — BuroSemplice',
  description: 'Personalizza la tua guida BuroSemplice: ricevi una scheda con i tuoi numeri, i tuoi bonus e gli uffici della tua città entro 24 ore.',
  alternates: { canonical: 'https://burosemplice.it/ordina' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Scheda personalizzata — BuroSemplice',
    description: 'Personalizza la tua guida BuroSemplice: ricevi una scheda con i tuoi numeri, i tuoi bonus e gli uffici della tua città entro 24 ore.',
    url: 'https://burosemplice.it/ordina',
  },
};

export default function OrdinaPage() {
  return (
    <>
      <Nav variant="scheda" />
      <OrdinaForm />
      <Footer variant="utility" />
    </>
  );
}
