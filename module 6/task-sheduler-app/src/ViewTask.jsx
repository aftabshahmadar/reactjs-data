import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { ExportData } from "./exportData";

export default function ViewTask() {
  const [data, setData] = useState([]); // State for export data
  const [employee, setEmployees] = useState([]); // State for employee data
  const fileName = "employee_data"; // Filename for export

  // Function to fetch employee data from API
  const fetchData = () => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        setEmployees(response.data);
        setData(response.data); // Set data for export
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures it runs once when the component mounts

  // Function to delete a task
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8000/tasks/${id}`)
      .then(() => {
        setEmployees(employee.filter((task) => task.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  const sendWhatsAppMessage = (empnumber, empname) => {
    // Construct WhatsApp URL
    const message = `Hello ${empname}, we are reaching out to you regarding your position in the company.`;
    const url = `https://wa.me/${empnumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(url, "_blank");
  };

  return (
    <Container className="mt-5 p-2 border-rounded shadow">
      <h1 className="fs-xl fs-4">
        Employee List{" "}
        <button type="button" className="border border-0 bg-light float-end">
          Total employees:{" "}
          <span className="badge badge-sm bg-dark">{employee.length}</span>
        </button>
      </h1>
      <ExportData apiData={data} fileName={fileName} />
      <table className="table table-responsive">
        <thead>
          <tr className="text-center">
            <th>Employee Name</th>
            <th>Employee Number</th>
            <th>Employee Email</th>
            <th>Employee Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employee.length > 0 ? (
            employee.map((item) => (
              <tr key={item.id}>
                <td className="text-center">{item.empname}</td>
                <td className="text-center">{item.empnumber}</td>
                <td className="text-center">{item.empemail}</td>
                <td className="text-center">{item.empposition}</td>
                <td className="text-center">
                  <button
                    onClick={() => deleteTask(item.id)}
                    className="btn btn-sm btn-danger text-white bg-danger"
                  >
                    <span className="bi bi-trash"></span> Delete
                  </button>
                  <button
                    onClick={() =>
                      sendWhatsAppMessage(item.empnumber, item.empname)
                    }
                    className="btn btn-sm btn-success text-white bg-success ms-2"
                  >
                    <span className="bi bi-whatsapp"></span> Whatsapp
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
