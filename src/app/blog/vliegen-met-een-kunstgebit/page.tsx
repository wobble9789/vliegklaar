import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een Kunstgebit: 7 Onmisbare Tips | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees onze 7 praktische tips over security, luchtdruk en comfort voor senioren op reis.',
};

export default function VliegenMetKunstgebitPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een Kunstgebit: 7 Onmisbare Tips voor Senioren",
    "description": "Praktische gids voor senioren over vliegen met een kunstgebit, inclusief tips voor de security check op Schiphol en comfort tijdens lange vluchten.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-09",
    "image": "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar blog overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een Kunstgebit: 7 Onmisbare Tips voor Senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Vliegen met een kunstgebit of gebitsprothese is voor veel senioren een bron van lichte zorg. Gaat het alarm af bij de security? Wat doet de luchtdruk met de pasvorm? Geen zorgen: met deze 7 tips gaat u met een stralende lach aan boord.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary">
          <h2 className="text-3xl font-bold text-primary-800 mb-6">1. Het alarm bij de Security Check</h2>
          <p className="mb-4">
            De meest gestelde vraag: &quot;Moet ik mijn gebit uitdoen bij de beveiliging?&quot; Het antwoord is simpel: <strong>Nee</strong>. De metaaldetectors en bodysscanners op vliegvelden zoals Schiphol zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese. U kunt uw gebit gewoon inhouden.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">2. Droge lucht en hechting</h2>
          <p className="mb-4">
            De lucht in een vliegtuigcabine is erg droog. Dit kan leiden tot een droge mond, wat weer invloed heeft op de natuurlijke zuigkracht van uw kunstgebit. 
          </p>
          <ul className="list-disc pl-6 mb-8">
            <li>Drink regelmatig water tijdens de vlucht.</li>
            <li>Neem voor de zekerheid een kleine tube kleefpasta mee in uw handbagage (max. 100ml).</li>
          </ul>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">3. De invloed van luchtdruk</h2>
          <p className="mb-4">
            Drukverschillen tijdens het stijgen en dalen kunnen soms zorgen voor een licht drukkend gevoel onder de prothese. Dit komt doordat kleine luchtbelletjes onder het gebit uitzetten. Even kort uw gebit &quot;lossen&quot; en weer vastzetten kan dit gevoel direct verhelpen.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">4. Reiniging tijdens lange vluchten</h2>
          <p className="mb-4">
            Bij een lange vlucht is het prettig om uw gebit even op te frissen. Gebruik hiervoor het toilet aan boord, maar let op: <strong>gebruik nooit het kraanwater uit de wasbak</strong> om uw gebit te spoelen of uw mond te spoelen. Dit water is geen drinkwater. Gebruik altijd mineraalwater uit een flesje.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">5. Reservegebit in de handbagage</h2>
          <p className="mb-4">
            Het is de nachtmerrie van elke reiziger: uw koffer raakt kwijt en uw reservegebit zat daarin. Draag een eventueel reservegebit daarom altijd in uw handbagage, verpakt in een stevige, herkenbare doos.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">6. Eten aan boord</h2>
          <p className="mb-4">
            Vliegtuigmaaltijden kunnen soms taai vlees of plakkerige broodjes bevatten. Als u twijfelt over de pasvorm van uw gebit, kunt u bij het boeken van uw vlucht vaak kiezen voor een &apos;soft meal&apos; of medisch dieet.
          </p>

          <h2 className="text-3xl font-bold text-primary-800 mb-6">7. Reisbegeleiding voor extra rust</h2>
          <p className="mb-4">
            Vindt u de hele logistiek rondom de security en de reis toch spannend? Een reisbegeleider van Vliegklaar kan u ondersteunen. Wij weten precies hoe we discreet om moeten gaan met medische hulpmiddelen en zorgen dat u zich nergens zorgen over hoeft te maken.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border-2 border-primary-200 mt-12">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Wist u dat?</h3>
            <p className="text-gray-700 mb-0">
              Op Schiphol werken medewerkers die speciaal getraind zijn om senioren met medische protheses discreet te helpen. U bent dus in goede handen!
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link href="/blog/hoe-ga-je-om-met-een-gebitprothese-op-het-vliegveld" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Gids: Gebit op het vliegveld
            </Link>
            <Link href="/blog/vliegen-met-een-kunstgebit-vliegveld-tips" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Vliegveld tips
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos reizen met Vliegklaar</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u persoonlijke begeleiding tijdens uw volgende reis? Wij helpen senioren van deur tot deur.
          </p>
          <Link href="/contact" className="inline-block bg-white text-primary-900 font-bold px-10 py-4 rounded-xl shadow-lg hover:bg-primary-50 transition-colors">
            Vraag een kennismaking aan
          </Link>
        </div>
      </section>
    </main>
  );
}
