//轮播图
const img01 = document.getElementById("img01");
const img02 = document.getElementById("img02");
const img03 = document.getElementById("img03");
const img04 = document.getElementById("img04");
const img05 = document.getElementById("img05");
const img06 = document.getElementById("img06");
let length = 0;
function roll(q, w, e, r, t, y) {
    if (length < 600) {
        length += 100
    }
    q.style.transform = `translateX(-${length}%)`;
    q.style.transition = "2s";
    w.style.transform = `translateX(-${length}%)`;
    w.style.transition = "2s";
    e.style.transform = `translateX(-${length}%)`;
    e.style.transition = "2s";
    r.style.transform = `translateX(-${length}%)`;
    r.style.transition = "2s";
    t.style.transform = `translateX(-${length}%)`;
    t.style.transition = "2s";
    y.style.transform = `translateX(-${length}%)`;
    y.style.transition = "2s";
    if (length === 600) {
        length -=600
        q.style.transform = `translateX(-${length}%)`;
        w.style.transform = `translateX(-${length}%)`;
        e.style.transform = `translateX(-${length}%)`;
        r.style.transform = `translateX(-${length}%)`;
        t.style.transform = `translateX(-${length}%)`;
        y.style.transform = `translateX(-${length}%)`;
    }
};
setInterval(() => { roll( img01, img02, img03, img04, img05, img06) }, 4000)
//滑动小点
const i1 = document.getElementsByClassName("static")[0];
const i2 = document.getElementsByClassName("static")[1];
const i3 = document.getElementsByClassName("static")[2];
const i4 = document.getElementsByClassName("static")[3];
const i5 = document.getElementsByClassName("static")[4];
const i6 = document.getElementsByClassName("static")[5];
setInterval(()=>{
    if(length === 0){
        i1.classList.add("active");
        i1.classList.remove("static");
        i2.classList.add("static");
        i2.classList.remove("active");
        i3.classList.add("static");
        i3.classList.remove("active");
        i4.classList.add("static");
        i4.classList.remove("active");
        i5.classList.add("static");
        i5.classList.remove("active");
        i6.classList.add("static");
        i6.classList.remove("active");
    }
    if(length === 100){
        i1.classList.add("static");
        i1.classList.remove("active");
        i2.classList.add("active");
        i2.classList.remove("static");
        i3.classList.add("static");
        i3.classList.remove("active");
        i4.classList.add("static");
        i4.classList.remove("active");
        i5.classList.add("static");
        i5.classList.remove("active");
        i6.classList.add("static");
        i6.classList.remove("active");
    }
    if(length === 200){
        i1.classList.add("static");
        i1.classList.remove("active");
        i2.classList.add("static");
        i2.classList.remove("active");
        i3.classList.add("active");
        i3.classList.remove("static");
        i4.classList.add("static");
        i4.classList.remove("active");
        i5.classList.add("static");
        i5.classList.remove("active");
        i6.classList.add("static");
        i6.classList.remove("active");
    }
    if(length === 300){
        i1.classList.add("static");
        i1.classList.remove("active");
        i2.classList.add("static");
        i2.classList.remove("active");
        i3.classList.add("static");
        i3.classList.remove("active");
        i4.classList.add("active");
        i4.classList.remove("static");
        i5.classList.add("static");
        i5.classList.remove("active");
        i6.classList.add("static");
        i6.classList.remove("active");
    }
    if(length === 400){
        i1.classList.add("static");
        i1.classList.remove("active");
        i2.classList.add("static");
        i2.classList.remove("active");
        i3.classList.add("static");
        i3.classList.remove("active");
        i4.classList.add("static");
        i4.classList.remove("active");
        i5.classList.add("active");
        i5.classList.remove("static");
        i6.classList.add("static");
        i6.classList.remove("active");
    }
    if(length === 500){
        i1.classList.add("static");
        i1.classList.remove("active");
        i2.classList.add("static");
        i2.classList.remove("active");
        i3.classList.add("static");
        i3.classList.remove("active");
        i4.classList.add("static");
        i4.classList.remove("active");
        i5.classList.add("static");
        i5.classList.remove("active");
        i6.classList.add("active");
        i6.classList.remove("static");
    }
},4000)

