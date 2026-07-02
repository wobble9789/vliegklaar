import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoe ga je om met een oogprothese op het vliegveld? | Vliegklaar',
  description: 'Tips voor senioren met een oogprothese op reis. Hoe ga je door de security, wat neem je mee in je handbagage en waar moet je op letten bij de douane?',
};

export default function OogprotheseVliegveldPage() {
  return (
    <main className="pt-20">
      <section className="bg-primary-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold mb-4 inline-block">
            ← Terug naar alle artikelen
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Hoe ga je om met een oogprothese op het vliegveld?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed italic">
            Reizen met een oogprothese vraagt om wat extra voorbereiding, maar hoeft zeker geen belemmering te zijn voor een fijne vakantie. In dit artikel leggen we uit hoe u soepel door de controles op het vliegveld komt.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 prose prose-primary prose-lg">
          <h2>Security check en de bodyscan</h2>
          <p>
            Een van de meest gestelde vragen door senioren met een oogprothese is of de prothese afgaat bij de metaaldetector of zichtbaar is op de bodyscan. Een moderne oogprothese is meestal gemaakt van kunststof (acrylaat) of glas en bevat geen metaal. Hierdoor zal de metaaldetector niet afgaan.
          </p>
          <p>
            Bij een bodyscan kan de prothese soms als een onregelmatigheid worden gezien. De beveiligingsbeambte kan u dan vragen om een korte extra controle. U hoeft de prothese nooit uit te doen. Het is handig om vooraf discreet te melden dat u een oogprothese draagt, vooral als u zich daar prettiger bij voelt.
          </p>

          <h2>Handbagage: Wat moet er mee?</h2>
          <p>
            Zorg dat u alle benodigdheden voor de verzorging van uw oogprothese in uw handbagage heeft. Mocht uw ruimbagage vertraagd zijn, dan heeft u uw spullen direct bij de hand. Denk hierbij aan:
          </p>
          <ul>
            <li><strong>Reinigingsvloeistof:</strong> Let op de 100ml regel voor vloeistoffen. Neem kleine flesjes mee of vraag uw leverancier om proefflacons.</li>
            <li><strong>Een reserveprothese:</strong> Als u een reserve-exemplaar heeft, is dit de veiligste plek om deze te bewaren.</li>
            <li><strong>Zuignapje:</strong> Voor het in- en uitdoen van de prothese, indien u dit gebruikt.</li>
            <li><strong>Oogdruppels:</strong> De lucht in het vliegtuig is erg droog, wat irritatie aan de oogholte kan veroorzaken. Zorg voor voldoende bevochtigende druppels.</li>
          </ul>

          <h2>Medisch paspoort en verklaringen</h2>
          <p>
            Hoewel het niet verplicht is, raden wij altijd aan om een <strong>Europees Medisch Paspoort</strong> mee te nemen. Hierin staat vermeld dat u een oogprothese draagt en welke vloeistoffen u daarvoor gebruikt. Dit helpt bij eventuele vragen van de douane of beveiliging, zeker als u vloeistoffen meeheeft die essentieel zijn voor uw oogzorg.
          </p>
          <p>
            Heeft u specifieke vloeistoffen nodig die groter zijn dan 100ml? Zorg dan voor een medische verklaring van uw arts.
          </p>

          <h2>Tijdens de vlucht</h2>
          <p>
            Door de lage luchtvochtigheid in de cabine kan de oogholte droger aanvoelen dan normaal. Gebruik regelmatig uw oogdruppels. Als u een lange vlucht maakt en gewend bent de prothese 's nachts uit te doen, kunt u dit gewoon doen, maar zorg wel voor een hygiënische omgeving.
          </p>

          <div className="bg-primary-50 p-8 rounded-2xl my-12">
            <h3 className="text-primary-900 mt-0">Hulp nodig bij uw reis?</h3>
            <p className="text-primary-800">
              Ziet u op tegen de drukte op het vliegveld of de controles? De reisbegeleiders van Vliegklaar ondersteunen senioren bij elke stap. Wij zorgen dat u ontspannen door de security komt en alle benodigdheden bij de hand heeft.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white font-bold px-6 py-3 rounded-xl inline-block no-underline hover:bg-primary-700 transition-colors">
              Vrijblijvend kennismaken
            </Link>
          </div>

          <h2>Conclusie</h2>
          <p>
            Met een goede voorbereiding en de juiste spullen in uw handbagage is reizen met een oogprothese geen enkel probleem. Wees niet bang voor de security; de medewerkers zijn getraind om discreet om te gaan met medische hulpmiddelen.
          </p>
          <p>
            Wilt u meer weten over vliegen met medische hulpmiddelen? Lees dan ook ons artikel over <Link href="/blog/vliegen-met-een-oogprothese-tips">tips voor vliegen met een oogprothese</Link> of bekijk onze algemene <Link href="/blog/hoe-ga-je-veilig-door-de-security-als-senior">security gids voor senioren</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
