import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gebitsprothese op het vliegveld? | Vliegklaar',
  description: 'Praktische tips voor senioren die reizen met een gebitsprothese of kunstgebit. Alles over security, onderhoud en comfort op het vliegveld en tijdens de vlucht.',
};

export default function GebitsprothekeVliegveldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn kunstgebit uitdoen bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in bijna alle gevallen kunt u uw kunstgebit gewoon inhouden tijdens de securityscan. De moderne scanners op luchthavens zoals Schiphol zijn niet afgesteld op de kleine hoeveelheden metaal die soms in een prothese zitten."
        }
      },
      {
        "@type": "Question",
        "name": "Kan een gebitsprothese het alarm van de metaaldetector laten afgaan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Het is zeer onwaarschijnlijk dat een prothese het alarm activeert. Mocht dit onverhoopt toch gebeuren, dan kunt u discreet aan de beveiligingsbeambte melden dat u een prothese draagt. U hoeft deze niet te tonen."
        }
      },
      {
        "@type": "Question",
        "name": "Mag ik kleefpasta of reinigingstabletten meenemen in mijn handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, kleefpasta mag mee, maar valt onder de vloeistoffenregels (maximaal 100ml per tube). Reinigingstabletten zijn droog en vallen niet onder deze beperking; deze kunnen onbeperkt mee in de handbagage."
        }
      },
      {
        "@type": "Question",
        "name": "Wat zijn tips voor comfort met een gebit tijdens een lange vlucht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door de droge lucht in de cabine kan uw mond droger worden, wat irritatie onder de prothese kan veroorzaken. Drink voldoende water en overweeg om een kleine hoeveelheid extra kleefpasta mee te nemen voor extra grip tijdens het eten aan boord."
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
          <Link href="/blog" className="text-primary-600 hover:underline mb-4 inline-block">
            &larr; Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een gebitsprothese op het vliegveld?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Reizen met een gebitsprothese of kunstgebit roept bij veel senioren vragen op. Moet het uit bij de security? 
            Hoe zit het met kleefpasta in de handbagage? Wij geven u praktische tips voor een zorgeloze reis.
          </p>
        </header>

        <div className="relative h-[300px] md:h-[500px] w-full mb-12 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
            alt="Senior geniet van vakantie"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl font-bold text-primary-800">1. De Securitycontrole</h2>
          <p>
            Een van de grootste zorgen is of de gebitsprothese uit moet tijdens de controle. Het antwoord is simpel: <strong>nee</strong>. 
            De beveiligingsscanners zijn ontworpen om gevaarlijke voorwerpen te detecteren, niet om medische hulpmiddelen zoals kunstgebitten te controleren. 
            Mocht u een prothese hebben met een metalen frame (zoals een frameprothese), dan is de kans nog steeds minimaal dat de metaaldetector afgaat. 
            Lees meer over de <Link href="/blog/hoe-gaat-een-senior-veilig-door-de-security-op-schiphol" className="text-primary-600 hover:underline">security op Schiphol voor senioren</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">2. Handbagage regels</h2>
          <p>
            Voor het onderhoud van uw gebit heeft u vaak producten nodig die onder de vloeistoffenregels vallen. Denk hierbij aan:
          </p>
          <ul>
            <li><strong>Kleefpasta:</strong> Tubes moeten kleiner zijn dan 100ml en in het doorzichtige hersluitbare zakje.</li>
            <li><strong>Mondwater:</strong> Ook hier geldt de 100ml regel.</li>
            <li><strong>Reinigingstabletten:</strong> Deze mogen onbeperkt mee, aangezien het geen vloeistoffen zijn.</li>
          </ul>
          <p>
            Bent u nog aan het plannen? Bekijk ook onze tips voor het <Link href="/blog/hoe-boek-je-vliegticket-als-senior" className="text-primary-600 hover:underline">boeken van een vliegticket als senior</Link>.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
          <p>
            De lucht in een vliegtuig is erg droog. Dit kan leiden tot een droge mond (xerostomie). Voor dragers van een gebitsprothese 
            kan dit betekenen dat de prothese minder goed blijft zitten of dat er sneller irritaties ontstaan. 
            Drink tijdens de vlucht regelmatig water en vermijd teveel koffie of alcohol, omdat deze dranken uitdrogend werken. 
            Dit helpt ook om <Link href="/blog/hoe-voorkom-je-uitdroging-tijdens-het-vliegen-als-senior" className="text-primary-600 hover:underline">uitdroging tijdens het vliegen te voorkomen</Link>.
          </p>
          <p>
            <strong>Tip:</strong> Neem een tandenborstel en een kleine tube tandpasta mee in uw handbagage om na de maaltijd aan boord uw gebit 
            even op te frissen in het toilet van het vliegtuig.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">4. Hygiëne op de bestemming</h2>
          <p>
            Vergeet niet een stevig bewaardoosje mee te nemen voor als u de prothese &apos;s nachts uitdoet. Gebruik op uw vakantiebestemming 
            bij voorkeur flessenwater (geen kraanwater) om uw prothese te reinigen als de kwaliteit van het lokale drinkwater onduidelijk is.
          </p>

          <h2 className="text-2xl font-bold text-primary-800">5. Begeleiding in uw regio</h2>
          <p>
            Vliegklaar biedt persoonlijke reisbegeleiding in heel Nederland. Woont u in de hoofdstad? Bekijk onze specifieke pagina over 
            <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline"> reisbegeleiding voor ouderen in Amsterdam</Link>. Ook in steden als 
            <Link href="/reisbegeleiding-ouderen-rotterdam" className="text-primary-600 hover:underline"> Rotterdam</Link> en 
            <Link href="/reisbegeleiding-ouderen-utrecht" className="text-primary-600 hover:underline"> Utrecht</Link> staan onze begeleiders voor u klaar.
          </p>
        </div>

        <section className="mt-16 bg-primary-50 p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-primary-900 mb-6 text-center">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="text-lg font-bold text-primary-800 mb-2">{faq.name}</h3>
                <p className="text-gray-700">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-white border-2 border-primary-200 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-primary-900 mb-4">Heeft u hulp nodig bij uw reis?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ziet u op tegen de reis vanwege medische hulpmiddelen of mobiliteit? Vliegklaar biedt persoonlijke begeleiding. 
            Wij zorgen dat u ontspannen door de security komt en comfortabel op uw bestemming arriveert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/diensten"
              className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors"
            >
              Bekijk onze diensten
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors"
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
