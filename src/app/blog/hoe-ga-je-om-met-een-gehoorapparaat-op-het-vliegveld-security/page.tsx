import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gehoorapparaat bij de security op het vliegveld? | Vliegklaar',
  description: 'Tips voor senioren die reizen met een gehoorapparaat. Hoe werkt de security op Schiphol en waar moet u op letten bij de scanners?',
};

export default function GehoorapparaatSecurityPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn gehoorapparaat uitdoen bij de security scan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in de meeste gevallen kunt u uw gehoorapparaat gewoon inhouden. De moderne bodyscan en metaaldetectiepoortjes op vliegvelden zoals Schiphol beschadigen uw apparaat niet. Meld het wel even vooraf bij de beveiligingsbeambte."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de röntgenstraling van de bagagescan mijn gehoorapparaat beschadigen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De röntgenstraling voor handbagage is over het algemeen veilig voor gehoorapparaten. Echter, als u reserve-apparaten heeft, is het verstandig om deze in een apart doosje aan te bieden en aan te geven dat het om gevoelige elektronica gaat."
        }
      },
      {
        "@type": "Question",
        "name": "Wat als het alarm afgaat door mijn gehoorapparaat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Geen zorgen. Mocht het alarm afgaan, dan zal de beveiliger u handmatig controleren (fouilleren). Geef duidelijk aan dat u een gehoorapparaat draagt. De medewerkers zijn getraind om hier discreet en respectvol mee om te gaan."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
          Hoe ga je om met een gehoorapparaat bij de security op het vliegveld?
        </h1>
        
        <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=1200&q=80"
            alt="Security controle vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Voor veel senioren is het gehoorapparaat een onmisbaar onderdeel van het dagelijks leven. 
            Bij de voorbereiding op een vliegreis roept dit echter vaak vragen op: 
            &quot;Mag het apparaat in blijven?&quot;, &quot;Gaat het alarm af?&quot; en &quot;Is de scan schadelijk?&quot; 
            In dit artikel leggen we precies uit hoe u zorgeloos door de security controle op Schiphol en andere luchthavens komt.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Inhouden of uitdoen?</h2>
          <p>
            Het korte antwoord is: <strong>u kunt uw gehoorapparaat gewoon inhouden.</strong> 
            De meeste moderne gehoorapparaten zijn niet gevoelig voor de magnetische velden van de metaaldetectiepoortjes of de bodyscan. 
            Het is zelfs aan te raden om ze in te houden, zodat u de aanwijzingen van het beveiligingspersoneel goed kunt verstaan.
          </p>
          <p>
            Meld wel altijd even bij de beveiliger dat u een gehoorapparaat draagt voordat u door de scanner loopt. 
            Dit voorkomt verwarring als er een handmatige controle nodig is.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">De impact van de scanners</h2>
          <p>
            Er zijn twee soorten scanners waar u mee te maken krijgt:
          </p>
          <ul>
            <li>
              <strong>De Bodyscan / Metaaldetector:</strong> Deze zijn veilig voor uw gehoorapparaat. 
              Ze gebruiken een zeer lage energie die de instellingen van uw digitale apparaat niet zal wissen of veranderen.
            </li>
            <li>
              <strong>Röntgenapparatuur (voor bagage):</strong> Hoewel de meeste apparaten hier tegen kunnen, 
              adviseren fabrikanten soms om reserve-apparaten of batterijen niet door de zware röntgenscanners te sturen. 
              U kunt vragen om een handmatige inspectie van uw reserve-spullen.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Tips voor een vlotte controle</h2>
          <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-500 my-8">
            <ul className="list-none space-y-3 m-0 p-0">
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">1.</span>
                <span>Draag uw apparaat zoals gewoonlijk zodat u instructies goed hoort.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">2.</span>
                <span>Neem een internationaal medisch paspoort mee waarin uw gehoorbeperking staat vermeld.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">3.</span>
                <span>Houd reservebatterijen in uw handbagage, maar neem ze uit de verpakking als u ze apart wilt laten controleren.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-600 font-bold">4.</span>
                <span>Gebruikt u assistentie op het vliegveld? De begeleider kan de beveiliger ook inlichten.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Hulp nodig bij uw reis?</h2>
          <p>
            Vindt u de drukte op het vliegveld en de security controle spannend? 
            De reisbegeleiders van Vliegklaar zijn gespecialiseerd in het ondersteunen van senioren. 
            Wij helpen u niet alleen bij de security, maar begeleiden u van deur tot deur.
          </p>
          <p>
            Bekijk onze diensten voor <Link href="/reisbegeleiding-ouderen" className="text-primary-600 hover:underline">persoonlijke reisbegeleiding</Link> of 
            lees meer over <Link href="/blog/hoe-ga-je-om-met-een-gehoorapparaat-op-het-vliegveld" className="text-primary-600 hover:underline">vliegen met een gehoorapparaat</Link>.
          </p>
        </div>
      </article>

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde Vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos op reis met Vliegklaar</h2>
          <p className="text-xl mb-8 opacity-90">
            Onze begeleiders zorgen dat u ontspannen door elke controle komt. 
            Beschikbaar in heel Nederland, inclusief Amsterdam, Rotterdam en Utrecht.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary-900 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors inline-block"
          >
            Vrijblijvend advies aanvragen
          </Link>
        </div>
      </section>
    </main>
  );
}
