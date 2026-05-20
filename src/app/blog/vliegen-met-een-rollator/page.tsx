import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: Regels & Tips | Vliegklaar',
  description: 'Wilt u vliegen met een rollator? Lees alles over de regels per luchtvaartmaatschappij, het meenemen van uw rollator tot aan de gate en praktische tips.',
};

export default function VliegenMetRollatorPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een rollator gratis mee in het vliegtuig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bij de meeste luchtvaartmaatschappijen mag u gratis twee mobiliteitshulpmiddelen meenemen, zoals een rollator en een rolstoel. Dit staat los van uw reguliere bagagevrijdom."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik de rollator meenemen tot aan de gate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, meestal kunt u uw rollator gebruiken tot aan de deur van het vliegtuig. Daar wordt deze ingenomen en in het bagageruim geplaatst. Bij aankomst staat de rollator vaak weer bij de vliegtuigtrap of gate voor u klaar."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn rollator van tevoren aanmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is sterk aan te raden om uw rollator uiterlijk 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij. Zo kan het grondpersoneel rekening houden met uw assistentiebehoefte."
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
          Vliegen met een rollator: Alles wat u moet weten
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Een rollator biedt vrijheid en stabiliteit, ook op reis. Maar hoe werkt dat eigenlijk op het vliegveld? 
            Mag de rollator mee in de cabine, of moet deze het bagageruim in? In dit artikel leggen we precies uit 
            hoe u zorgeloos kunt vliegen met uw rollator.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Rollator mee als medische bagage</h2>
          <p>
            Het goede nieuws is dat bijna alle luchtvaartmaatschappijen (zoals KLM, Transavia en EasyJet) toestaan 
            dat u uw rollator <strong>gratis</strong> meeneemt. Dit wordt gezien als een noodzakelijk medisch hulpmiddel 
            en telt niet mee voor uw standaard bagagegewicht.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Van de check-in naar de gate</h2>
          <p>
            U hoeft uw rollator niet direct bij de incheckbalie af te geven. U kunt de rollator blijven gebruiken 
            om comfortabel door de vertrekhal en langs de douane te wandelen. Pas bij het instappen (de gate) 
            geeft u de rollator af aan het personeel.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li><strong>Labelen:</strong> Zorg dat er bij de incheckbalie een bagagelabel aan uw rollator wordt bevestigd.</li>
            <li><strong>Inklappen:</strong> Maak uw rollator zo compact mogelijk voordat u hem bij de vliegtuigtrap achterlaat.</li>
            <li><strong>Losse onderdelen:</strong> Haal mandjes of losse tassen van de rollator en neem deze mee als handbagage.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Aankomst op uw bestemming</h2>
          <p>
            Bij aankomst wordt uw rollator meestal weer klaargezet bij de deur van het vliegtuig of onderaan de trap. 
            Soms komt het voor dat de rollator via de bagageband voor &apos;afwijkende bagage&apos; (odd-size baggage) wordt 
            geleverd. Vraag dit bij het uitstappen altijd even na aan de stewardess.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Hulp nodig op de luchthaven?</h2>
          <p>
            Vindt u de afstanden op Schiphol of een buitenlandse luchthaven toch te groot, zelfs met een rollator? 
            U kunt altijd gratis luchthavenassistentie aanvragen. Een medewerker begeleidt u dan (eventueel in een 
            rolstoel) naar de juiste gate.
          </p>
          <p>
            Wilt u nog meer ondersteuning tijdens uw gehele reis? Bij Vliegklaar bieden we 
            <Link href="/blog/wat-kost-reisbegeleiding-voor-ouderen" className="text-primary-600 underline"> persoonlijke reisbegeleiding</Link> 
            voor senioren die graag met een vertrouwd gezicht op pad gaan.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">Tips voor een zorgeloze vlucht</h3>
            <p className="mb-4">
              1. Meld uw rollator minimaal 48 uur voor vertrek aan bij de vliegmaatschappij.<br />
              2. Bevestig een label met uw naam en telefoonnummer aan het frame.<br />
              3. Gebruik een transporttas als u een kwetsbare of dure rollator heeft.
            </p>
            <Link href="/contact" className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors">
              Stel een vraag over reizen met hulpmiddelen
            </Link>
          </div>
        </div>

        <section className="mt-16 border-t pt-12">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
