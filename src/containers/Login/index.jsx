import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, Form, InputContainer, LeftContainer, RightContainer, Tittle, Link } from './styles.js'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"
import { useUser } from "../../hooks/UserContext.jsx"


export function Login() {

    const navigate = useNavigate()
    const { putUserData } = useUser()

    const schema = yup
        .object({
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),//valida os campos a partir dos dados que recebe no schema
    })

    const onSubmit = async (data) => {

        const { data: userData } = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password
            }),
            {
                pending: 'Verificando dados...',
                success: {
                    render() {
                        setTimeout(() => {
                            if (userData?.admin) {
                                navigate('/admin/pedidos')
                            } else {
                                navigate('/')
                            }

                        }, 2000);
                        return 'Seja bem-vindo(a) 👌'
                    }
                },
                error: 'E-mail ou senha incorretos 🤯'
            }
        )

        putUserData(userData)

        // localStorage.setItem('token', token)
    }

    console.log(errors)


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Tittle>Olá, seja bem vindo ao <span>Dev Burguer</span>! <br />
                    Acesse com seu <span>Login e senha.</span></Tittle>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="text" placeholder="Digite seu email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" placeholder="Digite sua senha" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">Entrar</Button>
                    <p>Não possui uma conta? <Link to="/register">Cadastre-se</Link></p>
                </Form>
            </RightContainer>
        </Container>
    )
}