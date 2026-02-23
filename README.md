# Job Application Tracker

A responsive and interactive Job Application Tracker dashboard built using **HTML, Tailwind CSS, and JavaScript**.

This project allows users to track job applications, update their status, and monitor statistics in a clean and modern dashboard interface.

---

## Live Features

### Dashboard Section

* Displays:

  * Total Jobs Count
  * Interview Count
  * Rejected Count
* Automatically updates counts when job status changes.
* Fully responsive for mobile and desktop devices.

---

### Available Jobs Section

* Section title on the left
* Total jobs count on the right
* Three Tabs:

  * **All**
  * **Interview**
  * **Rejected**

---

### Job Cards (Minimum 8 Jobs)

Each card contains:

* Company Name
* Position
* Location
* Job Type (Remote / Onsite / Full-time / Part-time)
* Salary
* Description
* Two Action Buttons:

  * Interview
  * Rejected

---

## Functionalities

### Interview Button

* Moves the job to the **Interview tab**
* Updates status to "Interview"
* Increases Interview count in Dashboard
* Supports toggle (can switch to Rejected later)

### Rejected Button

* Moves the job to the **Rejected tab**
* Updates status to "Rejected"
* Increases Rejected count in Dashboard
* Supports toggle (can switch to Interview later)

---

### Toggle Feature

Users can switch between:

* Interview → Rejected
* Rejected → Interview

Dashboard and tab counts update automatically.

---

### Empty State Handling

If no jobs exist in:

* Interview Tab
* Rejected Tab

It displays:

* “No Jobs Available” message
* A subtitle
* An icon/image above the message

---

## Responsive Design

* Fully responsive layout
* Optimized for:

  * Desktop
  * Tablet
  * Mobile devices
* Built with Tailwind CSS utility classes

---

## Technologies Used

* HTML5
* Tailwind CSS
* JavaScript (DOM Manipulation)
* Git & GitHub for version control

---

## Project Purpose

This project demonstrates:

* DOM manipulation
* Event handling
* Dynamic UI updates
* Status-based filtering
* Responsive dashboard design
* Clean UI structure similar to modern Figma dashboard layouts

---

## Folder Structure

```
index.html
style.css (if used)
script.js
README.md
```

---

## Author

* Mohammad Showkotul Islam
* Sabir Mahmud

---

Thank you for reviewing this project.
