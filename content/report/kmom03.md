---
Title: Kmom03
Description: Part 3
Template: kmom
---

Kursmoment 3
==================

* [kmom01](kmom01)
* [kmom02](kmom02)
* [kmom03](kmom03)
* [kmom04](kmom04)
* [kmom05](kmom05)
* [kmom06](kmom06)
* [kmom10](kmom10)

Jag tyckte att kursmomentet gick bra. Grid och flexbox har varit lite halvmystiska tekniker för mig, jag har försökt tidigare några gånger, lite här och där, att implementera dem och förstå dem, men känner efter detta kmom att jag har en betydligt bättre förståelse för grid än vad jag haft innan. Det är verkligen lätt att se fördelarna med det när det kommer till att placera ut sina element på ett smidigt och precist sätt. 

Min SASS-kod är fortfarande inte så väl uppdelad som jag hoppas hinna ordna innan kursens slut. Report.scss ligger ju i en egen modul nu, vilket känns väldigt rimligt och gör det lätt att hitta element jag eventuellt vill ändra i rapportsidan. Min base.scss borde antagligen delas upp i fler moduler. Åtminstone bör delar av den lyftas ur och placeras i andra mobuler. Jag har också fortfarande kvar mycket av den css-kod som följde med i dbwebb-temat, så det finns endel upprensning jag antagligen hade tjänat på att göra.

Jag har inte gjort om sidans layout utöver rapport-sidan. Jag är rätt nöjd med hur saker och ting är placerade i övrigt och har inte känt mig lockad att ändra på det. Det är ju ett enkelt tema på många sätt och eftersom jag än sålänge inte har särskilt många element på de andra undersidorna, har jag inte känt något större behov av att lägga dem i ett grid. 

Vid något tillfälle hoppas jag dock hinna göra detta. Mest för att jag redan tycker att det känns som ett väldigt tydligt och bra sätt att styra spacing mellan olika element. "Gap" ger ju en slags standardiserad och lättöverskådlig "grundspacing" för allt som ligger i ett specifikt grid för att sedan eventuellt justera på individuella element. Jag tror det kan bli enklare att hålla reda på varifrån olika whitespaces kommer ifrån och därmed också hålla det konsekvent över sidan så att allt står i vettiga och "enhetliga" proportioner till varandra på ett sätt som antagligen kan bli mer harmoniskt.

TIL är en betydligt klarare förståelse för grid, vilket känns väldigt trevligt. Liksom med SASS så känns det lite som en teknik jag lite halvt undermedvetet har saknat. Jag har känt till sedan tidigare att det existerar men inte riktigt hur det funkar. Nu med lite bättre koll så tycker jag att fördelarna med det är väldigt tydliga, inte minst när det gäller att eventuellt tillämpa sådant som gyllene snittet eller "rule of thirds" på ett dynamiskt sätt. 

Enheten "fr" var kanske den största uppenbarelsen som jag missat när jag försökt använda grid tidigare. Den gör livet mycket enklare och löser endel problem jag bråkat mig runt på annat sätt tidigare. Nu saknar jag bara att kunna lägga den i en variabel på något sätt för att kunna överföra den till height också. Det hade verkligen känts användbart att på t ex report-landningssidan kunna spara vad som råkar vara 1fr på det specifika gridet för att sedan definiera height på varje box som 1fr * 1.618 eller liknande. 
