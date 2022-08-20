/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export function Header(){
    return (
        <S.HeaderContainer>
            <img src="/Logo.svg" alt="" width={172} height={41}/>
            <button>Nova transação</button>
        </S.HeaderContainer>
        )
}