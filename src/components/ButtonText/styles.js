import styled from 'styled-components';

export const Container = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    > svg {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    @media (min-width: 1024px){
        font-weight: 700;
    }
    
`;