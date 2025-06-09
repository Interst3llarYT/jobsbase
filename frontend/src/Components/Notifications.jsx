import React from "react";
import Navb from "./navb";
import "../styles/notifications.css";

const notificationsData = [
  { id: 1, title: "Job application accepted", date: "2025-06-07", read: false },
  { id: 2, title: "New course uploaded in your field", date: "2025-06-05", read: true },
  { id: 3, title: "Business XYZ started following you", date: "2025-06-04", read: false },
  // Add more notifications as needed
];

function Notifications() {
  return (
    <>
      <Navb />
      <main className="notif-container">
        <h1 className="notif-title">Notifications</h1>
        <ul className="notif-list">
          {notificationsData.map(({ id, title, date, read }) => (
            <li key={id} className={`notif-item ${read ? "read" : "unread"}`}>
              <div className="notif-left">
                <p className="notif-text">{title}</p>
              </div>
              <span className="notif-date">{date}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Notifications;
