import { Container } from "./styles";
import { GoFile, GoNote, GoGraph} from 'react-icons/go';

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Unidades curriculares</p>
                    <GoFile size={40}/>
                </header>
                <strong>25</strong>
            </div>
            <div>
                <header>
                    <p>Atividades</p>
                    <GoNote size={40}/>
                </header>
                <strong>80</strong>

            </div>
            <div className="highlight-backgroung">
                <header>
                    <p>Média geral</p>
                    <GoGraph size={40}/>
                </header>
                <strong>9.17</strong>
            </div>
        </Container>
    )
}