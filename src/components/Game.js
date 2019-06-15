import React from "react";
import Card from "./Card";
import Jumbo from "./Jumbo";
import Nav from "./Nav";
import Array from "./Array";

class Game extends React.Component{
    
    state= {
        current_score: 0,
        high_score: 0,
        stored_cards: Array,
        message: "Welcome, please click an image to start!"
    }

    check_answer= id =>{
        console.log(id);
       let temp= this.state.stored_cards;
       if(temp[id].picked === false){
           temp[id].picked = true;
           let current= this.state.current_score + 1;
           let high= this.state.high_score;

            if(current >= high){
                this.setState({
                    stored_cards: this.shuffle(temp),
                    current_score: current,
                    high_score: current,
                    message: "You Guessed Correctly"
                });
            }
            else{
                this.setState({
                    stored_cards: this.shuffle(temp),
                    current_score: current,
                    message: "You Guessed Correctly"
                });
            }
       }
       else{
            for(let i= 0; i<temp.length;i++){
                temp[i].picked= false;
            }
            this.setState({
                stored_cards: this.shuffle(temp),
                current_score: 0,
                message: "You Guess Incorrectly, Try Again"
            });
            console.log(this.state.stored_cards);
       }
    }

    shuffle= array =>{
        return array.sort(() => Math.random() - 0.5);
    }

    render(){
        return(
            <div>
                <Nav 
                    message= {this.state.message}
                    current= {this.state.current_score}
                    high= {this.state.high_score}
                />
            <Jumbo />
            <div className= "container">
                <div className="row justify-content-center">
                    {this.state.stored_cards.map((card, index) =>{
                        return(
                            <Card 
                                id= {index}
                                src= {card.src}
                                check_answer= {this.check_answer}
                            />
                        );
                    })}
                </div>
            </div>
            </div>

        );
    }

    

}

export default Game;