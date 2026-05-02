import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valpreventie op Vakantie: Veilig Genieten voor Senioren | Vliegklaar',
  description: 'Tips voor valpreventie tijdens uw vakantie. Voorkom vallen op reis met praktisch advies over schoeisel, hulpmiddelen en veilige accommodaties voor ouderen.',
};

export default function ValpreventieBlog() {
  return (
    <article className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-6 inline-block">
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Valpreventie op Vakantie: Zo blijft u stevig op uw benen staan
          </h1>
          <div className="flex items-center text-gray-500 text-sm mb-8">
            <span>2 mei 2026</span>
            <span className="mx-2">•</span>
            <span>5 min leestijd</span>
          </div>
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6efe93?w=1200&q=80"
              alt="Veilig wandelen op vakantie"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Een vakantie is het ideale moment om te ontspannen en nieuwe plekken te ontdekken. Echter, een onbekende omgeving brengt ook nieuwe uitdagingen met zich mee, zeker als het gaat om stabiliteit en veiligheid. Voor senioren is valpreventie op reis cruciaal om onbezorgd te kunnen blijven genieten. In dit artikel delen we praktische tips om vallen te voorkomen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Bereid u goed voor</h2>
          <p>
            Veiligheid begint al bij het inpakken. Goed schoeisel is de basis van elke veilige wandeling, of dat nu op het vliegveld is of op een kasseienstraatje in Zuid-Europa. Kies voor schoenen met een stevige zool en goede grip. Vermijd slippers of schoenen met gladde zolen, zeker als de ondergrond ongelijk kan zijn.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Aandachtspunten in de accommodatie</h2>
          <p>
            Hotelkamers en vakantiewoningen zijn vaak anders ingericht dan u thuis gewend bent. Let bij aankomst direct op de volgende zaken:
          </p>
          <ul>
            <li><strong>Verlichting:</strong> Zorg dat de route naar de badkamer 's nachts goed verlicht is. Gebruik eventueel een klein nachtlampje.</li>
            <li><strong>Losse kleden:</strong> Let op losliggende tapijten of matjes waar u over kunt struikelen. Schuif ze indien nodig even aan de kant.</li>
            <li><strong>Badkamerveiligheid:</strong> Gebruik de handgrepen in de douche als deze aanwezig zijn en vraag indien nodig om een antislipmat bij de receptie.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hulpmiddelen mee op reis</h2>
          <p>
            Maakt u thuis gebruik van een wandelstok of rollator? Neem deze dan ook zeker mee op vakantie, zelfs als u denkt dat het op de bestemming wel mee zal vallen. Op reis loopt u vaak meer dan u gewend bent en slaat de vermoeidheid sneller toe. Vermoeidheid is een van de grootste risicofactoren voor een valpartij.
          </p>

          <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-xl text-gray-600">
            &quot;Voorkomen is beter dan genezen, zeker wanneer u ver van huis bent en volop wilt genieten van de omgeving.&quot;
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Veilig door de terminal</h2>
          <p>
            Vliegvelden zijn groot, druk en vaak voorzien van gladde vloeren of lange roltrappen. Bij Vliegklaar merken we dat dit vaak de plekken zijn waar mensen zich onzeker voelen. Maak gebruik van de beschikbare voorzieningen zoals liften in plaats van roltrappen, en neem regelmatig even rust op de aanwezige zitplaatsen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Hoe Vliegklaar helpt</h2>
          <p>
            Onze reisbegeleiders zijn getraind in het herkennen van risicosituaties. Wij bieden fysieke ondersteuning waar nodig, dragen uw zware bagage zodat u uw handen vrij heeft voor extra balans, en zorgen dat u op uw eigen tempo door het vliegveld kunt bewegen. Zo wordt de kans op een misstap tot een minimum beperkt.
          </p>

          <p className="mt-8">
            Wilt u meer weten over onze persoonlijke begeleiding bij uw volgende vliegreis? Neem gerust contact met ons op voor de mogelijkheden.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-primary-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Met een gerust hart op reis?</h3>
            <p className="text-gray-700 mb-6">
              Vliegklaar biedt deskundige begeleiding voor senioren op de luchthaven. Wij zorgen voor stabiliteit, hulp bij bagage en een ontspannen start van uw vakantie.
            </p>
            <Link
              href="/aanvragen"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Begeleiding aanvragen
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}
