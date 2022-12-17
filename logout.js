const logedOut = () => {
    window.open('./index.html', '_self');
}

const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('logedIn='))?.split('=');
if(!cookieValue){
    logedOut();
}

export { logedOut };