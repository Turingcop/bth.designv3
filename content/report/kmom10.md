---
Title: Kmom06
Description: Part 10
Template: kmom
---

Kursmoment 10
==================

* [kmom01](kmom01)
* [kmom02](kmom02)
* [kmom03](kmom03)
* [kmom04](kmom04)
* [kmom05](kmom05)
* [kmom06](kmom06)
* [kmom10](kmom10)

Då var tillslut också projektet i hamn och jag har försökt implementera samtliga krav med varierande framgång. 

Det första var förstås att skapa själva webbplatsen och jag började med att göra en ny picoinstallation att utgå ifrån. Jag ville göra något som drastiskt skulle skilja sig från portfolion och det kändes rimligt att börja med ett blankt papper. Till skillnad från med portfolion tog jag tidigt bort hela dbwebb-temat, med undantag för twig-filen som på grund av min ringa erfarenhet av just twig kändes enklare att bara modifiera efter behov, och gjorde om all CSS från grunden. Med portfolion var jag betydligt mindre försiktig och jag ville gärna försöka ta ut svängarna lite mer den här gången.

För att skapa huvudtemat började jag i figma för att skapa en grov layout och testa lite olika färgpaletter tills jag hade en någorlunda klar bild över vilka färger jag ville använda och hur det skulle se ut. Jag kan inte påstå att temat är en exakt replika av den modell jag gjorde i figma, men nästintill. Det kändes som ett väldigt praktiskt tillvägagångssätt att ha något att falla tillbaka på när jag väl satt och skrev min SASS och funderade över hur olika element skulle se ut. Mer om huvudtemat finns i den dolda sidan på about-sidan i själva projektet.

Jag har länge funderat över att försöka göra en dynamisk snarare än responsiv webbplats så det blev min ambition här. Jag använder alltså inga mediaqueries utan har istället använt i huvudsak relativa måttenheter för att webbplatsen och dess element dynamiskt ska anpassa sig efter viewporten utan att layouten går sönder. Därmed har jag ibland använt t ex vw för font-storlekar. Detta var delvis en utmaning eftersom bildförhållandet mellan desktop och mobil är i princip omvänt. Där vw är det klart största måttet på desktop är vh det på mobil. Jag tycker dock att jag lyckades hyfsat och ingenting går sönder eller ser alltför knasigt ut när jag testar webbplatsen i DevTools responsiva läge och använder de olika förinställningar som emulerar populära smartphones som finns där. Huruvida det egentligen är vettigt att försöka undvika mediaqueries och bygga dynamiskt istället vet jag inte. Risken finnns såklart att temat blir lite "jack of all trades, master of none" i och med att det kan innebär endel kompromisser, särskilt när man sätter font-storlek i t ex vw.

Tillgänglighet var inte konstigheter att uppnå efter kursmomentet vi hade som behandlade det. Jag använde lighthouse och korrigerade det den klagade på vilket oftast var bilder som saknade alt och vid något tillfälle för lågt kontrastförhållande mellan text och bakgrundsfärg. Temat fick också gå igenom https://www.toptal.com/designers/colorfilter/ så att jag kunde försäkra mig om att den skulle vara enkel att tyda även vid olika sorters färgblindhet vilket inte verkar vara några större problem, även om det förstås inte ser lika bra ut.

När det kom till det alternativa temat hade jag först inte särskilt mycket idéer. Jag visste bara att jag skulle försöka bryta så mycket som möjligt mot huvudtemat och det första jag bestämde var då att lägga navigationen horisontellt och inte låta headern ta upp en hel viewport. Jag valde sen en betydligt ljusare färgpalett och ett mer lekfullt typsnitt till rubriker och navigation och komprimerade placeringen av elementen till något betydligt mer yteffektivt än i huvudtemat där man får scrolla genom hela viewports av bara bakgrundsbild för att komma till olika element. Detta sköts med en if-sats i twig-filen som placerar eller inte placerar ut vissa tomma element. Så som jag har tolkat kundens profil så är den väldigt färgglad, så även om det alternativa temat känns ganska barnsligt och kanske nästan banalt, så tycker jag ändå att det finns ett släktskap i den rätt livliga färgsättningen.

Till analysen för aktuella trender valde jag att kika på twitter, instagram och youtube, av den enkla anledningen att det är tre av de största webbplatserna. Jag försökte ta ett helhetsgrepp kring dem och fundera över vad i deras design som gör dem framgångsrika och varför de har gjort de designval de har gjort. Det blev lite av en utmaning eftersom de alla tre har en väldigt minimalistisk design, men jag tyckte att det öppnade upp för en rätt intressant diskussion om hur en specifik funktionalitet nästan kräver minimalism. 

För att analysera mitt eget (huvud)tema valde jag att göra analysen om designprinciper från kmom06. Detta till stor del på grund av att jag själv kände att det var så jag hade jobbat med temat. Lagen om tredjedelar var t ex så att säga den övergripande principen i stora delar av temat tillsammans med den väldigt centrerade och därmed balanserade layouten. Det kan väl sägas ha blivit någon slags kvalitativ studie lite per automatik i och med att det bara förekommer ett studieobjekt, där jag framförallt har resonerat kring hur den här specifika webbplatsen ser ut och vilka designprinciper som framträder tydligast. Jag har försökt hålla mig någorlunda objektivt men när det bitvis handlar om rena värderingsomdömen är det såklart svårt. 
