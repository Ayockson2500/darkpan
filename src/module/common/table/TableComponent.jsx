import React from "react";

const TableComponent = ({ children, className, title }) => {
    return (

        <table className={className} title={title}>{children}</table>
      ) 
    
};

export default TableComponent;
