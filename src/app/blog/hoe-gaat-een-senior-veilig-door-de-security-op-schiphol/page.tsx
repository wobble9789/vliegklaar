import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig door de Security op Schiphol: Tips voor Senioren (2026) | Vliegklaar',
  description: 'Hoe gaat u als senior vlot en veilig door de security op Schiphol? Ontdek tips over vloeistoffen, medische hulpmiddelen en assistentie voor een zorgeloze reis.',
};

export default function SecuritySchipholSeniorenPage() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moeten senioren hun schoenen uitdoen bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Op Schiphol hoeven schoenen meestal niet uit, tenzij de securitymedewerker hierom vraagt (bijvoorbeeld bij hoge laarzen of schoenen met veel metaal). Draag bij voorkeur instappers of comfortabele sneakers."
        }
      },
      {
        "@type": "Question",
        "name": "Mag mijn pacemaker door de metaaldetector?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Als u een pacemaker of ICD heeft, mag u niet door de traditionele metaaldetector. Meld dit direct bij de medewerker en laat uw pacemaker-pasje zien. U krijgt dan een handmatige controle."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe zit het met vloeibare medicijnen bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vloeibare medicijnen die noodzakelijk zijn tijdens de reis mogen mee, ook als ze meer dan 100ml bevatten. Houd ze apart en toon een medische verklaring of medicatiepaspoort aan de securitymedewerker."
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
            Hoe gaat u als senior veilig door de security op Schiphol?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De securitycontrole op Schiphol kan voor senioren soms overweldigend zijn door de drukte en de technische procedures. Met deze tips weet u precies wat u kunt verwachten en hoe u zonder stress door de controle komt.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1540339832862-4745a980538b?w=1200&q=80"
            alt="Security controle op de luchthaven"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">De CT-scanners van Schiphol: Goed Nieuws</h2>
            <p>
              Schiphol maakt gebruik van geavanceerde CT-scanners. Dit is een groot voordeel voor senioren: in de meeste gevallen hoeven vloeistoffen en elektronica (zoals uw tablet of laptop) <strong>niet</strong> meer uit de tas. Dit scheelt veel gedoe met het in- en uitruimen van uw handbagage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Medische Hulpmiddelen en Protheses</h2>
            <p>
              Heeft u een kunstknie, heupprothese of draagt u een gehoorapparaat? Dit hoeft geen probleem te zijn bij de security:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Meld het vooraf:</strong> Vertel de medewerker dat u een prothese heeft voordat u door de scanner gaat.</li>
              <li><strong>De Security Scan:</strong> In plaats van de oude metaaldetector staat u vaak in een &apos;security scan&apos; met de handen omhoog. Deze scanner detecteert protheses maar is volkomen veilig.</li>
              <li><strong>Pacemaker:</strong> Heeft u een pacemaker? Ga <strong>niet</strong> door de scan of detector, maar vraag om een handmatige controle (&apos;pat-down&apos;).</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Extra hulp nodig bij de controle?</h2>
            <p>
              Vindt u het lastig om lang te staan in de rij of begrijpt u de instructies soms niet goed? Onze reisbegeleiders bieden persoonlijke ondersteuning en lopen met u mee door de volledige securityprocedure.
              <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 font-bold hover:underline ml-1">
                Ontdek onze service op Schiphol (Amsterdam).
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Assistentie in andere steden</h2>
            <p>
              Vliegklaar biedt niet alleen begeleiding op Schiphol, maar in heel Nederland. Woont u in de regio? Wij halen u thuis op en begeleiden u tot in het vliegtuig.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm mt-4">
              <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline">Rotterdam</Link>
              <Link href="/reisbegeleiding-ouderen-den-haag" className="text-primary-600 hover:underline">Den Haag</Link>
              <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 hover:underline">Utrecht</Link>
              <Link href="/reisbegeleiding-ouderen-eindhoven" className="text-primary-600 hover:underline">Eindhoven</Link>
              <Link href="/reisbegeleiding-ouderen-tilburg" className="text-primary-600 hover:underline">Tilburg</Link>
              <Link href="/reisbegeleiding-ouderen-groningen" className="text-primary-600 hover:underline">Groningen</Link>
              <Link href="/reisbegeleiding-ouderen-nijmegen" className="text-primary-600 hover:underline">Nijmegen</Link>
              <Link href="/reisbegeleiding-ouderen-arnhem" className="text-primary-600 hover:underline">Arnhem</Link>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Kleding en Voorbereiding</h2>
            <p>Maak het uzelf gemakkelijk door slimme kledingkeuzes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Draag geen riem met een grote metalen gesp.</li>
              <li>Draag zo min mogelijk sieraden; stop deze liever in uw tas voordat u in de rij gaat staan.</li>
              <li>Draag comfortabele schoenen die u indien nodig makkelijk aan- en uit kunt trekken.</li>
              <li>Houd uw instapkaart en paspoort bij de hand, maar berg ze veilig op zodra u de poortjes passeert.</li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde Vragen over Security</h2>
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
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op Reis</h2>
            <p className="text-center italic">
              &quot;De security is slechts een korte stap naar uw bestemming. Met de juiste voorbereiding is het niets om tegenop te zien.&quot;
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Plan uw begeleide reis
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
              "headline": "Veilig door de Security op Schiphol: Tips voor Senioren (2026)",
              "description": "Praktische gids voor senioren over de securitycontrole op Schiphol. Tips voor medische hulpmiddelen, CT-scanners en vlot reizen.",
              "image": "https://images.unsplash.com/photo-1540339832862-4745a980538b?w=1200&q=80",
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
              "datePublished": "2026-06-06"
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
