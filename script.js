// Button click
document.getElementById('magicBtn').addEventListener('click', () => {
    alert('Button clicked!');
    document.getElementById('magicBtn').textContent = 'Clicked!';
  });
  
  
  // Keypress detection
  document.getElementById('keyInput').addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // Double-click secret action
  document.getElementById('magicBtn').addEventListener('dblclick', () => {
    alert('Secret double-click unlocked!');
  });
  
  // Tabs
  document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabNum = btn.dataset.tab;
      document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
      document.getElementById(`tab-${tabNum}`).classList.add('active');
    });
  });
  
  // Form validation
  document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let feedback = '';
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback += 'Invalid email format.<br>';
    }
    if (password.length < 8) {
      feedback += 'Password must be at least 8 characters long.<br>';
    }
  
    document.getElementById('feedback').innerHTML = feedback || 'Form is valid!';
  });
  
  // Real-time feedback
  document.getElementById('password').addEventListener('input', (e) => {
    const feedback = e.target.value.length < 8
      ? 'Password too short!'
      : 'Password looks good!';
    document.getElementById('feedback').textContent = feedback;
  });
  