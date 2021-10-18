# Requirement specification

## Purpose of the application

With the application users are able to keep track of the lessons they have held.
Users can log the duration, the date and different contents of the lessons.
There are ready-made option for the contents in the application. Users can also create contents by themselves.
Many registered users are able to use the application? They all have their unique list of lessons.
The list is possible to upload to a spreadsheet. This way it could be shared or modify with other applications.
For UX would be pleasant the application shows the current weather.

## Users

In the beginning there is only one user role. It's possible that a test user role might be added later. It would 
be for testing functionality of the app without saving data to the database.


## User interface draft

The application consists of four different views.

<img src="https://raw.githubusercontent.com/ollipo/projectLessonApp/master/Documentation/user_interface_draft.png" width="750">

The application opens to a login page. From there it is possible to proceed to a new user creation view and after a successful 
login to a view with lessonlist. From the lessonlist view it is possible to proceed to new lesson creation view.

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