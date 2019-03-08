import React, { Component } from 'react';
import { hola } from './info.js';
import Input from './Input';

class App extends Component {

  state = {
    cambio: "Zoram"
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ cambio: "Gamero" });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Input
          label0={"Alex"}
          label1={"Elias"}
          label2={this.state.cambio}
        />
        <button style={{ 
          width: "50%",  
          height: 50, 
          background: "#575757", 
          fontSize: 12
        }}>Boton</button>

        <iframe 
          style={{
            width: "40%", 
            height: 50,
            boxShadow: '10px 10px 10px #000'
          }}          
          src="https://www.youtube.com/embed/aJOTlE1K90k" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    );
  }
}

export default App;

//un video de youtube marroon 5 ancho de 40% y alto de 50 px. 
//Poner sombra orientada a la derecha con un grosor de 10 px 
//color negro y ya!!!!
// https://www.youtube.com/watch?v=aJOTlE1K90k
