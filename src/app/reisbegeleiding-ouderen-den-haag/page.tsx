import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding voor ouderen in Den Haag | Vliegklaar',
  description: 'Persoonlijke reisbegeleiding voor senioren in Den Haag. Wij helpen u veilig en comfortabel op reis, van deur tot deur.',
};

export default function DenHaagSEOPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Biedt Vliegklaar ook reisbegeleiding in Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, Vliegklaar biedt volledige van-deur-tot-deur reisbegeleiding voor ouderen in Den Haag en omliggende plaatsen zoals Rijswijk, Voorburg en Wassenaar."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een rollator vanaf Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Wij hebben veel ervaring met het begeleiden van senioren die een rollator gebruiken. Wij zorgen voor de logistiek op de luchthaven en zorgen dat uw rollator veilig mee gaat tot aan de gate."
        }
      },
      {
        "@type": "Question",
        "name": "Is er begeleiding voor senioren met dementie in Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij bieden gespecialiseerde begeleiding voor senioren met beginnende dementie. Onze begeleiders bieden rust, structuur en constante nabijheid tijdens de gehele reis vanaf uw woning in Den Haag."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe vraag ik vliegveld assistentie aan for een reis vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Assistentie op de luchthaven (Schiphol of Rotterdam) dient minimaal 48 uur van tevoren aangevraagd te worden. Vliegklaar kan dit volledige proces voor u uit handen nemen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat kost reisbegeleiding in Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De kosten zijn afhankelijk van de bestemming en de gewenste intensiteit van de begeleiding. We komen graag bij u langs in Den Haag voor een gratis kennismakingsgesprek en een offerte op maat."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met parkinson vanaf Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met parkinson vraagt om een zorgvuldige planning rondom medicatie-inname en mobiliteit. Onze begeleiders bieden de nodige ondersteuning en zorgen voor een rustig tempo op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Can ik vliegveld assistentie krijgen bij vliegen met artrose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reizigers met artrose hebben recht op assistentie op de luchthaven. Wij kunnen dit voor u coördineren, zodat u niet onnodig ver hoeft te lopen en comfortabel naar de gate wordt gebracht."
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
        "name": "Kunnen senioren veilig alleen reizen vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Veilig alleen reizen is mogelijk met de juiste voorbereiding. Vliegklaar biedt de nodige back-up en begeleiding tot aan de gate of zelfs tot aan de eindbestemming, zodat u nooit echt alleen bent."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een pacemaker veilig vanaf Schiphol of Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, met een pacemaker of ICD kunt u veilig vliegen. Bij de security scans is het belangrijk om uw pacemaker-pasje te tonen. Onze begeleiders weten precies hoe ze u hierbij moeten ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een tussenstop als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een tussenstop kan vermoeiend zijn. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates en voldoende overstaptijd te plannen. Onze begeleiders ondersteunen u hierbij volledig."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een vertraagde vlucht als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een vluchtvertraging kan for stress zorgen. Wij raden aan om contact te houden met de luchtvaartmaatschappij en in een comfortabele lounge te wachten. Onze begeleiders regelen bij vertraging alles rondom communicatie en extra zorg."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook begeleiden bij vliegen met diabetes vanaf Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie hulp bij vliegangst for senioren in Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegangst is heel begrijpelijk. Onze begeleiders bieden een rustige aanwezigheid en kunnen u helpen met afleiding en ontspanningsoefeningen tijdens de vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Wat moet ik regelen voor medicijnen op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is belangrijk om een actueel medicatieoverzicht en eventueel een medische verklaring bij u te hebben. Wij kunnen u helpen bij de voorbereiding hiervan zodat u zorgeloos door de security komt."
        }
      },
      {
        "@type": "Question",
        "name": "Mag een kunstgebit in blijven bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole op de luchthaven. De scanners zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese. Onze begeleiders weten precies hoe ze u hier discreet bij ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met een gehoorapparaat vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Vliegen met een gehoorapparaat is geen probleem, maar de luchthavenomgeving kan lawaaierig zijn. Onze begeleiders helpen u om belangrijke omroepen niet te missen en zorgen dat u ontspannen aan uw vlucht begint."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een stoma mogelijk vanaf Schiphol of Rotterdam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een stoma is heel goed mogelijk. Wij adviseren u om voldoende reservemateriaal in uw handbagage mee te nemen en een stoma-paspoort bij u te hebben. Onze begeleiders kunnen u helpen bij de voorbereiding."
        }
      },
      {
        "@type": "Question",
        "name": "Kan ik vliegen met reuma of andere gewrichtsklachten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met reuma is heel goed mogelijk. Wij adviseren u om tijdens de vlucht regelmatig te bewegen om stijfheid te voorkomen en eventueel vliegveld assistentie aan te vragen. Onze begeleiders ondersteunen u hierbij volledig."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er risico&apos;s bij vliegen met glaucoom of staar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In de meeste gevallen is vliegen met glaucoom of staar veilig, maar overleg dit vooraf met uw oogarts. Wij helpen u graag bij het regelen van extra begeleiding op de luchthaven als uw zicht beperkt is."
        }
      },
      {
        "@type": "Question",
        "name": "Is vliegen met een hoge bloeddruk veilig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over het algemeen is vliegen met een goed ingestelde bloeddruk veilig. We raden aan om voor vertrek uw arts te raadplegen en tijdens de vlucht voldoende water te drinken. Onze begeleiders ondersteunen u graag."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er risico&apos;s bij vliegen met hartklachten vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij stabiele hartklachten is vliegen meestal mogelijk. Overleg altijd met uw cardioloog en vraag indien nodig vliegveld assistentie aan om fysieke inspanning te beperken. Onze begeleiders ondersteunen u hierbij."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen met COPD of astma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met COPD of astma is vaak mogelijk met de juiste voorbereiding. Het is belangrijk om uw medicatie in uw handbagage te hebben en eventueel extra zuurstof aan te vragen indien nodig."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn compressiekousen nodig bij een vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Voor veel senioren worden compressiekousen aangeraden tijdens langere vluchten om de bloedsomloop te bevorderen. We adviseren u graag over het gebruik hiervan."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met een heupprothese vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Vliegen met een heup- of knieprothese vraagt om extra aandacht bij de security. Onze begeleiders helpen u om comfortabel door de controles te gaan."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie helpen bij valpreventie voor senioren op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Veiligheid is onze prioriteit. We adviseren over stevig schoeisel en zorgen voor stabiele ondersteuning tijdens de hele reis om vallen te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen na een beroerte vanuit Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen na een beroerte is vaak weer mogelijk mits uw arts toestemming geeft. Onze begeleiders ondersteunen u bij de logistiek en bieden fysieke ondersteuning."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik vliegen na een hartoperatie of galblaasoperatie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dit is meestal na enkele weken weer mogelijk, afhankelijk van het herstel. Overleg dit altijd met uw behandelend arts. Wij kunnen u ondersteunen om fysieke inspanning te minimaliseren."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe regel ik het vervoer van een rolstoel in het vliegtuig vanaf Den Haag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een rolstoel moet minimaal 48 uur voor vertrek worden aangemeld bij de luchtvaartmaatschappij. Onze begeleiders regelen alle details rondom aanmelding en logistiek voor u."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik een CPAP-apparaat meenemen in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, een CPAP-apparaat mag mee als medische handbagage. Het is verstandig om dit vooraf te melden en een medische verklaring bij u te hebben. Wij helpen u graag bij de voorbereiding."
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
                Reisbegeleiding voor ouderen in Den Haag
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Woont u in Den Haag of omgeving en wilt u graag op reis, maar ziet u op tegen de logistiek? 
                Vliegklaar biedt persoonlijke begeleiding op maat voor senioren in de hofstad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:0618769492"
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors text-center"
                >
                  Bel Den Haag: 06-18769492
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
                src="https://images.unsplash.com/photo-1627993047242-6e2ee4795325?w=800&q=80"
                alt="Den Haag Binnenhof"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8">Waarom kiezen voor Vliegklaar in Den Haag?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Van deur tot deur</h3>
              <p className="text-gray-600">
                Wij halen u thuis op in Den Haag (of omgeving zoals Rijswijk, Voorburg, Wassenaar) 
                en begeleiden u gedurende de hele reis.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Vertrouwd & Dichtbij</h3>
              <p className="text-gray-600">
                Onze begeleiders kennen de regio Haaglanden en de omliggende vliegvelden uitstekend.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Maatwerk</h3>
              <p className="text-gray-600">
                Of het nu gaat om een strandvakantie in Spanje of een familiebezoek in het buitenland, wij passen de begeleiding aan op uw wensen.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary-700">✓ Zorgeloos op reis</h3>
              <p className="text-gray-600">
                U hoeft zich geen zorgen te maken over koffers, inchecken of navigatie; wij regelen alles voor uw gemoedsrust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over reisbegeleiding in Den Haag</h2>
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
                    <> <Link href="/blog/reizen-met-dementie" className="text-primary-600 hover:underline">Lees onze gids over reizen met dementie.</Link></>
                  )}
                  {faq.name.includes("assistentie") && (
                    <> <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline">Lees meer over vliegveld assistentie aanvragen.</Link></>
                  )}
                  {faq.name.includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees onze tips voor vliegen met parkinson.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("operatie") && (
                    <> <Link href="/blog/vliegen-na-operatie" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een operatie.</Link></>
                  )}
                  {faq.name.includes("alleen reizen") && (
                    <> <Link href="/blog/veilig-alleen-reizen-senior" className="text-primary-600 hover:underline">Lees onze tips voor veilig alleen reizen.</Link></>
                  )}
                  {faq.name.includes("pacemaker") && (
                    <> <Link href="/blog/vliegen-met-een-pacemaker-of-icd" className="text-primary-600 hover:underline">Lees meer over vliegen met een pacemaker.</Link></>
                  )}
                  {faq.name.includes("tussenstop") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-tussenstop-als-senior" className="text-primary-600 hover:underline">Lees onze tips over tussenstops.</Link></>
                  )}
                  {faq.name.includes("vertraagde vlucht") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-vertraagde-vlucht-senior" className="text-primary-600 hover:underline">Lees wat te doen bij een vertraagde vlucht.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees meer over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("vliegangst") && (
                    <> <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 hover:underline">Bekijk onze tips tegen vliegangst.</Link></>
                  )}
                  {faq.name.includes("medicijnen") && (
                    <> <Link href="/blog/medicijnen-mee-op-reis" className="text-primary-600 hover:underline">Bekijk de checklist voor medicijnen.</Link></>
                  )}
                  {faq.name.includes("gebit") && (
                    <> <Link href="/blog/vliegen-met-een-gebit" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met een gebit.</Link></>
                  )}
                  {faq.name.includes("gehoorapparaat") && (
                    <> <Link href="/blog/vliegen-met-gehoorapparaat-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een gehoorapparaat.</Link></>
                  )}
                  {faq.name.includes("stoma") && (
                    <> <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 hover:underline">Lees meer over vliegen met een stoma.</Link></>
                  )}
                  {faq.name.includes("reuma") && (
                    <> <Link href="/blog/vliegen-met-reuma" className="text-primary-600 hover:underline">Lees onze gids over vliegen met reuma.</Link></>
                  )}
                  {faq.name.includes("glaucoom") && (
                    <> <Link href="/blog/vliegen-met-glaucoom" className="text-primary-600 hover:underline">Lees meer over vliegen met glaucoom.</Link></>
                  )}
                  {faq.name.includes("staar") && (
                    <> <Link href="/blog/vliegen-met-staar" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met staar.</Link></>
                  )}
                  {faq.name.includes("bloeddruk") && (
                    <> <Link href="/blog/vliegen-met-bloeddruk-tips" className="text-primary-600 hover:underline">Lees meer over vliegen met een hoge bloeddruk.</Link></>
                  )}
                  {faq.name.includes("hartklachten") && (
                    <> <Link href="/blog/vliegen-met-hartklachten" className="text-primary-600 hover:underline">Lees onze gids voor vliegen met hartklachten.</Link></>
                  )}
                  {faq.name.includes("COPD") && (
                    <> <Link href="/blog/vliegen-met-copd-of-astma" className="text-primary-600 hover:underline">Lees meer over vliegen met COPD of astma.</Link></>
                  )}
                  {faq.name.includes("compressiekousen") && (
                    <> <Link href="/blog/vliegen-met-compressiekousen" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met compressiekousen.</Link></>
                  )}
                  {faq.name.includes("heupprothese") && (
                    <> <Link href="/blog/vliegen-met-knie-of-heupprothese" className="text-primary-600 hover:underline">Lees meer over vliegen met een prothese.</Link></>
                  )}
                  {faq.name.includes("valpreventie") && (
                    <> <Link href="/blog/valpreventie-op-vakantie" className="text-primary-600 hover:underline">Bekijk tips voor valpreventie op reis.</Link></>
                  )}
                  {faq.name.includes("beroerte") && (
                    <> <Link href="/blog/vliegen-na-beroerte" className="text-primary-600 hover:underline">Lees meer over veilig vliegen na een beroerte.</Link></>
                  )}
                  {faq.name.includes("hartoperatie") && (
                    <> <Link href="/blog/vliegen-na-hartoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een hartoperatie.</Link></>
                  )}
                  {faq.name.includes("galblaasoperatie") && (
                    <> <Link href="/blog/vliegen-na-galblaasoperatie" className="text-primary-600 hover:underline">Lees meer over vliegen na een galblaasoperatie.</Link></>
                  )}
                  {faq.name.includes("rolstoel") && (
                    <> <Link href="/blog/vliegen-met-een-rolstoel" className="text-primary-600 hover:underline">Lees onze complete gids over vliegen met een rolstoel.</Link></>
                  )}
                  {faq.name.includes("CPAP") && (
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
          <h2 className="text-3xl font-bold mb-6">Uw reis start in Den Haag</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u de mogelijkheden bespreken voor uw volgende reis? Bel ons voor een vrijblijvend adviesgesprek bij u thuis in Den Haag.
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
