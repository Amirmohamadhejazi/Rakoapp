import {TweenMax} from "gsap";
import moment from "moment";
import Resizer from "react-image-file-resizer";
import {toast} from 'react-toastify';
import {BsPhone, CgDanger, IoMdWifi} from "react-icons/all";
import React from "react";
// *************Remove item**********
export const RemoveItem=(id)=>{
    const $el = document.getElementById(id);
    const duration = 2;
    const from = { opacity: 0};
    TweenMax.to($el, duration, from);
    return setTimeout(() => {
        $el.remove();
    }, 2000)
};
export function formatNumber(num) {
    let NewValue=   Math.round((parseInt(num) + Number.EPSILON) * 100) / 100;
    return NewValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
export function moneyFormat(num) {


    return    formatNumber(num)+ " تومان "
}

export const validatephoneNumber = (phonenumber) => {
    var re = /^(\+98|0)?9\d{9}$/;
    return re.test(phonenumber);
}
export const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export const JustPersian = (persioanTxt) => {
    // if(!/^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s\n\r\t\d\(\)\[\]\{\}.,،;\-؛]+$/.test($(this).val())){
    //     alert("فقط حروف فارسی مورد قبول است");
    //     $(this).val("");
    // }


    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var re = /^[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤكيىإآأءًٌٍَُِّ\s\n\r\t\d\(\)\[\]\{\}.,،;\-؛]+$/;
    return re.test(persioanTxt);
}


export const   chackingPersian=(phonenumber) =>{
    var re = /^(\+98|0)?9\d{9}$/;
    return re.test(phonenumber);
}
export function  getIndexIfObjWithAttr   (array, attr, value) {
    for(var i = 0; i < array.length; i++) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}
export function isOdd(num) { return num % 2;}

export function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}
export function formatDuration(duration) {
    return moment
        .duration(duration, "seconds")
        .format("mm:ss", { trim: false });
}

export const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 400, 400, 'jpeg', 100, 0,
        uri => {
            resolve(uri);
        },
        'base64', 350,
        350,
    )
});


export function base64StringtoFile (base64String, filename, type) {
    var arr = base64String.split(','),
        // , mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
    }
    return new File([u8arr], filename, {type: type})
}
export function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    var obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
    };
    return obj;
}
export function getAverageRGB(imgEl) {

    var blockSize = 5, // only visit every 5 pixels
        defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch(e) {
        /* security error, img on diff domain */alert('x');
        return defaultRGB;
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;

}
export function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}


export const openModalVpn = (type = 1,text) => {
    let message=Vpn();
    if (type===2){
          message=DownloadContent()
    }else if (type===3){
        message=allertTxt(text)
    }

    // toast(message, MessageOptions);
    return toast.info(message, {
        ...MessageOptions,
        className: type===1? 'toast-info-container toast-info-container-after':type===2?'toast-success-container toast-success-container-after':type===2?'toast-error-container toast-error-container-after':'toast-info-container toast-info-container-after',

    });
}


const MessageOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    // limit:1
    // newestOnTop:true

}
const Style={
    display:"flex",
    fontSize:"14px",
    justifyContent: 'space-around',
    alignItems:"center",
    fontFamily:"sans"
}

const Vpn =()=>{
    let user="کاربر"
    if (localStorage.getItem('jaan_profile')){
        user=JSON.parse(localStorage.getItem("jaan_profile")).name;
    }
    return(
        <div dir='rtl' className='rtl text-right'  style={Style}>   <IoMdWifi color={'#2FA4ED'} size={'70px'} className="ml-3"/>
        <span>
            {user} جآن،
            <br/>
            اگر فیلترشکن شما فعال هست، برای تجربه کاربری بهتر پیشنهاد می‌کنیم آن را غیر فعال کنید.
        </span>

        </div>
    )
}
const DownloadContent =()=>{

    return(
        <div dir='rtl' className='rtl text-right'  style={Style}>   <BsPhone color={'#28a745'} size={'40px'} className="ml-3"/>
        <span>
           لینک دانلود برای شما ارسال شد
        </span>

        </div>
    )
}
const allertTxt =(text)=>{

    return(
        <div dir='rtl' className='rtl text-right'  style={Style}>   <CgDanger color={'#F0505D'} size={'40px'} className="ml-3"/>
        <span className='color-Carnation'>
      {text}
        </span>

        </div>
    )
}
