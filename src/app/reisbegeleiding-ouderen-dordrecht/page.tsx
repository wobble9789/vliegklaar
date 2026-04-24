import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Dordrecht | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Dordrecht. Wij helpen u veilig en comfortabel op reis vanaf het Eiland van Dordrecht naar elke bestemming.',
};

export default function DordrechtSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Dordrecht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Dordrecht en omliggende gemeenten in de Drechtsteden, zoals Zwijndrecht, Papendrecht en Sliedrecht."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook vanaf huis naar het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, wij halen u thuis op in Dordrecht en begeleiden u naar Schiphol, Rotterdam The Hague Airport of Brussel, inclusief volledige ondersteuning bij het inchecken."
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
                Reisbegeleiding voor ouderen in Dordrecht
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Dordrecht of de Drechtsteden en wilt u onbezorgd op reis? 
                Vliegklaar biedt deskundige en persoonlijke reisbegeleiding speciaal voor senioren.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Dordrecht: 06-18769492
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
                src="https://images.unsplash.com/photo-1580214631372-979927361a99?w=800&q=80"
                alt="Dordrecht monumenten"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Dordrecht?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrek vanaf uw voordeur</h3>
              <p className="text-gray-600">
                Wij halen u op in Dordrecht of de Drechtsteden en zorgen voor een comfortabele reis naar de luchthaven of uw vakantiebestemming.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijke aandacht</h3>
              <p className="text-gray-600">
                Onze begeleiders hebben ervaring met de specifieke wensen van senioren en bieden rust en structuur tijdens de reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Geen stress meer</h3>
              <p className="text-gray-600">
                Geen zorgen meer over treintijden, zware koffers of digitale inchecksystemen; wij regelen alles voor u.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Voor elk type reis</h3>
              <p className="text-gray-600">
                Of u nu een verre reis maakt naar familie of een ontspannen vakantie in Europa zoekt, wij begeleiden u overal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reisbegeleider in Dordrecht</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer eens onbezorgd op reis gaan? Neem contact met ons op voor een persoonlijk kennismakingsgesprek in Dordrecht.
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
