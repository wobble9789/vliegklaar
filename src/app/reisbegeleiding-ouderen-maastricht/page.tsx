import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Maastricht | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Maastricht en Limburg. Wij helpen u veilig en comfortabel op reis vanaf Maastricht Aachen Airport of andere luchthavens.',
};

export default function MaastrichtSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in Maastricht en Limburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in heel Maastricht en de omliggende regio Limburg, inclusief steden als Heerlen, Sittard en Roermond."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook vanaf Maastricht Aachen Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, wij begeleiden senioren vanaf hun woning in Maastricht naar Maastricht Aachen Airport (MST), Eindhoven Airport of luchthavens in België en Duitsland."
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
                Reisbegeleiding voor ouderen in Maastricht
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Maastricht of omgeving en wilt u graag zorgeloos op reis? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in Limburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Maastricht: 06-18769492
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
                src="https://images.unsplash.com/photo-1579294800821-694d95e86143?w=800&q=80"
                alt="Maastricht Vrijthof"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Maastricht?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Maastricht, Meerssen of Valkenburg en begeleiden u gedurende de hele reis naar uw bestemming.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Grenzeloze begeleiding</h3>
              <p className="text-gray-600">
                Vanuit Maastricht begeleiden wij u ook eenvoudig naar luchthavens zoals Keulen-Bonn, Düsseldorf of Brussel.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijk & Vertrouwd</h3>
              <p className="text-gray-600">
                Onze reisbegeleiders zorgen voor een rustige ervaring, zodat u kunt genieten van de reis zonder stress over koffers of boardingpasses.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Gezelligheid & Veiligheid</h3>
              <p className="text-gray-600">
                Naast de logistieke hulp bieden wij ook een luisterend oor en gezelschap tijdens de reis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw volgende reis begint hier</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer eens op reis vanuit Limburg? Bel ons voor een kennismaking bij u thuis in Maastricht.
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
