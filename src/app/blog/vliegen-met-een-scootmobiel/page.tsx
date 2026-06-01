import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een scootmobiel: Regels & Tips | Vliegklaar',
  description: 'Wilt u vliegen met een scootmobiel? Lees alles over accu-regels (lithium vs. droge accu), aanmelden bij de maatschappij en praktische tips voor senioren.',
};

export default function VliegenMetScootmobielPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een scootmobiel gratis mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een scootmobiel wordt gezien als een medisch hulpmiddel. Bij de meeste luchtvaartmaatschappijen mag u deze gratis meenemen, mits u dit minimaal 48 uur van tevoren aanmeldt."
        }
      },
      {
        "@type": "Question",
        "name": "Welke accu-regels gelden er voor scootmobielen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dit is het belangrijkste punt: droge accu's (gel/AGM) zijn meestal probleemloos. Lithium-accu's mogen vaak alleen mee als ze een bepaalde capaciteit (Wh) niet overschrijden en moeten soms uit de scootmobiel worden gehaald."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik mijn scootmobiel gebruiken tot aan de gate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Op veel luchthavens, waaronder Schiphol, kunt u met uw eigen scootmobiel tot aan de gate of zelfs de vliegtuigdeur rijden. Daar wordt hij ingeladen in het ruim."
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
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Vliegen met een scootmobiel: Alles wat u moet weten
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Een scootmobiel geeft u de vrijheid om de wereld te ontdekken, ook als u minder ter been bent. 
            Maar vliegen met een elektrisch voertuig vraagt om een goede voorbereiding, vooral vanwege de accu-regels. 
            In dit artikel leggen we uit hoe u veilig en zonder zorgen met uw scootmobiel op reis gaat.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Aanmelden is verplicht</h2>
          <p>
            In tegenstelling tot een gewone koffer, moet u een scootmobiel altijd vooraf aanmelden bij uw luchtvaartmaatschappij. 
            Doe dit uiterlijk <strong>48 uur voor vertrek</strong>. De maatschappij heeft specifieke informatie nodig, zoals:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>De afmetingen (lengte, breedte, hoogte) in ingeklapte of normale stand.</li>
            <li>Het gewicht van de scootmobiel.</li>
            <li>Het type accu (Lithium, Droge accu/Gel, of Natte accu).</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Cruciaal: Het type accu</h2>
          <p>
            De veiligheidsregels voor accu&apos;s zijn streng. Zorg dat u het typeplaatje van de accu kunt laten zien.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Droge accu&apos;s (Gel/AGM):</strong> Deze mogen meestal probleemloos mee. De polen moeten wel worden afgedekt om kortsluiting te voorkomen.</li>
            <li><strong>Lithium-accu&apos;s:</strong> Hier gelden strikte limieten voor de capaciteit (Wattuur). Vaak moet de accu uit de scootmobiel worden gehaald en in de cabine worden vervoerd.</li>
            <li><strong>Natte accu&apos;s:</strong> Deze worden zelden meer toegelaten omdat ze kunnen lekken.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Op de luchthaven</h2>
          <p>
            U kunt uw scootmobiel meestal gebruiken tot aan de gate. Hier wordt hij door het grondpersoneel overgenomen. 
            Zorg dat u weet hoe u de scootmobiel in de &apos;vrijloopstand&apos; zet, zodat het personeel hem handmatig kan verplaatsen 
            zonder de motor te belasten.
          </p>
          
          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Persoonlijke begeleiding nodig?</h2>
          <p>
            Ziet u op tegen de logistiek van het reizen met een scootmobiel? Bij Vliegklaar zijn we gespecialiseerd in 
            <Link href="/reisbegeleiding-ouderen" className="text-primary-600 underline"> reisbegeleiding voor ouderen</Link>. 
            Onze begeleiders helpen u bij het inchecken, de security-check en zorgen dat uw hulpmiddel veilig aankomt.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Checklist Scootmobiel & Vliegen</h3>
            <p className="mb-4">
              1. Controleer of uw accu een IATA-certificaat heeft.<br />
              2. Neem de handleiding mee (of een kopie) waarop staat hoe de accu losgekoppeld moet worden.<br />
              3. Bevestig een label met instructies voor het personeel aan het stuur.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Hulp nodig bij uw reisplanning?
            </Link>
          </div>
        </div>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}