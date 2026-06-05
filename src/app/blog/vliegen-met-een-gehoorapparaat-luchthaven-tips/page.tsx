import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Tips voor op de luchthaven | Vliegklaar',
  description: 'Gaat u vliegen met een gehoorapparaat? Lees onze praktische tips voor op de luchthaven, van security checks tot ringleidingen bij de gate.',
};

export default function VliegenGehoorapparaatLuchthaven() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag mijn gehoorapparaat in blijven tijdens de security check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw gehoorapparaat gewoon inhouden tijdens de veiligheidscontrole op de luchthaven. De scanners hebben geen invloed op de werking van uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik melden dat ik een gehoorapparaat draag bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is aan te raden om dit even kort te melden bij de beveiligingsbeambte, zeker als u door een bodyscanner gaat. Zo weten zij direct wat het is als er een melding zou zijn."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er voorzieningen voor slechthorenden op vliegvelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veel moderne vliegvelden, zoals Schiphol, beschikken over ringleidingen bij informatiebalies en gates, zodat u omroepen en informatie beter kunt verstaan via de T-stand van uw gehoorapparaat."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-primary-600 hover:underline">← Terug naar overzicht</Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gehoorapparaat: Slimme tips voor op de luchthaven
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met een gehoorapparaat vraagt om een kleine beetje extra voorbereiding, vooral op een drukke luchthaven. 
            In dit artikel leggen we uit hoe u soepel door de controles komt en optimaal gebruikmaakt van de faciliteiten op het vliegveld.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1551827931-24387ec42a04?w=800&q=80"
            alt="Senioren op de luchthaven met gehoorapparaat"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">De Security Check: Geen zorgen</h2>
          <p>
            Een veelgestelde vraag is of het gehoorapparaat uit moet bij de security. Het antwoord is simpel: nee. 
            U kunt uw apparatuur gewoon dragen. De röntgenstraling van de bagagescanners is niet schadelijk voor uw gehoorapparaat, 
            en de metaaldetectiepoortjes of bodyscanners veroorzaken geen schade.
          </p>
          <p>
            Het is wel verstandig om even aan de beveiligingsbeambte te laten zien dat u een apparaat draagt. 
            Dit voorkomt verwarring als u gefouilleerd moet worden of als er een signaal afgaat.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Ringleidingen en Hulpmiddelen</h2>
          <p>
            Grote luchthavens zoals Schiphol zijn uitstekend uitgerust voor reizigers met gehoorproblemen. 
            Let bij de gates en informatiebalies op het symbool voor ringleiding (een oor met een &apos;T&apos;). 
            Wanneer u uw gehoorapparaat op de T-stand zet, wordt het geluid van de omroepinstallatie direct naar uw oor gestuurd, 
            zonder storend omgevingsgeluid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">Tips voor een zorgeloze start</h2>
          <ul>
            <li><strong>Reservebatterijen:</strong> Neem altijd voldoende batterijen mee in uw handbagage. De droge lucht op de luchthaven en in het vliegtuig kan ervoor zorgen dat batterijen sneller leeg gaan.</li>
            <li><strong>Schoonmaaksetje:</strong> Een kleine verstopping kan op reis lastig zijn. Neem een compact setje mee voor snelle reiniging.</li>
            <li><strong>Meld het bij de gate:</strong> Laat het personeel bij de gate even weten dat u slechthorend bent. Mocht er een belangrijke wijziging zijn die wordt omgeroepen, dan komen ze u vaak persoonlijk informeren.</li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl my-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
            <p className="mb-6">
              Vindt u het spannend om alleen te reizen met een gehoorbeperking? De begeleiders van Vliegklaar ondersteunen u graag. 
              Wij helpen u bij de controles en zorgen dat u geen informatie mist.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Neem contact op voor de mogelijkheden
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-primary-800 mb-8">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-primary-800 mb-6">Relevante artikelen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/vliegen-met-een-gehoorapparaat-senioren" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
              Vliegen met een gehoorapparaat als senior
            </Link>
            <Link href="/blog/hoe-ga-je-om-met-een-gehoorapparaat-in-het-vliegtuig" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
              Tips voor tijdens de vlucht
            </Link>
            <Link href="/blog/vliegen-met-een-gehoorprothese-tips" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
              Vliegen met een gehoorprothese
            </Link>
            <Link href="/blog/reizen-met-gehoorbescherming-senioren" className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200">
              Gehoorbescherming op reis
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
