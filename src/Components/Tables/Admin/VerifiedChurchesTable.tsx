import { verifiedChurchesTableCols } from "../../../Utils/Admin/tableCols";
import { verifiedChurshesTableRow } from "../../../Utils/Admin/tableRows";
import CustomTable from "../CustomRTable";

const VerifiedChurchesTable = () => {
  const rows = verifiedChurshesTableRow();

  const data = {
    columns: verifiedChurchesTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={true} />
    </>
  );
};

export default VerifiedChurchesTable;
