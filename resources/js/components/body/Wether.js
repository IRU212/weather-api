import React, { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';



const Body = styled.div`
    font-size: 44px;
    margin: 90px 0 40px 0;
    padding: auto;
`;

const Sub = styled.div`
    font-size: 18px;
    text-align: center;
    margin: 30px 0 40px 0;
`;

const Main = styled.div`
    width: 100%;
    text-align: center;
`;

const BodyW = styled.div`
    font-size: 26px;
    margin: 90px 0 80px 0;
    width: 100%;
    display: flex;
    text-align: center;
`;

const BodyS = styled.div`
    font-size: 22px;
    width: 22%;
    margin: auto;
    background-color: #ccc;
`;

const WN = styled.div`
    font-size: 18px;
    background-color: #fff;
`;

const WM = styled.div`
    font-size: 23px;
    height: 230px;
    background-color: #ddd;
`;


function Wether(){

    const [datas,setDatas] = useState([]);

    useEffect(()=>{
        fetch('https://api.openweathermap.org/data/2.5/weather/?q=Tokyo&APPID=8c53b231c06b227375ed1a70dcae3b71')
        .then(res => res.json())
        .then(result => {
          setDatas(result);
        });
      },[]);

    return(
        <div>
            <Body>
                <Main>Wether Aplication</Main>
                <Sub>This is Wether Aplication.</Sub>
            </Body>
            <BodyW>
                <BodyS>
                    <WM>天気１</WM>
                    <WN>{datas.name}</WN>
                </BodyS>
                <BodyS>
                    <WM>天気１</WM>
                    <WN>{datas.name}</WN>
                </BodyS>
                <BodyS>
                    <WM>天気１</WM>
                    <WN>{datas.name}</WN>
                </BodyS>
            </BodyW>
        </div>
    );
}

export default Wether;