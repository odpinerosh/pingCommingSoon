const frmData = document.getElementById('frmData');
const txtMail = document.getElementById('txtMail');
const txtProvide = document.getElementById('txtProvide')
const btnNotify = document.getElementById('btnNotify');


const funValidarMail = element => {
    element.preventDefault();
    txtMail.classList.remove('error');
    txtProvide.classList.remove('provError')

    if (txtMail.value=='' || !funTestMail(txtMail.value)) {
        txtMail.classList.add('error');
        txtProvide.classList.add('provError')
        txtMail.focus();
        return false;
    }

    return true;

}

const funTestMail = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }


btnNotify.addEventListener('click', funValidarMail);