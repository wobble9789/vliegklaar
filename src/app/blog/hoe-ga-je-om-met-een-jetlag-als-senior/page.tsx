import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jetlag bij Ouderen: Tips voor Sneller Herstel | Vliegklaar',
  description: 'Hoe voorkomt en beperkt u een jetlag als senior? Lees onze praktische tips over slaapritme, voeding en lichttherapie voor een vitale aankomst.',
};

export default function JetlagSeniorenPage() {
  const articleTitle = "Jetlag bij Ouderen: Hoe u sneller herstelt na een lange vlucht";
  const publishDate = "2026-05-05";

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {articleTitle}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Een verre reis maken is prachtig, maar de overgang tussen tijdzones kan het lichaam behoorlijk ontregelen. Voor senioren kan een jetlag intenser aanvoelen en langer aanhouden. Met de juiste aanpak kunt u de symptomen echter aanzienlijk beperken.
          </p>
        </header>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80"
            alt="Ontspannen senior geniet van de ochtendzon"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">Waarom een jetlag lastiger is op latere leeftijd</h2>
            <p>
              Onze biologische klok regelt vitale processen zoals de lichaamstemperatuur en de afgifte van melatonine. Naarmate we ouder worden, wordt deze klok minder flexibel. Het aanpassen aan een nieuw ritme duurt simpelweg iets langer, wat kan leiden tot vermoeidheid, concentratieproblemen en spijsverteringsklachten.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border-l-4 border-primary-500">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Reisbegeleiding voor een Zachte Landing</h2>
            <p>
              Ziet u op tegen de eerste dagen na aankomst? Onze reisbegeleiders helpen u direct in het juiste ritme te komen. Wij regelen de praktische zaken, zodat u zich kunt concentreren op uw herstel en plezier. 
              <Link href="/" className="text-primary-600 font-bold hover:underline ml-1">
                Bekijk onze diensten.
              </Link>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tips voor vertrek</h2>
            <p>
              De strijd tegen een jetlag begint al voor u in het vliegtuig stapt:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pas uw ritme aan:</strong> Gaat u naar het oosten? Ga dan een paar dagen voor vertrek elke dag een uur eerder naar bed. Richting het westen doet u het omgekeerde.</li>
              <li><strong>Rust goed uit:</strong> Vertrek niet oververmoeid. Een uitgerust lichaam herstelt sneller van de vliegreis.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Tijdens de vlucht</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Hydratatie is essentieel:</strong> Drink veel water. De droge lucht in de cabine versterkt het gevoel van een jetlag. Wees matig met koffie en alcohol.</li>
              <li><strong>Stel uw horloge in:</strong> Zet uw horloge direct bij vertrek op de tijd van uw bestemming. Dit helpt u mentaal om alvast in het nieuwe ritme te komen.</li>
              <li><strong>Blijf in beweging:</strong> Loop regelmatig even door het gangpad om de bloedsomloop te stimuleren.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">Op de bestemming</h2>
            <p>
              Zodra u bent geland, is daglicht uw beste vriend. Natuurlijk licht onderdrukt de aanmaak van melatonine en helpt uw biologische klok te resetten.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Blijf wakker tot de avond:</strong> Hoe verleidelijk een middagdutje ook is, probeer wakker te blijven tot het lokaal bedtijd is.</li>
              <li><strong>Eet lokaal:</strong> Volg direct de lokale tijden voor ontbijt, lunch en diner. Dit helpt uw spijsvertering om zich aan te passen.</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-primary-800 mb-4 text-center">Plan uw volgende droomreis</h2>
            <p className="text-center">
              Laat de angst voor een jetlag u niet tegenhouden om de wereld te ontdekken. Met een goede planning en eventueel de hulp van een reisbegeleider van Vliegklaar, reist u comfortabel naar elke bestemming.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
              >
                Vraag vrijblijvend advies aan
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
              "headline": articleTitle,
              "description": "Praktische tips voor senioren om een jetlag te voorkomen en sneller te herstellen na een lange vliegreis.",
              "image": "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
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
              "datePublished": publishDate
            })
          }}
        />
      </article>
    </main>
  );
}
