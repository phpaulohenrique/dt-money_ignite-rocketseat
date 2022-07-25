import  styled  from 'styled-components';


export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    margin-top: -6.9rem;

    div{
        background-color: var(--shape);
        padding: .7rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        &.highlight-background{
            background-color: var(--green);
            color: #fff;
        }

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 3rem;
        }
    }




`