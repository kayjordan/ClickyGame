import React, { Component } from "react";
import Container from "../Container";
import GameCard from "../GameCard";
import Header from "../Header";
import data from "../../data";


class Game extends Component {

   state = {
       data,
       score: 0,
   };


   gameCardClick = (id) => {
      let guessedCorrectly = false;
      // newData will be the data array with updated clicked properties
      const cardArray2 = this.state.data.map(item => {
        if (item.id === id) {
          if (!item.clicked) {
            item.clicked = true;
            guessedCorrectly = true;
          }
        }
        return item;     
      });
      // if guessedCorrectly = true, run the correctGuess function,
      // else run the wrongGuess function
      guessedCorrectly ? this.correctGuess(cardArray2) : this.wrongGuess(cardArray2);
    };
  

   // shuffle the imported data array in random order
   shuffleDeck(data) {
       let cardArray2 = data.sort(function(a, b){return 0.5 - Math.random()});
       return cardArray2;
   };

   // resets all the clicked properties to false
   resetDeck(data) {
       const resetData = data.map(item => ({ ...item, clicked: false }));
       // console.log(data);
       // console.log(resetData);
       return this.shuffleDeck(resetData);
     };

   // checks to see if score is higher than the topscore then updates the state with the update array
   correctGuess(cardArray2) {
       let newScore = this.state.score;
       newScore++
       this.setState({
           data: this.shuffleDeck(cardArray2),
           score: newScore,
        
       })
   }

   // restarts the game with fresh data
   wrongGuess (cardArray2) {
       this.setState({
           data: this.resetDeck(cardArray2),
           score: 0
       })
       alert("Game over!");   
      }

   // when a card is clicked, check if it has been clicked before,
   // then update that cards clicked property
   
   

   render() {
       return (
           <div>
               <Header score={this.state.score} />
         
               <Container>
                   {
                       this.state.data.map(item => (
                           <div className="animated rollIn">
                               <GameCard
                                   key={item.id}
                                   id={item.id} 
                                   image={item.image}
                                   animate={!this.state.score}
                                   clicked={item.clicked}
                                   handleClick={this.gameCardClick}
                               />      
                           </div>  
                       ))
                   }
               </Container>
    
           </div>
       );
   }
}

export default Game;
