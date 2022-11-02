import React from "react";
import Layout from "../../layout";
import StyleTable from "./StyledTable.styles";
import TableContent from "./tableContents/TableContent";

const Tables = () => {
  return (
    <StyleTable>
      <Layout>
        <main>
          <div className="table-wrapper">
            <TableContent title={"Basic Table"} className="border-2" />
            <TableContent title={"Accented Table"} />
          </div>
          <div className="table-wrapper">
            <TableContent title={"Hoverable Table"} />
            <TableContent title={"Color Table"} />
          </div>
          <div className="table-wrapper">
            <TableContent title={"Bordered Table"} />
            <TableContent title={"Table Without Borde"} />
          </div>
          <div className="single-table-wrapper">
            <TableContent title={"Responsive Table"} />
          </div>
        </main>
      </Layout>
    </StyleTable>
  );
};

export default Tables;
