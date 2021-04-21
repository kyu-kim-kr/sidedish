import styled from 'styled-components'

const Tag = ({ type }) => {
    return (
        <StyledTag type={type}>
            <span>{type}</span>
        </StyledTag>
    );
}

const StyledTag = styled.div`
    display: inline-block;
    box-sizing: border-box;
    padding: 7px 16px 5px;
    border-radius: 5px;
    margin-right: 10px;
    background: ${({type}) => (type === '이벤트특가') ? '#82D32D' : '#86C6FF'};
    color: #fff;
    font-size: 14px;
    font-weight: bold;
`

export default Tag;