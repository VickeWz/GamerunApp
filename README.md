Checka [Notion](https://truth-dolomite-a8d.notion.site/Barn-Run-e883f206632e40ecb5bc5e3185ef91a5)

# Överlämning till GameRun

Tänkte förklara lite mer om hur projektstrukturen fungerar så att ni kan ta över kodbasen.  
* Appen är byggd i [**React Native**](https://reactnative.dev/docs/getting-started). Då det är ett av det mest använda frameworksen borde det finnas mycket tutorials.
* För styling använder vi en kombination av React Natives styles komponent och [React Natives version av Talwind, "**Native Wind**"](https://www.nativewind.dev/)
* För DB så använder vi [**Firebase Firestore**](https://firebase.google.com/docs/firestore). Ni kommer behöva [länka er egna databas](https://firebase.google.com/docs/guides) då det är inte är best practice att ni tar den vi äger.

Här är några features vi tänkt kan vara bra om ni ska jobba vidare med appen
* Konfiguerera pedometern (stegräknare), detta har vi tänkt med hjälp av https://github.com/agencyenterprise/react-native-health
* Automatisera ett schema för att generera challenges (dagens/veckans challenge). Även vidareutveckling av sortens challenges man kan göra är möjlig med mer data (se punkt 1)
* Viktigast av alla punkter är väl att vi inte har hunnit göra några användartester som är A och O när det kommer till apputveckling. Gör några tester och bygg om UI och funktionalitet efter feedback.
* Annars är det QOL (Quality of Life) ändringar såsom utökade animationer m.m. (Där har vi Figma Files som vi kan visa)

Stort lycka till i fortsatt utveckling!
