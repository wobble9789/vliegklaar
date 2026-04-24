import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Leiden | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Leiden. Wij helpen u veilig en comfortabel op reis vanaf de Sleutelstad naar elke bestemming.',
};

export default function LeidenSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Leiden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Leiden en omliggende plaatsen zoals Leiderdorp, Oegstgeest en Voorschoten."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe werkt de begeleiding vanaf Leiden Centraal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wij kunnen u ophalen bij u thuis in Leiden of afspreken op station Leiden Centraal. Vanaf daar begeleiden we u naar Schiphol of uw eindbestemming, inclusief hulp met bagage en overstappen."
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
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Leiden
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Leiden en wilt u onbezorgd op reis? Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de Sleutelstad. Wij regelen alles voor u.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Leiden: 06-18769492
                </a>
                <Link
                  href="/contact"
                  className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center"
                >
                  Stuur een bericht
                </Link>
              </div>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1599839446343-2d2568601633?w=800&q=80"
                alt="Leiden Grachten"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Leiden?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vanuit de Sleutelstad</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Leiden (of omgeving zoals Leiderdorp, Oegstgeest, Voorschoten) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijk & Vertrouwd</h3>
              <p className="text-gray-600">
                U krijgt een vaste begeleider die de regio Leiden goed kent en u alle zorgen uit handen neemt.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Comfortabele Logistiek</h3>
              <p className="text-gray-600">
                Of u nu vliegt vanaf Schiphol of per trein reist, wij zorgen voor een soepele overgang en assistentie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage of drukke vliegvelden; wij zijn er voor uw rust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Leiden</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Leiden.
          </p>
          <a
            href="tel:0618769492"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-2xl px-12 py-6 rounded-2xl shadow-xl transition-all hover:scale-105"
          >
            06-18769492
          </a>
        </div>
      </section>
    </main>
  );
}
