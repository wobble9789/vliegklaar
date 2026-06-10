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
        "name": "Biedt Vliegklaar ook hulp bij vliegen met parkinson vanaf Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, wij hebben ruime ervaring met het begeleiden van senioren met de ziekte van Parkinson. Wij zorgen voor een rustig tempo, helpen bij de logistiek op de luchthaven en ondersteunen bij medicatie-inname op de juiste tijden, zodat u ondanks de beperkingen toch kunt genieten van uw reis."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn neuspiercing of sieraden uitdoen bij de security op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kleine sieraden zoals een trouwring of een kleine neuspiercing kunnen meestal gewoon blijven zitten bij de security op Schiphol. Moderne scanners zijn ingesteld op grotere metalen objecten. Onze begeleiders in Amersfoort adviseren u graag vooraf over welke sieraden u het beste in uw handbagage kunt opbergen om vertraging te voorkomen."
        }
      },
      {
        "@type": "Question",
        "name": "Wordt reisbegeleiding in Amersfoort vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In sommige situaties kan begeleiding (deels) worden vergoed vanuit een PGB of een aanvullende zorgverzekering. Wij raden aan dit vooraf bij uw eigen verzekeraar te controleren."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe gaat een senior veilig door de security op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Senioren kunnen vlot door de security op Schiphol door gebruik te maken van de moderne CT-scanners (vloeistoffen mogen in de tas blijven), gemakkelijke kleding te dragen en medische protheses of pacemakers vooraf te melden."
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
        "name": "Biedt Vliegklaar ook begeleiding bij vliegen met diabetes vanaf Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Reizen met diabetes vraagt om extra planning rondom insuline, koeling en maaltijden. Onze begeleiders helpen u om alles volgens schema te laten verlopen en zorgen dat u ontspannen door de controles komt."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een rolstoel in het vliegtuig vanaf Amersfoort?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uw rolstoel mag vrijwel altijd gratis mee als medische bagage. Het is wel verplicht om deze minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij. Wij regelen dit proces graag voor u en zorgen voor de juiste begeleiding op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Kunnen jullie ook helpen bij vliegen met een stoma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een stoma is heel goed mogelijk. Wij adviseren u om voldoende reservemateriaal in uw handbagage mee te nemen en een stoma-paspoort bij u te hebben. Onze begeleiders kunnen u helpen bij de voorbereiding en zorgen voor een ontspannen reis."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook ondersteuning bij het boeken van de reis zelf?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Naast de fysieke begeleiding kunnen we u ook adviseren bij het uitzoeken van een geschikte accommodatie en vlucht die past bij uw wensen en eventuele beperkingen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe ga ik om met een tussenstop als senior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Een tussenstop kan vermoeiend zijn. Wij raden aan om vliegveld assistentie aan te vragen voor het vervoer tussen gates en voldoende overstaptijd te plannen. Onze begeleiders kunnen u hierbij volledig ondersteunen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag een kunstgebit in blijven bij de security op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole op Schiphol. De scanners zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese. Mocht er toch een melding zijn, dan weten de medewerkers daar discreet mee om te gaan."
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
                  {faq.name.includes("parkinson") && (
                    <> <Link href="/blog/vliegen-met-parkinson" className="text-primary-600 hover:underline">Lees meer over vliegen met Parkinson.</Link></>
                  )}
                  {faq.name.includes("neuspiercing") && (
                    <> <Link href="/blog/vliegen-met-een-neuspiercing-of-sieraden" className="text-primary-600 hover:underline">Lees meer over vliegen met piercings en sieraden.</Link></>
                  )}
                  {faq.name.includes("verzekering") && (
                    <> <Link href="/blog/reisverzekering-voor-senioren" className="text-primary-600 hover:underline">Lees over reisverzekeringen voor senioren.</Link></>
                  )}
                  {faq.name.includes("security") && (
                    <> <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">Bekijk onze gids voor de security op Schiphol.</Link></>
                  )}
                  {faq.name.includes("artrose") && (
                    <> <Link href="/blog/vliegen-met-artrose" className="text-primary-600 hover:underline">Bekijk tips voor vliegen met artrose.</Link></>
                  )}
                  {faq.name.includes("gebit") && (
                    <> <Link href="/blog/vliegen-met-een-gebit" className="text-primary-600 hover:underline">Bekijk onze tips voor vliegen met een gebit.</Link></>
                  )}
                  {faq.name.includes("stoma") && (
                    <> <Link href="/blog/vliegen-met-een-stoma" className="text-primary-600 hover:underline">Lees meer over vliegen met een stoma.</Link></>
                  )}
                  {faq.name.includes("diabetes") && (
                    <> <Link href="/blog/vliegen-met-diabetes" className="text-primary-600 hover:underline">Lees onze uitgebreide gids over vliegen met diabetes.</Link></>
                  )}
                  {faq.name.includes("rolstoel") && (
                    <> <Link href="/blog/vliegen-met-een-rolstoel" className="text-primary-600 hover:underline">Bekijk onze complete gids voor vliegen met een rolstoel.</Link></>
                  )}
                  {faq.name.includes("boeken") && (
                    <> <Link href="/blog/hoe-boek-je-vliegticket-als-senior" className="text-primary-600 hover:underline">Lees meer over het boeken van een vliegticket.</Link></>
                  )}
                  {faq.name.includes("tussenstop") && (
                    <> <Link href="/blog/hoe-ga-je-om-met-een-tussenstop-als-senior" className="text-primary-600 hover:underline">Lees onze tips over tussenstops.</Link></>
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
