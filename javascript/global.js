var sts = 1;

function noscroll(){
    window.scrollTo(0,0);
}

window.addEventListener("scroll",noscroll);

function kopce(){            
    var slika = document.getElementById("bigHead");
    var naslovce = document.getElementById("naslovce");
    var tekstce = document.getElementById("tekstce");

    slika.style.transition = "all 1s";
    naslovce.style.transition = "all 2s";
    tekstce.style.transition = "all 2s";

    if(sts == 1){     
      slika.style.backgroundImage = "url('2eer.PNG')"; 
      naslovce.innerHTML = "Петле мое";
      tekstce.innerHTML = "Сарче знаеш ли дека ајкула може да издржи без оброк дури три месеци, али не дај боже да те види тебе колку си слатка, ќе неможе ни ден!";
      sts = 2;
    }else if(sts == 2){
      slika.style.backgroundImage = "url('3eer.jpeg')"; 
      naslovce.innerHTML = "МАФИЈО МОЈА!";
      tekstce.innerHTML = "А Сарче незнам дали си приметила али разлика помеѓу тебе и криминалец не постои! Ти ми го украде срцето одамна😪.";
      sts = 3;
    }else if(sts == 3){
      slika.style.backgroundImage = "url('4eer.PNG')"; 
      naslovce.innerHTML = "Ама те сакам! И не, не е пишано погрешка!";
      tekstce.innerHTML = "И некад ме мачиш ко понеделник😂. Диво прасенце😻";
      document.getElementsByTagName("A")[0].innerHTML = "Почеток";
      sts = 4;
    }else if(sts == 4){
      slika.style.backgroundImage = "url('1eer.jpeg')"; 
      naslovce.innerHTML = "Сарче бебуш мој🤗, ТЕ САКАМ НАЈВИШЕ!";
      tekstce.innerHTML = "Срцуш те сакам најмногу! Иако некад знаеш да си гомце ипак те сакам највеќе! Не се лути за глупости, иако си бебе мало😅";
      document.getElementsByTagName("A")[0].innerHTML = "Следна";
      sts = 1;
    }
};
