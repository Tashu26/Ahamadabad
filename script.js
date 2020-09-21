function changeText(name){
    console.log(changeText);
    if(name == "About"){
        document.getElementById("heading").innerHTML="About";
        document.getElementById("headingPara").innerHTML="Ahmedabad ( Amdavad in Gujarati) is the largest city and former capital of the Indian state of Gujarat. It is the administrative headquarters of the Ahmedabad district and the seat of the Gujarat High Court. Ahmedabad is located on the banks of the Sabarmati River, 23 km (14 mi) from the state capital Gandhinagar, which is its twin city Ahmedabad has emerged as an important economic and industrial hub in India.It is the second-largest producer of cotton in India. Ahmedabad's increasing population has resulted in an increase in the construction and housing industries resulting in recent development of  skyscrapers.";
    }
    else if(name=='history')
    {
        document.getElementById("heading").innerHTML="History";
        document.getElementById("headingPara").innerHTML='The area around Ahmedabad has been inhabited since the 11th century, when it was known as Ashaval. At that time, Karna, the Chaulukya ruler of Anhilwara (modern Patan), waged a successful war against the Bhil king of Ashaval, and established a city called Karnavati on the banks of the Sabarmati<br>';

    }

    else if(name=='culture'){
       document.getElementById("heading").innerHTML="Culture";
       document.getElementById("headingPara").innerHTML= ' Early in Ahmedabad history, under Ahmed Shah, builders fused Hindu craftsmanship with Persian architecture, giving rise to the Indo-Saracenic style. Many mosques in the city were built in this fashion. ';

    }

    else if(name=='environment'){
         document.getElementById("heading").innerHTML="Environment";
         document.getElementById("headingPara").innerHTML= "<p>Ahmedabad has a hot, semi-arid climate (Köppen climate classification: BSh), with marginally less rain than required for a tropical savanna climate. There are three main seasons: summer, monsoon and winter.  <br>Aside from the monsoon season, the climate is extremely dry. ";
    }

    else if(name=='festival'){
        document.getElementById("heading").innerHTML="Festival";
        document.getElementById("headingPara").innerHTML= "Navaratri is a Hindu festival that spans nine nights (and ten days) and is celebrated every year in the autumn. It is observed for different reasons and celebrated differently in various parts of the Indian cultural sphere.  <br>Theoretically, there are four seasonal Navaratri. However, in practice, it is the post-monsoon autumn festival called Sharada Navaratri that is the most observed in the honor of the divine feminine Devi (Durga).  ";
    }
}