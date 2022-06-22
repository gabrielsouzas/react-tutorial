import React, {Component} from "react";

/* Como o React é baseado em Componentes, podemos mehorar o código de uma tabela utilizando a criação desses componentes, por exemplo, a tabela abaixo:

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
        </tr>
        <tr>
            <td>Dennis</td>
            <td>Bartender</td>
        </tr>
    </tbody>
</table>

Ficaria como no código logo abaixo:
*/

// Aqui é criado o cabeçaho da tabela como um componente
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

// Aqui é criado o corpo da tabela
// Também são passados os dados através do parametro props, que vem do App.js
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            // Adicionado a key index que é recomendada no uso de listas com React
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
    
    
    // Aqui foi removido o corpo
        /*
        
        <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody>

        Porque o React pode tratar dados através de propriedades, essas propriedades serão setadas na classe App.js

        */

        
        
}

// Agora é possível instanciar os componentes da tabela para criá-la em nossa aplicação

class Table extends Component {
    render() {
        // Aqui são tratados os dados passados para o componente Table no App.js
        const {characterData, removeCharacter} = this.props

        return (
            // Aqui são passados os dados para o corpo da tabela
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

export default Table