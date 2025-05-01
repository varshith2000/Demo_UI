import React from 'react';
import '../styles/ExcelUpload.css';

const ExcelUpload = ({ onFileUpload }) => (
  <div className="excel-upload">
    <label>Upload Goods Excel File: </label>
    <input type="file" accept=".xlsx,.xls" onChange={onFileUpload} />
  </div>
);

export default ExcelUpload;
