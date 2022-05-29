import React, { useState } from "react";
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
const TodoInput = styled.input`
    padding: 3px;
    margin: 5px;
    margin-right: 2%;
    color: #888;
    width: 60vw;
    border: #ddd 1px solid;
    border-radius: 4px;
        &:focus {outline: none;}
`;

const Add = styled.button`
    padding: 3px 7px;
    color: #888;
    border: #ddd 1px solid;
    border-radius: 4px;
`;

const MainBody = styled.div`
    width: 80%;
    text-align: center;
    margin: 100px auto 100px auto;
    border: 1.5px solid #bbb;
    padding: 30px ;
`;

const Cb = styled.button`
    padding: 3px 7px;
    margin: 0 4px;
    color: #888;
    border: #ddd 1px solid;
    border-radius: 4px;
`;

const Cli = styled.li`
    display: flex;
    padding: auto;
    margin: auto;
    width: 70vw;

        p{
            padding:3px 7px;
            text-align: left;
            width: 60vw;
            border: 1.5px solid #ddd;
            border-radius: 4px;
            margin-right: 2%;
        }

        li{
            padding: 0;
        }
`;

const Div = styled.div`
    text-align: center;
    margin: auto;
    padding: auto;
    width: 80vw
`;

const PM = styled.div`
    margin: 20px 0 30px 0;
`;

function Todo(){

    const [incompleteTodos, setIncompleteTodos] = useState([]);
    const [completeTodos, setCompleteTodos] = useState([]);
    const [todoText,setTodoText] = useState('');
    const onChangeTodoText = (event) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === '') return;
        const newTodos = [...incompleteTodos,todoText];
        setIncompleteTodos(newTodos);
        setTodoText('');
    }
    const onClickDelete = (index) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index,1)
        setIncompleteTodos(newTodos);
    }
    const onClickComplete = (index) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index,1);
        const newCompleteTodos = [...completeTodos,incompleteTodos[index]];
        setIncompleteTodos(newCompleteTodos)
        setCompleteTodos(newCompleteTodos)
    }
    const onClickBack = (index) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index,1)
        const newIncompleteTodos = [...incompleteTodos,completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    return(
        <div>
            <Body>
                <Main>Task management</Main>
                <Sub>This is Task management.</Sub>
            </Body>
            <MainBody>
                <div>
                    <TodoInput placeholder="todoを入力" value={todoText} onChange={onChangeTodoText} />
                    <Add onClick={onClickAdd}>＋</Add>
                </div>
                <div>
                    <PM className="title">Incomplete</PM>
                    <ul>
                        {
                            incompleteTodos.map((todo,index) => {
                                return (
                                    <Div>
                                        <Cli key={todo} className="todoList">
                                        <p>{todo}</p>
                                        <Cb onClick={() => onClickComplete(index)}>completion</Cb>
                                        <Cb onClick={() => onClickDelete(index)}>delete</Cb>
                                        </Cli>
                                    </Div>
                                  );
                            })
                        }
                    </ul>
                </div>
                <div className="completeArea">
                    <PM className="title2">Complete</PM>
                    <ul>
                        {
                            completeTodos.map((todo,index) => {
                                return (
                                    <Div>
                                        <Cli key={todo} className="todoList">
                                        <p>{todo}</p>
                                        <Cb onClick={() => onClickBack(index)}>back</Cb>
                                        </Cli>
                                    </Div>
                                  );
                            })
                        }
                    </ul>
                </div>
            </MainBody>
        </div>
    );
}

export default Todo;