import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reizen met een elektrische rolstoel: 7 onmisbare tips | Vliegklaar",
  description: "Vliegen met een elektrische rolstoel vereist voorbereiding. Lees onze 7 tips over accu-regels, aanmelden bij de airline en schade voorkomen.",
};

export default function Page() {
  return (
    <BlogLayout
      title="Reizen met een elektrische rolstoel: 7 onmisbare tips voor een zorgeloze vlucht"
      publishDate="2 juni 2026"
      description="Een elektrische rolstoel meenemen in het vliegtuig is prima mogelijk, mits u de juiste regels kent. Van de accu-check tot het aanmelden bij de luchtvaartmaatschappij: met deze 7 tips gaat u vliegklaar op reis."
    >
      <section>
        <h2>Vliegen met uw elektrische rolstoel</h2>
        <p>
          Voor veel mensen is een elektrische rolstoel essentieel voor hun mobiliteit en vrijheid. Het idee om dit kostbare hulpmiddel mee te nemen in het ruim van een vliegtuig kan spannend zijn. Gelukkig zijn luchtvaartmaatschappijen goed ingesteld op het vervoeren van mobiliteitshulpmiddelen, mits u ze op tijd informeert.
        </p>
      </section>

      <section>
        <h2>1. Meld uw rolstoel minimaal 48 uur van tevoren aan</h2>
        <p>
          Dit is de belangrijkste regel. Luchtvaartmaatschappijen moeten weten wat de afmetingen en het gewicht van uw rolstoel zijn om ruimte te reserveren in het vrachtruim. Doe dit direct bij het boeken of uiterlijk 48 uur voor vertrek via de klantenservice.
        </p>
      </section>

      <section>
        <h2>2. Ken uw type accu (Dry, Wet of Lithium)</h2>
        <p>
          De veiligheidsregels voor accu&apos;s zijn streng. U moet weten of uw rolstoel een droge (gel/AGM), natte (vloeibaar zuur) of lithium-accu heeft. Lithium-accu&apos;s moeten vaak worden losgekoppeld en mee in de cabine, terwijl droge accu&apos;s meestal in de rolstoel mogen blijven mits ze zijn afgekoppeld.
        </p>
      </section>

      <section>
        <h2>3. Maak foto&apos;s voor vertrek</h2>
        <p>
          Mocht er onverhoopt schade ontstaan tijdens de vlucht, dan is het cruciaal dat u kunt bewijzen in welke staat de rolstoel was voor vertrek. Maak duidelijke foto&apos;s van alle zijden en de elektronica op de luchthaven.
        </p>
      </section>

      <section>
        <h2>4. Verwijder losse onderdelen</h2>
        <p>
          Bedieningskastjes (joysticks), voetsteunen en kussens kunnen makkelijk beschadigen of kwijtraken. Neem deze onderdelen mee als handbagage in de cabine. Zo verkleint u de kans op defecten bij aankomst aanzienlijk.
        </p>
      </section>

      <section>
        <h2>5. Gebruik een &apos;vlieg-instructie&apos; kaart</h2>
        <p>
          Bevestig een gelamineerde instructiekaart aan de rolstoel in het Engels en de taal van uw bestemming. Leg hierop kort uit hoe de rolstoel in de &apos;vrijloop&apos; gezet kan worden en hoe de accu afgekoppeld moet worden. Grondpersoneel waardeert dit enorm.
        </p>
      </section>

      <section>
        <h2>6. Kom extra vroeg naar de luchthaven</h2>
        <p>
          Het inchecken van een elektrische rolstoel duurt langer dan een standaard koffer. Zorg dat u minimaal 3 uur voor een Europese vlucht en 4 uur voor een intercontinentale vlucht aanwezig bent. Dit geeft rust en voorkomt stress bij de gate.
        </p>
      </section>

      <section>
        <h2>7. Controleer uw rolstoel direct bij aankomst</h2>
        <p>
          Zodra u uw rolstoel terugkrijgt bij de gate of de bagageband, controleer hem dan direct op schade of defecten. Als er iets mis is, moet u dit onmiddellijk melden bij de bagage-afhandeling (Property Irregularity Report) voordat u de luchthaven verlaat.
        </p>
      </section>

      <section>
        <h2>Conclusie</h2>
        <p>
          Met de juiste voorbereiding is vliegen met een elektrische rolstoel heel goed te doen. Het geeft u de vrijheid om de wereld te ontdekken met uw eigen vertrouwde hulpmiddel. Wilt u hulp bij het boeken van een reis met extra begeleiding? Vliegklaar helpt u graag op weg.
        </p>
      </section>
    </BlogLayout>
  );
}
