import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een taalbarrière als senior op reis? | Vliegklaar',
  description: 'Tips voor senioren om taalbarrières te overwinnen tijdens het reizen. Van vertaal-apps tot persoonlijke reisbegeleiding.',
};

export default function TaalbarriereBlogPage() {
  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een taalbarrière als senior op reis?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            De wereld ontdekken is prachtig, maar niet overal spreekt men Nederlands of Engels. 
            Voor veel senioren is de taalbarrière een drempel om verre reizen te maken. 
            In dit artikel geven we praktische tips om u verstaanbaar te maken en met een gerust hart op pad te gaan.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1499591934245-40b55745b905?w=1200&q=80"
            alt="Senioren in gesprek in het buitenland"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-bold text-primary-800">1. Bereid u voor met een vertaal-app</h2>
          <p>
            Tegenwoordig is uw smartphone een krachtige tolk. Apps zoals Google Translate kunnen niet alleen tekst vertalen, 
            maar ook gesproken taal direct omzetten. U kunt zelfs uw camera op een menukaart of verkeersbord richten 
            om de tekst direct in het Nederlands te zien.
          </p>
          <p className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-500 italic">
            <strong>Tip:</strong> Download de taal van uw bestemming vooraf in de app. Zo werkt de vertaling ook als u even geen internetverbinding heeft.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Gebruik een aanwijsgids of vertaalboekje</h2>
          <p>
            Soms zijn de simpelste oplossingen het beste. Een klein boekje met plaatjes van veelvoorkomende zaken 
            (zoals een toilet, een glas water, of een treinstation) kan wonderen doen. Door simpelweg naar een afbeelding te wijzen, 
            begrijpt de lokale bevolking direct wat u nodig heeft.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Leer een paar basiswoorden</h2>
          <p>
            Mensen in het buitenland waarderen het enorm als u probeert hun taal te spreken, ook al is het maar een beetje. 
            Woorden als &quot;hallo&quot;, &quot;dank u wel&quot; en &quot;alstublieft&quot; openen vaak deuren en zorgen voor een glimlach.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Handen en voeten werk</h2>
          <p>
            Onderschat nooit de kracht van non-verbale communicatie. Glimlachen, knikken en het gebruik van gebaren 
            zijn universele talen. Blijf rustig en geduldig; meestal komt u er samen wel uit.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">5. Persoonlijke reisbegeleiding</h2>
          <p>
            Wilt u echt alle zorgen rondom communicatie uit handen geven? Dan is persoonlijke reisbegeleiding de ideale oplossing. 
            Een begeleider van Vliegklaar spreekt vaak meerdere talen en fungeert als uw persoonlijke tolk en aanspreekpunt 
            gedurende de hele reis.
          </p>
          <p>
            Of het nu gaat om het inchecken in het hotel, het bestellen in een restaurant of het regelen van vervoer; 
            uw begeleider zorgt dat alles soepel verloopt. Dit geeft een enorm gevoel van veiligheid en vrijheid.
          </p>

          <div className="bg-gray-100 p-8 rounded-2xl my-12 text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Zorgeloos op reis zonder taalbarrière?</h3>
            <p className="mb-6">
              Onze begeleiders ondersteunen u bij elke stap, zodat taal nooit een hindernis is.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Vraag naar de mogelijkheden
            </Link>
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-primary-800 mb-4">Gerelateerde artikelen</h3>
          <div className="grid md:grid-cols-2 gap-4 text-primary-600">
            <Link href="/blog/veilig-alleen-reizen-senior" className="hover:underline">
              → Veilig alleen reizen als senior
            </Link>
            <Link href="/blog/hoe-boek-je-begeleide-reis-senioren" className="hover:underline">
              → Hoe boek je een begeleide reis?
            </Link>
            <Link href="/blog/checklist-senioren-vliegen" className="hover:underline">
              → Checklist voor senioren die gaan vliegen
            </Link>
            <Link href="/blog/betrouwbare-reisbegeleider-vinden" className="hover:underline">
              → Hoe vind je een betrouwbare reisbegeleider?
            </Link>
          </div>
        </footer>
      </article>
    </main>
  );
}
