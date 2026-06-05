import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Helmond | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Helmond en de Peel. Wij helpen u veilig en comfortabel op reis vanaf Eindhoven Airport of elders.',
};

export default function HelmondSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Helmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van Helmond en omliggende Peelgemeenten zoals Deurne en Gemert-Bakel."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook naar Eindhoven Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, wij begeleiden senioren vanaf huis in Helmond naar Eindhoven Airport (EIN), Schiphol of andere luchthavens, inclusief hulp bij de security en bagage."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding voor senioren met dementie in Helmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie. Onze begeleiders bieden de nodige structuur en rust om de reis zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met een rollator vanaf Helmond?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een rollator mag vrijwel altijd gratis mee als medische bagage. Wij regelen de assistentie op Eindhoven Airport of Schiphol zodat u uw rollator tot aan de gate kunt gebruiken."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe gaat een senior veilig door de security op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senioren kunnen vlot door de security door moderne CT-scanners te gebruiken, gemakkelijke kleding te dragen en medische protheses of pacemakers vooraf te melden. Onze begeleiders ondersteunen u bij elke stap."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij coördineren dit voor u, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
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
                Reisbegeleiding voor ouderen in Helmond
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Helmond of de Peel en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Helmond: 06-18769492
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
                src="https://images.unsplash.com/photo-1578301135243-7f7228a6f3ca?w=800&q=80"
                alt="Helmond Kasteel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Helmond?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Helmond (of Deurne, Mierlo, Gemert) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Dichtbij Eindhoven Airport</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen Eindhoven Airport en de regio door en door, wat zorgt voor een ontspannen start van uw vakantie.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk Begeleiding</h3>
              <p className="text-gray-600">
                Of het nu gaat om een overwintering in Spanje of een familiebezoek, wij passen de begeleiding aan op uw tempo en wensen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                Met Vliegklaar reist u zonder zorgen over bagage, assistentie op de luchthaven of vervoer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Helmond</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.toLowerCase().includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("security") && (
                    <> <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">Bekijk onze gids voor de security.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Helmond</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis vanaf Helmond? Bel ons voor een vrijblijvend adviesgesprek.
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
