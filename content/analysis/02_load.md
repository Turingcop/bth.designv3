---
Title: Laddningstider
Description: Part 2
Template: kmom
---

Laddningstider
=======================

* [Färganalys](01_colors)
* [Laddningstider](02_load)

### Syfte

Den här rapporten är en undersökning av tre olika webbplatsers laddningstider. På varje webbplats har laddningstiderna, den totala storleken samt antalet resurser för tre sidor mätts och sammanställts i ett google kalkylark som finns <a href="https://docs.google.com/spreadsheets/d/1wGxINeWwluyNA2Mjb0PfuQkODMMqorpch4V-sVRlKfI/edit?usp=sharing">här</a> och utgör bilaga 1 till denna rapport. Studien är skriven under kursen Teknisk webbdesign och användbarhet på Blekinge Tekniska Högskola, höstterminen 2020.

### Urval

Jag har valt att undersöka svt.se, folkhalsomyndigheten.se samt vårdguiden, 1177.se. Jag föreställer mig att de alla tre är webbplatser som har sett relativt mycket och antagligen extra mycket trafik just i år. Svt.se skiljer sig delvis från de andra som ren nyhetsförmedlare, men som icke kommersiell, statligt finansierad media fri från betalväggar så menar jag att den har en mer institutionaliserad status än de flesta andra nyhetskällor på nätet. Vidare har jag riktat in mig på de sidor på varje webblats som på något sätt bör vara intressanta eller relevanta i anknytning till pågående pandemi.

Dessa tre blir intressanta utifrån sina respektive roller som i det närmaste samhällsbärande webbplatser på ett eller annat sätt när allmänheten dagligen söker uppdateringar angående smittspridningsläge, restriktioner, samhällsekonomiska konsekvenser och så vidare. Tillsammans ger dessa tre en relativt komplett bild och det bör anses vara viktigt med väl fungerande sidor och låga laddningstider för webbplatser med en viktig samhällelig funktion under pågående kris.

### Metod

Jag har använt Firefox DevTools för att mäta laddningstider, sidstorlekar och resurser. Varje sida har också analyserats av Google Pagespeed. Mätdatan finns sammanställd i bilaga 1 som är ett google kalkylark.

Laddningstiderna för varje webbplats tre sidor har mätts tre gånger varpå ett snitt räknats ut. I analysen nedan finns även snittet för samtliga tre sidor per webbplats. Gällande antal resurser och storlek på sidor har även detta mätts tre gånger men eftersom resultatet var samma för alla sidor vid alla tre mätningar har jag plockat bort det i kalkylarket då det utgör överflödig data. Antal resurser samt sidstorlek skrivs alltså bara ut en gång per sida i kalkylarket och utgör därmed också genomsnittet för respektive sida. 

### Analys

### Folkhälsomyndigheten

På folkhälsomyndigheten har jag undersökt landningssidan (https://www.folkhalsomyndigheten.se/), informationssidan för arbetet med covid-19 (https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/folkhalsomyndighetens-arbete-med-covid-19/) samt sidan för frågor och svar om covid-19 (https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/fragor-och-svar/). I bilaga 1 benämns dessa tre i samma ordning ovan som FHM Sida 1, FHM Sida 2 och FHM Sida 3.

![FHM snapshot](../assets/img/fhm3.png)
FHM Sida 2, myndighetens arbete med covid-19.

Folkhälsomyndighetens webbplats och olika sidor är genomgående relativt snabb och får ett gott resultat i Google Pagespeed, med ett snittbetyg på 96 för desktop och 88 för mobil. För ingen av de tre sidorna jag undersökte låg genomsnittet för laddningstid på över 2,4 sekunder och det totala genomsnittet för de tre sidorna kombinerat (alltså nio mätningar totalt, fördelat på tre sidor) hamnade på 2,0 sekunder, vilket är överlägset snabbast av de webbplatser jag har undersökt. För desktop föreslår Google Pagespeed framförallt att ta bort CSS och javascript som inte används samt ta bort resurser som blockerar renderingen. För mobil anges främst att reducera serverns första svarstid samt att använda bilder i rätt storlek och modernt filformat som effektiva åtgärder. Den enskilt största besparingen som föreslås gäller FHM Sida 2 på mobil och handlar om att använda bilder i rätt storlek med en uppskattad besparing på hela 8,4 sekunder. Långsammast är FHM Sida 2 på 2,4 sekunder i genomsnitt och denna är också störst på 2,6 MB.

### SVT
![SVT snapshot](../assets/img/svt.png)
SVT Sida 2, Svt Nyheters ekonomidel.

SVT dras med betydligt längre inläsningstider, framförallt på det som i bilaga 1 kallas SVT Sida 3 och gäller SVT datajournalistik om coronaläget i sjukvården (https://www.svt.se/datajournalistik/corona-i-intensivvarden/). SVT Sida 1 är liksom i fallet med folkhälsomyndigheten SVTs förstasida (https://www.svt.se/) och SVT Sida 2 är SVT nyheters ekonomidel (https://www.svt.se/nyheter/ekonomi/). Genomsnittlig inläsningstid för samtliga tre sidor hamnar på 6,5 sekunder. Snabbast av de tre är SVT Sida 1 med en genomsnittstid på 3,2 sekunder och klart långsammast är SVT Sida 3 med ett snitt på 11,5 sekunder. Detta är också den största sidan med sina 4,35 MB. SVT får också ett relativt dåligt betyg i Google Pagespeed för både mobil och desktop. Snittbetyget för de tre sidorna för mobil blir 43 och för desktop 75. För både mobil och desktop anges att ta bort oanvänd javascript samt resurser som blockerar renderingen som de två främsta åtgärderna för att förbättra laddningstiderna. Den enskilt största förbättringen som föreslås gäller SVT Sida 3 på mobil mätning och gäller att ta bort resurser som blockerar renderingen, med en uppskattad förbättring på 3,14 sekunder.

### Vårdguiden

Sist ut i undersökningen är vårdguidens webbplats 1177.se. Här har jag utöver förstasidan, 1177 Sida 1 i Bilaga 1 (https://www.1177.se) tittat på sidan som rör råden för att minska smittspridningen i Kronoberg där jag bor (https://www.1177.se/Kronoberg/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/om-covid-19--coronavirus/skarpta-rad-for-att-minska-smittspridning-av-covid-19-i-kronoberg/), vilken kallas 1177 Sida 2 i Bilaga 1, samt en sida med allmän information om covid-19 (https://www.1177.se/Kronoberg/sjukdomar--besvar/lungor-och-luftvagar/inflammation-och-infektion-ilungor-och-luftror/om-covid-19--coronavirus/covid-19-coronavirus/), kallad 1177 Sida 3.

![Vårdguiden snapshot](../assets/img/1177.png)
1177 Sida 3, informationssida om covid-19.

Vårdguiden placerar sig vad gäller inläsningstider mellan Folkhälsomyndigheten och SVT, med en genomsnittlig laddningstid för de tre sidorna på 4,79 sekunder. Längst genomsnittstid har 1177 Sida 3 på 5,13 sekunder. Till skillnad från i SVTs och FHMs fall korrelerar detta inte med storleken på sidan. På 1177 är istället Sida 2 störst med 3,03 MB men har en något lägre laddningstid på i snitt 4,86 sekunder. Sida 3 som är långsammast landar på 2,45 MB. I Google Pagespeed får sidorna ett lågt betyg i mobil mätning på i snitt 43, men betydligt bättre på desktop med 87 i snitt. Som främsta förbättringsåtgärd för samtliga tre sidor och för både mobil och dator anges att läsa in viktiga resurser i förväg. På andra plats hamnar att ta bort javascript som inte används. Störst förbättringspotential ser Google Pagespeed i att läsa in viktiga resurser i förväg på 1177 Sida 2 på mobil, vilket uppskattningsvis skulle sänka inläsningstiden med 3,93 sekunder.  

### Diskussion och sammanfattning

I denna studie placerar sig Folkhälsomyndigheten högst upp i den inbördes rankingen mellan dessa tre webbplatser vad gäller inläsningstider. Myndighetens webbplats får genomgående starka resultat i Google Pagespeed och upplevs också snabb på både mobil och desktop. Det verkar uppenbart att de medvetet optimerat sin webbplats för att snabbt kunna leverera information och innehåll till allmänheten. Under pågående pandemi är detta såklart extra viktigt och man bör kunna anta att trafiken till webbplatsen varit relativt stor det senaste året. 

SVT är klart sämst i studien med ibland, i mitt tycke, för långa laddningstider. Detta är förstås subjektivt men personligen tycker jag att en sida börjar kännas väldigt långsam om inläsningstiderna överstiger fem sekunder. Detta beror också till viss del hur sidan läses in och jag upplever ändå SVTs webbplats som överlag relativt snabb och det mesta innehållet renderas också relativt snabbt i webbläsaren, men genomsnittet dras ned av att ett mindre antal resurser släpar efter och trillar in efterhand. Jag upplever dock inte att man behöver vänta på att sidorna laddar innan man kan börja läsa innehållet i dem. Överlag tycker jag att samtliga tre webbplatser klarar denna gräns bra. Vad gäller det sämsta resultatet på svt.se där inläsningstiden hamnar klart över denna gräns anser jag att det viktigaste är att detta inte märks. I mätning efter mätningar landar laddningstiden på SVT Sida 3 på mer än dubbelt så mycket som fem sekunder men det går betydligt snabbare än så innan sidan kan börja användas. Tydligt är dock att det finns stor förbättringspotential och personligen hade jag förväntat mig bättre optimering från ett så stort mediahus. 

Den vanligaste förbättringsåtgärden som Google Pagespeed föreslagit under arbetet med denna studie är att ta bort javascript som inte används. Det har dock inte hamnat överst över störst uppskattad tidsbesparing på någon av sidorna. Utöver detta har det varit lite spridda skurar i förbättringsförslag, men återkommande har också varit att ta bort resurser som blockerar rendering. Folkhälsomyndighetens sida fungerar redan väldigt väl men där tycks istället för stora bilder eller bilder i fel format vara det främsta problemet, och framförallt på mobil där resultatet är betydligt sämre än på desktop. Ett betydligt sämre resultat i Google Pagespeed när det gäller mobil kontra dator har dock varit genomgående och skillnaden har varit betydligt större på SVTs och Vårdguidens webbplatser där mobila mätningar ger direkt dåliga resultat medan desktop-mätningar ger åtminstone acceptabla resultat.

### Bilagor

Bilaga 1, rådata från DevTools Network- och Google Pagespeed-mätningar: https://docs.google.com/spreadsheets/d/1wGxINeWwluyNA2Mjb0PfuQkODMMqorpch4V-sVRlKfI/edit?usp=sharing

<p style="text-align: right">Simon Evertsson</p>
