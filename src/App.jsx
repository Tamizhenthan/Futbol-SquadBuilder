import SquadBuilder from './components/SquadBuilder'

const App = () => {
  const players = [
    
    {
      "id": 10,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Leo Messi",
      "shirtNumber": 10
    },
    {
      "id": 36,
      "positionType": "attacker",
      "alternativePositions": "midfielder",
      "name": "Raphinha",
      "shirtNumber": 11
    },
    {
      "id": 1,
      "positionType": "goalkeeper",
      "alternativePositions": "",
      "name": "Gianluigi Donnarumma",
      "shirtNumber": 31
    },
    {
      "id": 2,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "João Cancelo",
      "shirtNumber": 2
    },
    {
      "id": 3,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Raphael Varane",
      "shirtNumber": 4
    },
    {
      "id": 4,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Mats Hummels",
      "shirtNumber": 6
    },
    {
      "id": 5,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Alphonso Davies",
      "shirtNumber": 19
    },
    {
      "id": 78,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Mohamed Salah",
      "shirtNumber": 11
    },
    {
      "id": 39,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Trent Alexander-Arnold",
      "shirtNumber": 66
    },
    {
      "id": 6,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "N'Golo Kanté",
      "shirtNumber": 7
    },
    {
      "id": 7,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Pedri",
      "shirtNumber": 8
    },
    {
      "id": 37,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Jude Bellingham",
      "shirtNumber": 5
    },
    {
      "id": 8,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Kevin De Bruyne",
      "shirtNumber": 17
    },
    {
      "id": 9,
      "positionType": "attacker",
      "alternativePositions": "midfielder/defender",
      "name": "Jadon Sancho",
      "shirtNumber": 11
    },
    {
      "id": 100,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Kylian Mbappé",
      "shirtNumber": 10
    },
    {
      "id": 11,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Cristiano Ronaldo",
      "shirtNumber": 7
    },
    {
      "id": 13,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Virgil van Dijk",
      "shirtNumber": 4
    },
    {
      "id": 18,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Erling Haaland",
      "shirtNumber": 9
    },
    {
      "id": 20,
      "positionType": "goalkeeper",
      "alternativePositions": "",
      "name": "Alisson Becker",
      "shirtNumber": 1
    },
    {
      "id": 24,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Antoine Griezmann",
      "shirtNumber": 17
    },
    {
      "id": 26,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Vinicius Junior",
      "shirtNumber": 7
    },
    {
      "id": 27,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Joshua Kimmich",
      "shirtNumber": 6
    },
    {
      "id": 28,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Gavira",
      "shirtNumber": 6 
    },
    {
      "id": 29,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Robert Lewandowski",
      "shirtNumber": 9
    },
    {
      "id": 30,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Lamine Yamal",
      "shirtNumber": 19
    },
    {
      "id": 31,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Modric",
      "shirtNumber": 10
    },
    {
      "id": 32,
      "positionType": "goalkeeper",
      "alternativePositions": "",
      "name": "Ederson",
      "shirtNumber": 1
    },
    {
      "id": 33,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Declan Rice",
      "shirtNumber": 5
    },
    {
      "id": 34,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Saka",
      "shirtNumber": 7
    },
    {
      "id": 35,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Antonio Rudiger",
      "shirtNumber": 3
    },
    
    {
      "id": 37,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Marc Casado",
      "shirtNumber": 17
    },
    {
      "id": 38,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Ronald Araujo",
      "shirtNumber": 4
    },
    {
      "id": 40,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Harry Kane",
      "shirtNumber": 9
    },
    {
      "id": 41,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Jamal MUsiala",
      "shirtNumber": 42
    },
    {
      "id": 42,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Cubarsi",
      "shirtNumber": 2
    },
    {
      "id": 43,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Aljendro Balde",
      "shirtNumber": 3
    },
    {
      "id": 44,
      "positionType": "goalkeeper",
      "alternativePositions": "",
      "name": "Marc Ters stagon",
      "shirtNumber": 1
    },
    {
      "id": 45,
      "positionType": "defender",
      "alternativePositions": "",
      "name": "Jules Kounde",
      "shirtNumber": 23
    },
    {
      "id": 46,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Rodri",
      "shirtNumber": 16 
    },
    {
      "id": 47,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Rashford",
      "shirtNumber": 10
    },
    {
      "id": 48,
      "positionType": "midfielder",
      "alternativePositions": "",
      "name": "Bruno fernandes",
      "shirtNumber": 18
    },
    {
      "id": 49,
      "positionType": "goalkeeper",
      "alternativePositions": "",
      "name": "Andre Onana",
      "shirtNumber": 1
    },
    {
      "id": 50,
      "positionType": "attacker",
      "alternativePositions": "",
      "name": "Son",
      "shirtNumber": 7
    }
  ]
  return (
    <SquadBuilder players={players} defaultJerseyColor={"rgb(0,0,0)"} defaultJerseyTextColor={"#FFFF00"} formationTextColor="#000000"/>
  )
}
export default App
