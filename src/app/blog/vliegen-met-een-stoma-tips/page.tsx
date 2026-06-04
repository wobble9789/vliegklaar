import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een stoma: praktische tips voor senioren | Vliegklaar',
  description: 'Reizen met een stoma hoeft geen belemmering te zijn. Lees onze praktische tips over voorbereiding, security en comfort aan boord.',
};

export default function StomaVliegenTipsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag ik stomamateriaal meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, het is zelfs aan te raden om de helft van uw materiaal in uw handbagage mee te nemen voor het geval uw koffer vertraging oploopt. Schaar- of snijmateriaal moet wel in de ruimbagage."
        }
      },
      {
        "@type": "Question",
        "name": "Kan het stomazakje opblazen door de luchtdruk?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door de drukverschillen kan er wat extra lucht in het zakje komen. Moderne zakjes hebben filters die dit grotendeels reguleren. Het is verstandig om het zakje voor het opstijgen te legen."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zeg ik bij de security controle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "U kunt een internationaal stoma-paspoort laten zien. Dit legt discreet uit wat een stoma is, zodat u niet onnodig gefouilleerd wordt op een ongemakkelijke manier."
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
      <section className="bg-primary-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary-900 mb-6">
            Vliegen met een stoma: 5 praktische tips
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Veel senioren zien op tegen vliegen met een stoma, maar met de juiste voorbereiding is het prima te doen. Wij hebben de belangrijkste tips verzameld voor een zorgeloze vlucht.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 prose prose-primary">
          <h2>1. De regel van twee</h2>
          <p>
            Neem twee keer zoveel materiaal mee als u normaal gesproken nodig heeft. Verdeel dit over uw handbagage en uw ruimbagage. Mocht een koffer kwijtraken, dan heeft u altijd voldoende voorraad bij de hand.
          </p>

          <h2>2. Discreet door de security</h2>
          <p>
            Vraag bij uw stomavereniging of leverancier om een reis-certificaat (stoma-paspoort) in meerdere talen. Dit helpt u om bij de beveiligingscontrole discreet aan te geven dat u medisch materiaal draagt.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8">
            <h3 className="text-primary-800 mt-0">Snelle Paklijst Handbagage:</h3>
            <ul>
              <li>Extra zakjes en huidplaten (alvast op maat geknipt)</li>
              <li>Reinigingsdoekjes (zonder alcohol)</li>
              <li>Discreet afvalzakje</li>
              <li>Reserve kleding (voor het geval dat)</li>
            </ul>
          </div>

          <h2>3. Luchtdruk en voeding</h2>
          <p>
            Vliegtuigcabines staan onder druk, wat kan leiden tot gasvorming. Vermijd vlak voor en tijdens de vlucht koolzuurhoudende dranken en gasvormende voeding (zoals uien of bonen). Drink voldoende water om gehydrateerd te blijven.
          </p>

          <h2>4. Kledingkeuze</h2>
          <p>
            Draag comfortabele, loszittende kleding. Een strakke broekriem kan precies op de stoma drukken, wat oncomfortabel is tijdens een lange zit.
          </p>

          <h2>5. Stoelkeuze</h2>
          <p>
            Reserveer indien mogelijk een stoel aan het gangpad, dichtbij het toilet. Dit geeft u de rust en ruimte om op elk moment even naar het toilet te gaan zonder dat u andere passagiers hoeft te storen.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary-800 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-primary-700">{faq.name}</h3>
                <p className="text-gray-600 mt-2">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Hulp nodig bij uw vliegreis?</h2>
          <p className="text-xl mb-8">Onze reisbegeleiders zijn getraind om senioren met medische behoeften discreet en professioneel te ondersteunen.</p>
          <Link href="/contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-transform hover:scale-105">
            Plan een kennismaking
          </Link>
        </div>
      </section>
    </main>
  );
}