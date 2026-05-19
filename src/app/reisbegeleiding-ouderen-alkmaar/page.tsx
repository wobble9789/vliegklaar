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
