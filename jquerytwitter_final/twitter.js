$(document).ready(function () {
    const mainPage = $('.main-page');
    const loginPage = $('.login-page');
    // const middleContent = $('.middle-content');
    const signUpBtn = $('.sign-up');
    const loginBtn = $('.log-in');
    const btnTop = $('.btn-top');
    const newsFeedPage = $('.feeds-page');
    const loginModal = $('.login-modal');
    const modalX = $('.login-modal i');
    const loginFormBtn = $('.login-form-btn');
    const postBtn = $('.post-btn');
    const modalWrapper = $('.modal-wrapper');
    const modal = $('.modal');
    const postModalX = $('.modal-header i');
    const modalPostBtn = $('.modal-header button');
    const modalFooterPlus = $('.modal-footer span');
    const modalInput = $('.modal-input');
    const user = $('.user');
    const sidebar = $('.sidebar');
    const sidebarWrapper = $('.sidebar-wrapper');
    const xBtn = $('.sidebar-header i');
    const toggle = $('.toggle');
    const circle = $('.circle');

    const goToLoginPage = () => {
        mainPage.hide();
        loginPage.show();
    };

    signUpBtn.on('click', function () {
        goToLoginPage();
    });

    loginBtn.on('click', function () {
        goToLoginPage();
    });

    btnTop.on('click', function () {
        const inputUserInfo = $('.user-info');
        const inputPassword = $('.password');

        if (inputUserInfo.val() !== '' && inputPassword.val() !== '') {
            mainPage.hide();
            newsFeedPage.show();
        } else {
            goToLoginPage();
            loginModal.show();
        }
    });

    modalX.on('click', function () {
        loginModal.hide();
    });

    loginFormBtn.on('click', function () {
        const loginUserInfo = $('.login-user-info');
        const loginPassword = $('.login-password');

        if (loginUserInfo.val() !== '' && loginPassword.val() !== '') {
            loginPage.hide();
            newsFeedPage.show();
        } else {
            loginModal.show();
        }
    });

    postBtn.on('click', function () {
        modal.show();
        modalWrapper.addClass('modal-wrapper-display');
    });

    const changeOpacity = x => {
        modalPostBtn.css('opacity', x);
        modalFooterPlus.css('opacity', x);
    };

    postModalX.on('click', function () {
        modal.hide();
        modalWrapper.removeClass('modal-wrapper-display');

        if (modalInput.val() !== '') {
            modalInput.val('');
            changeOpacity(0.5);
        }
    });

    modalInput.on('keypress', function (e) {
        if ($(this).val() !== '') {
            changeOpacity(1);
        }
    });

    modalInput.on('blur', function (e) {
        if ($(this).val() === '') {
            changeOpacity(0.5);
        }
    });

    user.on('click', function () {
        sidebar.addClass('sidebar-display');
        sidebarWrapper.addClass('sidebar-wrapper-display');
    });

    xBtn.on('click', function () {
        sidebar.removeClass('sidebar-display');
        sidebarWrapper.removeClass('sidebar-wrapper-display');
    });

    const darkElements1 = $('.dark-mode-1');
    const darkElements2 = $('.dark-mode-2');
    const lighTexts = $('.light-text');
    const borders = $('.border');

    toggle.on('click', function () {
        circle.toggleClass('move');
        darkElements1.toggleClass('dark-1');
        darkElements2.toggleClass('dark-2');
        lighTexts.toggleClass('light');
        borders.toggleClass('border-color');
    });
});