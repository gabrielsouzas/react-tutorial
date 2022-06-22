import React, {Component} from "react";
import Table from './Table'

// Aqui os dados serão tratados com o uso do state, que permite a interação com o usuário

class App extends Component {
    // Aqui é instanciado um objeto do tipo state
    state = {
        // Esse objeto state vai conter tudo que quiser armazenar, nesse caso será  array characters
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
    }

    // Função para remover um item
    removeCharacter = (index) => {
        const {characters} = this.state
    
        this.setState({
            characters: characters.filter((character, i) => {
              return i !== index
            }),
        })
    }

    render() {
        const { characters } = this.state
      
        return (
          // Aqui são passados os dados criados no state e o método de remover que foi criado
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
          </div>
        )
      }
}


// Abaixo é demonstrado como é feito o tratamento de dados de uma tabela através do uso de props, que não permite interações com o usuário
/*
class App extends Component {
  render() {
    // Esse é um array com os dados que vão entrar na tabela
    const characters = [
        {
            name: 'Charlie',
            job: 'Janitor',
        },
        {
            name: 'Mac',
            job: 'Bouncer',
        },
        {
            name: 'Dee',
            job: 'Aspring actress',
        },
        {
            name: 'Dennis',
            job: 'Bartender',
        },
    ]
    return (
      // Aqui são passados os dados do array characters para a tabela através do characterData, que será trabalhada no container Table.js
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}

/* 

We export the component as App and load it in index.js. It's not mandatory to separate components into files, but an application will start to get unwieldy and out-of-hand if you don't.

*/
export default App