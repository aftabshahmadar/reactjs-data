import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";


export const ExportData = ({ apiData, fileName }) => {
    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
  
    const exportData = (apiData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(apiData);
      const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
      const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
      const data = new Blob([excelBuffer], { type: fileType });
      FileSaver.saveAs(data, fileName + fileExtension);
    };
  
    return (
      <button
      className="border border-0 bg-dark text-white"
      onClick={(e) => exportData(apiData, fileName)}
    >
      Export data to CSV
    </button>
  );
};