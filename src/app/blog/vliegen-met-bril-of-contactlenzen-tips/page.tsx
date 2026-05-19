import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een bril of contactlenzen: Tips voor Senioren | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een bril of contactlenzen. Over droge ogen in het vliegtuig, reservebrillen en security.',
};

export default function BlogVliegenMetBril() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Vliegen met een bril of contactlenzen: 7 onmisbare tips voor senioren",
    "description": "Reist u als senior met een bril of contactlenzen? De droge lucht in de vliegtuigcabine en de security-controles vragen om een goede voorbereiding. Lees onze praktische tips.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-05-19",
    "image": "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800&q=80"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een bril of contactlenzen: 7 tips voor senioren
          </h1>
          <p className="text-gray-500 text-lg">Gepubliceerd op 19 mei 2026</p>
        </div>

        <div className="relative h-[400px] w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=800&q=80"
            alt="Bril en reisdocumenten"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Voor veel senioren is een bril of zijn contactlenzen onmisbaar in het dagelijks leven. 
            Wanneer u gaat vliegen, brengt dit echter specifieke uitdagingen met zich mee. 
            De zeer droge lucht in de cabine kan zorgen voor branderige ogen, en wat doet u als uw bril onverhoopt beschadigt tijdens de reis?
          </p>
          
          <p>
            Bij <strong>Vliegklaar</strong> begeleiden we dagelijks senioren en weten we precies waar u op moet letten. 
            Hier zijn onze 7 onmisbare tips voor een scherp zicht tijdens uw vliegreis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">1. Draag uw bril in plaats van lenzen tijdens de vlucht</h2>
          <p>
            De luchtvochtigheid in een vliegtuigcabine is extreem laag (vaak minder dan 10-20%). 
            Dit zorgt ervoor dat contactlenzen veel sneller uitdrogen, wat kan leiden tot irritatie, rode ogen of zelfs kleine beschadigingen aan het hoornvlies. 
            Draag daarom tijdens de vlucht bij voorkeur uw bril en bewaar uw lenzen in hun houder in de handbagage.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">2. Neem altijd een reservebril mee</h2>
          <p>
            Het is een nachtmerrie: u bent op uw bestemming en uw bril gaat kapot of raakt kwijt. 
            Zorg daarom altijd voor een reservebril in uw <strong>handbagage</strong>. 
            Stop deze nooit in de ruimbagage, voor het geval uw koffer vertraagd is of kwijtraakt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">3. Hydrateer uw ogen met kunsttranen</h2>
          <p>
            Heeft u last van droge ogen? Neem een klein flesje bevochtigende oogdruppels (kunsttranen) mee in uw handbagage. 
            Let op: vloeistoffen mogen maximaal 100ml per verpakking zijn. 
            Druppel uw ogen preventief elke twee tot drie uur om irritatie te voorkomen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">4. Bewaar uw brillenkoker binnen handbereik</h2>
          <p>
            Wanneer u wilt slapen tijdens de vlucht, is het verleidelijk om uw bril even in het stoelzakje voor u te steken. 
            Doe dit niet! De kans op beschadiging of het vergeten van uw bril bij het uitstappen is groot. 
            Gebruik altijd een stevige koker en berg deze op in uw persoonlijke tas onder de stoel.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5. Neem uw brilvoorschrift mee</h2>
          <p>
            Vraag uw opticien om een kopie van uw meest recente brilvoorschrift. 
            Mochten zowel uw bril als uw reservebril onbruikbaar worden, dan kan een lokale opticien op uw vakantiebestemming veel sneller een vervangend exemplaar voor u maken.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">6. Let op bij de security controle</h2>
          <p>
            Tegenwoordig hoeft u uw bril meestal niet af te zetten bij de security scan, tenzij de medewerker hier expliciet om vraagt. 
            Draagt u een zware montuur met veel metaal? Meld dit dan even vooraf. 
            Onze <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">begeleiders</Link> kunnen u hierbij ondersteunen.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">7. Bescherm uw ogen tegen de felle zon boven de wolken</h2>
          <p>
            De zonsterkte op grote hoogte is veel intenser dan op de grond. 
            Wanneer u bij het raam zit, kan het licht erg fel zijn voor uw ogen. 
            Zorg dat u een goede zonnebril (met UV-bescherming) bij de hand heeft, ook als u in de cabine zit.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl mt-12">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Hulp nodig bij uw voorbereiding?</h3>
            <p className="mb-6">
              Ziet u op tegen de logistiek van uw reis of maakt u zich zorgen over uw medische hulpmiddelen? 
              De reisbegeleiders van Vliegklaar helpen u graag van deur tot deur.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-primary-700 transition-colors inline-block">
              Neem vrijblijvend contact op
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Gerelateerde artikelen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/blog/medicijnen-mee-op-reis" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary-700 mb-2">Medicijnen mee op reis: checklist</h3>
              <p className="text-gray-600 text-sm">Alles wat u moet weten over vloeibare medicatie en verklaringen.</p>
            </Link>
            <Link href="/blog/hoe-voorbereiden-op-lange-vlucht-senior" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-primary-700 mb-2">Voorbereiding op een lange vlucht</h3>
              <p className="text-gray-600 text-sm">Comfortabel blijven tijdens verre reizen als senior.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
