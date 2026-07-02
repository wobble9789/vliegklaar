import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Den Bosch | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in \'s-Hertogenbosch (Den Bosch). Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function DenBoschSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar reisbegeleiding in heel Den Bosch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden persoonlijke reisbegeleiding voor ouderen in alle wijken van 's-Hertogenbosch en omliggende plaatsen zoals Rosmalen, Vught en Sint-Michielsgestel."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleidt Vliegklaar ook vanaf Eindhoven Airport voor reizigers uit Den Bosch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker, voor reizigers uit Den Bosch begeleiden wij senioren vaak naar Eindhoven Airport of Schiphol. We helpen bij het inchecken, de security en reizen indien gewenst mee tot aan de eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegveld assistentie op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luchthavens bieden gratis assistentie voor minder mobiele reizigers. Wij raden aan dit minimaal 48 uur van tevoren aan te vragen. Onze begeleiders kunnen u helpen bij de coördinatie hiervan, zodat u zorgeloos op reis gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren met dementie in Den Bosch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het ondersteunen van reizigers met geheugenproblemen. Onze begeleiders bieden de nodige rust en structuur tijdens de gehele reis vanaf uw voordeur in Den Bosch."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een rollator mogelijk vanaf Den Bosch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zorgen dat uw rollator mee kan en dat u op de luchthaven de juiste ondersteuning krijgt bij het instappen. We regelen de logistiek vanaf uw woning in Den Bosch naar de gate."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met parkinson vanuit de regio Den Bosch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met parkinson vraagt om een zorgvuldige planning rondom medicatie-inname en mobiliteit. Onze begeleiders bieden de nodige ondersteuning en zorgen voor een rustig tempo op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren die kort geleden een ingreep hebben ondergaan. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Kunt u ook helpen bij vliegen met een pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans op de luchthaven. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vliegen met een kunstgebit op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegen met een kunstgebit of prothese is geen enkel probleem. Onze begeleiders weten hoe ze hier discreet mee omgaan bij de security en geven praktische tips voor optimaal comfort tijdens de vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen met diabetes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een CPAP-apparaat mogelijk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een CPAP-apparaat mag mee als medische handbagage. Het is verstandig om dit vooraf te melden bij de luchtvaartmaatschappij en een medische verklaring bij u te hebben. Wij helpen u graag om alles soepel te laten verlopen."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie helpen bij valpreventie voor senioren op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Veiligheid is onze prioriteit. We adviseren over stevig schoeisel, helpen bij het navigeren op de luchthaven en zorgen voor een stabiele ondersteuning tijdens de hele reis om vallen te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de regels voor vliegen met bloedverdunners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Als u bloedverdunners gebruikt, is het belangrijk om extra aandacht te besteden aan hydratatie en beweging tijdens de vlucht. Wij ondersteunen u bij het op tijd innemen van uw medicatie en helpen met eenvoudige oefeningen."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen met reuma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met reuma kan fysiek zwaar zijn. Onze begeleiders helpen u met uw bagage, zorgen voor assistentie op de luchthaven zodat u niet ver hoeft te lopen, en bewaken het tempo zodat u ontspannen aankomt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe gaat een senior veilig door de security op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senioren kunnen vlot door de security door gebruik te maken van de moderne CT-scanners, gemakkelijke kleding te dragen en medische protheses of pacemakers vooraf te melden. Onze begeleiders ondersteunen u stap voor stap."
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
                Reisbegeleiding voor ouderen in Den Bosch
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in &apos;s-Hertogenbosch of omgeving en wilt u zorgeloos op reis? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de regio Den Bosch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Den Bosch: 06-18769492
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
                src="https://images.unsplash.com/photo-1595155731317-56782a0ec210?w=800&q=80"
                alt="Den Bosch Sint-Janskathedraal"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Den Bosch?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Den Bosch, Rosmalen of Vught en begeleiden u gedurende de gehele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Brabantse gastvrijheid</h3>
              <p className="text-gray-600">
                Onze begeleiders bieden persoonlijke aandacht met een glimlach, precies zoals u in Den Bosch gewend bent.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Deskundige hulp</h3>
              <p className="text-gray-600">
                Of u nu vliegt vanaf Eindhoven, Schiphol of Brussel; wij regelen de logistiek en assistentie op de luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Volledige ontzorging</h3>
              <p className="text-gray-600">
                Geen stress over inchecken, gate-wijzigingen of bagage. Wij wijken niet van uw zijde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Den Bosch</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.toLowerCase().includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids voor assistentie aanvragen.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("kunstgebit") && (
                    <> <Link href="/blog/vliegen-met-een-kunstgebit-vliegveld-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een kunstgebit.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze tips over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("cpap") && (
                    <> <Link href="/blog/vliegen-met-cpap-apparaat" className="text-primary-600 hover:underline">Lees meer over vliegen met een CPAP-apparaat.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("valpreventie") && (
                    <> <Link href="/blog/valpreventie-op-vakantie" className="text-primary-600 hover:underline">Bekijk tips voor valpreventie op reis.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("bloedverdunners") && (
                    <> <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met bloedverdunners.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("reuma") && (
                    <> <Link href="/blog/vliegen-met-reuma" className="text-primary-600 hover:underline">Lees onze gids over vliegen met reuma.</Link></>
                  )}
                  {faq.name.toLowerCase().includes("security") && (
                    <> <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">Bekijk onze gids voor de security op de luchthaven.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Den Bosch</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer eens op reis maar durft u het niet alleen aan? Bel ons voor een kop koffie en een vrijblijvend gesprek in Den Bosch.
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
