/* eslint-disable @next/next/no-img-element */
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react';
import { NewTransactionForm } from '../NewTransactionForm'
import * as S from './styles'

export function Header(){
    const [open, setOpen] = useState(false);
    return (
        <S.HeaderContainer>
            <S.HeaderContent>
            <img src="/Logo.svg" alt="" width={172} height={41}/>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                    <button>Nova transação</button>
                </Dialog.Trigger>
                <NewTransactionForm onOpenChange={setOpen}/>
            </Dialog.Root>
            </S.HeaderContent>
        </S.HeaderContainer>
        )
}