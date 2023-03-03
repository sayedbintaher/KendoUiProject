$(document).ready(function () {
    $("#kendoVersion").text(kendo.version);

    $("#cmbEmployee").kendoComboBox({
        dataSource: [{ EmployeeID: 1, EmployeeName: "Ash" }, { EmployeeID: 2, EmployeeName: "Ben" }],
        placeHolder: "Select",
        dataTextField: "EmployeeName",
        dataValueField: "EmployeeID",
        suggest: true,
        index: 0,
        filter: "contains",
        change: function () {
            console.log(this.value(), this.text());
        }
    });

    function employeeList(key, val) {
        if (key !== undefined && val !== undefined) {
            alert('key : ' + key);
            alert('val : ' + val);
        }
    }

    $("#grid").kendoGrid({
        dataSource: [{ CustomerID: "1", ContactName: "Ash1", CompanyName: "ABC", Country: "BD" },
        { CustomerID: "2", ContactName: "Ash2", CompanyName: "ABC", Country: "BD" },
        { CustomerID: "3", ContactName: "Ash3", CompanyName: "ABC", Country: "BD" },
        { CustomerID: "4", ContactName: "Ash4", CompanyName: "ABC", Country: "BD" },
        { CustomerID: "5", ContactName: "Ash5", CompanyName: "ABC", Country: "BD" },
            { CustomerID: "6", ContactName: "Ash6", CompanyName: "ABC", Country: "BD" }],
        filterable: true,
        sortable: true,
        columns: CustomerHelper.GenerateColumns(),
        editable: false,
        navigatable: true,
        selectable: "row"
    });

});

var CustomerHelper = {
    GenerateColumns: function () {
        return columns = [
            { field: "CustomerID", title: "Id", width: 60, editable: false },
            { field: "ContactName", title: "Name", width: 60, editable: false },
            { field: "CompanyName", title: "Company", width: 60, editable: false },
            { field: "Country", title: "Country", width: 60, editable: false },
        ]
    }
}