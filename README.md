# solidabis frontend koodihaaste 2022

## nextjs typescript frontend

### backend käynnistyy backend-kansiosta komennolla

```
 ./gradlew bootRun

```

tai

```
docker run -p 8080:8080 solidabis/koodihaaste22:latest

```

### frontend käynnistyy frontend-kansiosta joko yarnilla tai npm:llä osoitteeseen localhost:3000

```
yarn install
yarn dev

```

```
npm install
npm run dev

```

### Backend

Backendi muutettu hyväksymään localhost:3000 osoitteesta tulevat pyynnöt.

### Frontend

Frontend toteutettu next.js react-frameworkilla typescriptiä käyttäen.

Frontendissä ravintoloiden ja lounaiden haku toteutettu node.js omalla fetch API:lla ./services kansiossa.

./pages kansiossa etusivu ja tulosten haku sivut, jotka kutsuvat kaikki tarvittavat komponentit.

Kaikki ohjelman käyttämät komponentit sijaitsevat ./components kansiossa.

Kaikki ohjelman testit sijaitsevat ./cypress/iintegration kansiossa

Ohjelman kaikki css kansiossa ./styles

Ohjelman käyttämät tyypit sijaitsevat tyypit kansiossa ./types
