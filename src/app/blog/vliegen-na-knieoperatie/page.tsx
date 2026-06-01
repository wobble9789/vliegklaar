import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vliegen na een Knieoperatie: Wanneer mag het weer? | Vliegklaar",
  description: "Wilt u vliegen na een knieoperatie of knieprothese? Lees alles over de herstelperiode, risico's zoals trombose en handige tips voor op de luchthaven.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Vliegen na een Knieoperatie: Tips voor een Veilig Herstel"
      publishDate="2026-06-01"
      description="Een vliegreis na een knieoperatie vraagt om een goede planning. Ontdek wanneer u weer veilig de lucht in mag en hoe u ongemak tijdens de reis voorkomt."
    >
      <section className="prose prose-blue max-w-none">
        <p>
          Het herstel na een knieoperatie, zoals een nieuwe knie (knieprothese) of een kijkoperatie, kost tijd. Veel senioren vragen zich af wanneer ze weer veilig kunnen vliegen. Hoewel vliegen vaak weer mogelijk is, zijn er belangrijke zaken om rekening mee te houden, zoals de kans op trombose en de logistiek op de luchthaven.
        </p>

        <h2>Wanneer mag u weer vliegen na een knieoperatie?</h2>
        <p>
          De algemene richtlijn voor vliegen na een grote knieoperatie (zoals een totale knieprothese) is meestal **4 tot 6 weken**. Bij een kleinere ingreep, zoals een kijkoperatie, kan dit soms al na 1 tot 2 weken.
        </p>
        <p>
          Echter, de definitieve beslissing ligt altijd bij uw behandelend orthopedisch chirurg. Factoren zoals de duur van de vlucht, uw algemene gezondheid en het verloop van de revalidatie spelen hierbij een rol.
        </p>

        <h3>Risico op trombose</h3>
        <p>
          Het grootste risico van vliegen kort na een operatie is een diepveneuze trombose (DVT). Door de combinatie van de recente ingreep en het lange stilzitten in een vliegtuig is het bloed sneller geneigd om te stollen. Uw arts kan bloedverdunners of compressiekousen voorschrijven om dit risico te verkleinen.
        </p>

        <h2>Tips voor op de luchthaven</h2>
        <p>
          Lopen over grote luchthavens zoals Schiphol kan direct na een operatie erg vermoeiend en pijnlijk zijn.
        </p>
        <ul>
          <li><strong>Vliegveld assistentie:</strong> Vraag minimaal 48 uur voor vertrek assistentie aan. U wordt dan met een rolstoel of elektrisch karretje naar de gate gebracht.</li>
          <li><strong>Security:</strong> Heeft u een knieprothese? Meld dit bij de beveiliging. Het metaal kan het alarm activeren. De medewerkers weten hier discreet mee om te gaan.</li>
          <li><strong>Medicatie:</strong> Houd uw pijnstillers en eventuele antistollingsmiddelen in uw handbagage.</li>
        </ul>

        <h2>Tijdens de vlucht</h2>
        <p>
          Eenmaal aan boord is comfort essentieel voor uw knie:
        </p>
        <ul>
          <li><strong>Extra beenruimte:</strong> Boek indien mogelijk een stoel met extra beenruimte, zoals bij de nooduitgang (let op: u moet hiervoor wel mobiel genoeg zijn) of in de Business Class.</li>
          <li><strong>Blijf in beweging:</strong> Span uw kuitspieren regelmatig aan en loop, indien toegestaan, elk uur even een klein stukje door het gangpad.</li>
          <li><strong>Hydratatie:</strong> Drink voldoende water en vermijd alcohol om uw bloedvaten in goede conditie te houden.</li>
        </ul>

        <h2>Hoe Vliegklaar u kan helpen</h2>
        <p>
          Ziet u op tegen de reis na uw operatie? Onze reisbegeleiders zijn er om u fysiek en mentaal te ondersteunen. Wij helpen met de bagage, regelen de assistentie op de luchthaven en zorgen dat u in een rustig tempo uw bestemming bereikt.
        </p>
        <p>
          Heeft u specifieke vragen over uw situatie? Neem gerust contact met ons op voor een vrijblijvend adviesgesprek.
        </p>
      </section>
    </BlogLayout>
  );
}
