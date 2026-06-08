import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met artritis: Tips voor een comfortabele vliegreis | Vliegklaar',
  description: 'Reizen met artritis of gewrichtspijn? Ontdek praktische tips voor vliegen met artritis, van vliegveld assistentie tot oefeningen in het vliegtuig.',
};

export default function ArtritisBlogPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag ik mijn artritis medicatie meenemen in de cabine?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, vloeibare medicatie en injecties (zoals biologicals) mogen mee, mits u een medisch paspoort of doktersverklaring kunt tonen bij de security."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe voorkom ik stijve gewrichten tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blijf in beweging. Loop elk uur een rondje door het gangpad en doe eenvoudige rekoefeningen in uw stoel om de bloedsomloop te stimuleren."
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
          Vliegen met artritis: Zo reist u comfortabel en pijnvrij
        </h1>
        
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&q=80"
            alt="Senior geniet van een comfortabele reis"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Reizen met artritis kan een uitdaging zijn, maar met de juiste voorbereiding hoeft uw aandoening u niet tegen te houden om de wereld te ontdekken. Of u nu last heeft van reumatoïde artritis, artrose of een andere vorm van gewrichtsontsteking, comfort is de sleutel tot een geslaagde vliegreis.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">1. Vraag vliegveld assistentie aan</h2>
          <p>
            De lange afstanden op luchthavens zoals Schiphol kunnen zeer belastend zijn voor uw gewrichten. Maak gebruik van de gratis vliegveld assistentie. U wordt dan met een rolstoel of elektrisch wagentje naar de gate gebracht, wat u kostbare energie bespaart voor uw bestemming.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">2. Kies de juiste stoel</h2>
          <p>
            Reserveer indien mogelijk een stoel met extra beenruimte of een stoel aan het gangpad. Dit maakt het makkelijker om op te staan en uw benen te strekken zonder andere passagiers te storen. Een goede zithouding verkleint de kans op stijfheid.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">3. Medicatie en koeling</h2>
          <p>
            Gebruikt u biologicals die gekoeld moeten blijven? Investeer in een goede koeltas voor medicijnen. Zorg ook voor een actueel medicatieoverzicht (AMO) van uw apotheek. Zo voorkomt u problemen bij de security en douane.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">4. Blijf warm</h2>
          <p>
            Kou kan gewrichtspijn verergeren. De airconditioning in een vliegtuig staat vaak koud afgesteld. Draag laagjes kleding en neem eventueel een lichte sjaal of dekentje mee om uw gewrichten warm te houden tijdens de vlucht.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">5. Hulp bij bagage</h2>
          <p>
            Het tillen van zware koffers is een zware belasting voor handen, schouders en rug. Gebruik koffers met vier wielen die soepel rollen. Nog beter: reis met een begeleider van Vliegklaar die al het zware tilwerk van u overneemt.
          </p>
        </div>

        <div className="mt-12 p-8 bg-primary-50 rounded-2xl border border-primary-100">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Hulp nodig bij uw reis?</h3>
          <p className="text-lg text-gray-700 mb-6">
            Ziet u op tegen de reis vanwege uw artritis? De begeleiders van Vliegklaar ondersteunen u van deur tot deur, zodat u zich volledig kunt focussen op het plezier van het reizen.
          </p>
          <Link href="/contact" className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-colors">
            Ontdek onze reisbegeleiding
          </Link>
        </div>
      </article>
    </main>
  );
}
