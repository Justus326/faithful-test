import React from "react";
import { TransactionLogsTableCols } from "../../../Utils/Admin/tableCols";
import CustomTable from "../CustomRTable";
import { transactionsTableRow } from "./../../../Utils/Admin/tableRows";

const TransactionLogs = () => {
  const rows = transactionsTableRow();

  const data = {
    columns: TransactionLogsTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={true} />
    </>
  );
};

export default TransactionLogs;
