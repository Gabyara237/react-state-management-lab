import { useState } from "react";
import './App.css'
import SurvivorImg from './assets/images/Survivor.png';
import ScavengerImg from './assets/images/Scavenger.png';
import ShadowImg from './assets/images/Shadow.png';
import TrackerImg from './assets/images/Tracker.png';
import SharpshooterImg from './assets/images/Sharpshooter.png';
import MedicImg from './assets/images/Medic.png';
import EngineerImg from './assets/images/Engineer.png';
import BrawlerImg from './assets/images/Brawler.png';
import InfiltratorImg from './assets/images/Infiltrator.png';
import LeaderImg from './assets/images/Leader.png';


const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [message, setMessage] = useState("")
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: SurvivorImg,
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: ScavengerImg,
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: ShadowImg,
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: TrackerImg,
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: SharpshooterImg,
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: MedicImg,
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: EngineerImg,
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: BrawlerImg,
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: InfiltratorImg,
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: LeaderImg,
      },
    ]
  )

 const totalStrength = team.reduce((total,fighter)=> total+fighter.strength,0)
 const totalAgility = team.reduce((total,fighter)=> total + fighter.agility, 0)

 const  handleAddFighter = (zombieFighter) =>{

  if(money>= zombieFighter.price){
    setMessage("");
    setTeam([...team, zombieFighter]);
    setZombieFighters(zombieFighters.filter(fighter => fighter.id !== zombieFighter.id));
    setMoney(money- zombieFighter.price)
  }else{
    setMessage("Not enough money")
  }
 }

  const handleRemoveFighter = (zombieFighter) =>{
    setTeam(team.filter(member => member.id !== zombieFighter.id));
    setMoney(money+zombieFighter.price)
    setZombieFighters([...zombieFighters,zombieFighter])
    setMessage("")
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <p>Money: {money}</p>
      {message!==""?<p>{message}</p>:null}
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>

      <h2>Team</h2>
      {team.length=== 0? <p>Pick some team members!</p>: 
        <ul>
        { team.map((zombieFighter)=>(
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img}/>
            <p>Name: {zombieFighter.name}</p>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={()=> handleRemoveFighter(zombieFighter)}>Remove</button>
          </li>
        ))
        }
      </ul>
      }
      
      <h2>Fighters</h2>
      <ul>
        { zombieFighters.map((zombieFighter)=>(
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img}/>
            <p>Name: {zombieFighter.name}</p>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={()=>handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))
        }
      </ul>

    </>
  );
}

export default App
