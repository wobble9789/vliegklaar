import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Alkmaar | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Alkmaar. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Word ik echt bij mijn voordeur in Alkmaar opgehaald?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, onze begeleiding begint direct bij u thuis in Alkmaar of omliggende plaatsen zoals Bergen en Heiloo. We helpen met de koffers en zorgen voor vervoer naar de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook helpen bij medische behoeften tijdens de reis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hoewel wij geen medische handelingen verrichten, ondersteunen we wel bij het tijdig innemen van medicatie en zorgen we voor rust en assistentie bij mobiliteitsproblemen."
      }
    },
    {
      "@type": "Question",
      "name": "Begeleiden jullie ook op de terugreis naar Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. We kunnen u ophalen bij de gate van de luchthaven van aankomst en brengen u veilig terug tot in uw woonkamer in Alkmaar."
      }
    },
    {
      "@type": "Question",
      "name": "Moet ik zelf de taxi regelen vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nee, dat hoeft niet. Wij kunnen het vervoer van Alkmaar naar de luchthaven (en weer terug) volledig voor u organiseren als onderdeel van onze begeleiding."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe gaat een senior veilig door de security op Schiphol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Senioren kunnen vlot door de security op Schiphol door gebruik te maken van de moderne CT-scanners (vloeistoffen mogen vaak in de tas blijven), gemakkelijke kleding te dragen en medische protheses of pacemakers vooraf te melden. Onze begeleiders ondersteunen u hierbij stap voor stap."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn er risico's bij vliegen met hartklachten vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij stabiele hartklachten is vliegen meestal mogelijk, maar de lagere luchtdruk in de cabine kan invloed hebben. Overleg altijd met uw cardioloog en vraag indien nodig vliegveld assistentie aan om fysieke inspanning te beperken. Wij helpen u graag bij de coördinatie hiervan op Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Blijven jullie de hele vakantie bij mij?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dat is optioneel. We bieden zowel begeleiding tijdens de heen- en terugreis als volledige begeleiding gedurende uw hele verblijf op locatie."
      }
    },
    {
      "@type": "Question",
      "name": "Wat als mijn vlucht vertraagd is?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geen zorgen. Onze begeleiders houden de vluchttijden nauwgezet in de gaten en blijven bij u tot u veilig op uw bestemming bent, ongeacht de vertraging."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook helpen met de bagage in Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker, onze begeleider helpt u bij het tillen en inladen van uw koffers bij uw woning in Alkmaar, en zorgt dat deze veilig op de luchthaven bij de incheckbalie aankomen."
      }
    },
    {
      "@type": "Question",
      "name": "Begeleiden jullie ook voor senioren met dementie in Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wij hebben veel ervaring met het begeleiden van reizigers met beginnende dementie of geheugenproblemen. Onze begeleiders bieden de nodige structuur, rust en nabijheid om de reis voor zowel de senior als de familie zorgeloos te laten verlopen."
      }
    },
    {
      "@type": "Question",
      "name": "Kan ik vliegveld assistentie krijgen bij vliegen met artrose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen met een rollator vanaf Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, een rollator mag bij vrijwel alle luchtvaartmaatschappijen gratis mee als medische bagage. U kunt uw rollator meestal gebruiken tot aan de gate, waarna deze in het vrachtruim wordt geplaatst. Onze begeleiders helpen u graag bij de logistiek hiervan."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe ga ik om met een tussenstop als senior?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een tussenstop kan vermoeiend zijn. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates, voldoende overstaptijd te plannen en gebruik te maken van lounges voor rust. Onze begeleiders kunnen u hierbij volledig ondersteunen."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen met diabetes vanuit de regio Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie helpen bij vliegen met een pacemaker vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. Reizen met een pacemaker of ICD vereist extra aandacht bij de security scans. Onze begeleiders weten precies welke documenten u nodig heeft en hoe u vlot door de beveiliging gaat zonder risico voor uw apparaat."
      }
    },
    {
      "@type": "Question",
      "name": "Begeleiden jullie ook bij vliegen na een operatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wij bieden gespecialiseerde ondersteuning voor senioren in Alkmaar die kort geleden een ingreep hebben ondergaan. Onze begeleiders zorgen voor een rustig tempo en helpen bij alle fysieke handelingen op de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen met Parkinson vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wij hebben ruime ervaring met het begeleiden van senioren met de ziekte van Parkinson. Wij zorgen voor een rustig tempo, helpen bij de logistiek en ondersteunen bij medicatie-inname op de juiste tijden."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook helpen bij vliegen met een neuspiercing of sieraden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, onze begeleiders in Alkmaar weten precies hoe de security op Schiphol omgaat met piercings en sieraden. We adviseren u vooraf over welke stukken u het beste in uw handbagage kunt doen en begeleiden u discreet door de controle, zodat u zich geen zorgen hoeft te maken over eventuele meldingen bij de bodyscan."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen na een beroerte vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegen na een beroerte is vaak weer mogelijk, mits uw behandelend arts hiervoor toestemming geeft. Onze begeleiders ondersteunen u bij de logistiek op de luchthaven, bieden fysieke ondersteuning en zorgen voor een ontspannen reiservaring vanaf uw voordeur in Alkmaar."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen met een stoma vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegen met een stoma is heel goed mogelijk. Onze begeleiders adviseren u om voldoende reservemateriaal in uw handbagage mee te nemen en kunnen u ondersteunen bij de voorbereiding van uw reisdocumenten voor de security op Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen met incontinentie in de regio Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegen met incontinentie is voor veel senioren een bron van zorg. Onze begeleiders bieden discrete ondersteuning, helpen bij het plannen van toiletbezoeken en adviseren over de juiste materialen en kleding voor tijdens de vlucht, zodat u met een gerust hart op reis kunt vanaf Alkmaar."
      }
    },
    {
      "@type": "Question",
      "name": "Is vliegen met een CPAP-apparaat mogelijk vanaf Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. Een CPAP-apparaat mag mee als medische handbagage. Onze begeleiders helpen u bij het regelen van de juiste documentatie (zoals een medische verklaring) en zorgen dat het apparaat veilig en volgens de regels door de security op Schiphol gaat."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie helpen bij vliegen met kleinkinderen vanuit Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jazeker. Als u als grootouder met uw kleinkinderen wilt vliegen, kunnen wij de extra handen bieden die nodig zijn. Wij helpen bij de logistiek vanaf Alkmaar, de bagage en de zorg voor de kinderen op Schiphol, zodat u optimaal kunt genieten."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen met bloedverdunners vanaf Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegen met bloedverdunners is mogelijk. Het is belangrijk om gehydrateerd te blijven en regelmatig te bewegen tijdens de vlucht vanaf Schiphol. Onze begeleiders ondersteunen u bij uw medicatieschema en helpen met eenvoudige oefeningen."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen na een knieoperatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vliegen na een knieoperatie is meestal na 4 tot 6 weken weer veilig, afhankelijk van uw herstel en het advies van uw chirurg. Onze begeleiders helpen u bij de logistiek vanaf Alkmaar naar Schiphol en zorgen voor een comfortabele zitplaats."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen met een gebitprothese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker, vliegen met een gebitprothese is geen enkel probleem. Bij de security op Schiphol hoeft u uw prothese niet uit te doen. Onze begeleiders kunnen u adviseren over mondverzorging tijdens de vlucht."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe voorkom ik uitdroging tijdens het vliegen als senior?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uitdroging is een risico door de droge lucht in het vliegtuig. Wij adviseren om regelmatig water te drinken en alcohol te vermijden. Onze begeleiders letten hierop tijdens de hele reis vanaf Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Begeleiden jullie ook senioren die alleen reizen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wij bieden juist uitkomst voor senioren uit Alkmaar die graag alleen reizen maar behoefte hebben aan een veilig vangnet. Onze begeleider is uw vertrouwde aanspreekpunt van vertrek tot aankomst."
      }
    },
    {
      "@type": "Question",
      "name": "Is vliegen met een hoge bloeddruk veilig vanaf Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Over het algemeen is vliegen met een goed ingestelde bloeddruk veilig. We raden aan om voor vertrek uw arts te raadplegen en uw medicatie in uw handbagage te bewaren. Onze begeleiders ondersteunen u bij een ontspannen reiservaring vanaf Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen na een galblaasoperatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meestal is vliegen na een galblaasoperatie na 1 tot 2 weken weer veilig, afhankelijk van het type ingreep. Onze begeleiders ondersteunen u vanaf Alkmaar om fysieke inspanning te minimaliseren en uw comfort te waarborgen."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik vliegen na een hartoperatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vliegen na een hartoperatie is meestal na 4 tot 6 weken weer mogelijk, afhankelijk van het type ingreep en uw herstel. Overleg dit altijd met uw cardioloog. Onze begeleiders kunnen u ondersteunen tijdens de reis om fysieke inspanning op Schiphol te minimaliseren."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn er tips voor vliegen met een bril of contactlenzen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, de droge lucht in het vliegtuig kan irriterend zijn voor lensdragers. We adviseren senioren om tijdens de vlucht een bril te dragen, reservebrillen in de handbagage mee te nemen en oogdruppels te gebruiken."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie helpen bij valpreventie voor senioren op reis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absoluut. Veiligheid is onze prioriteit. We adviseren over stevig schoeisel, helpen bij het navigeren van vliegvelden en zorgen voor een stabiele ondersteuning vanaf Alkmaar tijdens de hele reis om vallen te voorkomen."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegen met een heupprothese?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jazeker. Vliegen met een heup- of knieprothese vraagt om extra aandacht bij de security op Schiphol. Onze begeleiders helpen u om comfortabel door de controles te gaan en ondersteunen u bij de afstanden op de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Kunnen jullie ook helpen bij vliegen met allergieën?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zeker. Reizen met ernstige allergieën vraagt om een goede voorbereiding, zoals het doorgeven van speciale maaltijden en het meenemen van een EpiPen. Onze begeleiders helpen u bij de communicatie met de luchtvaartmaatschappij voor uw reis vanaf Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn er risico's bij vliegen met glaucoom of staar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In de meeste gevallen is vliegen met glaucoom of staar veilig, maar het is essentieel om dit vooraf met uw oogarts te bespreken, vooral na een recente operatie. Wij helpen u graag bij het regelen van extra begeleiding op de luchthaven."
      }
    },
    {
      "@type": "Question",
      "name": "Bieden jullie ook hulp bij vliegangst voor senioren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegangst komt op alle leeftijden voor. Onze begeleiders bieden een rustige aanwezigheid, uitleg over de geluiden van het vliegtuig en afleiding tijdens de vlucht om uw reis vanaf Schiphol zo comfortabel mogelijk te maken."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn compressiekousen nodig bij een vlucht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Voor veel senioren worden compressiekousen aangeraden tijdens langere vluchten om de bloedsomloop te bevorderen en het risico op trombose te verkleinen. We adviseren u graag over het gebruik hiervan."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn er speciale voorzieningen voor senioren met gehoorproblemen op Schiphol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Schiphol biedt diverse faciliteiten voor slechthorenden, zoals ringleidingen bij informatiebalies en gates. Wij ondersteunen u ter plaatse om te zorgen dat u geen enkele omroep of belangrijke informatie mist."
      }
    },
    {
      "@type": "Question",
      "name": "Can I fly with rheumatism or other joint complaints?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, vliegen met reuma is heel goed mogelijk. Wij adviseren u om tijdens de vlucht regelmatig te bewegen om stijfheid te voorkomen en eventueel vliegveld assistentie aan te vragen voor de afstanden op Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zijn de regels voor een rolstoel in het vliegtuig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uw rolstoel mag vrijwel altijd gratis mee als medische bagage. Het is wel verplicht om deze minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij, inclusief afmetingen en type accu."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik een hulphond meenemen op reis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, erkende hulphonden mogen vrijwel altijd gratis mee in de cabine. Wij helpen u bij de aanmelding hiervan bij de luchtvaartmaatschappij en zorgen dat de nodige documentatie in orde is."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik een CPAP-apparaat meenemen in het vliegtuig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, een CPAP-apparaat mag mee als medische handbagage. Het is verstandig om dit vooraf te melden bij de luchtvaartmaatschappij en een medische verklaring bij u te hebben. Onze begeleiders helpen u hier graag bij op Schiphol."
      }
    },
    {
      "@type": "Question",
      "name": "Is er begeleiding mogelijk vanaf station Alkmaar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, wij kunnen u ook ontmoeten op station Alkmaar als u liever met de trein reist. Vanaf daar begeleiden we u gedurende de hele treinreis en op de luchthaven."
      }
    }
  ]
};

export default function AlkmaarSEOPage() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Reisbegeleiding voor ouderen in Alkmaar
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Alkmaar of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de kaasstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Alkmaar: 06-18769492
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
                src="https://images.unsplash.com/photo-1512470876302-972fad2aa9dd?w=800&q=80"
                alt="Alkmaar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Alkmaar?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Alkmaar (of omgeving zoals Heerhugowaard, Heiloo, Bergen) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Alkmaar en de route naar Schiphol als hun broekzak, wat zorgt voor een zorgeloze reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een cultuurreis, familiebezoek of een zonvakantie, wij passen de begeleiding aan op uw behoeften.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Veiligheid voorop</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over bagage, overstappen of navigatie; wij zijn er voor uw rust en veiligheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-10 text-center">Veelgestelde vragen over reisbegeleiding in Alkmaar</h2>
          <div className="space-y-8">
            {faqData.mainEntity.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-primary-700 mb-3">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                  {item.name.toLowerCase().includes("dementie") && (
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees over reizen met dementie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {item.name.toLowerCase().includes("rollator") && (
                    <> <Link href="/blog/vliegen-met-een-rollator" className="text-primary-600 hover:underline">Lees meer over vliegen met een rollator.</Link></>
                  )}
                  {item.name.toLowerCase().includes("tussenstop") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-tussenstop-als-senior" className="text-primary-600 hover:underline">Lees onze tips over tussenstops.</Link></>
                  )}
                  {item.name.toLowerCase().includes("security") && (
                    <> <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">Bekijk onze gids voor de security op Schiphol.</Link></>
                  )}
                  {item.name.toLowerCase().includes("hartklachten") && (
                    <> <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 hover:underline">Lees onze gids voor vliegen met hartklachten.</Link></>
                  )}
                  {item.name.toLowerCase().includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze tips over vliegen met diabetes.</Link></>
                  )}
                  {item.name.toLowerCase().includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {item.name.toLowerCase().includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {item.name.toLowerCase().includes("neuspiercing") && (
                    <> <Link href="/blog/vliegen-met-een-neuspiercing-of-sieraden" className="text-primary-600 hover:underline">Lees meer over vliegen met piercings en sieraden.</Link></>
                  )}
                  {item.name.toLowerCase().includes("beroerte") && (
                    <> <Link href="/blog/vliegen-na-beroerte" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een beroerte.</Link></>
                  )}
                  {item.name.toLowerCase().includes("stoma") && (
                    <> <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 hover:underline">Lees meer over vliegen met een stoma.</Link></>
                  )}
                  {item.name.toLowerCase().includes("incontinentie") && (
                    <> <Link href="/blog/vliegen-met-incontinentie-tips-senioren" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met incontinentie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("cpap") && (
                    <> <Link href="/blog/vliegen-met-cpap-apparaat" className="text-primary-600 hover:underline">Lees meer over vliegen met een CPAP-apparaat.</Link></>
                  )}
                  {item.name.toLowerCase().includes("kleinkinderen") && (
                    <> <Link href="/blog/vliegen-met-kleinkinderen-tips-voor-grootouders" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met kleinkinderen.</Link></>
                  )}
                  {item.name.toLowerCase().includes("bloedverdunners") && (
                    <> <Link href="/blog/vliegen-met-bloedverdunners" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met bloedverdunners.</Link></>
                  )}
                  {item.name.toLowerCase().includes("knieoperatie") && (
                    <> <Link href="/blog/vliegen-na-knieoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een knieoperatie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("gebitprothese") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-gebitprothese-op-het-vliegveld" className="text-primary-600 hover:underline">Lees meer over een gebitprothese op het vliegveld.</Link></>
                  )}
                  {item.name.toLowerCase().includes("uitdroging") && (
                    <> <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 hover:underline">Lees tips om uitdroging te voorkomen.</Link></>
                  )}
                  {item.name.toLowerCase().includes("alleen reizen") && (
                    <> <Link href="/blog/veilig-alleen-reizen-senior" className="text-primary-600 hover:underline">Lees meer over veilig alleen reizen als senior.</Link></>
                  )}
                  {item.name.toLowerCase().includes("bloeddruk") && (
                    <> <Link href="/blog/vliegen-met-bloeddruk-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een hoge bloeddruk.</Link></>
                  )}
                  {item.name.toLowerCase().includes("galblaasoperatie") && (
                    <> <Link href="/blog/vliegen-na-galblaasoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een galblaasoperatie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("hartoperatie") && (
                    <> <Link href="/blog/vliegen-na-hartoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een hartoperatie.</Link></>
                  )}
                  {item.name.toLowerCase().includes("bril") && (
                    <> <Link href="/blog/vliegen-met-bril-of-contactlenzen-tips" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met een bril of contactlenzen.</Link></>
                  )}
                  {item.name.toLowerCase().includes("valpreventie") && (
                    <> <Link href="/blog/valpreventie-op-vakantie" className="text-primary-600 hover:underline">Bekijk tips voor valpreventie op reis.</Link></>
                  )}
                  {item.name.toLowerCase().includes("heupprothese") && (
                    <> <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 hover:underline">Lees meer over vliegen met een prothese.</Link></>
                  )}
                  {item.name.toLowerCase().includes("allergieën") && (
                    <> <Link href="/blog/vliegen-met-allergieen" className="text-primary-600 hover:underline">Lees meer over vliegen met allergieën.</Link></>
                  )}
                  {item.name.toLowerCase().includes("glaucoom") && (
                    <> <Link href="/blog/vliegen-met-glaucoom" className="text-primary-600 hover:underline">Lees meer over vliegen met glaucoom.</Link></>
                  )}
                  {item.name.toLowerCase().includes("staar") && (
                    <> <Link href="/blog/vliegen-met-staar" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met staar.</Link></>
                  )}
                  {item.name.toLowerCase().includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {item.name.toLowerCase().includes("compressiekousen") && (
                    <> <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met compressiekousen.</Link></>
                  )}
                  {item.name.toLowerCase().includes("gehoor") && (
                    <> <Link href="/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met gehoorproblemen.</Link></>
                  )}
                  {item.name.toLowerCase().includes("reuma") && (
                    <> <Link href="/blog/vliegen-met-reuma" className="text-primary-600 hover:underline">Lees onze gids over vliegen met reuma.</Link></>
                  )}
                  {item.name.toLowerCase().includes("rolstoel") && (
                    <> <Link href="/blog/vliegen-met-een-rolstoel" className="text-primary-600 hover:underline">Lees onze gids over vliegen met een rolstoel.</Link></>
                  )}
                  {item.name.toLowerCase().includes("hulphond") && (
                    <> <Link href="/blog/vliegen-met-een-hulphond-of-huisdier" className="text-primary-600 hover:underline">Lees meer over vliegen met een hulphond.</Link></>
                  )}
                  {item.name.toLowerCase().includes("cpap") && (
                    <> <Link href="/blog/vliegen-met-cpap-apparaat" className="text-primary-600 hover:underline">Lees meer over vliegen met een CPAP-apparaat.</Link></>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Alkmaar</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Alkmaar.
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
