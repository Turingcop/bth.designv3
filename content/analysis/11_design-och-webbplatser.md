---
Title: Design och webbplatser
Description: Part 1
Template: kmom
---

Webbplatsdesign
=======================

* [Färganalys](01_colors)
* [Laddningstid](02_load)
* [Designprinciper](03_design_principles)
* [Webbplatsdesign](10_webbplatsdesign)
* [Design och webbplatse](11_design-och-webbplatser)

## Syfte

Syftet med denna rapport är att undersöka vilka designprinciper och/eller -element som förekommer på Art Ists webbplats här http://www.student.bth.se/~siev20/dbwebb-kurser/design/me/kmom10/. Det kommer göras i ett stycke som resonerar kring vilka designprinciper som är uppenbart förekommande och ett avslutande stycke som diskuterar om implementeringen av dem är välgjord, om webbplatsens design som helhet känns lyckad och genomtänkt och vad som eventuellt hade kunnat göras bättre.

## Metod

Det här är en kvalitativ studie där jag tittar på en webbplats och gör en egen analys. För att undersöka hur den är uppbyggd och för att enklare se vilka element och principer som är tydligt implementerade använder jag Firefox DevTools. 

### Art Ist - designprinciper

![Art Ist snapshot](../assets/img/artistheader.png)
Snapshot av headern som utgör hela fönstret startsidan.

Headern upptar hela fönstret när man går in på webbplatsen och innehåller logga, flash-bild och navigationen. Denna är till stor del komponerad i tredjedelar, dä de flesta elementen i höjd och bredd tycks förhålla sig till varandra och den totala höjden respektive bredden som en eller flera sjättedelar eller tredjedelar. Det är dock inte genomgående utan flash-bilden sticker ut med en höjd som faller mellan andra elements höjd. 

Det finns en gridbaserad design som kanske inte är helt uppenbar till en början, men med DevTools kan man se att headern är indelad i två kolumner och och fem rader, vilket antagligen gjorts för att placera ut element i förhållande till varandra så precist som möjligt. 

Scrollar man nedåt på någon av undersidorna finns en tydlig symmetri och balans i och med att både element och olika bakgrundsbilder som överlappar varandra och i en asynkron scroll-effekt har placerats i mitten och man får intrycket av att de samverkar och förstärker varandra. Detta trots att de kontrasterar relativt skarpt mot varandra i både motiv och färgsättning, det senare dock delvis avhjälpt av användningen av transparenta bakgrundsfärger som jämnar ut skillnaden i färgsättning något. Att element och bakgrundsbilder noggrant centrerats mot en vertikal mittlinje och mot varandra gör också att olika linjer samspelar på ett ganska effektfullt sätt, vilket framförallt syns om man studerar hur linjerna från en bakgrundsbild eller ett element nästan sömlöst på vissa platser övergår i linjerna i en annan bakgrundsbild. 

![Art Ist snapshot](../assets/img/artist2.png)
Headerns mittlinje linjerar här med mittlinjen i bakgrundsbilden av en färgglad skyskrapa av något slag. Här syns också effekten av att två bilder med en tydlig vertikal riktning, när armarna som håller upp ett djurkranium på den övre bilden linjerar med skyskrapan och nästan ser ut att bäras upp av den, ett förhållande som är omvänt i bilden nedan.

![Art Ist snapshot](../assets/img/artist3.png)
Längre ned är det armarna från första bakgrundsbilden som "håller upp" den andra bakgrundsbilden. Elementet som ligger placerat över bakgrundsbilden i denna vy skapar också ett slags spel med sin bakgrundsbild, där ögonhålorna i djurkraniumet här blir placerade i mitten av björnens öron. Trots den skarpa kontrasten i ljus- och färgsättning mellan bilderna så finns det ändå någon känsla av samhörighet utifrån hur de är balanserade mot varandra.

Att de flesta färger som används i designen är mer eller mindre genomskinliga bidrar till att skapa ett djup och hjälper eventuellt till att knyta ihop vissa element bättre som kanske annars skurit sig väl mycket mot varandra, detta gäller inte minst de två bakgrundsbilderna som används tillsammans och på flera platser angränsar till varandra. Överlag så håller sig designen borta från platt design, med undantag för navigationsknapparna och något enstaka mer fält där en och samma helt fyllda färg används på elementet. Bortsett det används gradienter där genomskinliget inte används, så som i backgrundsfärgen till flash-bilden, eller i footern som har en svag gradient från grått till något ljusare grå. 

Typsnitten är genomgående utan seriffer vilket nog inte kan sägas vara kutym, men skapar ett ganska modernt och framförallt luftigt intryck. Webbplatsen är överhuvudtaget mycket generös med utrymmet och placerar få element med mycket mellanrum där istället bakgrundsbilden får tala.


### Diskussion

Det kanske mest uppseendeväckande på webbplatsen är valet att låta headern och navigationen uppta hela det tillgängliga fönstret. Sett utifrån användbarhet är det inte optimalt, då ganska lite information presenteras "per vy". Med andra ord är det inte en webbplats för den som inte gillar att scrolla. Detta gäller även när man tar sig vidare mot innehållet längre ner på varje undersida som är placerat väldigt luftigt. Här har kan man antagligen med fog hävda att funktion har fått stå tillbaka för form, något som jag personligen kan tycka att man generellt ska vara försiktig med, men som, beroende på vad webbplatsens syfte är, såklart kan vara delvis motiverat ibland och det är i slutändan en bedömningsfråga var gränsen går.

Navigationen är tydlig i sig men hade kunnat gynnas av en tydligare markering av vilken undersida besökaren befinner sig på. Just nu görs det genom att första bokstaven på den aktuella undersidan är markerad i en annan färg, något som antagligen kan vara relativt lätt att missa när t ex hover-effekten på menyn är så mycket mer framträdande.

Överhuvudtaget består webbplatsen av ganska lite information och känns mer som ett artistiskt uttryck i sig själv, där det visuella i princip är själva funktionen. Istället för att fylla den egna webbplatsen med innehåll och information så hänvisar den besökaren t ex i footern vidare till andra plattformar som spotify, facebook, spotify och youtube, där det går att ta del av musiken, information om kommande spelningar eller bilder och filmat material relaterat till artisten.

Designmässigt upplever jag dock sidan som balanserad, mycket tack vare att placera det mesta av innehållet horisontellt centrerat och designen känns luftig och enkel att ta till sig. Det finns dock en ambition att skapa lite dynamik i layouten genom att lägga navigationen asymmetriskt till höger i headern, medans motsvarande fält till vänster är tomt. Att placera navigationen symmetriskt, t ex i mitten, hade kanske skapat ett än mer harmoniskt uttryck, men riskerad att kännas lite väl platt ellet tryggt för en webbplats som ändå, får vi anta, är menad att vara ett slags konstnärligt uttryck. 

Kontraster används flitigt, främst i motiv på bakgrundsbilderna men också i och med att webbplatsen skiftar mellan mörkt och ljust i färgsättningen och bidrar till att det upplevs som att det händer saker när man tar sig runt genom undersidorna, vilket kan vara ett sätt att skapa nyfikenhet och intresse hos besökaren. Om detta är målsättningen så kan det nog sägas vara ett rimligt beslut att ha tagit ut de konstnärliga svängarna, delvis på funktionens bekostnad. Det är heller inte nödvändigtvis så att någon som besöker en artists webbsida gör det för att ta del av en massa information i text eller ens i bild, vilket jag tror många idag istället gör genom att t ex besöka artistens facebooksida, utan snarare använder det som en snabb portal vidare in till artistens närvaro på andra plattformar. Utgår vi från detta kan webbplatsens huvudsyfte vara att framförallt förmedla en artistisk känsla, vilket överlag känns som att det görs ganska bra här. 

![Art Ist snapshot](../assets/img/artist4.png)
De få element som finns på webbplatsen är luftigt placerade och bidrar främst till att peka besökaren mot de plattformar som artisten närvarar på. T ex genom en spotify-iframe som visar en spellista över det senaste albumet eller dylikt.

<p style="text-align: right"><b>Simon Evertsson</b><p>
