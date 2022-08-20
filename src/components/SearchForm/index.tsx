import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

export function SeachForm(){
    return(
        <S.SearchFormContainer>
            <form >
                <input type="text" placeholder='Busque uma transação'/>
                <button type='submit'>
                    <MagnifyingGlass size={20} />
                    <strong>Buscar</strong>
                </button>
            </form>
        </S.SearchFormContainer>
    )
}