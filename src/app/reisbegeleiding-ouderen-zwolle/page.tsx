import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Zwolle | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Zwolle. Wij helpen u veilig en comfortabel op reis vanaf uw voordeur tot aan uw bestemming.',
};

export default function ZwolleSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren vanuit Zwolle naar Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij halen u thuis op in Zwolle en begeleiden u naar Schiphol, Eindhoven Airport of zelfs vliegvelden in Duitsland. We helpen bij het inchecken, de security en blijven bij u tot aan de gate of zelfs tot op uw eindbestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding voor ouderen met dementie in de regio Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij zijn gespecialiseerd in het begeleiden van senioren met beginnende dementie of geheugenproblemen. Onze begeleiders bieden de nodige rust en structuur tijdens de hele reis vanaf Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met een rollator vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een rollator mag bijna altijd gratis mee als medische bagage. Wij helpen u bij de logistiek vanaf uw voordeur in Zwolle tot aan het vliegtuig."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik vliegveld assistentie aan voor mijn reis vanuit Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie dient minimaal 48 uur voor vertrek aangevraagd te worden bij de luchtvaartmaatschappij. Vliegklaar kan dit volledige proces voor u uit handen nemen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met Parkinson vanuit de regio Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben ruime ervaring met het begeleiden van senioren met de ziekte van Parkinson. Wij zorgen voor een rustig tempo, helpen bij de logistiek op de luchthaven en ondersteunen bij medicatie-inname op de juiste tijden, zodat u ondanks de beperkingen toch kunt genieten van uw reis."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een pacemaker vanuit Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen na een knieoperatie vanuit de regio Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben veel ervaring met het ondersteunen van senioren na een knieoperatie. Wij zorgen voor vliegveld assistentie, ondersteunen bij het in- en uitstappen en letten op voldoende beenruimte en beweging tijdens de vlucht om uw herstel te bevorderen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de kosten voor reisbegeleiding in Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van uw specifieke wensen. We komen graag bij u langs in Zwolle voor een gratis kennismakingsgesprek om een offerte op maat te maken."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met incontinentie in de regio Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met incontinentie is voor veel senioren een bron van zorg. Onze begeleiders bieden discrete ondersteuning, helpen bij het plannen van toiletbezoeken en adviseren over de juiste materialen en kleding voor tijdens de vlucht, zodat u met een gerust hart op reis kunt vanuit de regio Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een CPAP-apparaat mogelijk vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Een CPAP-apparaat mag mee als medische handbagage. Onze begeleiders in Zwolle helpen u bij het regelen van de juiste documentatie (zoals een medische verklaring) en zorgen dat het apparaat veilig en volgens de regels door de security op de luchthaven gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen met bloedverdunners vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met bloedverdunners is mogelijk. Het is belangrijk om gehydrateerd te blijven en regelmatig te bewegen tijdens de vlucht. Onze begeleiders ondersteunen u bij uw medicatieschema en helpen met eenvoudige oefeningen om de bloedsomloop te stimuleren."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook ondersteuning bij vliegangst voor senioren in Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid, uitleg over de geluiden van het vliegtuig en afleiding tijdens de vlucht om uw reis zo comfortabel mogelijk te maken vanaf Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er speciale voorzieningen voor senioren met gehoorproblemen op de luchthaven?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, de meeste luchthavens bieden faciliteiten voor slechthorenden, zoals ringleidingen bij informatiebalies en gates. Wij ondersteunen u ter plaatse om te zorgen dat u geen enkele omroep of belangrijke informatie mist tijdens uw vertrek vanuit de regio Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe voorkom ik uitdroging tijdens het vliegen als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uitdroging is een risico door de droge lucht in het vliegtuig. Wij adviseren om regelmatig water te drinken en alcohol te vermijden. Onze begeleiders letten hierop en zorgen dat u gehydrateerd blijft tijdens de hele reis vanaf Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook senioren die alleen reizen vanuit Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden juist uitkomst voor senioren die graag alleen reizen maar behoefte hebben aan een veilig vangnet. Onze begeleider is uw vertrouwde aanspreekpunt van uw voordeur in Zwolle tot uw aankomst op de bestemming."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn de regels voor een rolstoel in het vliegtuig vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uw rolstoel mag vrijwel altijd gratis mee als medische bagage. Het is wel verplicht om deze minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij, inclusief afmetingen en type accu. Wij regelen dit graag voor u."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een gebit of prothese vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vliegen met een (kunst)gebit of prothese is geen enkel probleem, maar het kan bij de security soms vragen oproepen. Onze begeleiders weten precies hoe u hier discreet mee omgaat en geven u praktische tips voor comfort tijdens een lange vlucht vanaf Zwolle."
        }
      },
      {
        "@type": "Question",
        "name": "Begeleiden jullie ook bij vliegen na een operatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren in Zwolle die kort geleden een ingreep hebben ondergaan. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar ook begeleiding bij vliegen met diabetes vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders in Zwolle helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Mag een kunstgebit in blijven bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole. De scanners zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese. Onze begeleiders in Zwolle weten precies hoe ze u hierbij discreet kunnen ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een hoge bloeddruk veilig vanaf Zwolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over het algemeen is vliegen met een goed ingestelde bloeddruk veilig. We raden aan om voor vertrek uw arts te raadplegen, uw medicatie in uw handbagage te bewaren en tijdens de vlucht voldoende water te drinken. Onze begeleiders uit Zwolle ondersteunen u graag bij een ontspannen reiservaring."
        }
      },
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
                Reisbegeleiding voor ouderen in Zwolle
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Bent u woonachtig in Zwolle en droomt u van een reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt deskundige en persoonlijke reisbegeleiding voor senioren in Zwolle en de wijde regio Overijssel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Zwolle: 06-18769492
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
                src="https://images.unsplash.com/photo-1594914040989-138be5587786?w=800&q=80"
                alt="Zwolle Stad"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Zwolle?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Comfortabel vanaf huis</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Zwolle (Assendorp, Diezerpoort, Stadshagen) en regelen het vervoer naar de luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Regionale Zorg</h3>
              <p className="text-gray-600">
                Onze begeleiders in Overijssel zorgen voor een veilige transfer naar Schiphol, Eindhoven of een Duitse luchthaven.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Persoonlijke Aandacht</h3>
              <p className="text-gray-600">
                Bij Vliegklaar staat uw welzijn voorop. Wij bieden de nodige ondersteuning bij bagage, inchecken en overstappen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Zorgeloos op pad</h3>
              <p className="text-gray-600">
                Of u nu een familiebezoek brengt of een vakantie viert; wij zijn uw vertrouwde reispartner vanuit Zwolle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Zwolle</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                  {faq.name.includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees meer over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met een rollator.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees onze gids over vliegveld assistentie.</Link></>
                  )}
                  {faq.name.includes("Parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.includes("knieoperatie") && (
                    <> <Link href="/blog/vliegen-na-knieoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een knieoperatie.</Link></>
                  )}
                  {faq.name.includes("incontinentie") && (
                    <> <Link href="/blog/vliegen-met-incontinentie-tips-senioren" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met incontinentie.</Link></>
                  )}
                  {faq.name.includes("CPAP") && (
                    <> <Link href="/blog/vliegen-met-cpap-apparaat" className="text-primary-600 hover:underline">Lees meer over vliegen met een CPAP-apparaat.</Link></>
                  )}
                  {faq.name.includes("bloedverdunners") && (
                    <> <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met bloedverdunners.</Link></>
                  )}
                  {faq.name.includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.includes("gehoor") && (
                    <> <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met gehoorproblemen.</Link></>
                  )}
                  {faq.name.includes("uitdroging") && (
                    <> <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 hover:underline">Lees onze tips om uitdroging te voorkomen.</Link></>
                  )}
                  {faq.name.includes("alleen reizen") && (
                    <> <Link href="/blog/veilig-alleen-reizen-senior" className="text-primary-600 hover:underline">Lees meer over veilig alleen reizen als senior.</Link></>
                  )}
                  {faq.name.includes("rolstoel") && (
                    <> <Link href="/blog/vliegen-met-een-rolstoel" className="text-primary-600 hover:underline">Lees onze gids over vliegen met een rolstoel.</Link></>
                  )}
                  {faq.name.includes("gebit") && (
                    <> <Link href="/blog/vliegen-met-een-gebit-vliegveld-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een gebit of prothese.</Link></>
                  )}
                  {faq.name.includes("vliegen na een operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze uitgebreide gids over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("bloeddruk") && (
                    <> <Link href="/blog/vliegen-met-bloeddruk-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een hoge bloeddruk.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Zwolle</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weer onbezorgd de wereld ontdekken? Bel ons voor een vrijblijvend kennismakingsgesprek in Zwolle.
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
