import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(): JSX.Element{
   
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    }, [])

    return(
       <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="deposit">R$ 100,00</td>
                        <td>Alimentação</td>
                        <td>20/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$ 200,00</td>
                        <td>Alimentação</td>
                        <td>20/03/2021</td>
                    </tr>
                </tbody>
            </table>
       </Container>
    );
}