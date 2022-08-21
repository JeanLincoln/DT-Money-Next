/* eslint-disable @next/next/no-img-element */
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionForm } from '../NewTransactionForm'
import * as S from './styles'

export function Header(){
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
            <img src="/Logo.svg" alt="" width={172} height={41}/>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button>Nova transação</button>
                </Dialog.Trigger>
                <NewTransactionForm />
            </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
        )
}