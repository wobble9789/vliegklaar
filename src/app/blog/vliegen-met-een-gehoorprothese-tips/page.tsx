import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vliegen met een gehoorprothese: Tips voor senioren | Vliegklaar',
  description: 'Handige tips voor senioren die vliegen met een gehoorprothese of gehoorapparaat. Zo gaat u zorgeloos door de security en geniet u van de vlucht.',
};

export default function GehoorprotheseBlog() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Moet ik mijn gehoorprothese uitdoen bij de security op het vliegveld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nee, in de meeste gevallen kunt u uw gehoorprothese of gehoorapparaat gewoon inhouden tijdens de veiligheidscontrole. De scanners zijn veilig voor de meeste moderne apparaten. Meld het wel even bij de medewerker."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de luchtdruk in het vliegtuig mijn gehoorapparaat beïnvloeden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "De luchtdruk zelf heeft meestal geen invloed op de werking van het apparaat, maar u kunt wel meer last hebben van 'suizende' oren. Het is raadzaam om het volume iets lager te zetten tijdens het stijgen en landen."
        }
      },
      {
        "@type": "Question",
        "name": "Zijn reservebatterijen toegestaan in de handbagage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, reservebatterijen voor uw gehoorapparaat moeten zelfs in uw handbagage worden vervoerd. Zorg dat ze in de originele verpakking zitten om kortsluiting te voorkomen."
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
            ← Terug naar blog overzicht
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Vliegen met een gehoorprothese: Tips voor een zorgeloze reis
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Reizen met een gehoorbeperking vraagt om wat extra voorbereiding, maar hoeft u zeker niet tegen te houden om de wereld te ontdekken. 
            Of u nu een gehoorapparaat, een cochleair implantaat (CI) of een andere gehoorprothese draagt, met deze tips stapt u met een gerust hart het vliegtuig in.
          </p>
        </header>

        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-12 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
            alt="Senioren praten op het vliegveld"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary-800">1. Voorbereiding thuis</h2>
            <p>
              Controleer voor vertrek of uw gehoorprothese optimaal functioneert. Neem voldoende reservebatterijen mee en een extra setje filters of slangetjes. 
              Het is ook verstandig om een verklaring van uw audicien mee te nemen, waarin staat welk type apparaat u draagt. 
              Dit kan handig zijn bij de security of als u ter plaatse hulp nodig heeft.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">2. De security check</h2>
            <p>
              U hoeft uw gehoorapparaat meestal niet uit te doen bij de security scan. Moderne scanners hebben geen negatieve invloed op de instellingen van uw prothese. 
              Het is echter wel beleefd om de medewerker vooraf te informeren: &quot;Ik draag een gehoorprothese.&quot; 
              Mocht de metaaldetector afgaan, dan weet de medewerker direct waar dit door komt en kan er een handmatige controle plaatsvinden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">3. Tijdens de vlucht</h2>
            <p>
              In de cabine kan het lawaai van de motoren vermoeiend zijn. Sommige senioren vinden het prettig om hun apparaat iets zachter te zetten of de ruisonderdrukking te activeren. 
              Vergeet niet om uw medereiziger of de stewardess te laten weten dat u slechthorend bent. Zo kunnen zij directer communiceren en mist u geen belangrijke mededelingen over bijvoorbeeld de maaltijdservice of veiligheidsinstructies.
            </p>
            <p>
              Draag bij voorkeur een apparaat dat gekoppeld kan worden aan het entertainmentsysteem van het vliegtuig via bluetooth of een ringleiding (T-stand). 
              Dit zorgt voor een veel betere geluidskwaliteit bij het kijken van een film.
            </p>
          </section>

          <section className="bg-primary-50 p-8 rounded-xl border border-primary-100">
            <h2 className="text-2xl font-bold text-primary-800 mb-4">Wist u dat?</h2>
            <p>
              Veel vliegvelden, waaronder Schiphol, beschikken over ringleidingen bij de gates en informatiebalies. 
              Zoek naar het blauwe symbool met het oor om gebruik te maken van dit versterkte geluidssignaal direct op uw gehoorapparaat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary-800">4. Aankomst en douane</h2>
            <p>
              Bij aankomst op een buitenlandse bestemming kan de akoestiek in grote hallen lastig zijn. Neem de tijd en vraag gerust om herhaling als u een douanemedewerker niet goed verstaat. 
              Met een glimlach en een korte uitleg over uw gehoorprothese is er vrijwel altijd begrip.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-primary-800">5. Veelgestelde vragen</h2>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-bold text-primary-700">{faq.name}</h3>
                  <p className="text-gray-600 mt-2">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">Heeft u hulp nodig bij uw reis?</h2>
          <p className="text-center text-xl text-gray-600 mb-10">
            Ziet u op tegen de drukte op het vliegveld met uw gehoorbeperking? Vliegklaar biedt persoonlijke begeleiding van deur tot deur. 
            Wij helpen u bij de communicatie op de luchthaven en zorgen dat u geen enkel detail mist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reisbegeleiding-ouderen"
              className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors text-center shadow-md"
            >
              Bekijk onze diensten
            </Link>
            <Link
              href="/contact"
              className="bg-white border-2 border-primary-600 text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors text-center shadow-md"
            >
              Neem contact op
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
