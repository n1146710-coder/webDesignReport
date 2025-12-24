    function showIntro(uid) {
        let s = servant[uid], t = [];
        const type = ["Archer","Saber","Lancer","Rider","Caster","Assassin","Berserker"], card = ["Arts","Quick","Buster"];
        const cost = [0,3,4,9,12,16], npT = ["self","enemy","enemy-all","friendly-all","stars"];

        t.push(`<tr style="font-size: 130%;"><th colspan="6">${s.name}</th><th rowspan="3"><img height="18" src="./assets/images/icon/${s.star}star.png"><br><img width="50" height="50" src="./assets/images/icon/${type[s.type].toLowerCase()}.png"></th></tr>`);
        t.push(`<tr><th style="width:90px">職階</th><th style="width:90px">性別</th><th style="width:90px">身高</th><th style="width:90px">體重</th><th style="width:90px">屬性</th><th style="width:90px">副屬性</th></tr><tr><td>${type[s.type]}</td>`);
        t.push(s.info.split("|").map(a=>`<td>${a}</td>`).join(""));
        t.push(`</tr><tr><th>筋力</th><th>耐久</th><th>敏捷</th><th>魔力</th><th>幸運</th><th>寶具</th><th rowspan="11"><img width="285" height="403" src="./assets/images/servant/card${uid}.png"></th></tr><tr>`);
        t.push(s.stat.split("|").map(a=>`<td>${a}</td>`).join(""));
        t.push(`</tr><tr><th colspan="5">指令卡</th><th>COST</th></tr><tr><td colspan="5" rowspan="1" style="align-content: space-between;">`);
        t.push(s.card.toString().split("").map(a=>`<img src="./assets/images/icon/${card[a].toLowerCase()}.png" width="50" height="50" style="align-content: space-between;">`).join(""));
        t.push(`</td><td>${cost[s.star]}</td></tr><tr><th colspan="5">主動技能</th><th style="white-space: nowrap;">CD回合</th></tr><tr class="skill">`);
        t.push(s.skill.map(a=>`<th><img src="./assets/images/icon/skill${a.id}.png" width="40" height="40"></th><td colspan="4" style="text-align: left;"><strong style="line-height: 150%;">${a.name}</strong><br><span style="font-size: 80%">${a.note}</span></td><td>${a.cdr}</td></tr><tr>`).join(""));
        t.push(`<th>能力</th><th>基礎</th><th>滿級</th><th>90級</th><th>100級</th><th>120級</th></tr><tr><th>ATK</th>`);
        t.push([s.ATKs,s.HPs].map(a=>a.map(b=>`<td>${b}</td>`).join("")).join("</tr><tr><th>HP</th>"));
        t.push(`</tr><!--tr><th colspan="7">寶具</th></tr--><tr class="npname-bg ${card[s.np.card].toLowerCase()}"><td colspan="7"><div class="npname-name" style="width: auto; padding-inline: 20%;display: flex; justify-content: space-evenly;align-items: center;">`);
        t.push(`寶具<img src="./assets/images/icon/${card[s.np.card]}.png" width="60" height="60">${s.np.name.split("|").join("<br>")}</div></td></tr>`);
        t.push(s.np.effects.map(a=>`<tr><th class="nptarget nptar-${npT[a.id]}" colspan="7">${a.note}</th></tr>`).join("").concat("</tbody>"));

        t = t.join("");
        document.querySelector("table.wikitable").innerHTML = t;
    }

    function sort() {
        let e= document.querySelector("select#sort").value, func = [(a, b) => (servant[a].type - servant[b].type),
        (a, b) => (servant[b].star == servant[a].star ? 0 : servant[b].star > servant[a].star ? 1 : -1),
        (a, b) => (servant[b].star == servant[a].star ? 0 : servant[b].star < servant[a].star ? 1 : -1),
        (a, b) => (servant[a].ATKs[1] == servant[b].ATKs[1] ? 0 : servant[a].ATKs[1] < servant[b].ATKs[1] ? 1 : -1),
        (a, b) => (servant[a].ATKs[1] == servant[b].ATKs[1] ? 0 : servant[a].ATKs[1] > servant[b].ATKs[1] ? 1 : -1),
        (a, b) => (servant[a].HPs[1] == servant[b].HPs[1] ? 0 : servant[a].HPs[1] < servant[b].HPs[1] ? 1 : -1),
        (a, b) => (servant[a].HPs[1] == servant[b].HPs[1] ? 0 : servant[a].HPs[1] > servant[b].HPs[1] ? 1 : -1),
        (a, b) => (a - b)][e]; e = document.querySelector('div#result');

        fgoStatus.result = fgoStatus.result.sort().sort(func); //update status
        fgoStatus.result.reverse().forEach(a => e.prepend(servant[a].icon)); //display sorted icons
    }


    const fgoStatus = {
        filter: {
            type: [], star: [], npCard: [], npType: []
        }, filterFunc: {
            type: arr => arr.filter(id => fgoStatus.filter.type.indexOf(servant[id].type.toString()) >= 0),
            star: arr => arr.filter(id => fgoStatus.filter.star.indexOf(servant[id].star.toString()) >= 0),
            npCard: arr => arr.filter(id => fgoStatus.filter.npCard.indexOf(servant[id].np.card.toString()) >= 0),
            npType: arr => arr.filter(id => fgoStatus.filter.npType.indexOf(servant[id].np.type.toString()) >= 0)
        }
    };

    fgoStatus.result = [].slice.call(document.querySelectorAll('div#result img')).map(x=>{
        let y = x.src.slice(-7,-4); servant[y].icon = x.parentElement; return x.parentElement.id = y;
    });

    showIntro("002");


    ["div#type|Archer,Saber,Lancer,Rider,Caster,Assassin,Berserker", "div#star|5,4,3,2,1", "div#npCard|Arts,Quick,Buster", "div#npType|輔助,單體攻擊,全體攻擊"].forEach( (x, i) => {
        let [k, v] = x.split("|");
        switch (i) {
            case 0:
                v = v.split(",").reduce((s,a,b)=>(s+=`<button class="toggle-btn" value="${b}">${a}</button>`),""); break;
            case 1:
                v = v.split(",").reduce((s,a,b)=>(s+=`<button class="toggle-btn" value="${a}">${a} ★</button>`),""); break;
            default:
                v = v.split(",").map((a,b)=>`<button class="toggle-btn" value="${b}">${a}寶具</button>`).reverse().join("");
        }
        document.querySelector(k).innerHTML = v; //增加篩選器按鈕
    });
    

    //左上角按鈕動作
    document.getElementById("filterButton").addEventListener('click', e => {
        let el = e.currentTarget.parentElement.parentElement.classList;
        el.toggle('on');
        if (el.contains("on")) return; //else: 用戶直接關閉過濾器，需還原成原來的樣子
        Object.entries(fgoStatus.filter).forEach(e => {
            let [k, v] = e;
            document.querySelectorAll('div#'+ k +' button').forEach(el => {
                el.classList.remove("on");
                if (v.indexOf(el.value) >= 0) el.classList.add("on");
            });
        });
    });

    //利用泡泡監聽從者圖示點擊事件
    document.querySelector("div#result").addEventListener('click', e => {
        let target = e.srcElement;
        target = target.tagName == "DIV" ? target.id : target.parentElement.id;
        return target.length ? showIntro(target) : null;
    });

    // 排序選單條件變更監聽
    document.querySelector("select#sort").addEventListener('change', sort);

    // 所有 toggle 按鈕加上切換效果
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("on");
        });
    });

    // 全部選擇/cancel
    document.querySelector("div#sortMenu > div.btn-row").addEventListener("click", (e) => {
        if (e.srcElement.tagName != "BUTTON") return;
        document.querySelectorAll(".toggle-btn").forEach(btn => {
            if (e.srcElement.id == "all") btn.classList.add("on");
            else btn.classList.remove("on");
        });
    });

    document.querySelector("button.confirm-btn").addEventListener('click', evt => {
        let el = document.querySelector("div#rest");

        //篩選器動作1: 將所有從者全部移到隱藏區，等篩選完後秀出結果
        document.querySelectorAll("div#result > div.servant").forEach(e => el.append(e));
        //篩選器動作2: 將所有從者代號重加入被篩選範圍內
        fgoStatus.result = Object.keys(servant).sort();
        //篩選器動作3: 將篩選條件寫入暫存器，並使用篩選函式挑出符合條件的從者
        Object.entries(fgoStatus.filterFunc).forEach(e => {
            let [id, func] = e, tag = "div#" + id;
            fgoStatus.filter[id].length = 0; //篩選器條件暫存旗標歸零 -> //寫入生效的篩選器條件
            document.querySelectorAll(tag + " button.on").forEach(x => fgoStatus.filter[id].push(x.value));
            //如果全選或全部不選(不篩選該條件)就跳過該篩選函式
            if (fgoStatus.filter[id].length % document.querySelector(tag).children.length == 0) return;
            else fgoStatus.result = func.call(null, fgoStatus.result);
        });
        //篩選器動作4: 篩選出從者後，依照選單上的選項排序後，將從者加回到顯示區內
        sort();
        document.querySelector("div.filter").classList.remove("on"); //關閉篩選頁面
    });

   
    if (location.search.length > 0) {
        let e = location.search.split("=").pop();
        if (e.length == 3 && servant[e]) showIntro(e);
        if (e.length == 1 && "0123456".includes(e)) {
            fgoStatus.filter.type.push(e);
            document.querySelector('button.toggle-btn[value="' + e + '"').classList.add("on");
            e = document.querySelector("div#rest");
            document.querySelectorAll("div#result > div.servant").forEach(x => e.append(x));
            fgoStatus.result = fgoStatus.filterFunc.type.call(null, fgoStatus.result);
            sort();
        }
    }