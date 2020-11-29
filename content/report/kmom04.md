---
Title: Kmom04
Description: Part 4
Template: kmom
---

Kursmoment 4
==================

* [kmom01](kmom01)
* [kmom02](kmom02)
* [kmom03](kmom03)
* [kmom04](kmom04)
* [kmom05](kmom05)
* [kmom06](kmom06)
* [kmom10](kmom10)

Skrivuppgiften var intressant men svår. Jag tyckte det var väldigt besvärligt att exakt definiera vilken typ av färgschema som användes i åtminstone två av de webbplatser jag undersökte även efter att ha läst igenom guiden och övriga artiklar till kursmomentet och även om jag känner att jag förstår de grundläggande idéerna/principerna bakom olika sorters färgscheman. Dock var det väldigt värdefullt och nyttigt att dels läsa in sig lite på ämnet och ägna lite tid åt att reflektera över det.

Jag hade i princip ett ganska avskalat, monokromt färgschema i rött på mitt tema sedan tidigare så jag valde att fortsätta med det. Förändringen jag gjorde var att försöka försäkra mig om att de två röda nyanser jag använder hör ihop genom att lägga in min basfärg i dels Adobe Color och paletton.com och generera ett monokromt färgschema för att plocka fram min andra röda nyans. Jag har heller inte någon accentfärg utan använder utöver rött endast vitt och en väldigt mörk grå/ljusare svart i min footer och navigation.

Mitt dark theme gjorde jag genom att kopiera och ändra i några av mina scss-filer som jag sedan importerar till style-dark.scss. I variables.scss respektive variables-dark.scss ligger mina färgvariabler och det är framförallt de två som skiljer sig åt. Redan i tidigare kursmoment har jag glatt mig åt möjligheten att använda variabler i SASS och här blev nyttan med det såklart extra tydlig. Jag hade inte särskilt många av mina färger i variabler innan och fick ändra på det och det hade varit väldigt mycket mer besvärligt att testa hur olika färger såg ut på olika platser utan att ha alla färger samlade i två lättöverskådliga dokument för ljust respektive mörkt tema.

Det jag framförallt skulle vilja säga att jag lärt mig den här veckan, förutom ett par teknikaliteter som att t ex sätta upp sessionen i pico, är att färg är väldigt komplicerat och att det nog egentligen inte finns någon gräns för hur komplicerat det kan göras. Därför känns det dock rimligt att lära sig ett par trygga grundregler att förhålla sig till om man blir osäker. Jag har vanligtvis förlitat mig mycket på känsla för alla typer av olika färgsättningsbehov jag har stött på till och från i mitt liv och aldrig gjort något ambitiöst försök att sätta mig in i sådant som färgteori eller färglära. 

Det var också väldigt intressant, och inte så lätt som jag kanske först inbillade mig, att försöka avgöra vilket färgschema som användes på de webbplatser jag undersökte eller för den delen implementera ett lite mer strikt och medvetet färgschema på min egen. Ibland kändes det verkligen som att försöka pressa in fyrkantiga klossar i färgschematiska runda hål, eller eventuellt vice versa, vilket jag också nämner i min färganalys. Jag tyckte dock att jag fann visst stöd för den känslan i ett par av artiklarna som hänvisades till i kursmomentets instruktioner, t ex de två på huevaluechroma.com.
