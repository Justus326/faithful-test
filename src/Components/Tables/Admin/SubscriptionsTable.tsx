import { SubScriptionsTableCols } from "../../../Utils/Admin/tableCols";
import { SubscriptionsTableRow } from "../../../Utils/Admin/tableRows";
import CustomTable from "../CustomRTable";

const SubscriptionsTable = () => {
  const rows = SubscriptionsTableRow();

  const data = {
    columns: SubScriptionsTableCols,
    rows,
  };

  return (
    <>
      <CustomTable data={data} showFilter={false} />
    </>
  );
};

export default SubscriptionsTable;
