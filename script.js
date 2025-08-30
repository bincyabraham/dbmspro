// Fake login redirect
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const role = document.getElementById("role").value;
  if(role === "teacher") window.location.href = "teacher.html";
  else if(role === "student") window.location.href = "student.html";
  else alert("Select role");
});

function logout() {
  window.location.href = "login.html";
}

// Teacher Attendance Form
document.getElementById("attendanceForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const rollno = document.getElementById("rollno").value;
  const subject = document.getElementById("subject").value;
  const date = document.getElementById("date").value;
  const status = document.getElementById("status").value;

  const table = document.querySelector("#attendanceTable tbody");
  const row = table.insertRow();
  row.insertCell(0).innerText = rollno;
  row.insertCell(1).innerText = subject;
  row.insertCell(2).innerText = date;
  row.insertCell(3).innerText = status;
});

// Student view (demo, static for now)
if(document.getElementById("studentTable")) {
  const data = [
    {subject:"Math", date:"2025-08-01", status:"P"},
    {subject:"Physics", date:"2025-08-02", status:"A"}
  ];
  const tbody = document.querySelector("#studentTable tbody");
  data.forEach(d => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = d.subject;
    row.insertCell(1).innerText = d.date;
    row.insertCell(2).innerText = d.status;
  });

  document.getElementById("summary").innerHTML = `
    <p>Math: 80%</p>
    <p>Physics: 50%</p>
    <p>Overall: 65%</p>
  `;
}