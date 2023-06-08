sound = new Audio('sound.mp3');
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    dtime = d.getDay();
console.log(d);

    hrotation = 30*htime + mtime/2 + stime/120;
    mrotation = 6*mtime + stime/10;
    srotation = 6*stime;
    console.log(hrotation);
    //console.log(mrotation);
    //console.log(srotation);
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    var h=document.getElementById('h1');
    //console.log(h);
    
    var setime=(stime<10?"0"+stime:stime);
    var metime=(mtime<10?"0"+mtime:mtime);
        h.innerHTML=htime+":"+metime+":"+setime;
        var monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            var day = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            
            
            var h1=document.getElementById('h')
            var h2=document.getElementById('h2')
                h2.innerHTML=day[dtime];
            h1.innerHTML = [d.getDate(), monthNames[d.getMonth()], d.getFullYear()+' '].join('/');

sound.play();
}, 1000);
