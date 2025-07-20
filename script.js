function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);
  resultBox.innerHTML = '';

  setTimeout(() => {
    const student = {
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "Dummy University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "https://via.placeholder.com/130",
      assignments: [true, false, true, true],
      certificate: "#"
    };

    const html = `
      <div class="card">
        <img src="${student.photo}" alt="Student Photo" class="student-photo" />
        <h3>${student.name}</h3>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Mobile:</strong> ${student.mobile}</p>
        <p><strong>Domain:</strong> ${student.domain}</p>
        <p><strong>College:</strong> ${student.college}</p>
        <p><strong>Start Date:</strong> ${student.start}</p>
        <p><strong>Duration:</strong> ${student.duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
          ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`).join('')}
        </div>
        <p><strong>Status:</strong> Completed</p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;

    resultBox.innerHTML = html;
    showSpinner(false);
    showToast('✅ Student record found.');
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').classList.toggle('hidden', !show);
}
