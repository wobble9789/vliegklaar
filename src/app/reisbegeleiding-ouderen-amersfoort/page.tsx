import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Amersfoort | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Amersfoort. Wij helpen u veilig en comfortabel op reis vanaf uw voordeur in Amersfoort.',
};

export default function AmersfoortSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf huis in Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, onze service is van deur tot deur. Wij kunnen u ophalen bij uw woning in Amersfoort, Vathorst of Hoogland en u naar de luchthaven (Schiphol, Eindhoven of Rotterdam) brengen en gedurende de hele reis begeleiden."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie helpen bij vliegen met een rollator vanuit Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zijn gespecialiseerd in het ondersteunen van senioren die een rollator of rolstoel gebruiken. Wij regelen de assistentie op de luchthaven en zorgen dat uw hulpmiddel veilig mee aan boord gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor ouderen met dementie in de regio Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met (beginnende) dementie. Wij bieden de nodige structuur en rust om de reis veilig en comfortabel te laten verlopen, zowel voor de senior als de familie."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben als ik vlieg met medicijnen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor bepaalde medicijnen is een officiële medische verklaring of een medicijnpaspoort nodig. Wij kunnen u adviseren over welke documenten u nodig heeft om probleemloos door de security te komen."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt reisbegeleiding in Amersfoort vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In sommige situaties kan begeleiding (deels) worden vergoed vanuit een PGB of een aanvullende zorgverzekering. Wij raden aan dit vooraf bij uw eigen verzekeraar te controleren."
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
                Reisbegeleiding voor ouderen in Amersfoort
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bent u woonachtig in de regio Amersfoort en droomt u van een vakantie of familiebezoek, maar vindt u de reis zelf lastig? 
                Vliegklaar biedt professionele reisbegeleiding voor senioren in Amersfoort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Amersfoort: 06-18769492
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
                src="https://images.unsplash.com/photo-1543731068-7e0f5beff43a?w=800&q=80"
                alt="Amersfoort"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Zorgeloos reizen vanuit de Keistad</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot bestemming</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Amersfoort, Vathorst of Leusden en begeleiden u gedurende de gehele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ervaren Reisbegeleiders</h3>
              <p className="text-gray-600">
                Onze begeleiders hebben ruime ervaring in het ondersteunen van ouderen bij vliegreizen en treinreizen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk Zorg</h3>
              <p className="text-gray-600">
                Iedere reiziger is uniek. Wij passen onze begeleiding aan op uw specifieke wensen en mobiliteit.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Rust en Veiligheid</h3>
              <p className="text-gray-600">
                Geen stress bij de douane of gate-wijzigingen. Wij houden het overzicht terwijl u ontspant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Amersfoort</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk tips voor medicijnen op reis.</Link></>
                  )}
                  {faq.name.includes("verzekering") && (
                    <> <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">Lees over reisverzekeringen voor senioren.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Amersfoort</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer onbezorgd de wereld ontdekken of uw familie in het buitenland bezoeken? Bel ons voor een kennismaking.
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
