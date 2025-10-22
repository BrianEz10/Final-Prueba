import { getCurrentUser } from './utils/auth';

(function checkRootRedirect() {
    const user = getCurrentUser();

    if (!user) {
    window.location.href = '/src/pages/auth/login/login.html';
    } else if (user.role === 'admin') {
    window.location.href = '/src/pages/admin/adminHome/adminHome.html';
    } else {
    window.location.href = '/src/pages/store/home/home.html';
    }
})();