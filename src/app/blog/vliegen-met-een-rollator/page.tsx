import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een rollator: Tips voor senioren | Vliegklaar',
  description: 'Alles wat u moet weten over vliegen met een rollator. Regels op het vliegveld, tips voor de security en hoe u assistentie aanvraagt.',
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
          "text": "Ja, bij vrijwel alle luchtvaartmaatschappijen mag een rollator als medische bagage gratis worden meegenomen bovenop uw standaard bagagevrijstelling."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik mijn rollator gebruiken tot aan de gate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw rollator meestal gebruiken tot aan de deur van het vliegtuig (de gate of de vliegtuigslurf). Daar wordt hij door het personeel ingenomen en in het vrachtruim geplaatst."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik mijn rollator van tevoren aanmelden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is zeer aanbevolen om uw rollator minimaal 48 uur voor vertrek aan te melden bij de luchtvaartmaatschappij, zodat zij op de hoogte zijn van uw mobiliteitsbehoefte."
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
        <h1 className="text-4xl font-bold text-primary-900 mb-6">
          Vliegen met een rollator: Een complete gids voor senioren
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          Voor veel senioren is een rollator een essentieel hulpmiddel om mobiel en onafhankelijk te blijven. 
          Gelukkig is vliegen met een rollator tegenwoordig heel goed geregeld op vliegvelden zoals Schiphol. 
          In dit artikel leggen we precies uit waar u op moet letten.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Regels en Kosten</h2>
          <p className="text-gray-600 mb-4">
            Het belangrijkste om te weten is dat een rollator wordt gezien als een medisch hulpmiddel. 
            Dit betekent dat u deze bij bijna elke maatschappij (zoals KLM, Transavia of EasyJet) <strong>gratis</strong> mag meenemen. 
            Dit gaat niet ten koste van uw normale kilo&apos;s handbagage of ruimbagage.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Op de luchthaven</h2>
          <p className="text-gray-600 mb-4">
            U hoeft uw rollator niet direct bij de incheckbalie af te geven. U kunt deze gewoon gebruiken om naar de gate te lopen. 
            Bij de security check moet de rollator door de scan. Als u niet goed kunt staan zonder rollator, 
            kunt u dit aangeven bij de medewerkers; zij zullen u dan assisteren.
          </p>
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
            <h3 className="font-bold text-primary-900 mb-2">Tip van Packlight:</h3>
            <p className="text-primary-800">
              Bevestig een label met uw naam en contactgegevens aan uw rollator. Omdat rollators vaak op elkaar lijken, 
              voorkomt u hiermee dat iemand anders er per ongeluk mee vandoor gaat na de landing.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Assistentie aanvragen</h2>
          <p className="text-gray-600 mb-4">
            Hoewel u uw eigen rollator heeft, kan het vliegveld erg groot zijn. Het is vaak verstandig om ook 
            <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 hover:underline"> vliegveld assistentie aan te vragen</Link>. 
            Zij kunnen u met een elektrisch wagentje naar de gate brengen als de afstanden te groot worden.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Hulp nodig bij uw reis?</h2>
          <p className="text-center text-gray-700 mb-8">
            Vliegklaar biedt persoonlijke reisbegeleiding voor senioren. Wij helpen u van deur tot deur, 
            ook met de logistiek van uw rollator.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors">
              Neem contact op voor de mogelijkheden
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
