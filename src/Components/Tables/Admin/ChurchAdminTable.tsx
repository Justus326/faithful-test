import { churchAdminsTableCols } from "../../../Utils/Admin/tableCols";
import { churchMembersTableRow } from "../../../Utils/Admin/tableRows";
import CustomTable from "../CustomRTable";

const ChurchAdminsTable = () => {
  const rows = churchMembersTableRow();

  const data = {
    columns: churchAdminsTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={true} />
    </>
  );
};

export default ChurchAdminsTable;
