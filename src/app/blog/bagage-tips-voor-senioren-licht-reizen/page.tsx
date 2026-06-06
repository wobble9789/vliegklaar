import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bagage tips voor senioren: Licht en zorgeloos reizen | Vliegklaar',
  description: 'Wilt u lichter reizen als senior? Ontdek onze praktische bagage tips voor senioren om stress en zware koffers te vermijden tijdens uw vliegreis.',
};

export default function BagageTipsSenioren() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wat is het ideale gewicht voor handbagage voor senioren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hoewel luchtvaartmaatschappijen vaak tot 10kg toestaan, adviseren wij senioren om handbagage onder de 5-6kg te houden. Dit maakt het makkelijker om de tas in de overhead bin te plaatsen of mee te dragen op de luchthaven."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn koffers op vier wielen beter dan op twee wielen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, voor senioren zijn 'spinners' (koffers met vier zwenkwielen) ideaal. Deze koffers hoeft u niet te kantelen en kunt u rechtop naast u laten rollen, wat de belasting op uw rug en schouders aanzienlijk vermindert."
        }
      },
      {
        "@type": "Question",
        "name": "Hoe neem ik vloeibare medicatie mee in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medisch noodzakelijke vloeistoffen (zoals insuline of vloeibare medicijnen) mogen de 100ml limiet overschrijden. Zorg wel voor een Europees Medisch Paspoort of een doktersverklaring en meld het bij de security check."
        }
      },
      {
        "@type": "Question",
        "name": "Bieden jullie hulp bij het tillen van bagage op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zeker. Onze reisbegeleiders nemen het tillen en dragen van uw koffers volledig uit handen, van uw voordeur tot aan de gate (en weer terug bij aankomst)."
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
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
                Bagage tips voor senioren: Zo reist u licht en comfortabel
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Een zware koffer kan een bron van stress zijn tijdens het reizen. Met deze praktische tips leert u hoe u slim inpakt, zodat u zich kunt focussen op het plezier van de reis in plaats van het gewicht van uw bagage.
              </p>
            </div>
            <div className="flex-1 relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500835595353-b0ad2e58b8df?w=800&q=80"
                alt="Senior reiziger met lichte bagage op vliegveld"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-primary">
          <p>
            Voor veel senioren is de fysieke inspanning van het reizen met bagage een reden om minder vaak te vliegen. Te veel meeslepen zorgt voor vermoeidheid en verhoogt het risico op rugklachten of vallen. Gelukkig is &apos;light&apos; reizen een vaardigheid die iedereen kan leren.
          </p>

          <h2>1. Kies voor de juiste koffer</h2>
          <p>
            De basis van licht reizen begint bij de koffer zelf. Kies een moderne, lichtgewicht koffer met vier wielen (een spinner). Deze koffers rollen moeiteloos in alle richtingen, waardoor u nauwelijks kracht hoeft te zetten. Vermijd zware, ouderwetse koffers die van zichzelf al kilo&apos;s wegen.
          </p>

          <h2>2. De regel van drie</h2>
          <p>
            Een handige vuistregel voor kleding: neem van elk essentieel item er drie mee. Eén om te dragen, één in de was, en één als reserve. Door te kiezen voor stoffen die snel drogen en goed te combineren zijn, kunt u met een fractie van uw normale garderobe wekenlang op pad.
          </p>

          <h2>3. Gebruik packing cubes</h2>
          <p>
            Packing cubes zijn kleine tasjes waarmee u uw koffer organiseert. Ze helpen niet alleen om ruimte te besparen door kleding te comprimeren, maar maken het ook veel makkelijker om spullen terug te vinden zonder uw hele koffer overhoop te halen. Dit bespaart veel fysiek gedoe bij het in- en uitpakken.
          </p>

          <h2>4. Medicatie altijd in de handbagage</h2>
          <p>
            Dit is de belangrijkste regel: stop uw medicijnen nooit in uw ruimbagage. Mocht uw koffer vertraagd zijn, dan heeft u uw vitale middelen altijd bij de hand. Neem ook een kopie van uw recepten en een Europees Medisch Paspoort mee.
          </p>

          <h2>5. Minimaliseer toiletartikelen</h2>
          <p>
            Toiletartikelen zijn vaak de grootste boosdoeners als het gaat om gewicht. Gebruik kleine reisverpakkingen of koop basisproducten zoals shampoo en zonnebrandcrème simpelweg op uw bestemming. De meeste hotels bieden deze service bovendien gratis aan.
          </p>

          <h2>6. Draag uw zwaarste items tijdens de vlucht</h2>
          <p>
            Moet u een dikke jas of stevige wandelschoenen mee? Draag deze dan tijdens uw reis in plaats van ze in uw koffer te stoppen. Dit bespaart kostbare ruimte en gewicht in uw bagage.
          </p>

          <h2>7. Overweeg een rugzak als handbagage</h2>
          <p>
            Voor senioren die goed ter been zijn, kan een kleine rugzak prettiger zijn dan een schoudertas. Het gewicht wordt gelijkmatig over uw rug verdeeld, waardoor u uw handen vrij heeft voor uw paspoort of om u vast te houden aan een leuning.
          </p>

          <h2>8. Hulp inschakelen</h2>
          <p>
            Laten we eerlijk zijn: soms is de bagage gewoon te veel. Maak gebruik van de faciliteiten op de luchthaven of overweeg de <Link href="/reisbegeleiding-ouderen">reisbegeleiding van Vliegklaar</Link>. Wij dragen uw tassen, helpen bij het inchecken en zorgen dat u zonder sjouwen op uw bestemming aankomt.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">Veelgestelde vragen over bagage</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hulp nodig bij uw volgende reis?</h2>
          <p className="text-xl mb-10 text-primary-100">
            Onze begeleiders zorgen ervoor dat u zich geen zorgen hoeft te maken over zware koffers of complexe logistiek.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-4 rounded-xl shadow-xl transition-all"
            >
              Vraag hulp aan
            </Link>
            <Link
              href="/luchthaven-begeleiding"
              className="inline-block bg-transparent border-2 border-white text-white font-bold text-xl px-10 py-4 rounded-xl hover:bg-white hover:text-primary-900 transition-all"
            >
              Luchthaven assistentie
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
