import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Home from "./body/Home";
import Todo from "./body/Todo";
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Wether from "./body/Wether";


const Back = styled.div`
    background-color: black;
    display: flex;
    width: 100vw;
    text-align: center;
`;

const LinkFont = styled.div`
    color: #fff;
    text-decoration: none;
    margin: 18px 0% 18px 0%;
    width: 9vw;
`;

function Header(){

    return(
        <>
            <BrowserRouter>
                <Back>
                    <NavLink to="/" style={{ textDecoration: 'none' }} >
                        <LinkFont>
                            home
                        </LinkFont>
                    </NavLink>
                    <NavLink to="/todo" style={{ textDecoration: 'none' }} >
                        <LinkFont>
                            todo
                        </LinkFont>
                    </NavLink>
                    <NavLink to="/wether" style={{ textDecoration: 'none' }} >
                        <LinkFont>
                            weather
                        </LinkFont>
                    </NavLink>
                </Back>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/wether" element={<Wether />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Header;