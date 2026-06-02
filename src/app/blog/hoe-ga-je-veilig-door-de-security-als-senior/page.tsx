import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je veilig door de security als senior? | Vliegklaar',
  description: 'Praktische tips voor senioren om vlot en zonder stress door de veiligheidscontrole op het vliegveld te gaan. Ontdek alles over protheses, vloeistoffen en meer.',
};

export default function SecuritySeniorBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, u kunt uw kunstgebit gewoon inhouden. De scanners op luchthavens zoals Schiphol zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese."
        }
      },
      {
        "@type": "Question",
        "name": "Wat als ik een pacemaker of ICD heb?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meld dit altijd vooraf bij de beveiligingsbeambte. U hoeft dan niet door de metaaldetectiepoort, maar wordt handmatig gecontroleerd. Zorg dat u uw pacemakerpasje bij de hand heeft."
        }
      },
      {
        "@type": "Question",
        "name": "Mogen medicijnen en vloeistoffen mee door de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeibare medicijnen (meer dan 100ml) zijn toegestaan mits u een medisch paspoort of doktersverklaring kunt tonen. Bewaar ze bij voorkeur in de originele verpakking."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn schoenen uitdoen bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Op veel luchthavens moeten schoenen die boven de enkel komen (zoals laarsjes of hoge wandelschoenen) uitgetrokken worden en in een bak door de scanner. Lage instappers of sneakers mogen vaak aanblijven, tenzij ze metalen onderdelen bevatten."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik mijn wandelstok meenemen door de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, uw wandelstok moet meestal even in de bak om door de röntgenscanner te gaan. Indien u niet zonder ondersteuning kunt staan, zal de beveiliging u een tijdelijke leenstok geven of u ondersteunen terwijl u door de scan gaat."
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
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Hoe ga je veilig door de security als senior?
        </h1>
        
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-10">
          <Image
            src="https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=1200&q=80"
            alt="Beveiligingscontrole op vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            De veiligheidscontrole (security) op de luchthaven is voor veel reizigers het meest stressvolle onderdeel van de reis. Voor senioren kunnen daar extra vragen bij komen: wat te doen met een heupprothese, medicijnen of een gehoorapparaat? Met een goede voorbereiding gaat u echter vlot en zonder zorgen door de controle.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Kleding en schoeisel</h2>
          <p>
            Draag comfortabele kleding zonder al te veel metalen knopen of riemen. Op veel vliegvelden moeten schoenen die boven de enkel komen uitgetrokken worden. Kies daarom voor instappers of schoenen met klittenband die u makkelijk aan- en uittrekt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Protheses en implantaten</h2>
          <p>
            Heeft u een kunstgewricht (zoals een heup- of knieprothese)? Dit kan het alarm van de metaaldetectiepoort activeren. Geen zorgen: meld dit vooraf aan de beambte. Tegenwoordig worden vaak moderne body-scanners gebruikt die precies zien waar het metaal zit. Handmatig gefouilleerd worden is ook een optie en gebeurt altijd discreet.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Medicatie en vloeistoffen</h2>
          <p>
            Houd uw medicijnen in uw handbagage. Vloeibare medicijnen, koelelementen of injectiespuiten mogen mee, ook als ze meer dan 100ml bevatten. Het is essentieel om een <strong>Europees Medisch Paspoort</strong> (verkrijgbaar bij uw apotheek) te kunnen tonen om vragen te voorkomen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Gehoorapparaten en hulpmiddelen</h2>
          <p>
            U kunt uw gehoorapparaat gewoon inhouden tijdens de controle; de scanners beschadigen deze niet. Gebruikt u een rollator of rolstoel? Deze worden apart gecontroleerd (vaak met een handscanner of doekje voor explosieven-detectie) terwijl u door de poort loopt of handmatig gecontroleerd wordt.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-10 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij de security?</h3>
            <p className="mb-6">
              Vindt u de security lastig of bent u slecht ter been? Onze reisbegeleiders in steden zoals{' '}
              <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 underline">Amsterdam</Link>,{' '}
              <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 underline">Utrecht</Link> en{' '}
              <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 underline">Rotterdam</Link> helpen u persoonlijk door elke stap van de controle.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Ontdek onze begeleiding
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Veelgestelde vragen</h2>
          <div className="space-y-6 mt-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h4 className="font-bold text-primary-700">{faq.name}</h4>
                <p>{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
