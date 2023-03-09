import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import TabSwitch from "./../../../../Components/Nav/TabSwitch";
import { AdminChurchesManagerTabs } from "./../../../../Utils/tabsNav";
import UnVerifiedChurchesTable from "../../../../Components/Tables/Admin/unVerifiedChurchesTable";
import VerifiedChurchesTable from '../../../../Components/Tables/Admin/VerifiedChurchesTable';

const ManageChurches = () => {
  const { currentTab } = useAppSelector(selectNav);

  return (
    <>
      <TabSwitch listItems={AdminChurchesManagerTabs} />
      {currentTab === 1 ? <VerifiedChurchesTable /> : <UnVerifiedChurchesTable />}
    </>
  );
};

export default ManageChurches;
