# Game

## REVIEW

Ik heb Tim's spel geprobeerd en het is een super leuk idee, waarschijnlijk lichtelijk gebaseerd op Dance Dance Revolution. 

Y • De code van het individuele project staat op GitHub.
Y • De game is online speelbaar.
Y • De game bevat minimaal één van de onderstaande extra uitdagingen.
N • De game heeft een startscherm en een eindscherm.  (niet op het moment dat ik het speelde)
N • Er zijn geen bugs.  (niet op het moment dat ik het speelde)
Het project maakt gebruik van deze OOP principes:
Y - Classes
Y - Encapsulation
Y - Composition
Y - Inheritance
 
 Extra uitdagingen:
Y • De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
N • De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
N • De game werkt met Canvas in plaats van DOM elementen
N • De game bevat local of online multiplayer.
N • De game werkt op mobiele schermen en ondersteunt touchscreen controls.
N • De game maakt gebruik van device api's zoals de camera, microfoon, gyroscoop of GPS.
N • De game gebruikt een externe library uit de lijst in deze modulewijzer. 

Pluspunten

Het is goed te spelen en een leuk idee. Het loopt goed alleen niet helemaal op de beat. De sprites Werken ook goed en passen mooi bij het spel. 

Tips

Je kan plaatje of video achter de pijltjes doen. Aan het einde zeggen hoeveel procent je hebt gehaald of hoeveel van de hoeveel punten dat je kon halen opschrijven. Ook misschien je punten wat groter of dichterbij je pijltjes dan hoef je niet ver weg te kijken en kan je blijven focussen op het spel. En feedback of je het goed aan het doen bent of dat je ze mist.

## Mijn eigen spel

https://stud.hosted.hr.nl/0884930/GarbageGame/

### Classes

Classes zijn de blauwdrukken van de objecten en andere dingen die je in je spel wil. Dit is toegepast bij mij voor de vuilnisbakken en het vuilnis, maar ook bij de verschillende schermen die ik gebruik. Dit is hier toegepast, omdat je zo alle code per object uit elkaar kan houden. Je programmeert per object. Elk object/class heeft zijn eigen pagina, wat op de eerste pagina te zien is bovenaan.

Hier zie je de Game class:
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/classesI.png)

Hier de PlayScreen class:
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/classesII.png)

Hier de GameObject class
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/classesIII.png)


### Encapsulation

Dit is het public, protected of private maken van variabelen en functies. Dit is handig voor wanneer je bijvoorbeeld zoekt waar iets vandaan komt of waar iets misgaat, als het private is moet je in het object zelf zoeken. Bij protected is het in het object zelf of een child object. Bij public kan het overal opgeroepen worden, dus private is opzich wel handiger, maar soms is public wel nodig. Soms moet je bijvoorbeeld twee dingen combineren die niet in de zelfde objecten zitten. <br>

Hier zie je public en protected gebruikt, public omdat het in PlayScreen gebruikt moet worden en protected omdat het in Trash of Trashcan gebruikt moet worden, wat een child is van GameObjects:
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/encapsulationI.png)

Deze zijn private omdat ze alleen in Trashcan gebruikt hoeven te worden:
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/encapsulationII.png)

### Composition

Composition is het bepalen welke class onder welke andere class valt en het linken en doorgeven van eigenschappen daarvan. Zoals dat in mijn spel het playscreen gameobjects heeft, die bestaan uit trashcans en trashes. <br>

Hier is een voorbeeld van Game heeft screens (StartScreen, PlayScreen en GameOver):
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/compositionI.png)

En PlayScreen heeft een trashes en twee trashcans en een score:
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/compositionII.png)

### Inheritance

Inheritance is het overerven van eigenschappen door objecten. Je maakt een parant klas die de overlappende eigenschappen van twee child classes krijgt en daaruit laat je die twee child classes hun eigenschappen halen. Dat is hier gebeurd met de eigenschappen van de vuilnisbak en het vuilnis, ze hebben allebei bijvoorbeeld een X en Y positie en een div variabele. Daardoor kan je deze heel goed samenvoegen in een parent class.

GameObject is de parent van Trashcan en heeft daarom de dingen die daar in het geel omcirkeld zijn. Als die niet in een parent hadden gestaan, hadden ze dubbel in Trashcan en Trash gestaan. Nu wordt het daar doorgegeven in de constructor wat daar in het oranje omcirkeld staat. Wat daar in het heel licht oranje staat is het uiteindelijk opvangen van de dingen die daar in de constructor meegegeven werden door bijvoorbeeld trashcan. 
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/overervenI.png)

Hier zie je in het geel dat Trashcan GameObject extends. Het andere gele omcirkelde geeft aan wat de trashcan aan de GameObject class geeft, dat is wat 'super' inhoud. Sommige van deze dingen krijgt hij ook weer mee in de constructor vanuit de PlayScreen, dit is blauw omcirkeld. Dat oranje is wat niet in GameObject staat, omdat dit iets is wat alleen dit object heeft en niet alle GameObjects. Trash hoeft niet beïnvloedbaar te zijn door de Keys.
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/overervenII.png)

### Klassendiagram
![](https://stud.hosted.hr.nl/0884930/wp-content/uploads/2018/06/klassendiagram-note-2.png)
