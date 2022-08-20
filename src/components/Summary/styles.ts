import styled from "styled-components";

export const SummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap:3.2rem;

    width: 100%;
    max-width: 1120px;

    margin: -6.85rem auto 0 auto;

`

export const SummaryItem = styled.div`
    display: flex;
    flex-direction: column;
    gap:1.8rem;

    height: 13.7rem;
    width: 35.2rem;

    padding: 2.4rem 3.2rem;

    background-color: ${({theme})=> theme['gray-400']};

    border-radius: 6px;

    header {
        display: flex;
        justify-content: space-between;
        font-size:1.6rem;
    }

    strong{
        font-size:3.2rem;
        font-weight:700;
    }
`