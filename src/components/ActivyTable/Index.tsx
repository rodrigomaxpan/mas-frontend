import { Container } from "./styles";

export function ActivyTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Unidade curricular</th>
                        <th>Atividades</th>
                        <th>Avaliação</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programação web</td>
                        <td>Desenvolvimento do front-end</td>
                        <td>10</td>
                        <td>23/05/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}