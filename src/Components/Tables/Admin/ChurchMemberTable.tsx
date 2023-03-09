import React from "react";
import { churchMembersTableCols } from "../../../Utils/Admin/tableCols";
import { churchMembersTableRow } from "../../../Utils/Admin/tableRows";
import CustomTable from "../CustomRTable";

const UserManagerTable = () => {
  const rows = churchMembersTableRow();

  const data = {
    columns: churchMembersTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={true} />
    </>
  );
};

export default UserManagerTable;
