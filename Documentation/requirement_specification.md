# Requirement specification

## Purpose of the application

With the application users are able to keep track of the lessons they have held.
Sovelluksen avulla käyttäjien on mahdollista pitää kirjaa pitämistään opetustunneista.
Users can log the duration, the date and different contents of the lessons.
Pitämästään opetustunneista voi kirjata niiden keston, päivämäärän sekä sisällöt.
There are ready-made option for the contents in the application. Users can also create contents by themselves.
Sisältövaihtoehtoja annetaan sovelluksessa valmiina, mutta niitä voi luoda myös itse.
Many registered users are able to use the application? They all have their unique list of lessons.
Sovellusta on mahdollista käyttää useamman rekisteröityneen käyttäjän, joilla kaikilla on oma yksilöllinen tuntilistansa.
The list is possible to upload to a spreadsheet. This way it could be shared or modify with other applications.
Lista olisi mahdollista ladata taulukkolaskentatiedostoksi, jota sitä voi mahdollisesti jakaa tai jatkokäsitellä muilla sovelluksilla.
For UX would be pleasant the application shows the current weather.

## Käyttäjät

Alkuvaiheessa sovelluksella on ainoastaan yksi käyttäjärooli eli _normaali käyttäjä_. Myöhemmin sovellukseen saatetaan lisätä suuremmilla oikeuksilla varustettu _pääkäyttäjä_.

## Käyttöliittymäluonnos

Sovellus koostuu kolmesta eri näkymästä

<img src="https://raw.githubusercontent.com/ollipo/projectLessonApp/blob/master/Documentation/user_interface_draft.png" width="750">

Sovellus aukeaa kirjautumisnäkymään, josta on mahdollista siirtyä uuden käyttäjän luomisnäkymään tai onnistuneen kirjautumisen yhteydessä kirjaantuneen käyttäjän tehtävälistaan.

## Perusversion tarjoama toiminnallisuus

### Ennen kirjautumista

- käyttäjä voi luoda järjestelmään käyttäjätunnuksen
  - käyttäjätunnuksen täytyy olla uniikki ja pituudeltaan vähintään 3 merkkiä

- käyttäjä voi kirjautua järjestelmään
  - kirjautuminen onnistuu syötettäessä olemassaoleva käyttäjätunnus kirjautumislomakkeelle
  - jos käyttäjää ei olemassa, ilmoittaa järjestelmä tästä

### Kirjautumisen jälkeen

- käyttäjä näkee omat tekemättömät työt eli _todot_

- käyttäjä voi luoda uuden todon
  - luotu todo näkyy ainoastaan sen luoneelle käyttäjälle

- käyttäjä voi merkitä todon tehdyksi, jolloin todo häviää listalta

- käyttäjä voi kirjautua ulos järjestelmästä

## Jatkokehitysideoita

Perusversion jälkeen järjestelmää täydennetään ajan salliessa esim. seuraavilla toiminnallisuuksilla

- tehdyksi merkittyjen todojen tarkastelu
- tehdyksi merkittyjen todojen merkkaaminen tekemättömiksi
- todon tietojen editointi
- todojen järjestely tärkeysjärjestykseen
- todojen määrittely muille käyttäjille
- käyttäjätiimit, jotka näkevät kaikki yhteiset todot
- mahdollisuus useampaan erilliseen todo-listaan
- lisätään todoon kenttä, johon on mahdollista merkitä tarkempia todoon liittyviä tietoja
- käyttäjien yhteyteen salasana, joka vaaditaan kirjautuessa
- käyttäjätunnuksen (ja siihen liittyvien todojen) poisto