import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
export const ExportData = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".csv";

  const ExportData = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button onClick={(e) => ExportData(apiData, fileName)} className='btn btn-lg btn-danger float-end'>Export in CSV<span className='bi bi-file-excel'></span></button>
  );
};