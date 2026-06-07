import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Haarlem | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Haarlem. Wij helpen u veilig en comfortabel op reis, van deur tot deur in de regio Kennemerland.',
};

export default function HaarlemSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook vanaf Haarlem naar Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij halen u thuis op in Haarlem of omgeving (zoals Heemstede of Bloemendaal) en begeleiden u naar Schiphol. We helpen bij het inchecken, de security en reizen indien gewenst met u mee tot aan de hoteldeur op uw bestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er vliegveld assistentie mogelijk voor senioren met een beperking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij coördineren de officiële vliegveld assistentie voor zaken als rolstoelvervoer naar de gate. Daarnaast biedt uw persoonlijke begeleider van Vliegklaar continue ondersteuning die verder gaat dan de standaard luchthavenservice."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik een medische verklaring hebben om te vliegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor sommige aandoeningen of medische apparatuur is een 'Fit to Fly' verklaring nodig. Wij adviseren u hierover en helpen u bij het aanvragen van de juiste documenten bij uw arts in Haarlem."
        }
      },
      {
        "@type": "Question",
        "name": "Komen jullie voor een kennismaking ook langs in Haarlem of Heemstede?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor elke reis plannen we een vrijblijvend kennismakingsgesprek bij u thuis in de regio Kennemerland. Zo kunnen we uw wensen en eventuele medische behoeften in alle rust bespreken."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook begeleiding voor senioren met dementie in Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen in de regio Haarlem. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis voor zowel de senior als de familie zorgeloos te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen met een rollator vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een rollator mag bij vrijwel alle luchtvaartmaatschappijen gratis mee als medische bagage. U kunt uw rollator meestal gebruiken tot aan de gate op Schiphol, waarna deze in het vrachtruim wordt geplaatst. Onze begeleiders uit Haarlem helpen u graag bij de logistiek hiervan."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met diabetes vanuit de regio Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles op Schiphol komt."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met parkinson vanaf Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met parkinson vraagt om een zorgvuldige planning rondom medicatie-inname en mobiliteit. Onze begeleiders bieden de nodige ondersteuning en zorgen voor een rustig tempo op de luchthaven Schiphol of bij vertrek uit Haarlem."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding mogelijk bij vliegen met artrose in Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizigers met artrose hebben vaak baat bij extra ondersteuning en het beperken van loopafstanden. Wij regelen the juiste assistentie op Schiphol en zorgen voor een comfortabel verloop van uw reis vanaf uw voordeur in Haarlem of Heemstede."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen na een operatie vanuit de regio Kennemerland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren die kort geleden een ingreep hebben ondergaan. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen op de luchthaven Schiphol."
        }
      },
      {
        "@type": "Question",
        "name": "Kunt u ook helpen bij vliegen met een pacemaker vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans op Schiphol. Onze begeleiders uit Haarlem weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegen met een kunstgebit vanaf Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegen met een kunstgebit of prothese is voor senioren in de regio Haarlem geen enkel probleem. Onze begeleiders weten hoe ze hier discreet mee omgaan bij de security op Schiphol en geven praktische tips voor optimaal comfort tijdens de vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik een CPAP-apparaat meenemen in het vliegtuig vanaf Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een CPAP-apparaat mag mee als medische handbagage vanaf Schiphol. Het is verstandig om dit vooraf te melden bij de luchtvaartmaatschappij en een medische verklaring bij u te hebben. Onze begeleiders helpen u graag om alles rondom uw CPAP-apparaat soepel te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er risico's bij vliegen met hartklachten vanuit Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij stabiele hartklachten is vliegen meestal mogelijk, maar de lagere luchtdruk in de cabine kan invloed hebben. Overleg altijd met uw cardioloog en vraag indien nodig vliegveld assistentie aan op Schiphol om fysieke inspanning te beperken. Onze begeleiders kunnen u hierbij volledig ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik regelen voor medicijnen op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht (AMO) en eventueel een medische verklaring bij u te hebben. Wij kunnen u helpen bij de voorbereiding hiervan zodat u zorgeloos door de security op Schiphol komt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen na een heupoperatie vanuit Haarlem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen na een heupoperatie is vaak weer mogelijk zodra uw arts toestemming geeft. Wij ondersteunen senioren in Haarlem bij het vervoer naar Schiphol, regelen vliegveld assistentie voor minder lopen en bieden fysieke steun tijdens de reis voor een veilig herstel."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen na een knieoperatie vanuit de regio Kennemerland?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het ondersteunen van senioren na een knieoperatie. Wij zorgen voor vliegveld assistentie op Schiphol, ondersteunen bij het in- en uitstappen en letten op voldoende beenruimte en beweging tijdens de vlucht om uw herstel te bevorderen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe voorkom ik uitdroging tijdens het vliegen als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uitdroging is een risico door de droge lucht in het vliegtuig. Wij adviseren om regelmatig water te drinken en alcohol te vermijden. Onze begeleiders letten hierop en zorgen dat u gehydrateerd blijft tijdens de hele reis vanaf Schiphol."
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
                Reisbegeleiding voor ouderen in Haarlem
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Haarlem of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio Kennemerland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Haarlem: 06-18769492
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
                src="https://images.unsplash.com/photo-1616422874984-3c66299b660c?w=800&q=80"
                alt="Haarlem Grote Markt"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Haarlem?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Haarlem (of omgeving zoals Heemstede, Bloemendaal, Zandvoort) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Haarlem en Schiphol-omgeving goed en zorgen voor een zorgeloze reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cruise vanuit IJmuiden of een vliegreis vanaf Schiphol, wij bieden hulp bij elke stap.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Ontlasting voor mantelzorgers</h3>
              <p className="text-gray-600">
                Geef uw naasten rust; wij nemen de volledige organisatie en medische reisbegeleiding uit handen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Haarlem</h2>
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
                  {faq.name.toLowerCase().includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze tips over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips for vliegen met artrose.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("kunstgebit") && (
                    <> <Link href="/blog/vliegen-met-een-kunstgebit" className="text-primary-600 hover:underline">Lees meer over vliegen met een kunstgebit.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("cpap") && (
                    <> <Link href="/blog/vliegen-met-cpap-apparaat" className="text-primary-600 hover:underline">Lees meer over vliegen met een CPAP-apparaat.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("hartklachten") && (
                    <> <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 hover:underline">Lees onze gids voor vliegen met hartklachten.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk tips voor medicijnen op reis.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("heupoperatie") && (
                    <> <Link href="/blog/vliegen-na-heupoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een heupoperatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("knieoperatie") && (
                    <> <Link href="/blog/vliegen-na-knieoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een knieoperatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("uitdroging") && (
                    <> <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 hover:underline">Lees tips om uitdroging te voorkomen.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.includes("medische verklaring") && (
                    <> <Link href="/blog/hoe-vraag-je-een-medische-verklaring-aan-for-vliegen" className="text-primary-600 hover:underline">Lees meer over de medische verklaring.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Haarlem</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Haarlem of Heemstede.
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
