function validation() {
    if (document.frm.name.value == "") {
        alert('Name is mandatory...')
        document.frm.name.focus();
        return false;
    }
    var nm=/^[A-Za-z]+$/;
    if(!nm.test(document.frm.name.value)){
        alert('please enter your valid name...')
        document.frm.name.focus();
        return false;
    }


    if (document.frm.mobile.value == "") {
        alert('mobile number is mandatory...')
        document.frm.mobile.focus();
        return false;
    }
    var mn=/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/
    if(!mn.test(document.frm.mobile.value)){
        alert('please enter your valid mobile number...')
        document.frm.mobile.focus();
        return false;
    }

    if (document.frm.email.value == "") {
        alert('email is mandatory...')
        document.frm.email.focus();
        return false;
    }
    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!em.test(document.frm.email.value)){
        alert('please enter your valid email...')
        document.frm.email.focus();
        return false;
    }

    if (document.frm.subject.value == "") {
        alert('subject is mandatory...')
        document.frm.subject.focus();
        return false;
    }
}

