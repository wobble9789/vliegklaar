import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Zoetermeer | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Zoetermeer. Wij helpen u veilig en comfortabel op reis vanaf Rotterdam The Hague of Schiphol.',
};

export default function ZoetermeerSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Rotterdam The Hague Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor bewoners van Zoetermeer is Rotterdam The Hague Airport vaak een heel prettig en overzichtelijk startpunt. Wij begeleiden u van deur tot deur, helpen bij het inchecken en blijven bij u tot aan de gate of de eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie helpen bij vliegen met een rollator vanaf Zoetermeer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vliegen met een rollator is goed mogelijk. Wij zorgen dat deze correct wordt aangemeld bij de luchtvaartmaatschappij en begeleiden u op de luchthaven zodat u niet onnodig ver hoeft te lopen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook ondersteuning bij het aanvragen van vliegveld assistentie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij kunnen de volledige aanvraag voor luchthavenassistentie voor u uit handen nemen. Zo weet u zeker dat er op zowel Rotterdam als Schiphol hulp klaarstaat bij aankomst."
        }
      },
      {
        "@type": "Question",
        "name": "Is reisbegeleiding in Zoetermeer ook beschikbaar voor mensen met beginnende dementie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze begeleiders hebben veel ervaring met het ondersteunen van senioren met geheugenproblemen. Wij bieden de nodige structuur en rust om de reis veilig en prettig te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat kost reisbegeleiding in de regio Zoetermeer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van uw specifieke wensen en de duur van de reis. We komen graag bij u langs in Zoetermeer voor een vrijblijvende kennismaking, waarna we een transparante offerte op maat maken."
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
                Reisbegeleiding voor ouderen in Zoetermeer
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bent u woonachtig in Zoetermeer en droomt u van een reis, maar ziet u op tegen het alleen reizen? 
                Vliegklaar biedt deskundige en persoonlijke reisbegeleiding voor senioren in Zoetermeer en omgeving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Zoetermeer: 06-18769492
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
                src="https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=800&q=80"
                alt="Zoetermeer Stad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Zoetermeer?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Comfortabel vanaf huis</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Zoetermeer en zorgen voor een ontspannen begin van uw reis naar de luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Lokale Expertise</h3>
              <p className="text-gray-600">
                Onze begeleiders in Zuid-Holland kennen de route naar zowel Schiphol als Rotterdam The Hague Airport uitstekend.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijke Aandacht</h3>
              <p className="text-gray-600">
                Bij Vliegklaar bent u geen nummer. Wij bieden zorg en aandacht die past bij uw persoonlijke situatie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Zorgeloos op pad</h3>
              <p className="text-gray-600">
                Van inchecken tot het vinden van de juiste gate; wij regelen alles zodat u alleen maar hoeft te genieten.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen over reisbegeleiding in Zoetermeer</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Zoetermeer</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer onbezorgd de wereld ontdekken? Bel ons voor een vrijblijvend kennismakingsgesprek in Zoetermeer.
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
