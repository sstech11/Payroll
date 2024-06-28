import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StatutoryComplianceList } from "./statutoryCompliance/StatutoryComplianceList";
import { StatutoryComplianceCreate } from "./statutoryCompliance/StatutoryComplianceCreate";
import { StatutoryComplianceEdit } from "./statutoryCompliance/StatutoryComplianceEdit";
import { StatutoryComplianceShow } from "./statutoryCompliance/StatutoryComplianceShow";
import { TaxManagementList } from "./taxManagement/TaxManagementList";
import { TaxManagementCreate } from "./taxManagement/TaxManagementCreate";
import { TaxManagementEdit } from "./taxManagement/TaxManagementEdit";
import { TaxManagementShow } from "./taxManagement/TaxManagementShow";
import { PayrollProcessingList } from "./payrollProcessing/PayrollProcessingList";
import { PayrollProcessingCreate } from "./payrollProcessing/PayrollProcessingCreate";
import { PayrollProcessingEdit } from "./payrollProcessing/PayrollProcessingEdit";
import { PayrollProcessingShow } from "./payrollProcessing/PayrollProcessingShow";
import { EmployeeInformationManagementList } from "./employeeInformationManagement/EmployeeInformationManagementList";
import { EmployeeInformationManagementCreate } from "./employeeInformationManagement/EmployeeInformationManagementCreate";
import { EmployeeInformationManagementEdit } from "./employeeInformationManagement/EmployeeInformationManagementEdit";
import { EmployeeInformationManagementShow } from "./employeeInformationManagement/EmployeeInformationManagementShow";
import { LeaveAndAttendanceManagementList } from "./leaveAndAttendanceManagement/LeaveAndAttendanceManagementList";
import { LeaveAndAttendanceManagementCreate } from "./leaveAndAttendanceManagement/LeaveAndAttendanceManagementCreate";
import { LeaveAndAttendanceManagementEdit } from "./leaveAndAttendanceManagement/LeaveAndAttendanceManagementEdit";
import { LeaveAndAttendanceManagementShow } from "./leaveAndAttendanceManagement/LeaveAndAttendanceManagementShow";
import { RazorPayXIntegrationList } from "./razorPayXIntegration/RazorPayXIntegrationList";
import { RazorPayXIntegrationCreate } from "./razorPayXIntegration/RazorPayXIntegrationCreate";
import { RazorPayXIntegrationEdit } from "./razorPayXIntegration/RazorPayXIntegrationEdit";
import { RazorPayXIntegrationShow } from "./razorPayXIntegration/RazorPayXIntegrationShow";
import { ExpenseRequestsList } from "./expenseRequests/ExpenseRequestsList";
import { ExpenseRequestsCreate } from "./expenseRequests/ExpenseRequestsCreate";
import { ExpenseRequestsEdit } from "./expenseRequests/ExpenseRequestsEdit";
import { ExpenseRequestsShow } from "./expenseRequests/ExpenseRequestsShow";
import { PreventiveMaintenanceList } from "./preventiveMaintenance/PreventiveMaintenanceList";
import { PreventiveMaintenanceCreate } from "./preventiveMaintenance/PreventiveMaintenanceCreate";
import { PreventiveMaintenanceEdit } from "./preventiveMaintenance/PreventiveMaintenanceEdit";
import { PreventiveMaintenanceShow } from "./preventiveMaintenance/PreventiveMaintenanceShow";
import { AdvanceTrackingList } from "./advanceTracking/AdvanceTrackingList";
import { AdvanceTrackingCreate } from "./advanceTracking/AdvanceTrackingCreate";
import { AdvanceTrackingEdit } from "./advanceTracking/AdvanceTrackingEdit";
import { AdvanceTrackingShow } from "./advanceTracking/AdvanceTrackingShow";
import { ReportTemplatesList } from "./reportTemplates/ReportTemplatesList";
import { ReportTemplatesCreate } from "./reportTemplates/ReportTemplatesCreate";
import { ReportTemplatesEdit } from "./reportTemplates/ReportTemplatesEdit";
import { ReportTemplatesShow } from "./reportTemplates/ReportTemplatesShow";
import { ExpenseCategoriesList } from "./expenseCategories/ExpenseCategoriesList";
import { ExpenseCategoriesCreate } from "./expenseCategories/ExpenseCategoriesCreate";
import { ExpenseCategoriesEdit } from "./expenseCategories/ExpenseCategoriesEdit";
import { ExpenseCategoriesShow } from "./expenseCategories/ExpenseCategoriesShow";
import { WarrantyPeriodsList } from "./warrantyPeriods/WarrantyPeriodsList";
import { WarrantyPeriodsCreate } from "./warrantyPeriods/WarrantyPeriodsCreate";
import { WarrantyPeriodsEdit } from "./warrantyPeriods/WarrantyPeriodsEdit";
import { WarrantyPeriodsShow } from "./warrantyPeriods/WarrantyPeriodsShow";
import { NotificationAndEscalationList } from "./notificationAndEscalation/NotificationAndEscalationList";
import { NotificationAndEscalationCreate } from "./notificationAndEscalation/NotificationAndEscalationCreate";
import { NotificationAndEscalationEdit } from "./notificationAndEscalation/NotificationAndEscalationEdit";
import { NotificationAndEscalationShow } from "./notificationAndEscalation/NotificationAndEscalationShow";
import { ApprovalLevelsAndRulesList } from "./approvalLevelsAndRules/ApprovalLevelsAndRulesList";
import { ApprovalLevelsAndRulesCreate } from "./approvalLevelsAndRules/ApprovalLevelsAndRulesCreate";
import { ApprovalLevelsAndRulesEdit } from "./approvalLevelsAndRules/ApprovalLevelsAndRulesEdit";
import { ApprovalLevelsAndRulesShow } from "./approvalLevelsAndRules/ApprovalLevelsAndRulesShow";
import { ApprovalHierarchiesList } from "./approvalHierarchies/ApprovalHierarchiesList";
import { ApprovalHierarchiesCreate } from "./approvalHierarchies/ApprovalHierarchiesCreate";
import { ApprovalHierarchiesEdit } from "./approvalHierarchies/ApprovalHierarchiesEdit";
import { ApprovalHierarchiesShow } from "./approvalHierarchies/ApprovalHierarchiesShow";
import { ApprovalProcessList } from "./approvalProcess/ApprovalProcessList";
import { ApprovalProcessCreate } from "./approvalProcess/ApprovalProcessCreate";
import { ApprovalProcessEdit } from "./approvalProcess/ApprovalProcessEdit";
import { ApprovalProcessShow } from "./approvalProcess/ApprovalProcessShow";
import { AssignedAssetsList } from "./assignedAssets/AssignedAssetsList";
import { AssignedAssetsCreate } from "./assignedAssets/AssignedAssetsCreate";
import { AssignedAssetsEdit } from "./assignedAssets/AssignedAssetsEdit";
import { AssignedAssetsShow } from "./assignedAssets/AssignedAssetsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Payroll"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="StatutoryCompliance"
          list={StatutoryComplianceList}
          edit={StatutoryComplianceEdit}
          create={StatutoryComplianceCreate}
          show={StatutoryComplianceShow}
        />
        <Resource
          name="TaxManagement"
          list={TaxManagementList}
          edit={TaxManagementEdit}
          create={TaxManagementCreate}
          show={TaxManagementShow}
        />
        <Resource
          name="PayrollProcessing"
          list={PayrollProcessingList}
          edit={PayrollProcessingEdit}
          create={PayrollProcessingCreate}
          show={PayrollProcessingShow}
        />
        <Resource
          name="EmployeeInformationManagement"
          list={EmployeeInformationManagementList}
          edit={EmployeeInformationManagementEdit}
          create={EmployeeInformationManagementCreate}
          show={EmployeeInformationManagementShow}
        />
        <Resource
          name="LeaveAndAttendanceManagement"
          list={LeaveAndAttendanceManagementList}
          edit={LeaveAndAttendanceManagementEdit}
          create={LeaveAndAttendanceManagementCreate}
          show={LeaveAndAttendanceManagementShow}
        />
        <Resource
          name="RazorPayXIntegration"
          list={RazorPayXIntegrationList}
          edit={RazorPayXIntegrationEdit}
          create={RazorPayXIntegrationCreate}
          show={RazorPayXIntegrationShow}
        />
        <Resource
          name="ExpenseRequests"
          list={ExpenseRequestsList}
          edit={ExpenseRequestsEdit}
          create={ExpenseRequestsCreate}
          show={ExpenseRequestsShow}
        />
        <Resource
          name="PreventiveMaintenance"
          list={PreventiveMaintenanceList}
          edit={PreventiveMaintenanceEdit}
          create={PreventiveMaintenanceCreate}
          show={PreventiveMaintenanceShow}
        />
        <Resource
          name="AdvanceTracking"
          list={AdvanceTrackingList}
          edit={AdvanceTrackingEdit}
          create={AdvanceTrackingCreate}
          show={AdvanceTrackingShow}
        />
        <Resource
          name="ReportTemplates"
          list={ReportTemplatesList}
          edit={ReportTemplatesEdit}
          create={ReportTemplatesCreate}
          show={ReportTemplatesShow}
        />
        <Resource
          name="ExpenseCategories"
          list={ExpenseCategoriesList}
          edit={ExpenseCategoriesEdit}
          create={ExpenseCategoriesCreate}
          show={ExpenseCategoriesShow}
        />
        <Resource
          name="WarrantyPeriods"
          list={WarrantyPeriodsList}
          edit={WarrantyPeriodsEdit}
          create={WarrantyPeriodsCreate}
          show={WarrantyPeriodsShow}
        />
        <Resource
          name="NotificationAndEscalation"
          list={NotificationAndEscalationList}
          edit={NotificationAndEscalationEdit}
          create={NotificationAndEscalationCreate}
          show={NotificationAndEscalationShow}
        />
        <Resource
          name="ApprovalLevelsAndRules"
          list={ApprovalLevelsAndRulesList}
          edit={ApprovalLevelsAndRulesEdit}
          create={ApprovalLevelsAndRulesCreate}
          show={ApprovalLevelsAndRulesShow}
        />
        <Resource
          name="ApprovalHierarchies"
          list={ApprovalHierarchiesList}
          edit={ApprovalHierarchiesEdit}
          create={ApprovalHierarchiesCreate}
          show={ApprovalHierarchiesShow}
        />
        <Resource
          name="ApprovalProcess"
          list={ApprovalProcessList}
          edit={ApprovalProcessEdit}
          create={ApprovalProcessCreate}
          show={ApprovalProcessShow}
        />
        <Resource
          name="AssignedAssets"
          list={AssignedAssetsList}
          edit={AssignedAssetsEdit}
          create={AssignedAssetsCreate}
          show={AssignedAssetsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
