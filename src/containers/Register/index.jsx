import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Container, Form, InputContainer, LeftContainer, RightContainer, Tittle, Link } from './styles.js'
import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button/index.jsx'
import { api } from '../../services/api.js'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom"



export function Register() {

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório'),
            email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
            password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),//valida os campos a partir dos dados que recebe no schema
    })

    const navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            const { status } =
            await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password
            }, {
                validateStatus: () => true
            })

            if (status === 200 || status === 201){
                setTimeout(() => {
                    navigate('/')
                }, 2000);
                toast.success('Conta criada com sucesso!🚀😁')
            } else if(status === 400){
                toast.error('E-mail já cadastrado. Faça login!')
            } else{
                throw new Error()
            }
            console.log(status)

        } catch (error) {
            toast.error('Deu ruim no sistema😭')
        }
        
    }

    console.log(errors)


    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo" />
            </LeftContainer>

            <RightContainer>
                <Tittle>Criar conta</Tittle>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" placeholder="Digite seu nome" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>
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

                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" placeholder="Confirme sua senha" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Criar conta</Button>
                    <p>Já possui uma conta? <Link to="/login">Clique aqui</Link></p>
                </Form>
            </RightContainer>
        </Container>
    )
}