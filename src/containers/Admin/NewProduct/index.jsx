import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Image } from "@phosphor-icons/react"
import { Container, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, ErrorMessage, CheckBoxContainer } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
        category: yup.object().required('Selecione uma categoria'),
        offer: yup.boolean().default(false),
        file: yup.mixed().
            test('required', 'Escolha um arquivo para continuar', (value) => {
                return value && value.length > 0
            }).test('fileSize', 'Carregue arquivos até 5mb', (value) => {
                return value && value.length > 0 && value[0]?.size <= 5 * 1024 * 1024
            }).test('fileType', 'Carregue arquivos do tipo PNG ou JPEG', (value) => {
                return value && value.length > 0 && (value[0]?.type === 'image/png' || value[0]?.type === 'image/jpeg')
            })
    })


export function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories")

            setCategories(data)

            console.log(data)
        }

        loadCategories()
    }, [])


    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price * 100)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0])
        productFormData.append('offer', data.offer)


        await toast.promise(api.post('/create-products', productFormData), {
            pending: 'Cadastrando produto...',
            success: 'Produto cadastrado com sucesso!',
            error: 'Erro ao cadastrar produto! Tente novamente mais tarde.',
        })

        setTimeout(() => {
            navigate('/admin/produtos')
        }, 2000)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input
                            type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value?.target?.files[0]?.name)
                                register("file").onChange(value)
                            }}
                        />

                        {fileName || "Clique para selecionar uma imagem"}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={category => category.name}
                                getOptionValue={category => category.id}
                                placeholder="Selecione uma categoria"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <CheckBoxContainer>
                        <input type="checkbox" {...register("offer")} />
                        <Label>Produto em oferta</Label>
                    </CheckBoxContainer>
                </InputGroup>

                <SubmitButton type="submit">Cadastrar</SubmitButton>
            </Form>
        </Container>
    )
}