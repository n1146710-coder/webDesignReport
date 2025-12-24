const classBar = document.getElementById('classBar');
const classTitle = document.getElementById('classTitle');
const classDesc = document.getElementById('classDesc');
const servantList = document.getElementById('servantList');
const bookmark = document.getElementById('bookmark');
const storyName = [0,"第一特異點 邪龍百年戰爭 奧爾良","第二特異點 永續瘋狂帝國 七丘之城","第三特異點 封鎖終局四海 俄刻阿諾斯","第四特異點 死界魔霧都市 倫敦","第五特異點 北美神話大戰 合眾為一","第六特異點 神聖圓桌領域 卡美洛","第七特異點 絕對魔獸戰線 巴比倫尼亞"];

const classData = {"Saber":{"title":"1劍職","desc":"<header>劍之王道，承載榮耀與責任的正統職階</header><article><p>在所有職階之中，Saber 被視為最為正統的王者之座。</p><p>他們手握象徵<b>「裁決」</b>的武器：劍。<br>那不是暗殺的利器，也非狂亂的凶器，而是——<br>站在眾人面前，承擔榮耀與責任的兵器。</p><p>Saber 的英靈往往來自王者、騎士、將軍。<br>他們的故事中充滿「<b>選擇</b>」：<br>為了國家犧牲個人、為了理想背負罪責。</p><p>亞瑟王將劍高舉於湖面，羅馬的英雄以鋼鐵紀律征服世界，<br>東方的劍豪在一瞬之間決定生死。</p><p>Saber 是秩序的象徵。即便結局悲劇，他們仍會選擇正面迎戰。</p></article><article><h3>職階特性</h3><ul><li>高基礎能力值，攻守均衡</li><li>適合正面戰鬥與持久作戰</li><li>對魔術具備天然抗性</li></ul></article><article><h3>Saber 的特別技能</h3><dl><dt>對魔力（Magic Resistance）</dt><dd>天生具備對魔術的抗性，能削弱或無效低階魔術</dd><dt>騎乘（Riding）（部分）</dt><dd>能熟練駕馭坐騎或載具（依英靈而異）</dd></dl></article>","servants":[{"name":"阿爾托莉亞・潘德拉剛","img":"assets/images/servant/head002.png"},{"name":"阿爾托莉亞・潘德拉剛〔Alter〕","img":"assets/images/servant/head003.png"},{"name":"阿爾托莉亞・潘德拉剛〔Lily〕","img":"assets/images/servant/head004.png"},{"name":"尼祿・克勞狄烏斯","img":"assets/images/servant/head005.png"},{"name":"齊格飛","img":"assets/images/servant/head006.png"}],"role":"1-003阿爾托莉亞・潘德拉剛〔Alter〕|009吉爾・德・萊斯,2-005尼祿・克勞狄烏斯|007蓋烏斯・尤利烏斯・凱撒,4-076莫德雷德,5-101羅摩"},"Archer":{"title":"0弓職","desc":"<header>在距離與理性之中，掌控勝負走向的戰場觀測者</header><article><p>Archer 從來不只是「弓兵」。</p><p>他們是——<b>站在戰場之外，卻將一切盡收眼底的觀察者</b>。</p><p>不論是箭矢、投擲兵器、甚至是以異能進行遠距打擊，<br>只要能「在距離中取敵首級」，便屬 Archer 的領域。</p><p>他們的傳說常與「技巧」、「精準」、「命中注定的一擊」有關。<br>有的是英雄獵人，有的是被背叛的守望者，有的則是冷眼旁觀歷史崩塌之人。</p></article><article><h3>職階特性</h3><ul><li>具備遠距離打擊與戰場壓制能力</li><li>行動自由度高，擅長獨立作戰</li><li>能靈活應對多變戰況</li></ul></article><article><h3>Archer 的特別技能</h3><dl><dt>單獨行動（Independent Action）</dt><dd>即使失去御主的魔力供給，仍能在一定時間內持續行動</dd><dt>對魔力（Magic Resistance）（低）</dt><dd>對魔術具備最低限度的防護能力</dd></dl></article>","servants":[{"name":"菲尼克斯","img":"assets/images/servant/head007.png"},{"name":"吉爾・德・萊斯","img":"assets/images/servant/head008.png"},{"name":"羅賓漢","img":"assets/images/servant/head009.png"}],"role":"3-014阿塔蘭塔|063大衛,4-077尼古拉・特斯拉,7-012吉爾伽美什"},"Lancer":{"title":"2槍職","desc":"<header>以一擊決定生死，將宿命釘死於瞬間的貫徹者</header><article><p>若說劍象徵裁決，<br>那麼槍象徵的便是「必然」。</p><p>Lancer 的武器筆直、迅速、無法偏移。<br>他們的英靈往往背負著「被預言的結局」。</p><p>無論是被詛咒的英雄、<br>還是以一擊改寫戰局的戰士，<br>Lancer 的故事總是帶著濃厚的悲劇色彩。</p><p>他們衝鋒在前，<br>也最先倒下。</p></article><article><h3>職階特性</h3><ul><li>敏捷與爆發力極高</li><li>擅長一擊必殺的突擊戰法</li><li>正面突破能力出眾</li></ul></article><article><h3>Saber 的特別技能</h3><dl><dt>對魔力（Magic Resistance）</dt><dd>對魔術攻擊具備穩定的抗性</dd><dt>戰鬥續行（Battle Continuation）</dt><dd>即使遭受致命傷害，也能短時間內持續戰鬥</dd></dl></article>","role":"1-018伊莉莎白・巴托里,2-022羅慕路斯,5-085迦爾納"},"Rider":{"title":"3騎職","desc":"<header>駕馭他者、領導浪潮，以行動改寫世界的統御職階</header><article><p>Rider 是擁有「移動傳說」的英靈。</p><p>不論是戰馬、戰車、船艦，<br>甚至是足以撼動時代的巨大存在——<br>只要是「被其支配的載具或存在」，都能化為力量。</p><p>Rider 的英靈多半是征服者、冒險者、開拓者。<br>他們踏遍世界，留下足跡，也留下傷痕。</p></article><article><h3>職階特性</h3><ul><li>依賴坐騎或寶具展現強大機動力</li><li>具備戰場控制與範圍壓制能力</li><li>擅長主導戰鬥節奏</li></ul></article><article><h3>Saber 的特別技能</h3><dl><dt>騎乘（Riding）</dt><dd>能高度熟練地駕馭各類坐騎、魔獸或交通工具</dd><dt>對魔力（Magic Resistance）（低）</dt><dd>對魔術具備基本抗性</dd></dl></article>","role":"1-030瑪爾大|029瑪莉・安東尼|024聖喬治,2-026布狄卡,3-065弗朗西斯・德雷克|025愛德華・蒂奇,7-027牛若丸"},"Caster":{"title":"4術職","desc":"<header>以知識與法則為武器，從根源顛覆戰局的智識職階</header><article><p>Caster 並非單純的法師。</p><p>他們是——<br>試圖理解、扭曲、甚至超越世界法則的存在。</p><p>賢者、魔術師、祭司、異端學者。<br>他們的故事往往不是戰爭，而是「研究」、「禁忌」與「代價」。</p></article><article><h3>職階特性</h3><ul><li>以魔術與知識為主要戰力來源</li><li>擅長支援、控制與戰術干擾</li><li>對正面物理戰鬥較為脆弱</li></ul></article><article><h3>Saber 的特別技能</h3><dl><dt>陣地建造（Territory Creation）</dt><dd>能建構有利於施展魔術的工房或據點</dd><dt>道具作成（Item Construction）</dt><dd>能製作具備魔力的道具或禮裝</dd></dl></article>","role":"3-031美狄亞,4-079馮・霍恩海姆・帕拉塞爾斯,5-067美狄亞〔Lily〕"},"Assassin":{"title":"5殺職","desc":"<header>捨棄榮光與記錄，只為完成任務而存在的暗殺者</header><article><p>Assassin 的英靈，往往沒有「英雄的榮耀」。</p><p>他們的名字被抹去，<br>行動隱於暗影，<br>只留下結果。</p><p>這個職階最初，甚至是為了某一群人而存在——<br><b>哈桑·薩巴赫</b>，以及<b>「山之翁」</b>的暗殺教團。</p></article><article><h3>職階特性</h3><ul><li>專精於隱匿、奇襲與暗殺行動</li><li>單體擊殺能力極強</li><li>正面戰鬥能力相對有限</li></ul></article><article><h3>Saber 的特別技能</h3><dl><dt>氣息遮斷（Presence Concealment）</dt><dd>能隱藏自身存在感，適合暗殺與奇襲行動</dd><dt>對魔力（Magic Resistance）（低）</dt><dd>對魔術具備最低程度的防護</dd></dl></article>","role":"4-081亨利・傑基爾＆海德"},"Berserker":{"title":"6狂職","desc":"<header>以理性為祭品，換取壓倒性力量的毀滅職階</header><article><p>最後，是被詛咒的職階。</p><p>Berserker並非天生瘋狂，<br>而是<b>為了換取力量，捨棄理智的人</b>。</p><p>他們可能是被背叛的英雄、<br>被神明玩弄的戰士、<br>或是承受過於沉重痛苦的存在。</p><p>咆哮、暴力、失控——<br>那是力量的代價。</p></article><article><h3>職階特性</h3><ul><li>以失去理性換取極高戰鬥力</li><li>攻擊性能與壓制力極端突出</li><li>戰術運用與指揮彈性受限</li></ul></article><article><h3>Berserker的特別技能</h3><dl><dt>狂化（Mad Enhancement）</dt><dd>以理性為代價，大幅提升基礎能力值</dd><dt>對魔力（Magic Resistance）（極低／無）</dt><dd>幾乎不具備有效的魔術防禦能力</dd></dl></article>","role":"1-056清姬,2-054卡利古拉|050斯巴達克斯,3-047赫拉克勒斯,4-082弗蘭肯斯坦,5-098庫・夫林〔Alter〕|097南丁格爾,6-048蘭斯洛特"}};

let cls = "Saber";

function showClass (evt) {
    let img = evt.srcElement;
    if (img.dataset.class == cls) return;
    cls = img.dataset.class;
    if(!classData[cls]) return;
    classTitle.textContent = ["職階介紹 —— ", cls, classData[cls].title.slice(1)].join("");

    // 淡出滑動
    classDesc.classList.remove('show');
    servantList.classList.remove('show');

    // 收起切換器
    classBar.classList.toggle("blocking")
      
    setTimeout(()=>{
        // 更新內容
        classDesc.innerHTML = `${classData[cls].desc}`;
        servantList.innerHTML = classData[cls].role.split(",").map(x=>["<h3>","</h3>"].join(storyName[x.slice(0,1)]).concat(x.slice(2).split("|").map(y=>`<a class="servant" href="page3.html?id=${y.slice(0,3)}"><img src="assets/images/servant/head${y.slice(0,3)}.png"><span>${y.slice(3)}</span></a>`).join(""))).join("");
        document.getElementById("servantBg").dataset.role = cls;
        bookmark.href = ["page3.html?type=", classData[cls].title.slice(0,1)].join("");
        bookmark.children[0].innerText = ["瀏覽所有", classData[cls].title.slice(1), "從者"].join("");


        // 淡入滑動
        classDesc.classList.add('fade-slide','show');
        servantList.classList.add('fade-slide','show');

        // 切換器回到正常
        classBar.classList.toggle("blocking")

    }, 500);
}

classBar.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', showClass);
});