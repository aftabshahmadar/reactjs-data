import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ManageContact() {
  // State to hold fetched data
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on component mount
  useEffect(() => {
    fetchContacts();
  }, [contacts]);

  // Fetch contacts from the API
  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/contact-us");
      setContacts(response.data); // Assuming the API returns an array of contact objects
      setLoading(false);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      Swal.fire("Error", "Failed to fetch contact data. Please try again.", "error");
      setLoading(false);
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contact-us/${id}`);
      Swal.fire("Deleted!", "The contact has been deleted.", "success");
      fetchContacts(); // Refresh the contact list
    } catch (error) {
      console.error("Error deleting contact:", error);
      Swal.fire("Error", "Failed to delete the contact. Please try again.", "error");
    }
  };

  const sendWhatsAppMessage = (number, name) => {
    // Construct WhatsApp URL
    const message = `Hello ${name}, we glad you've choosen us to be a part of your happiness :).`;
    const url = `https://wa.me/${number}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in a new tab
    window.open(url, "_blank");
  };

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center", fontSize: "28px", color: "white", marginBottom: "30px" }}>
        Manage Contacts
      </h2>

      {loading ? (
        <p>Loading data...</p>
      ) : contacts.length === 0 ? (
        <p>No contact data available.</p>
      ) : (
        <div>
          <table className="table table-bordered table-hover table-responsive wide-table">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="w-350px">
              {contacts.map((contact, index) => (
                <tr key={contact.id} className="bg-transparent">
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>{contact.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteContact(contact.id)}
                      style={{
                        padding: "8px 15px",
                        fontSize: "14px",
                        borderRadius: "8px",
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                      }}
                      onMouseOver={(e) => (e.target.style.backgroundColor = "#c82333")}
                      onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
                    >
                      Delete
                    </button>
                    <button
  className="btn btn-success btn-sm ms-2"
  onClick={() => sendWhatsAppMessage(contact.number, contact.name)}
  style={{
    padding: "8px 15px",
    fontSize: "14px",
    borderRadius: "8px",
    backgroundColor: "#28a745", // Green color
    color: "white",
    border: "none",
  }}
  onMouseOver={(e) => (e.target.style.backgroundColor = "#218838")} // Darker green on hover
  onMouseOut={(e) => (e.target.style.backgroundColor = "#28a745")} // Original green on mouse out
>
  WhatsApp
</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
