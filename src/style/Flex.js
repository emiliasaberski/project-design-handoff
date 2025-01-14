import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    padding: 32px;
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    gap: 12px;
    padding: 32px;
    margin: 0 auto;;
`

export const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`