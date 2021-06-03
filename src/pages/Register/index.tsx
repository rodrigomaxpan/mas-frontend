import { Link } from 'react-router-dom';
import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'
import { Button } from '../../components/Button';
import { Container, Content, FormContainer, InputContainer, Background, Error} from "./styles";
import { useForm } from 'react-hook-form';


interface formData{
    name: String;
    email: String;
    password: String;
}


export function Register(){

    const { register, handleSubmit, formState: {errors}} = useForm<formData>()

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)))

    return(
        <Container>
            <Content>
                <FormContainer>
                    <h2>Faça seu cadastro</h2>
                    <form onSubmit={onSubmit}>
                        <InputContainer>
                            <FiUser size={40} />
                            <input 
                                type="text"
                                placeholder="Nome"
                                {...register("name",{required:true})}
                            />
                        </InputContainer>
                        {errors.name && <Error>O preencimento do campo é obrigatório!</Error>}
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
                        <Button type="submit" >Cadastrar</Button>
                    </form>
                    <Link to="/">
                        <FiArrowLeft size={40}/>
                        Voltar para login
                    </Link>
                </FormContainer>
            </Content>
            <Background />
        </Container>
    )
}