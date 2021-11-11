import React from 'react';
import styled from '@emotion/styled';

const card = (props) => (
    <StyledCard>
        <StyledNode>
            <img alt="img" src="https://via.placeholder.com/32"></img>
        </StyledNode>
        <TitleCard>
            <b>{props.name}</b>
        </TitleCard>
        <TitleCard>
            <span style={{ fontSize: 12 }}>{props.email}</span>
        </TitleCard>
        <TitleCardCount>
            <span style={{ fontSize: 12 }}>{props.count}</span>
        </TitleCardCount>
    </StyledCard>
);

const StyledNode = styled.div`
    padding: 5px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    border: 2px solid #f3f3f3;
    top: -30px;
    left: 40px;
    z-index: 2;
    background: #ffc0cb;
`;

const StyledCard = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    width: 130px;
    height: 80px;
    display: inline-block;
    border: 1px solid red;
    position: relative;
    background: #fafafa;
    box-shadow: -2px 2px 10px 3px rgba(0, 0, 0, 0.1);
`;

const TitleCard = styled.div`
    position: relative;
    top: 30px;
`;

const TitleCardCount = styled.div`
    position: relative;
    top: 30px;
    border: 1px solid grey;
    width: 40px;
    margin-top: 10px;
    z-index: 5;
    background: #f3f3f3;
    text-align: center;
    left: 45px;
`;

export { card };
