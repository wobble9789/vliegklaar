import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding en PGB: Vergoeding voor Senioren | Vliegklaar',
  description: 'Kan reisbegeleiding betaald worden uit een PGB? Ontdek de mogelijkheden voor vergoeding van begeleiding op reis voor senioren in 2026.',
};

export default function ReisbegeleidingPGBPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kan ik reisbegeleiding betalen vanuit mijn PGB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, in veel gevallen kan de begeleiding (niet de reis zelf) betaald worden vanuit het segment 'begeleiding individueel' van uw PGB (Wlz of Wmo). Dit hangt af van de doelen in uw zorgplan."
        }
      },
      {
        "@type": "Question",
        "name": "Worden de reiskosten van de begeleider ook vergoed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, reiskosten, verblijfskosten en entreegelden voor de begeleider vallen meestal buiten de PGB-vergoeding. Deze kosten dient u zelf te dragen."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe regel ik de administratie voor PGB op reis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U heeft een zorgovereenkomst nodig met Vliegklaar. Wij factureren de uren voor begeleiding, die u vervolgens kunt declareren bij de SVB of het zorgkantoor."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie ook hulp bij vliegen met dementie via PGB?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jazeker. Juist voor senioren met dementie is structuur en begeleiding essentieel. Dit valt vaak onder de Wlz-indicatie voor begeleiding."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Reisbegeleiding en PGB: Hoe werkt de vergoeding?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Voor senioren met een zorgindicatie kan de drempel om op reis te gaan hoog zijn. Een Persoonsgebonden Budget (PGB) kan echter uitkomst bieden om de nodige begeleiding tijdens de reis te financieren.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80"
            alt="Gesprek over zorg en begeleiding"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">PGB voor begeleiding op vakantie</h2>
            <p>
              Veel mensen denken dat een PGB alleen bedoeld is voor zorg in en om het huis. Niets is minder waar. Als u een indicatie heeft voor <strong>Begeleiding Individueel</strong> (vanuit de Wmo of Wlz), mag u deze zorg in principe ook op een andere locatie inzetten, zoals tijdens een vakantie of vliegreis.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wat wordt vergoed?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Begeleidingsuren:</strong> De tijd die de begeleider besteedt aan ondersteuning, structuur en veiligheid.</li>
              <li><strong>Persoonlijke verzorging:</strong> Indien u hier een indicatie voor heeft en de begeleider deze taken uitvoert.</li>
              <li><strong>Nachtbegeleiding:</strong> Indien noodzakelijk en binnen uw budget.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Wat wordt NIET vergoed?</h2>
            <p>
              Het is belangrijk om te weten dat het PGB uitsluitend bestemd is voor de <em>zorgcomponent</em>. U kunt het budget niet gebruiken voor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vliegtickets (zowel voor uzelf als de begeleider).</li>
              <li>Hotelovernachtingen.</li>
              <li>Maaltijden en consumpties.</li>
              <li>Reisverzekeringen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Hoe regelt u dit bij Vliegklaar?</h2>
            <p>
              Bij Vliegklaar hebben we ervaring met reizigers die gebruikmaken van een PGB. We werken als volgt:
            </p>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Kennismaking:</strong> We bespreken uw zorgbehoefte en de reisplannen.</li>
              <li><strong>Zorgovereenkomst:</strong> We stellen een overeenkomst op die voldoet aan de eisen van de SVB.</li>
              <li><strong>Facturatie:</strong> Na de reis ontvangt u een gespecificeerde factuur voor de geleverde begeleidingsuren.</li>
            </ol>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen over PGB</h2>
            <div className="space-y-6">
              {faqData.mainEntity.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Persoonlijk Advies</h2>
            <p className="text-center">
              Wilt u weten of uw specifieke zorgindicatie ingezet kan worden voor reisbegeleiding? Neem contact met ons op voor een vrijblijvend adviesgesprek.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag advies over PGB & Reisbegeleiding
              </Link>
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Reisbegeleiding en PGB: Vergoeding voor Senioren",
              "description": "Alles wat u moet weten over het financieren van reisbegeleiding vanuit een Persoonsgebonden Budget (PGB).",
              "image": "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&q=80",
              "author": {
                "@type": "Organization",
                "name": "Vliegklaar"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Vliegklaar",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://vliegklaar.nl/logo.png"
                }
              },
              "datePublished": "2026-07-03"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </article>
    </main>
  );
}
