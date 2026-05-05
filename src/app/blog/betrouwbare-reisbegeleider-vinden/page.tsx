import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe vindt u een betrouwbare reisbegeleider? | Vliegklaar',
  description: 'Wilt u graag reizen maar ziet u op tegen de logistiek? Ontdek waar u op moet letten bij het kiezen van een betrouwbare reisbegeleider voor senioren.',
};

export default function ReisbegeleiderVindenPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe vindt u een betrouwbare reisbegeleider?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Samen reizen geeft een veilig gevoel, zeker als u fysieke beperkingen heeft of opziet tegen de drukte op luchthavens. Maar hoe weet u of een reisbegeleider bij u past?
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80"
            alt="Senior en begeleider op reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Waarom een reisbegeleider?</h2>
            <p>
              Een reisbegeleider is meer dan iemand die uw koffer draagt. Het is een maatje dat de weg weet op vliegvelden, helpt bij het inchecken, en zorgt dat u ontspannen op uw bestemming aankomt. Dit is vooral waardevol bij:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Lange vluchten met een overstap.</li>
              <li>Reizen naar bestemmingen waar u de taal niet spreekt.</li>
              <li>Beginnende dementie of mobiliteitsproblemen.</li>
            </ul>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Belangrijke criteria</h2>
            <p>
              Bij het zoeken naar begeleiding zijn de volgende punten essentieel voor uw veiligheid en plezier:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Ervaring:</strong> Heeft de begeleider ervaring met senioren en eventuele medische situaties?</li>
              <li><strong>Screening:</strong> Is er een Verklaring Omtrent het Gedrag (VOG) aanwezig?</li>
              <li><strong>Persoonlijke klik:</strong> Een kennismakingsgesprek vooraf is onmisbaar. U brengt immers veel tijd samen door.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Waar kunt u zoeken?</h2>
            <p>
              Er zijn verschillende manieren om hulp te vinden. U kunt kijken in uw eigen netwerk, maar voor professionele en verzekerde begeleiding kiest u vaak voor een gespecialiseerde organisatie.
            </p>
            <p>
              Bij Vliegklaar werken we uitsluitend met gescreende begeleiders die passie hebben voor reizen en zorg. Wij matchen u op basis van uw wensen en persoonlijkheid.
            </p>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Zorgeloos op pad</h2>
            <p className="text-center">
              Wilt u weten of een reisbegeleider van Vliegklaar iets voor u is? Wij vertellen u graag meer over onze werkwijze.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vrijblijvend kennismaken
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
              "headline": "Hoe vindt u een betrouwbare reisbegeleider?",
              "description": "Tips voor het vinden van de juiste reisbegeleiding voor senioren. Waar moet u op letten bij screening en ervaring?",
              "image": "https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80",
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
              "datePublished": "2026-05-05"
            })
          }}
        />
      </article>
    </main>
  );
}
