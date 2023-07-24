
//抽签
const country = [[
    "", "", "", "CN", "US", "GB", "AU", "BR", "CA"//, "HR", "CU", "EG", "FR", "FI", "DE", "IS", "PE", "RU",
],
[
    "", "", "", "中国", "美国", "英国", "澳大利亚", "巴西", "加拿大"//, "克罗地亚", "古巴", "埃及", "芬兰", "德国", "冰岛", "秘鲁", "俄罗斯"
]];
const CNcity = [[
    "PEK-01", "SHA-02", "CKG-03", "NKG-04", "CTU-05", "SZX-06", "CAN-07", "WNZ-08", "INC-09", "CZX-10", "HAK-11", "KHN-12", "TAO-13", "TNA-14", "SHA-15", "URC-16", "SJZ-17", "HET-18", "FOC-19", "TJN-20", "CGO-21", "XMN-22", "LHW-23", "JJN-24", "HCH-25", "XNN-26", "XUZ-27", "TYN-28", "WUH-29", "CGQ-30", "NGB-31", "KWL-32", "KWE-33", "ZUH-34", "DLC-35", "YIW-36", "HFE-37", "LXA-38", "LJG-39", "NNG-40", "KMG-41", "CSX-42", "SYX-43", "SIA-44", "ZHA-45", "HRB-46",
],
[
    "北京", "上海", "重庆", "南京", "成都", "深圳", "广州", "温州", "银川", "常州", "海口", "南昌", "青岛", "济南", "沈阳", "乌鲁木齐", "石家庄", "呼和浩特", "福州", "天津", "郑州", "厦门", "兰州", "晋江", "杭州", "西宁", "徐州", "太原", "武汉", "长春", "宁波", "桂林", "贵阳", "珠海", "大连", "义乌", "合肥", "拉萨", "丽江", "南宁", "昆明", "长沙", "三亚", "西安", "湛江", "哈尔滨"
]];
const UScity = [[
    "ANC", "ATL", "AUS", "BWI", "BOS", "NYC", "STL", "SFO", "SEA", "SAN",
], [
    "安克雷奇", "亚特兰大", "奥斯丁", "巴尔的摩", "波士顿", "纽约", "圣路易斯", "旧金山", "西雅图", "圣地亚哥"
]];
const GBcity = [[
    "LON", "MAN", "BHX", "LPL", "EDI", "GLA", "NCL", "BRS", "LBA", "CWL", "WAW", "RDG", "CBG", "OXF", "BOH", "DSA"
], [
    "伦敦", "曼彻斯特", "伯明翰", "利物浦", "爱丁堡", "格拉斯哥", "纽卡斯尔", "布里斯托尔", "利兹", "卡迪夫", "华威克", "雷丁", "剑桥", "牛津", "伯恩茅斯", "谢菲尔德"
]];
const AUcity = [[
    "STD", "MEL", "BNE", "PER", "ADL", "CBR", "OOL", "CNS", "DRW", "TSV"
], [
    "悉尼", "墨尔本", "布里斯班", "珀斯", "阿德莱德", "堪培拉", "黄金海岸", "凯恩斯", "达尔文", "汤斯维尔"
]];
const BRcity = [[
    "RIO", "SAO", "BSB", "SSA", "BHZ", "FOR", "CWB", "POA", "IGU", "MAO"
], [
    "里约热内卢", "圣保罗", "巴西利亚", "萨尔瓦多", "贝洛奥里藏特", "福塔莱萨", "库里蒂巴", "阿雷格里港", "伊瓜苏瀑布城", "马瑙斯"
]];
const CAcity = [[
    "YYZ", "YVR", "YUL", "YYC", "YOW", "YEG"
], [
    "多伦多", "温哥华", "蒙特利尔", "卡尔加里", "渥太华", "埃德蒙顿"
]];
const loader = document.getElementsByClassName("loader")[0];
const lotteryouter = document.getElementsByClassName("lotteryouter")[0];
const check = document.getElementsByClassName("check")[0];
const not = document.getElementsByClassName("not")[0];
const code = document.getElementById("code");
const btn = document.getElementById("btn");
const name2 = document.getElementById("name2");
const gender2 = document.getElementById("gender2");
const age2 = document.getElementById("age2");
const number2 = document.getElementById("number2");
const name3 = document.getElementById("name3");
const gender3 = document.getElementById("gender3");
const age3 = document.getElementById("age3");
const number3 = document.getElementById("number3");
btn.addEventListener("click", lottery);
function lottery() {
    const namee = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = +document.getElementById("age").value;
    const number = document.getElementById("number").value;
    if (namee == '') { alert("请输入姓名\nerror：个人资料审核未通过"); return } else if
        (gender !== "男" && gender !== "女") {
        alert("请输入合法性别（请勿空行）\nerror：个人资料审核未通过");
        return
    } else if (age <= 0) { alert("请输入合法年龄\nerror：个人资料审核未通过"); return } else if (age > 100) { alert("您的年龄有待进一步验证") };
    lotteryouter.style.display = "none";
    loader.style.display = "block";
    setTimeout(() => { loader.style.display = "none"; }, 4800);
    const cou = Math.floor(Math.random() * 9);
    const CNc = Math.floor(Math.random() * 46);
    const USc = Math.floor(Math.random() * 10);
    const GBc = Math.floor(Math.random() * 16);
    const AUc = Math.floor(Math.random() * 10);
    const BRc = Math.floor(Math.random() * 10);
    const CAc = Math.floor(Math.random() * 6);
    const country_en = country[0][cou];
    const country_zh = country[1][cou];
    const CNcity_en = CNcity[0][CNc];
    const CNcity_zh = CNcity[1][CNc];
    const UScity_en = UScity[0][USc];
    const UScity_zh = UScity[1][USc];
    const GBcity_en = GBcity[0][GBc];
    const GBcity_zh = GBcity[1][GBc];
    const AUcity_en = GBcity[0][AUc];
    const AUcity_zh = GBcity[1][AUc];
    const BRcity_en = GBcity[0][BRc];
    const BRcity_zh = GBcity[1][BRc];
    const CAcity_en = GBcity[0][CAc];
    const CAcity_zh = GBcity[1][CAc];
    name2.innerText = `${namee}`;
    gender2.innerText = `${gender}`;
    age2.innerText = `${age}`;
    number2.innerText = `${number}`;
    name3.innerText = `${namee}`;
    gender3.innerText = `${gender}`;
    age3.innerText = `${age}`;
    number3.innerText = `${number}`;
    const copy = document.getElementById("copy");
    function later() {
        if (country_en === "") {
            not.style.display = "block";
            copy.style.display = "block"
        } else {
            function add0(m) {
                return m < 10 ? "0" + m : m
            }
            const w = new Date()
            const time =
                `${w.getFullYear()}` + add0(w.getMonth() + 1) + `${add0(w.getDate())}`;
            check.style.display = "block";
            let gendercode;
            if (gender === "男") { gendercode = 1 };
            if (gender === "女") { gendercode = 0 };
            let unfold = [...time, gendercode];
            let sum = +unfold[0] + +unfold[1] + +unfold[2] + +unfold[3] + +unfold[4] + +unfold[5] + +unfold[6] + +unfold[7] + gendercode;
            let verify = [...("" + sum)][1];
            if (country_en === "CN") {
                code.innerHTML = `${country_en}-${CNcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${CNcity_zh}地下城`;
                copy.style.display = "block"
            };
            if (country_en === "US") {
                code.innerHTML = `${country_en}-${UScity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${UScity_zh}地下城`;
                copy.style.display = "block"
            };
            if (country_en === "GB") {
                code.innerHTML = `${country_en}-${GBcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${GBcity_zh}地下城`;
                copy.style.display = "block"
            };
            if (country_en === "AU") {
                code.innerHTML = `${country_en}-${AUcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${AUcity_zh}地下城`;
                copy.style.display = "block"
            };
            if (country_en === "BR") {
                code.innerHTML = `${country_en}-${BRcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${BRcity_zh}地下城`;
                copy.style.display = "block"
            };
            if (country_en === "CA") {
                code.innerHTML = `${country_en}-${CAcity_en}-${time}-0001/${gendercode}${verify}`;
                duncity.innerHTML = `${country_zh}${CAcity_zh}地下城`;
                copy.style.display = "block"
            };
        }
    }
    setTimeout(later, 5000)

}