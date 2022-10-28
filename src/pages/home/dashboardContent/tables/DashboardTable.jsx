import React from "react";
import { StyledDashboardTable } from "./StyledDashboardTable.styles";
import { Link } from "react-router-dom";

const DashboardTable = () => {
  return (
    <StyledDashboardTable>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
        <p>Recent Salse</p>
        <Link>Show All</Link>
      </div>
      <table width="100%">
        <thead>
          <tr>
            <th>
              <input className="form-check-input" type="checkbox" />
            </th>
            <th>Date</th>
            <th>Invoice</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>01 Jan 2045</td>
            <td>INV-0123</td>
            <td>Jhon Doe</td>
            <td>$123</td>
            <td>Paid</td>
            <td><Link>Detail</Link></td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>01 Jan 2045</td>
            <td>INV-0123</td>
            <td>Jhon Doe</td>
            <td>$123</td>
            <td>Paid</td>
            <td><Link>Detail</Link></td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>01 Jan 2045</td>
            <td>INV-0123</td>
            <td>Jhon Doe</td>
            <td>$123</td>
            <td>Paid</td>
            <td><Link>Detail</Link></td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>01 Jan 2045</td>
            <td>INV-0123</td>
            <td>Jhon Doe</td>
            <td>$123</td>
            <td>Paid</td>
            <td><Link>Detail</Link></td>
          </tr>
          <tr>
            <td>
              <input className="form-check-input" type="checkbox" />
            </td>
            <td>01 Jan 2045</td>
            <td>INV-0123</td>
            <td>Jhon Doe</td>
            <td>$123</td>
            <td>Paid</td>
            <td><Link>Detail</Link></td>
          </tr>
        </tbody>
      </table>
    </StyledDashboardTable>
  );
};

export default DashboardTable;
