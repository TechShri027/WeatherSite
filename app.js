let form=document.querySelector('.form')
let inputfield=document.querySelector('.search')
let btn=document.querySelector('.submit')
let weatherName=document.querySelector(".weatherName")
let weatherDescription=document.querySelector('.weatherDecription')
let degree=document.querySelector('.degree')
let feranide=document.querySelector('.feranide')
let cityName=document.querySelector('.cityName')
let time=document.querySelector('.time')
let day=document.querySelector('.day')

let targetLocation='Lucknow'

 async function getData(targetLocation){
   try{ let req=await fetch(`https://api.weatherapi.com/v1/current.json?key=abd345c3ce974922a0390733241506&q=${targetLocation}&aqi=no`)
    let res=await req.json()
    console.log(res)

    const weatherNameField = res.current.condition.text;
    const weatherDescriptionField = res.current.feelslike_c;
    const degreeField = res.current.temp_c;
    const feranideField = `${res.current.humidity}%`;
    const cityNameField = res.location.name;
    const timeField = gettime();
    const dayField = date();

updateData(weatherNameField,weatherDescriptionField,degreeField,feranideField,cityNameField,timeField,dayField)
}catch(error){
    console.error("Error fetching data:", error);
}
 }


function updateData(weatherNameField,weatherDescriptionField,degreeField,feranideField,cityNameField,timeField,dayField){
weatherName.innerText=weatherNameField
weatherDescription.innerText=`which feels like ${weatherDescriptionField}`
degree.innerText=`${degreeField}°C`;
feranide.innerText=feranideField
cityName.innerText=cityNameField
time.innerText=timeField
day.innerText=dayField

}

// // console.log(form)
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    targetLocation = inputfield.value.trim();
// console.log(target)

if(targetLocation){
    getData(targetLocation)
}else{
    alert("please enter location")
}

})



function date() {
    let now = new Date();
    return `${now.getDate()} ${now.toLocaleString('default', { month: 'short' })} ${now.getFullYear()}`;
}

function gettime() {
    let now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

    // let d=date.getDate();
    // let m=date.getMonth()

    // switch(m){
    //     case 0:monthname="Jan"
    //     break;
    //     case 1:monthname="Feb"
    //     break;
    //     case 2:monthname="Mar"
    //     break;
    //     case 3:monthname="Apr"
    //     break;
    //     case 4:monthname="May"
    //     break;
    //     case 5:monthname="Jun"
    //     break;
    //     case 6:monthname="Jul"
    //     break;
    //     case 7:monthname="Aug"
    //     break;
    //     case 8:monthname="Sept"
    //     break;
    //     case 9:monthname="Oct"
    //     break;
    //     case 10:monthname="Nov"
    //     break;
    //     case 11:monthname="Dec"
    //     break;
    // }
   
    // console.log(m)
// }

