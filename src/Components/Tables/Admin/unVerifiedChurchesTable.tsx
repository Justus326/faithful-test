import { unVerifiedChurshesTableRow } from "../../../Utils/Admin/tableRows";
import CustomTable from "../CustomRTable";
import { unVerifiedChurchesTableCols } from "./../../../Utils/Admin/tableCols";

const UnVerifiedChurchesTable = () => {
  const rows = unVerifiedChurshesTableRow();

  const data = {
    columns: unVerifiedChurchesTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={true} />
    </>
  );
};

export default UnVerifiedChurchesTable;
