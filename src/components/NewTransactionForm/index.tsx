import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Content, Overlay, RadioItem, RadioRoot, Title, SetNewTransaction } from "./styles";

type closeModalProps = {
    onOpenChange : (closeIt:boolean) => void
}

const NewTransactionSchema = z.object({
    description: z.string(),
    value: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
    
})

type NewTransactionFormInputs = z.infer<typeof NewTransactionSchema>

export function NewTransactionForm(props:closeModalProps){
    const {createNewTransactions} = useContext(TransactionsContext)
    const {register , control, handleSubmit, reset} = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(NewTransactionSchema),
        defaultValues: {
            description: '',
            type: 'income',
            category: ''
        }
    })

    function handleCreateNewTransaction(data: NewTransactionFormInputs){
        const {description, value, category, type} = data
        createNewTransactions({description, value, category, type})
        reset()
        props.onOpenChange(false)
    }

    return(
        <Dialog.Portal>
                <Overlay />
                    <Content>
                    <Dialog.Close asChild>
                        <X size={24} />
                    </Dialog.Close>
                    <Title>Nova Transação</Title>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            {...register('description')} 
                            placeholder="Descrição"/>
                        <input 
                            type="number" 
                            {...register('value',{valueAsNumber: true})} 
                            placeholder="Preço"/>
                        <input 
                            type="text" 
                            {...register('category')} 
                            placeholder="Categoria"/>
                        <Controller 
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return(
                                <RadioRoot
                                    onValueChange={field.onChange}
                                    value={field.value}    
                                >
                                    <RadioItem value='income' variant='income'>
                                       <ArrowCircleUp size={24}  />
                                       <span>Entrada</span>
                                    </RadioItem>
                                    <RadioItem value='outcome' variant='outcome'>
                                        <ArrowCircleDown size={24}  />
                                        <span>Saída</span>
                                    </RadioItem>
                                </RadioRoot>)
                            }}
                        />
                        <SetNewTransaction type="submit">
                            Cadastrar
                        </SetNewTransaction>
                    </form>
                </Content>
            </Dialog.Portal>
    )
}