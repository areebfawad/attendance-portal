
const table = document.getElementById('table_container')
const adjustWidth = () => {
    const windowWidth = window.innerWidth;
    table.style.width = windowWidth - 100
}

adjustWidth()

document.addEventListener('DOMContentLoaded', function() {
    const users = [
        {
            name: 'John Doe',
            fatherName: 'Richard Doe',
            age: 16,
            rollNo: '101',
            class: '10th Grade',
          },
          {
            name: 'Jane Smith',
            fatherName: 'Robert Smith',
            age: 15,
            rollNo: '102',
            class: '9th Grade',
          },
          {
            name: 'Michael Johnson',
            fatherName: 'James Johnson',
            age: 17,
            rollNo: '103',
            class: '11th Grade',
          },
          {
            name: 'Emily Davis',
            fatherName: 'William Davis',
            age: 14,
            rollNo: '104',
            class: '8th Grade',
          },
          {
            name: 'Jessica Brown',
            fatherName: 'Charles Brown',
            age: 16,
            rollNo: '105',
            class: '10th Grade',
          },
          {
            name: 'Daniel Wilson',
            fatherName: 'Thomas Wilson',
            age: 15,
            rollNo: '106',
            class: '9th Grade',
          },
          {
            name: 'Sarah Taylor',
            fatherName: 'Andrew Taylor',
            age: 17,
            rollNo: '107',
            class: '11th Grade',
          },
          {
            name: 'David Lee',
            fatherName: 'George Lee',
            age: 14,
            rollNo: '108',
            class: '8th Grade',
          },
          {
            name: 'Laura Martin',
            fatherName: 'Paul Martin',
            age: 16,
            rollNo: '109',
            class: '10th Grade',
          },
          {
            name: 'Kevin White',
            fatherName: 'Mark White',
            age: 15,
            rollNo: '110',
            class: '9th Grade',
          },
          {
            name: 'Anna Harris',
            fatherName: 'Steven Harris',
            age: 17,
            rollNo: '111',
            class: '11th Grade',
          },
          {
            name: 'Brian Clark',
            fatherName: 'Edward Clark',
            age: 14,
            rollNo: '112',
            class: '8th Grade',
          },
          {
            name: 'Sophia Lewis',
            fatherName: 'Henry Lewis',
            age: 16,
            rollNo: '113',
            class: '10th Grade',
          },
          {
            name: 'Christopher Walker',
            fatherName: 'Frank Walker',
            age: 15,
            rollNo: '114',
            class: '9th Grade',
          },
          {
            name: 'Grace Hall',
            fatherName: 'Peter Hall',
            age: 17,
            rollNo: '115',
            class: '11th Grade',
          },
          {
            name: 'Justin Allen',
            fatherName: 'Patrick Allen',
            age: 14,
            rollNo: '116',
            class: '8th Grade',
          },
          {
            name: 'Olivia Young',
            fatherName: 'Bruce Young',
            age: 16,
            rollNo: '117',
            class: '10th Grade',
          },
          {
            name: 'Nathan Hernandez',
            fatherName: 'Larry Hernandez',
            age: 15,
            rollNo: '118',
            class: '9th Grade',
          },
          {
            name: 'Mia King',
            fatherName: 'Joe King',
            age: 17,
            rollNo: '119',
            class: '11th Grade',
          },
          {
            name: 'Ethan Wright',
            fatherName: 'Stanley Wright',
            age: 14,
            rollNo: '120',
            class: '8th Grade',
          },
          {
            name: 'Ava Lopez',
            fatherName: 'Timothy Lopez',
            age: 16,
            rollNo: '121',
            class: '10th Grade',
          },
          {
            name: 'Jacob Scott',
            fatherName: 'Chris Scott',
            age: 15,
            rollNo: '122',
            class: '9th Grade',
          },
          {
            name: 'Samantha Green',
            fatherName: 'Shawn Green',
            age: 17,
            rollNo: '123',
            class: '11th Grade',
          },
          {
            name: 'Andrew Adams',
            fatherName: 'Jason Adams',
            age: 14,
            rollNo: '124',
            class: '8th Grade',
          },
          {
            name: 'Ella Baker',
            fatherName: 'Ryan Baker',
            age: 16,
            rollNo: '125',
            class: '10th Grade',
          },
    ];

    const attendanceList = document.getElementById('attendance-list');
    const markAttendanceButton = document.getElementById('mark-attendance');
    const presentCountBox = document.getElementById('present-count');
    const absentCountBox = document.getElementById('absent-count');
    const leaveCountBox = document.getElementById('leave-count');

    let presentCount = 0;
    let absentCount = 0;
    let leaveCount = 0;

    function updateCounts() {
        presentCountBox.textContent = presentCount;
        absentCountBox.textContent = absentCount;
        leaveCountBox.textContent = leaveCount;
    }

    function populateAttendanceList() {
        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${user.rollNo}</td>
                <td>${user.name}</td>
                <td>${user.fatherName}</td>
                <td>${user.age}</td>
                <td>${user.class}</td>
                <td class="status-buttons">
                    <button class="status-button present">Present</button>
                    <button class="status-button absent">Absent</button>
                    <button class="status-button leave">Leave</button>
                </td>
                <td class="attendance"></td> <!-- New column for Attendance -->
            `;

            attendanceList.appendChild(row);
        });
    }

    function markAttendance() {
        const rows = attendanceList.querySelectorAll('tr');
        rows.forEach((row, index) => {
            const presentButton = row.querySelector('.status-button.present');
            const absentButton = row.querySelector('.status-button.absent');
            const leaveButton = row.querySelector('.status-button.leave');
            const attendanceCell = row.querySelector('.attendance');

            presentButton.addEventListener('click', () => {
                if (presentButton.classList.contains('selected')) {
                    presentCount--;
                    presentButton.classList.remove('selected');
                    attendanceCell.textContent = '';
                } else {
                    presentCount++;
                    presentButton.classList.add('selected');
                    attendanceCell.textContent = 'Present';
                    attendanceCell.classList.remove('attendance-absent');
                    attendanceCell.classList.remove('attendance-leave');
                    attendanceCell.classList.add('attendance-present');
                }
                updateCounts();
            });

            absentButton.addEventListener('click', () => {
                if (absentButton.classList.contains('selected')) {
                    absentCount--;
                    absentButton.classList.remove('selected');
                    attendanceCell.textContent = '';
                } else {
                    absentCount++;
                    absentButton.classList.add('selected');
                    attendanceCell.textContent = 'Absent';
                    attendanceCell.classList.remove('attendance-present');
                    attendanceCell.classList.remove('attendance-leave');
                    attendanceCell.classList.add('attendance-absent');
                     
                }
                updateCounts();
            });

            leaveButton.addEventListener('click', () => {
                if (leaveButton.classList.contains('selected')) {
                    leaveCount--;
                    leaveButton.classList.remove('selected');
                    attendanceCell.textContent = '';
                } else {
                    leaveCount++;
                    leaveButton.classList.add('selected');
                    attendanceCell.textContent = 'Leave';
                    attendanceCell.classList.remove('attendance-absent');
                    attendanceCell.classList.remove('attendance-present');
                    attendanceCell.classList.add('attendance-leave');
                }
                updateCounts();
            });
        });
    }

    populateAttendanceList();
    markAttendance();
});
