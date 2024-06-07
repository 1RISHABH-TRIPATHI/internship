const fetchApi=async(location)=>{
   try {
     const response= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location ? location :''} ,India/?key=FYLBQX27SCTR7ANBQU8CGSS4D&include=current`);
     const data=await response.json();
     return data;
   } catch (error) {
        console.log(error);
        throw new Error(error);
   }
}


const submitId=document.getElementById("Submit")
submitId.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const searchID=document.getElementById("Search").value;
    const address=document.getElementsByTagName("address")[0];
    address.innerHTML=searchID;
    const tem= await fetchApi(searchID);
    const teem= tem.days[0];
    const tempLocation= teem?.temp;
    const tempData= (tempLocation-32)* 5/9;
    const temShow=document.getElementsByClassName("tem")[0];
    temShow.innerHTML=parseInt(tempData,10);

    const humidity=document.getElementsByClassName("Humidity")[0];
    humidity.innerHTML=teem?.humidity;
  
    const Wind=document.getElementsByClassName("Wind")[0];
    Wind.innerHTML=teem?.windspeed;
});