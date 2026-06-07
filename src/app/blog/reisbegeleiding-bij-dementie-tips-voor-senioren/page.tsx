import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reisbegeleiding bij dementie: Tips voor een veilige vliegreis | Vliegklaar',
  description: 'Vliegen met dementie vraagt om extra voorbereiding en zorg. Ontdek onze praktische tips en hoe persoonlijke reisbegeleiding kan helpen bij een rustige reis.',
};

const ReisbegeleidingDementiePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-primary-900">Reisbegeleiding bij dementie: Tips voor een veilige en rustige vliegreis</h1>
      
      <p className="text-lg mb-8 leading-relaxed text-gray-700">
        Reizen is een verrijking, ook voor mensen met dementie. Echter, de hectiek van een luchthaven en de onbekende omgeving van een vliegtuig kunnen leiden tot onrust of desoriëntatie. Met de juiste voorbereiding en persoonlijke begeleiding is het vaak nog heel goed mogelijk om samen herinneringen te maken. In dit artikel delen we essentiële tips voor vliegen met dementie.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">1. Behoud van structuur en rust</h2>
        <p className="mb-4 text-gray-600">
          Voor iemand met dementie is voorspelbaarheid cruciaal. Probeer het reisschema zo eenvoudig mogelijk te houden. Kies voor directe vluchten om vermoeiende overstappen te vermijden. Vertrek bij voorkeur op een tijdstip dat aansluit bij het natuurlijke ritme van de reiziger, bijvoorbeeld in de ochtend als de energie en helderheid vaak het hoogst zijn.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">2. Voorbereiding op de luchthaven</h2>
        <p className="mb-4 text-gray-600">
          De drukte op Schiphol kan overweldigend zijn. Vraag altijd vliegveldassistentie aan. Dit zorgt ervoor dat u sneller door controles kunt en gebruik kunt maken van vervoer over de luchthaven. Meld bij de aanvraag specifiek dat er sprake is van een cognitieve beperking, zodat het personeel hier rekening mee kan houden.
        </p>
        <p className="bg-primary-50 p-4 border-l-4 border-primary-500 italic text-gray-700">
          Tip: Gebruik een herkenbaar item, zoals de &apos;Hidden Disabilities Sunflower&apos; keycord, om discreet aan te geven dat iemand extra geduld of hulp nodig heeft.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">3. Tijdens de vlucht</h2>
        <p className="mb-4 text-gray-600">
          In het vliegtuig is nabijheid de belangrijkste factor. Zorg dat de begeleider direct naast de persoon met dementie zit. Neem vertrouwde spullen mee in de handbagage, zoals een favoriet fotoboek, muziek of een bekend kussen. Dit biedt houvast en comfort in een vreemde omgeving.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">4. Waarom een gespecialiseerde reisbegeleider?</h2>
        <p className="mb-4 text-gray-600">
          Als naaste kan het begeleiden van een reis met dementie emotioneel en fysiek zwaar zijn. Een professionele reisbegeleider van Vliegklaar neemt de logistieke zorgen uit handen. Onze begeleiders hebben ervaring met dementie en weten hoe ze rust moeten bewaren bij onverwachte situaties. Hierdoor kunt u als partner of kind ook zelf van de reis genieten.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary-800">Veelgestelde vragen</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-primary-700 mb-2 text-lg">Mag je altijd vliegen met dementie?</h3>
            <p className="text-gray-600">In de vroege en middenstadia is vliegen meestal geen probleem. In een vergevorderd stadium kan de vliegdruk of de verandering van omgeving te belastend zijn. Overleg altijd met de behandelend arts voor een &apos;Fit to Fly&apos; verklaring.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-primary-700 mb-2 text-lg">Hoe voorkom ik dwalen op het vliegveld?</h3>
            <p className="text-gray-600">Zorg dat de reiziger altijd een identificatie bij zich heeft met contactgegevens van de begeleider. Persoonlijke begeleiding van deur tot deur is de veiligste manier om dwalen te voorkomen.</p>
          </div>
        </div>
      </section>

      <div className="bg-primary-900 p-8 rounded-2xl text-white shadow-xl mt-12">
        <h3 className="text-2xl font-bold mb-4">Zorgeloos op reis met Vliegklaar</h3>
        <p className="text-primary-100 mb-6 leading-relaxed text-lg">
          Wij begrijpen de unieke uitdagingen van reizen met dementie. Onze begeleiders bieden de structuur en veiligheid die nodig is voor een geslaagde vakantie of familiebezoek.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="bg-white text-primary-900 px-8 py-3 rounded-xl font-bold hover:bg-primary-50 transition-colors text-center">
            Vrijblijvend advies aanvragen
          </Link>
          <Link href="/diensten" className="bg-primary-700 text-white border border-primary-600 px-8 py-3 rounded-xl font-bold hover:bg-primary-800 transition-colors text-center">
            Bekijk onze werkwijze
          </Link>
        </div>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Reisbegeleiding bij dementie: Tips voor een veilige vliegreis",
            "description": "Vliegen met dementie vraagt om extra voorbereiding en zorg. Ontdek onze praktische tips en hoe persoonlijke reisbegeleiding kan helpen bij een rustige reis.",
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://vliegklaar.nl/blog/reisbegeleiding-bij-dementie-tips-voor-senioren"
            }
          }),
        }}
      />
    </div>
  );
};

export default ReisbegeleidingDementiePage;
