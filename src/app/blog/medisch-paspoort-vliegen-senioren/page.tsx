import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Europees Medisch Paspoort (EMP) aanvragen: Gids voor Senioren | Vliegklaar',
  description: 'Hoe vraagt u een Europees Medisch Paspoort aan en waarom is het essentieel voor vliegreizen? Alles wat senioren moeten weten over het EMP.',
};

export default function MedischPaspoortBlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': 'Europees Medisch Paspoort (EMP) aanvragen: De complete gids voor senioren',
    'description': 'Alles over het belang van een Europees Medisch Paspoort bij het vliegen, hoe u het aanvraagt bij de apotheek en wat erin moet staan.',
    'author': {
      '@type': 'Organization',
      'name': 'Vliegklaar'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Vliegklaar',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://vliegklaar.nl/logo.png'
      }
    },
    'datePublished': '2026-06-02'
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">← Terug naar overzicht</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Europees Medisch Paspoort (EMP) aanvragen: Wat u moet weten
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Wie als senior gaat vliegen, wil onbezorgd op reis. Een Europees Medisch Paspoort (EMP) is daarbij onmisbaar. 
            Het helpt bij de douane en zorgt dat artsen in het buitenland direct weten welke zorg u nodig heeft.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <Image 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80" 
            alt="Medische documenten en bril" 
            width={800} 
            height={400} 
            className="rounded-2xl shadow-lg mb-10"
          />

          <h2>Wat is een Europees Medisch Paspoort?</h2>
          <p>
            Het Europees Medisch Paspoort is een document in elf talen waarin al uw belangrijke medische gegevens staan. 
            Het is geen officieel reisdocument zoals uw echte paspoort, maar een internationaal erkend medisch dossier in zakformaat.
          </p>

          <h2>Waarom is een EMP essentieel voor senioren?</h2>
          <ul>
            <li><strong>Medicatiecontrole:</strong> Bij de security op vliegvelden zoals <Link href="/reisbegeleiding-ouderen-amsterdam">Schiphol</Link> of <Link href="/reisbegeleiding-ouderen-eindhoven">Eindhoven Airport</Link> kunt u aantonen waarom u medicijnen (en eventueel naalden of vloeistoffen) bij u heeft.</li>
            <li><strong>Noodgevallen:</strong> Mocht u medische hulp nodig hebben in het buitenland, dan ziet een lokale arts direct welke medicijnen u gebruikt en welke allergieën u heeft.</li>
            <li><strong>Verlies van medicatie:</strong> Als u uw medicijnen kwijtraakt, kan een buitenlandse apotheker op basis van de werkzame stoffen in het EMP vaak sneller vervangende medicatie verstrekken.</li>
          </ul>

          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100 my-10">
            <h3 className="mt-0">Hulp bij uw voorbereiding?</h3>
            <p>
              Vindt u het lastig om alle documenten en medicatie voor uw vlucht te organiseren? De reisbegeleiders van Vliegklaar helpen u bij de volledige voorbereiding en begeleiden u tot in het vliegtuig.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors no-underline">
              Bekijk onze diensten
            </Link>
          </div>

          <h2>Hoe vraagt u een Europees Medisch Paspoort aan?</h2>
          <p>
            U kunt een EMP eenvoudig aanvragen bij uw eigen <strong>apotheek</strong>. Zij hebben vaak blanco exemplaren op voorraad of kunnen deze direct voor u uitprinten met uw actuele medicatieoverzicht. 
            Soms wordt er een kleine vergoeding (meestal tussen de 5 en 10 euro) gevraagd voor de administratie.
          </p>
          <p>
            Let op: Het is verstandig om dit minimaal twee weken voor vertrek te regelen, zodat u zeker weet dat het overzicht compleet en actueel is.
          </p>

          <h2>Wat staat er in het EMP?</h2>
          <p>
            In het document wordt onder andere het volgende genoteerd:
          </p>
          <ul>
            <li>Naam en contactgegevens van uw huisarts.</li>
            <li>Medicijnen die u gebruikt (met de internationale stofnaam).</li>
            <li>Dosering en gebruiksaanwijzing.</li>
            <li>Overgevoeligheden of allergieën.</li>
            <li>Informatie over dragers van implantaten (zoals een <Link href="/blog/pacemaker-en-vliegen">pacemaker</Link>).</li>
          </ul>

          <p>
            Naast het EMP raden wij ook altijd aan om een officiële medicatieverklaring mee te nemen als u zware medicijnen (die onder de Opiumwet vallen) gebruikt. 
            Lees meer hierover in ons artikel over <Link href="/blog/medicijnen-mee-op-reis">medicijnen mee op reis</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
