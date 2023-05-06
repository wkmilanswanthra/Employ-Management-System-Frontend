const base = process.env.BASE_URL || 'http://localhost:8000/';
export const URLS = {
    login: base + 'api/users/login',
    register: base + 'api/users/register',
    getUser: base + 'api/users/',
    updateUser: base + 'api/users/',
    deleteUser: base + 'api/users/',
    getReport: base + 'api/users/report/get',
    getUsers: base + 'api/users',
    addLeave: base + 'api/leave/add-leave',
    getLeave: base + 'api/leave/get',
    updateLeaveStatus: base + 'api/leave/update/',
    markAttendance: base + 'api/users/mark-attendance',
}