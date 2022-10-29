import React, { useState } from "react";
import { StyledTodoList } from "./StyledTodoList.styles";
import { Link } from "react-router-dom";
import InputField from "../../../../components/inputField/InputField";
import Button from "../../../../module/common/buttons/Button";
import { MdOutlineClose } from "react-icons/md";

const TodoList = ({className}) => {
  const [inputValue, setInputValue] = useState("");
  const [totoItem, setTodoItem] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [activeCloseBtn, setActiveCloseBtn] = useState(false)

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const handleTodo = () => {
    setTodoItem([
      ...totoItem,
      {
        value: inputValue,
        id: Math.floor(Math.random() * 1000),
        isEditing: false,
      },
    ]);
  };
  const toggleClassName = () => {
    setIsActive(!isActive);
  };
  const toggleInputCheck = () => {
    setIsChecked(!isChecked)
    setActiveCloseBtn(!activeCloseBtn)
    setIsActive(isActive);
  }
  return (
    <StyledTodoList>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
        <p>To Do List</p>
        <Link>Show All</Link>
      </div>
      <div className="d-flex align-items-center mb-2">
        <div>
          <InputField placeholder="Enter task" onChange={handleInputChange} />
        </div>
        <div>
          <Button onClick={handleTodo} className="todo-Btn">
            Add
          </Button>
        </div>
      </div>
      <div className="dotoList-wrapper">
        {totoItem.map((item, indx) => (
          <div key={indx} className="d-flex align-items-center todoItem">
            <input onChange={toggleInputCheck} type="checkbox" className="form-check-input me-3" />
            <div className="d-flex align-items-center justify-content-between item-wrapper">
              <p
                className={
                  isChecked
                    ? "GrayColor text-break fs-14 lineThrough-text"
                    : "GrayColor text-break fs-14"
                }
              >
                {item.value}
              </p>
              <MdOutlineClose
                onClick={toggleClassName}
                className={
                  isActive | activeCloseBtn ?
                    "GrayColor close-btn activeClose-btn checkedClose-btn" 
                    : "GrayColor close-btn "
                }
              />
            </div>
          </div>
        ))}
      </div>
    </StyledTodoList>
  );
};

export default TodoList;
