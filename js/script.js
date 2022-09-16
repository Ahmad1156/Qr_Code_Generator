const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');


const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearuI();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    showSpinner();
    setTimeout(() => {
        HideSpinner();
        generateQrCode(url, size);

        setTimeout(()=>{
           const saveUrl=qr.querySelector('img').src;
           createSavebtn(saveUrl);
        },50)
    }, 1000)

}
const generateQrCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    });
}
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const HideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}
const clearuI=()=>{
    qr.innerHTML= '' ;
    const SaveLink=document.getElementById('save-link');
    if(SaveLink)
      SaveLink.remove();
}
const createSavebtn=(saveUrl)=>{
    const link=document.createElement('a');
    link.id='save-link';
    link.classList="text-white font-weight-bold text-decoration-none  py-2 color m-auto my-3 col-lg-5 col-md-7 col-12";
    link.href=saveUrl;
    link.download='qrcode';
    link.innerHTML='Save Image';
    document.getElementById('generated').appendChild(link);
}
form.addEventListener('submit', onGenerateSubmit);

