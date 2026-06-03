import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reisbegeleiding bij vliegangst: Tips voor senioren | Vliegklaar',
  description: 'Heeft u last van vliegangst? Ontdek hoe persoonlijke reisbegeleiding senioren helpt om weer ontspannen en veilig te vliegen. Lees onze praktische tips.',
};

export default function VliegangstSeniorenPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reisbegeleiding bij vliegangst: Hoe senioren weer zorgeloos de lucht in gaan",
    "description": "Praktische tips en de voordelen van persoonlijke begeleiding voor senioren met vliegangst.",
    "author": {
      "@type": "Organization",
      "name": "Vliegklaar"
    },
    "datePublished": "2026-06-03",
    "image": "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?w=800&q=80"
  };

  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Reisbegeleiding bij vliegangst: Tips voor senioren
          </h1>
          <p className="text-xl text-gray-600 italic">
            Ziet u op tegen een vlucht vanwege angst of onzekerheid? U bent niet de enige. Ontdek hoe een reisbegeleider het verschil maakt.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?w=800&q=80"
            alt="Ontspannen senior in een vliegtuig"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <p>
            Vliegangst kent geen leeftijd. Sterker nog, bij veel senioren neemt de onzekerheid over vliegen toe naarmate de jaren vorderen. De drukte op vliegvelden, de snelle procedures bij de security en de angst om de controle te verliezen kunnen een grote drempel vormen om nog op reis te gaan.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Waarom vliegangst toeneemt bij ouderen</h2>
          <p>
            Het is een misverstand dat vliegangst altijd gaat over de angst dat een vliegtuig neerstort. Voor senioren zit de spanning vaak in andere zaken:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Overprikkeling:</strong> De chaos en herrie op een luchthaven als Schiphol.</li>
            <li><strong>Fysieke ongemakken:</strong> Angst om onwel te worden in de lucht zonder directe medische hulp.</li>
            <li><strong>Controleverlies:</strong> Niet precies weten wat er gaat gebeuren tijdens de vlucht.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">De kracht van persoonlijke reisbegeleiding</h2>
          <p>
            Een persoonlijke reisbegeleider van Vliegklaar fungeert als uw rots in de branding. Door een deskundig persoon aan uw zijde te hebben, wordt de angst direct gehalveerd. Onze begeleiders bieden:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Rustige uitleg:</strong> We leggen uit welke geluiden u hoort en wat de procedures zijn.</li>
            <li><strong>Fysieke aanwezigheid:</strong> Iemand die uw hand vastgehouden als dat nodig is tijdens het opstijgen.</li>
            <li><strong>Focus op afleiding:</strong> Een goed gesprek of hulp bij een ontspanningsoefening zorgt dat de tijd sneller gaat.</li>
          </ul>

          <div className="bg-primary-50 p-8 rounded-2xl my-12 border border-primary-100">
            <h3 className="text-xl font-bold text-primary-900 mb-4">3 Tips tegen vliegangst voor uw volgende reis:</h3>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Kom op tijd:</strong> Haast zorgt voor extra adrenaline, wat angstgevoelens versterkt. Neem de tijd op de luchthaven.
              </li>
              <li>
                <strong>Drink voldoende water:</strong> Vermijd cafeïne en alcohol; deze stoffen kunnen hartkloppingen en angst verergeren.
              </li>
              <li>
                <strong>Maak uw angst bespreekbaar:</strong> Vertel het cabinepersoneel (of uw begeleider) dat u angstig bent. Zij zijn getraind om u gerust te stellen.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-10 mb-4">Weer genieten van de bestemming</h2>
          <p>
            Het doel van onze begeleiding is dat de reis geen obstakel meer is, maar een onderdeel van de vakantie waar u naar uitkijkt. Of u nu naar uw kleinkinderen in het buitenland wilt of nog één keer die droomreis wilt maken: vliegangst hoeft u niet tegen te houden.
          </p>
          
          <p className="mt-8">
            Wilt u meer weten over hoe wij senioren met vliegangst ondersteunen? 
            Bekijk ook onze pagina over <Link href="/blog/vliegangst-bij-ouderen" className="text-primary-600 underline">vliegangst bij ouderen</Link> of ontdek hoe u <Link href="/blog/hoe-vraag-je-vliegveld-assistentie-aan" className="text-primary-600 underline">vliegveld assistentie kunt aanvragen</Link>.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-primary-900 mb-6">Zorgeloos vliegen met persoonlijke begeleiding?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Neem vrijblijvend contact met ons op voor een kennismaking. Wij helpen u graag weer de lucht in.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-transform hover:scale-105"
          >
            Vraag informatie aan
          </Link>
        </footer>
      </article>
    </main>
  );
}
