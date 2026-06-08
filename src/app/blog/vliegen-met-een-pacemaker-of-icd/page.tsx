import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met een pacemaker of ICD: Tips voor senioren | Vliegklaar',
  description: 'Lees alles over vliegen met een pacemaker of ICD. Praktische tips voor de security check op de luchthaven en veilig reizen voor senioren.',
};

export default function PacemakerVliegenPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag je vliegen met een pacemaker of ICD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vliegen met een pacemaker of ICD is veilig. De moderne apparaten zijn goed beschermd tegen de drukverschillen en elektronica in een vliegtuig. Het is wel belangrijk om altijd uw identificatiepasje bij u te hebben."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik de pacemaker melden bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u moet de pacemaker of ICD altijd melden bij de beveiligingsbeambte voordat u door de scanner gaat. Toon uw pacemaker-identificatiepasje; u wordt dan meestal handmatig gecontroleerd of via een alternatieve route geleid."
        }
      },
      {
        "@type": "Question",
        "name": "Heeft de bodyscan op Schiphol invloed op mijn pacemaker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De meeste moderne bodyscanners (millimetergolf-scanners) op Schiphol zijn veilig, maar het protocol is vaak om reizigers met een pacemaker handmatig te fouilleren om elk risico uit te sluiten. Volg altijd de instructies van het beveiligingspersoneel."
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
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Veilig vliegen met een pacemaker of ICD: Een gids voor senioren
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Reizen met een pacemaker of ICD roept vaak vragen op, vooral rondom de veiligheidscontroles op de luchthaven. 
            In dit artikel leggen we uit hoe u zorgeloos en veilig op reis gaat.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=1200&q=80"
            alt="Senior reiziger op het vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800">Voorbereiding op uw reis</h2>
          <p>
            Vliegen met een pacemaker of ICD (Implanteerbare Cardioverter Defibrillator) is tegenwoordig heel gewoon. 
            Moderne hartapparaten zijn ontworpen om probleemloos te functioneren in de cabine van een vliegtuig. 
            Toch is een goede voorbereiding essentieel voor uw gemoedsrust.
          </p>
          
          <h3 className="text-xl font-semibold text-primary-700">Het pacemaker-identificatiepasje</h3>
          <p>
            Dit is uw belangrijkste reisdocument na uw paspoort. Draag dit pasje altijd bij u, bij voorkeur in uw handbagage of portemonnee. 
            Hierop staan de gegevens van uw apparaat en de contactgegevens van uw cardioloog of het ziekenhuis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">De security check op de luchthaven</h2>
          <p>
            De grootste zorg voor veel dragers van een pacemaker is de metaaldetector of bodyscan bij de security. 
            Hoewel de kans op storing minimaal is, is er een vast protocol voor reizigers met medische implantaten.
          </p>
          <ul>
            <li><strong>Meld het direct:</strong> Vertel de beveiligingsbeambte dat u een pacemaker of ICD heeft voordat u door de poortjes loopt.</li>
            <li><strong>Toon uw pasje:</strong> De beambte zal uw identificatiepasje willen zien.</li>
            <li><strong>Handmatige controle:</strong> In veel gevallen mag u de metaaldetectorpoortjes overslaan. U wordt dan handmatig gecontroleerd (gevisiteerd).</li>
            <li><strong>De handscanner:</strong> Als er een handscanner wordt gebruikt, vraag dan of ze deze niet te lang direct boven uw pacemaker houden. Een snelle beweging over de borstkas is meestal geen probleem.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800">Tijdens de vlucht</h2>
          <p>
            In het vliegtuig zelf hoeft u zich geen zorgen te maken. De elektronica in de cabine en de luchtdruk hebben geen invloed op de werking van uw pacemaker. 
            Wel raden we senioren met hartklachten aan om:
          </p>
          <ul>
            <li>Voldoende water te drinken om hydratatie op peil te houden.</li>
            <li>Regelmatig even de benen te strekken of eenvoudige oefeningen te doen in de stoel om de doorbloeding te stimuleren.</li>
            <li>Medicatie volgens schema te blijven gebruiken (houd rekening met eventuele tijdzones).</li>
          </ul>

          <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-8 rounded-r-xl">
            <h4 className="text-lg font-bold text-primary-900 mb-2">Hulp nodig bij uw reis?</h4>
            <p className="text-primary-800">
              Vindt u de security check of de logistiek op een grote luchthaven zoals Schiphol spannend? 
              De begeleiders van Vliegklaar zijn ervaren in het ondersteunen van senioren met pacemakers en ICD&apos;s. 
              Wij wijzen u de weg en zorgen voor een ontspannen ervaring.
            </p>
            <Link href="/contact" className="inline-block mt-4 font-bold text-primary-700 hover:underline">
              Bekijk hoe wij u kunnen helpen &rarr;
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-primary-800">Wanneer contact opnemen met uw arts?</h2>
          <p>
            Overleg altijd met uw cardioloog voordat u een verre reis boekt, zeker als de pacemaker recent is geplaatst. 
            Vraag ook naar de adressen van ziekenhuizen op uw bestemming die gespecialiseerd zijn in pacemaker-controles, mocht dat nodig zijn.
          </p>
        </div>

        <section className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 bg-primary-900 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Zorgeloos vliegen met persoonlijke begeleiding</h2>
          <p className="mb-8 text-primary-100">
            Wilt u meer weten over hoe wij u kunnen ondersteunen tijdens uw volgende vliegreis? 
            Onze begeleiders staan voor u klaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0618769492" className="bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Bel direct: 06-18769492
            </a>
            <Link href="/luchthaven-begeleiding" className="bg-white text-primary-900 font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Onze diensten
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
