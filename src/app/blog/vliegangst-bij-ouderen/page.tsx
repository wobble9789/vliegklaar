import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veilig vliegen met vliegangst bij ouderen | Vliegklaar',
  description: 'Tips en persoonlijke begeleiding voor senioren met vliegangst. Lees hoe u weer ontspannen het vliegtuig in stapt met de juiste voorbereiding.',
};

export default function VliegangstOuderenBlog() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Komt vliegangst vaker voor bij ouderen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vliegangst kan op elke leeftijd ontstaan of verergeren. Bij ouderen speelt vaak een verhoogde behoefte aan controle en fysiek comfort een rol, evenals angst voor medische complicaties tijdens de vlucht."
        }
      },
      {
        "@type": "Question",
        "name": "Kan persoonlijke reisbegeleiding helpen bij vliegangst?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absoluut. Een rustige, ervaren begeleider neemt de logistieke stress weg en biedt een luisterend oor. Dit zorgt voor afleiding en een gevoel van veiligheid, wat de symptomen van vliegangst aanzienlijk vermindert."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn er natuurlijke middelen tegen vliegangst voor senioren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Er zijn diverse milde, natuurlijke supplementen zoals valeriaan of passiebloem die rustgevend werken. Overleg echter altijd eerst met uw huisarts, zeker als u ook andere medicatie gebruikt."
        }
      }
    ]
  };

  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-medium mb-4 inline-block">
            ← Terug naar alle artikelen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
            Vliegangst bij ouderen: Zo reist u weer met een gerust hart
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
            Ziet u er tegenop om het vliegtuig in te stappen? U bent niet de enige. Vliegangst bij senioren komt vaak voor, maar het hoeft uw droomreis niet in de weg te staan.
          </p>
          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mb-12">
            <Image
              src="https://images.unsplash.com/photo-1506013391221-ce841399738d?w=1200&q=80"
              alt="Ontspannen reizen in het vliegtuig"
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg prose-primary max-w-none">
            <p>
              Voor veel senioren is vliegen niet meer zo vanzelfsprekend als vroeger. Waar men vroeger zonder nadenken in het toestel stapte, kunnen er nu zorgen ontstaan over de hoogte, de besloten ruimte of het gebrek aan controle. Vliegangst kan zich op latere leeftijd ontwikkelen, soms zelfs na jarenlang probleemloos reizen.
            </p>

            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Oorzaken van vliegangst op latere leeftijd</h2>
            <p>
              Vliegangst bij ouderen heeft vaak een andere bron dan bij jongere reizigers. Het gaat vaker om een combinatie van factoren:
            </p>
            <ul>
              <li><strong>Fysiek ongemak:</strong> De angst om kramp te krijgen, niet makkelijk naar het toilet te kunnen of last te krijgen van de luchtdruk.</li>
              <li><strong>Verhoogde behoefte aan controle:</strong> Het gevoel dat u de regie over de situatie verliest zodra de deuren sluiten.</li>
              <li><strong>Nieuwsberichten:</strong> Ouderen consumeren vaak meer nieuws, waardoor incidenten in de luchtvaart (hoe zeldzaam ook) groter lijken in de beleving.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">5 Tips voor een ontspannen vlucht</h2>
            <ol>
              <li><strong>Goede voorbereiding:</strong> Weet wat u kunt verwachten op de luchthaven. Gebruik bijvoorbeeld onze <Link href="/luchthaven-begeleiding">luchthavenbegeleiding</Link> om de eerste stress van de security en het boarden te vermijden.</li>
              <li><strong>Kies de juiste zitplaats:</strong> Een stoel bij het gangpad geeft een minder opgesloten gevoel en maakt het makkelijker om even te bewegen.</li>
              <li><strong>Vermijd cafeïne:</strong> Koffie en thee kunnen hartkloppingen en nervositeit versterken. Kies voor water of kruidenthee.</li>
              <li><strong>Focus op de bestemming:</strong> Houd de reden van uw reis in gedachten. Waarom wilde u deze reis maken? De ontmoeting met familie of de prachtige zonbestemming is de korte vlucht waard.</li>
              <li><strong>Praat erover:</strong> Geef bij het cabinepersoneel aan dat u nerveus bent. Zij zijn getraind om u op uw gemak te stellen.</li>
            </ol>

            <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">De kracht van persoonlijke begeleiding</h2>
            <p>
              Soms is informatie en goede moed niet genoeg. In die gevallen kan een persoonlijke reisbegeleider het verschil maken. Bij <Link href="/">Vliegklaar</Link> zien we regelmatig dat de aanwezigheid van een rustig, vertrouwd persoon de vliegangst grotendeels wegneemt. Wij nemen de logistiek uit handen, zodat u zich alleen hoeft te concentreren op uw rust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">Veelgestelde vragen over vliegangst</h2>
          <div className="space-y-6">
            {faqData.mainEntity.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Samen vliegen we de angst voorbij</h2>
          <p className="text-xl mb-10 text-primary-100">
            Wilt u weten hoe onze reisbegeleiders u kunnen helpen bij vliegangst? Neem vrijblijvend contact op voor een gesprek.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:0618769492"
              className="bg-primary-500 hover:bg-primary-600 text-white font-bold text-xl px-10 py-5 rounded-2xl shadow-xl transition-all"
            >
              Bel: 06-18769492
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-primary-900 text-white font-bold text-xl px-10 py-5 rounded-2xl transition-all"
            >
              Bericht sturen
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
    </main>
  );
}
