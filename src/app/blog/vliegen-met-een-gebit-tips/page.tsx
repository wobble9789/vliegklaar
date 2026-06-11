import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gebit of kunstgebit: Tips voor senioren | Vliegklaar',
  description: 'Gaat u vliegen met een kunstgebit of gebitsprothese? Lees hier alles over security checks, comfort tijdens de vlucht en handige tips voor senioren.',
};

export default function VliegenMetGebitBlog() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een gebit of kunstgebit: Tips voor senioren",
    "description": "Praktische gids voor senioren die vliegen met een kunstgebit. Alles over de security op Schiphol, drukverschillen in de cabine en mondverzorging op reis.",
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
    "datePublished": "2026-06-11"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
          Vliegen met een gebit of kunstgebit: Alles wat u moet weten
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Voor veel senioren is een kunstgebit of gebitsprothese een vast onderdeel van de dagelijkse verzorging. 
          Toch krijgen wij vaak de vraag: &quot;Levert een kunstgebit problemen op bij de security?&quot; of 
          &quot;Kan ik last krijgen van de luchtdruk in het vliegtuig?&quot;. In dit artikel geven we antwoord op de meest 
          gestelde vragen en delen we praktische tips voor een zorgeloze vlucht.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Het kunstgebit bij de security check</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          De meest gestelde vraag is of een kunstgebit de metaaldetectiepoortjes op het vliegveld laat afgaan. 
          Het korte antwoord is: <strong>nee</strong>. Moderne gebitsprotheses bevatten meestal geen of slechts 
          minimale hoeveelheden metaal die niet genoeg zijn om de alarmen te activeren.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Zelfs als u een frameprothese heeft met meer metaal, is de beveiliging op Schiphol gewend aan medische hulpmiddelen. 
          Mocht de bodyscan toch iets signaleren, dan wordt dit discreet afgehandeld door de beveiligingsmedewerkers. 
          U hoeft uw gebit nooit uit te doen voor de controle.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Drukverschillen en uw gebit</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Wanneer het vliegtuig stijgt of daalt, verandert de luchtdruk in de cabine. Dit kan invloed hebben op uw tandvlees. 
          Sommige senioren ervaren dat hun tandvlees licht opzwelt, waardoor de prothese strakker kan gaan zitten of juist 
          iets losser komt te zitten als er lucht onder de prothese komt.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
          <li><strong>Gebruik kleefpasta:</strong> Zorg voor een goede fixatie voor vertrek. Dit voorkomt dat luchtbellen irritatie veroorzaken.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water. Een droge mond (vaak versterkt door de droge vliegtuiglucht) kan ervoor zorgen dat een prothese minder goed blijft zitten.</li>
          <li><strong>Vermijd gasvormende dranken:</strong> Koolzuurhoudende dranken kunnen zorgen voor extra lucht in de maag en mond, wat het comfort niet ten goede komt.</li>
        </ul>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Mondverzorging tijdens een lange vlucht</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Reist u naar een verre bestemming? Dan is mondhygiëne extra belangrijk. In de droge lucht van de cabine 
          vermenigvuldigen bacteriën zich sneller, wat kan leiden tot een onfrisse smaak of irritaties onder het gebit.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Neem een kleine reisset mee in uw handbagage met een tandenborstel, een kleine tube tandpasta en eventueel 
          reinigingstabletten. Let op: vloeibare gebitsreinigers moeten voldoen aan de 100ml regels voor vloeistoffen, 
          tenzij u een medische verklaring heeft.
        </p>

        <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Handbagage Checklist</h2>
        <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 mb-12">
          <h3 className="text-lg font-bold text-primary-900 mb-4">Wat neemt u mee in uw tas?</h3>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start gap-2"><span>✅</span> Reserve-kleefpasta</li>
            <li className="flex items-start gap-2"><span>✅</span> Een stevig gebitsdoosje</li>
            <li className="flex items-start gap-2"><span>✅</span> Uw vertrouwde reinigingsborstel</li>
            <li className="flex items-start gap-2"><span>✅</span> Pijnstillers (voor het geval van druk op het tandvlees)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos op reis met Vliegklaar</h2>
          <p className="text-gray-700 mb-6">
            Ziet u op tegen de logistiek of de kleine ongemakken van het reizen als senior? Onze reisbegeleiders 
            zijn er om u te ondersteunen. Van de security op Schiphol tot aan de aankomst op uw bestemming; 
            wij zorgen dat u zich nergens zorgen over hoeft te maken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-center">
              Vrijblijvend advies aanvragen
            </Link>
            <Link href="/diensten" className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center">
              Bekijk onze diensten
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
