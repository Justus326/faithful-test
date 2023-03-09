import React from "react";
import ChurchMemberTable from "../../../../Components/Tables/Admin/ChurchMemberTable";
import { useAppSelector } from "../../../../ReduxStore/app/hooks";
import { selectNav } from "../../../../ReduxStore/features/navSlice";
import TabSwitch from "./../../../../Components/Nav/TabSwitch";
import { AdminUserManagerTabs } from "./../../../../Utils/tabsNav";
import ChurchAdminsTable from "./../../../../Components/Tables/Admin/ChurchAdminTable";

const UserManager = () => {
  const { currentTab } = useAppSelector(selectNav);

  return (
    <>
      <TabSwitch listItems={AdminUserManagerTabs} />
      {currentTab === 1 ? <ChurchMemberTable /> : <ChurchAdminsTable />}
    </>
  );
};

export default UserManager;
