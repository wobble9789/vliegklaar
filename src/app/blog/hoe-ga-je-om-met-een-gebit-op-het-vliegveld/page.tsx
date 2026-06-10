import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een gebit op het vliegveld? | Vliegklaar',
  description: 'Tips voor senioren over vliegen met een kunstgebit of gebitsprothese. Hoe werkt de security en hoe blijf je comfortabel tijdens de vlucht?',
};

export default function GebitVliegveldPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Mag een kunstgebit in blijven bij de security op Schiphol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, u kunt uw kunstgebit gewoon inhouden tijdens de veiligheidscontrole op Schiphol. De scanners zijn niet ingesteld op de kleine hoeveelheden metaal in een gebitsprothese. Mocht er toch een melding zijn, dan weten de medewerkers daar discreet mee om te gaan."
        }
      },
      {
        "@type": "Question",
        "name": "Moet ik melden dat ik een kunstgebit draag bij de security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In principe is dit niet nodig. Alleen als u gevraagd wordt naar metalen voorwerpen en u weet dat uw prothese veel metaal bevat, kunt u dit discreet melden aan de beveiligingsmedewerker."
        }
      },
      {
        "@type": "Question",
        "name": "Kan de luchtdruk invloed hebben op de pasvorm van mijn gebit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Door de lagere luchtdruk in de cabine kan uw tandvlees iets opzetten. Dit kan ervoor zorgen dat een gebit dat normaal goed zit, plotseling wat strakker of juist losser aanvoelt. Gebruik eventueel een beetje kleefpasta voor extra zekerheid."
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
          Hoe ga je om met een gebit op het vliegveld?
        </h1>
        
        <div className="prose prose-lg text-gray-700 max-w-none">
          <p>
            Voor veel senioren is de gang door de security op het vliegveld een moment van lichte spanning. Vragen als &quot;Gaat mijn kunstgebit af bij de metaaldetector?&quot; of &quot;Moet ik het uitdoen?&quot; horen we vaak. Gelukkig is het antwoord simpel: u kunt uw gebit gewoon inhouden en er is geen reden tot zorg.
          </p>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">De Security Check en uw Gebit</h2>
          <p>
            Moderne security-scanners op luchthavens zoals Schiphol zijn zeer geavanceerd. Ze reageren zelden op de kleine hoeveelheden metaal die in een kunstgebit of frameprothese verwerkt zitten. U hoeft dus niet bang te zijn voor een luid alarm terwijl u door de poortjes loopt. Mocht er om een andere reden een handmatige controle nodig zijn, dan gebeurt dit altijd met respect voor uw privacy.
          </p>

          <div className="bg-primary-50 p-6 rounded-xl my-8 border-l-4 border-primary-500">
            <h3 className="text-xl font-bold text-primary-900 mb-2">Tip van Packlight:</h3>
            <p className="mb-0">
              Draagt u een prothese met veel metaal? U kunt dit altijd vooraf even discreet melden bij de beveiliger, maar meestal is dit niet nodig.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Comfort tijdens een lange vlucht</h2>
          <p>
            Tijdens het vliegen verandert de luchtdruk in de cabine. Dit kan invloed hebben op uw lichaam, waaronder uw tandvlees. Het is niet ongewoon dat uw tandvlees iets opzet, waardoor uw prothese anders kan gaan zitten.
          </p>
          <ul>
            <li><strong>Hydratatie:</strong> Drink voldoende water. Een droge mond kan irritatie onder het gebit veroorzaken.</li>
            <li><strong>Kleefpasta:</strong> Neem een kleine tube kleefpasta mee in uw handbagage (maximaal 100ml) voor het geval uw gebit losser gaat zitten door de luchtdruk.</li>
            <li><strong>Schoonmaakset:</strong> Voor lange vluchten is het prettig om een kleine tandenborstel en een afgesloten bakje mee te nemen om uw gebit even te kunnen reinigen.</li>
          </ul>

          <h2 className="text-2xl font-bold text-primary-800 mt-8 mb-4">Onbezorgd op reis met Vliegklaar</h2>
          <p>
            Bij Vliegklaar begrijpen we dat dit soort kleine details het verschil maken tussen een stressvolle reis en een ontspannen vakantie. Onze begeleiders zijn er om u te ondersteunen bij elk aspect van de reis, inclusief de gang door de security.
          </p>
          <p>
            Wilt u meer weten over hoe wij u kunnen helpen bij uw volgende vliegreis? 
            Bekijk dan onze pagina over <Link href="/reisbegeleiding-ouderen-amsterdam" className="text-primary-600 hover:underline">reisbegeleiding in Amsterdam</Link> of ontdek hoe wij ondersteunen bij de <Link href="/luchthaven-begeleiding" className="text-primary-600 hover:underline">begeleiding op de luchthaven</Link>.
          </p>
        </div>

        <section className="mt-12 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-6">Veelgestelde vragen</h2>
          <div className="space-y-6">
            {faqSchema.mainEntity.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary-700 mb-2">{faq.name}</h3>
                <p className="text-gray-600">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="bg-primary-900 py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Zorgeloos vliegen als senior?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Onze ervaren begeleiders helpen u graag bij elke stap van uw reis.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            Neem contact op
          </Link>
        </div>
      </section>
    </main>
  );
}
