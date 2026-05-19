import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorapparaat: Praktische tips voor senioren | Vliegklaar',
  description: 'Hoe bereidt u zich voor op een vliegreis met een gehoorapparaat? Lees alles over de security check, luchtdruk in het vliegtuig en handige hulpmiddelen.',
};

export default function GehoorapparaatVliegveldTipsPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Vliegen met een gehoorapparaat: Praktische tips voor senioren op het vliegveld",
    "description": "Alles wat u moet weten over vliegen met een gehoorapparaat: van de security check op Schiphol tot communicatie bij de gate.",
    "image": "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&q=80",
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
    "datePublished": "2026-05-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vliegklaar.nl/blog/vliegen-met-een-gehoorapparaat-vliegveld-tips"
    }
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <nav className="mb-8 text-primary-600">
          <Link href="/blog" className="hover:underline flex items-center">
            <span className="mr-2">←</span> Terug naar alle blogs
          </Link>
        </nav>

        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Vliegen met een gehoorapparaat: Tips voor op het vliegveld
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Voor senioren met een gehoorapparaat kan een druk vliegveld zoals Schiphol overweldigend zijn. 
            Lawaai, omroepen en de security check zorgen vaak voor onzekerheid. In dit artikel leest u hoe u 
            zorgeloos op reis gaat met uw gehoorondersteuning.
          </p>
          <div className="relative h-[300px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1200&q=80"
              alt="Senior met gehoorapparaat op reis"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">De security check: Moet het apparaat uit?</h2>
          <p>
            Een van de grootste zorgen voor senioren is de beveiligingscontrole. Het goede nieuws: u kunt uw 
            gehoorapparaten <strong>gewoon inhouden</strong> tijdens de bodyscan of als u door de metaaldetector loopt. 
            Moderne gehoorapparaten bevatten te weinig metaal om het alarm te activeren.
          </p>
          <p>
            Het is echter wel verstandig om de security-medewerker vooraf even te informeren. Mocht u handmatig 
            gecontroleerd worden (fouilleren), dan weet de beambte dat ze voorzichtig moeten zijn rond uw oren.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Batterijen en opladers in uw handbagage</h2>
          <p>
            In het vliegtuig is de lucht vaak erg droog en kan de temperatuur wisselen. Dit heeft invloed op de 
            levensduur van uw batterijen. Zorg dat u altijd een <strong>reservevoorraad batterijen</strong> in uw 
            handbagage heeft. 
          </p>
          <p>
            Heeft u oplaadbare gehoorapparaten? Neem de oplader dan mee in de cabine, niet in de koffer die het ruim in gaat. 
            Zo kunt u tijdens een eventuele vertraging of een lange vlucht altijd bijladen.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl border-l-4 border-primary-500 my-12 text-primary-900">
            <h3 className="text-xl font-bold mb-4">Tip: De Schiphol App</h3>
            <p>
              Omdat omroepen op de luchthaven vaak lastig te verstaan zijn door de galm, raden wij aan de app van 
              de luchthaven of uw luchtvaartmaatschappij te installeren. Hierop ziet u direct gate-wijzigingen 
              en vertrektijden zonder dat u afhankelijk bent van uw gehoor.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Communicatie bij de gate</h2>
          <p>
            Meld u bij aankomst bij de gate even bij het personeel. Geef aan dat u slechthorend bent. In veel 
            gevallen krijgt u dan &apos;pre-boarding&apos;, waardoor u in alle rust als eerste het vliegtuig in kunt gaan. 
            Dit voorkomt dat u in de drukte belangrijke instructies van het personeel mist.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-12 mb-6">Luchtdruk en comfort tijdens de vlucht</h2>
          <p>
            Tijdens het stijgen en landen verandert de luchtdruk. Sommige senioren vinden het prettig om hun 
            gehoorapparaat tijdens deze momenten iets zachter te zetten of zelfs even uit te doen als het 
            &apos;ploppen&apos; van de oren vervelend voelt. Vergeet ze echter niet weer aan te zetten zodra de 
            piloot de veiligheidsriemen-tekens uitschakelt, zodat u de communicatie van de stewardessen goed kunt volgen.
          </p>
        </div>

        <section className="mt-16 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Hoe Vliegklaar u ondersteunt</h2>
          <p className="text-lg mb-8 text-center">
            Ziet u ondanks deze tips op tegen de reis? Onze reisbegeleiders zijn ervaren in het ondersteunen van 
            slechthorende ouderen. Wij regelen de communicatie op de luchthaven en zorgen dat u elke stap van de 
            reis precies weet waar u aan toe bent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-center shadow-lg">
              Vraag begeleiding aan
            </Link>
            <Link href="/reisbegeleiding-ouderen" className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center">
              Onze diensten
            </Link>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
             <span>Gerelateerd:</span>
             <Link href="/blog/vliegen-met-gehoorapparaat-tips" className="hover:text-primary-600 underline">Vliegen met gehoorapparaat (algemeen)</Link>
             <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="hover:text-primary-600 underline">Security op Schiphol</Link>
             <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="hover:text-primary-600 underline">Assistentie aanvragen</Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
