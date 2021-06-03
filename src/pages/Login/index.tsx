import { Link } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Container, Content, FormContainer, InputContainer, Background, Error} from "./styles";
import { useForm } from 'react-hook-form';

interface formData{
    email: String;
    password: String;
}

export function Login(){

    const { register, handleSubmit, formState: {errors}} = useForm<formData>()

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu login</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiMail size={40} />
                            <input 
                                type="email"
                                placeholder="E-mail"
                                {...register("email",{required:true})}
                            />
                        </InputContainer>
                        {errors.email && <Error>O preencimento do campo é obrigatório!</Error>}
                        <InputContainer>
                            <FiLock size={40} />
                            <input 
                                type="password"
                                placeholder="Senha"
                                {...register("password",{required:true})}
                            />
                        </InputContainer>
                        {errors.password && <Error>O preencimento do campo é obrigatório!</Error>}
                        <Button type="submit" >Entrar</Button>
                    </form>
                    <Link to="/register">
                        <FiLogIn size={40}/>
                        Cadastre seu acesso
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}