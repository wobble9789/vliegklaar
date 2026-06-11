import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Venlo | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Venlo en Noord-Limburg. Wij helpen u veilig en comfortabel op reis, van uw voordeur tot uw bestemming.',
};

export default function VenloSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf vliegveld Düsseldorf of Weeze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vanuit Venlo zijn de Duitse luchthavens Düsseldorf en Weeze vaak erg praktisch. Wij begeleiden u vanaf uw huis in Venlo, Tegelen of Blerick naar de luchthaven en helpen u bij alle controles."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk voor senioren met een mobiliteitsbeperking in Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Wij zijn gespecialiseerd in het ondersteunen van ouderen die minder mobiel zijn. We regelen assistentie op de luchthaven en zorgen dat het vervoer in Venlo naadloos aansluit op uw behoeften."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe werkt de deur-tot-deur begeleiding in Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Onze begeleider komt op de dag van vertrek bij u thuis in Venlo. We helpen met de koffers, reizen samen naar het vliegveld (Schiphol, Eindhoven of Düsseldorf) en blijven bij u tot u veilig op uw eindbestemming bent."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik hulp krijgen bij vliegen met een rollator vanaf Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een rollator is geen probleem. Wij helpen u bij de aanmelding bij de luchtvaartmaatschappij en zorgen dat u uw rollator op de luchthaven kunt gebruiken tot aan het vliegtuig."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met Parkinson in de regio Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben ervaring met het begeleiden van reizigers met de ziekte van Parkinson. We zorgen voor een rustig tempo, helpen bij de logistiek en ondersteunen bij medicatieherinneringen tijdens de reis."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten hangen af van de duur en intensiteit van de begeleiding. Na een vrijblijvend kennismakingsgesprek in Venlo maken we een heldere offerte op maat voor u."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren met dementie in Noord-Limburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij begeleiden regelmatig ouderen met beginnende dementie. Onze aanwezigheid biedt rust en structuur, wat essentieel is voor een geslaagde reiservaring vanuit Venlo."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vloeibare medicijnen meenemen vanaf Weeze of Düsseldorf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeibare medicijnen die noodzakelijk zijn voor de reis mogen in verpakkingen groter dan 100ml mee. Wij adviseren om een medische verklaring of medicijnenpaspoort bij u te hebben. Onze begeleiders helpen u graag bij de voorbereiding hiervan."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met de security check voor senioren met een pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reizen met een pacemaker of ICD is veilig. U moet dit wel melden bij de security op de luchthaven (zoals Weeze of Düsseldorf). Onze begeleiders weten precies welke documenten u nodig heeft en begeleiden u discreet door de controle."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen met diabetes vanuit Venlo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met diabetes vraagt om extra planning rondom insuline en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik begeleiding krijgen bij vliegangst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid en afleiding tijdens de vlucht om uw reis zo comfortabel mogelijk te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Is er hulp bij vliegen na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren die kort geleden een ingreep hebben ondergaan (zoals een heup- of knieoperatie). Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen."
        }
      },
      {
        "@type": "Question",
        "name": "Wanneer mag ik vliegen na een heupoperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meestal mag u na 6 tot 12 weken weer vliegen na een totale heupvervanging. Dit hangt echter af van uw herstel en de duur van de vlucht. Wij kunnen u tijdens de reis ondersteunen met extra beenruimte en mobiliteitshulp."
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
                Reisbegeleiding voor ouderen in Venlo
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Venlo, Tegelen of Blerick en wilt u graag zorgeloos op reis? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio Noord-Limburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Venlo: 06-18769492
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
                src="https://images.unsplash.com/photo-1549635741-653556093f41?w=800&q=80"
                alt="Venlo Stadhuus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Venlo?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Venlo en omgeving en begeleiden u gedurende de hele reis naar elke gewenste bestemming.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijk & Vertrouwd</h3>
              <p className="text-gray-600">
                Onze begeleiders bieden de rust en aandacht die nodig is voor een ontspannen reiservaring vanuit Limburg.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Volledige ondersteuning</h3>
              <p className="text-gray-600">
                Hulp bij inchecken, bagage en navigatie op vliegvelden zoals Schiphol, Eindhoven of Düsseldorf.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veilig op pad</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over de complexiteit van modern reizen; wij regelen alles voor u.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Venlo</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("Parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Lees meer over medicijnen mee op reis.</Link></>
                  )}
                  {faq.name.includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Bekijk onze gids voor vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een operatie.</Link></>
                  )}
                  {faq.name.includes("heupoperatie") && (
                    <> <Link href="/blog/vliegen-na-heupoperatie" className="text-primary-600 hover:underline">Lees onze specifieke gids over vliegen na een heupoperatie.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Venlo</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek in Venlo of omgeving.
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
