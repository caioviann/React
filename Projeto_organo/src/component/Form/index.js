import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Form.css'
const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
    ]
const onSave = (event) =>{
    event.preventDefault()
    console.log('form foi submetido')
}

    return (
        <section className='forms'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite o seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList mandatory={true} label="Time" itens={times}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form