
  function initPage () {

    if (location.search.length == 0) document.getElementById("story-frame").remove();

    // Slider 初始化
    const totalSlides = document.querySelectorAll(".slide").length;
    let index = 0, interval = 8, jobId;

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement("span");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        document.querySelector(".dots").appendChild(dot);
    }

    const dots = document.querySelectorAll(".dots span");

    function goToSlide(i) {
        index = i;
        document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
        updateDots();
        restartAutoPlay();
    }

    function updateDots() {
        dots.forEach(d => d.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function autoPlay() {
        jobId = setInterval(() => {
            index = (index + 1) % totalSlides;
            goToSlide(index);
        }, interval * 1000);
    }

    function restartAutoPlay() {
        clearInterval(jobId);
        autoPlay();
    }

    function buttonHandler (e) {
      index = e.target.classList.contains("next") ? index + 1 : (index - 1 + totalSlides) % totalSlides;    
      goToSlide(index);    
    }

    document.querySelector(".prev").addEventListener("click", buttonHandler);
    document.querySelector(".next").addEventListener("click", buttonHandler);

    autoPlay();

    document.querySelectorAll(".right button").forEach(btn => {
      btn.addEventListener("click", showStoryFrame);
    });

    document.querySelectorAll(".modal-close, .modal-backdrop").forEach(btn => {
      btn.addEventListener("click", hideStoryFrame);
    });

    function hideStoryFrame (el) {
      el.srcElement.closest("#modal-story").style.display = "none";
      document.body.style.overflow = "";
    }

    function showStoryFrame (evt) {
      const story = [null,{"h3":"Hundred Years' War of the Evil Dragons - Orléans","h1":"邪龍百年戰爭・奧爾良","p":["御主與瑪修首次靈子轉移，降臨於被扭曲的十五世紀法國奧爾良。本應以勝利告終的百年戰爭卻陷入無止境的殺戮，城市與村莊遭到邪龍焚毀，民眾在恐懼中流離失所。這一切的中心，是本不該存在於此的「黑化聖女」──以復仇與憎恨為核心的貞德。","在調查過程中，御主結識了吉爾・德・萊斯、伊莉莎白・巴托里等從者，逐步理解這場戰爭已被外力徹底扭曲。邪龍的出現並非偶然，而是由魔術干涉所引發的人理異常。面對被仇恨侵蝕的聖女，御主必須在戰場上一次次作出抉擇，保護民眾、集結戰力，並直面「理想被否定後所誕生的絕望」。","這場戰役不只是為了勝利，更是為了確認「人理修復」真正的意義。奧爾良的火焰，成為御主踏上漫長旅程的起點。"],"role":["003 阿爾托莉亞・潘德拉剛〔Alter〕","009 吉爾・德・萊斯","030 瑪爾大","029 瑪莉・安東尼","024 聖喬治","056 清姬","018 伊莉莎白・巴托里"],"link":"205a4786-6204-4cef-91bb-bbfaddaa51c4"},{"h3":"Eternal Madness Empire - Septem","h1":"永續瘋狂帝國・七丘之城","p":["靈子轉移的目的地來到古羅馬，七丘之城卻呈現出異樣的景象。歷史本應迎來衰退的羅馬帝國，在此卻陷入「永恆繁榮」的瘋狂狀態。皇帝尼祿依舊統治一切，人民歌頌榮光，卻對異常毫無察覺。時間彷彿被強行停滯，人理的流動遭到破壞。","御主與布狄卡、凱撒等從者攜手行動，逐步揭開帝國表象下的扭曲真相。七丘之城不再只是文明象徵，而成為執念的具現。隨著調查深入，御主意識到，這並非單純的暴政，而是某種力量試圖以「永恆秩序」取代人類歷史的前進。","在榮光與瘋狂交織的帝都中，御主必須選擇打破虛假的和平，讓歷史重新流動。七丘之城的戰鬥，象徵著人理修復的第二次試煉。"],"role":["005 尼祿・克勞狄烏斯","007 蓋烏斯・尤利烏斯・凱撒","022 羅慕路斯","026 布狄卡","054 卡利古拉","050 斯巴達克斯"],"link":"de6ed584-6187-4781-83e0-490e1b4efd9a"},{"h3":"Sealed Ends of the Four Seas - Okeanos","h1":"封鎖終局四海・俄刻阿諾斯","p":["靈子轉移將御主帶入大航海時代的廣闊海域，然而本應連結世界的海洋，卻被異常氣象與未知力量封鎖。船隊失聯、港口荒廢，航海史的核心被徹底改寫。這片名為「俄刻阿諾斯」的海域，成為人理無法延伸的盲區。","在弗朗西斯・德雷克、黑鬍子等從者的協助下，御主展開航行調查。隨著航線推進，英雄、海盜與神話傳說彼此交錯，過去的榮耀與未來的命運在浪濤中碰撞。這不僅是一場對抗敵人的戰鬥，更是對「自由」與「選擇」的考驗。","當真相逐漸浮現，御主意識到，封鎖海洋的並非單一敵人，而是對歷史終局的強行干涉。跨越四海，才能讓人理重新連結世界。"],"role":["065 弗朗西斯・德雷克","025 愛德華・蒂奇","047 赫拉克勒斯","014 阿塔蘭塔","031 美狄亞","063 大衛"],"link":"62f9c9ca-6f6b-415e-8767-dea17f79f7fe"},{"h3":"The Mist City - London","h1":"死界魔霧都市・倫敦","p":["工業革命時期的倫敦，被不祥的魔霧全面籠罩。蒸汽與齒輪運轉的城市，在科學與魔術失衡的影響下，逐步化為死界。怪異事件頻發，人們在霧中消失，文明的象徵反而成為恐懼的根源。","御主與莫德雷德、尼古拉・特斯拉等從者合作，調查魔霧的來源。隨著行動推進，亨利・傑基爾與海德、弗蘭肯斯坦等存在浮上檯面，揭示人類追求進步時所付出的代價。科學與魔術的交錯，不再是希望，而是失控的導火線。","倫敦的戰鬥，是一場對「理性極限」的警示。當技術超越人性，人理便會崩壞。御主必須在霧中前行，阻止城市邁向不可逆的毀滅。"],"role":["076 莫德雷德","077 尼古拉・特斯拉","079 馮・霍恩海姆・帕拉塞爾斯","081 亨利・傑基爾＆海德","082 弗蘭肯斯坦"],"link":"2c6a5e27-1ae8-43aa-8b86-c6d689e1dc23"},{"h3":"North American Myth War - E Pluribus Unum","h1":"北美神話大戰・合眾為一","p":["北美大陸成為神話與英雄對峙的戰場。不同文明、不同信仰的勢力割據土地，人類被迫在神與英雄之間選邊站。歷史不再是人類的選擇，而是神話的延伸。","御主與庫・夫林、南丁格爾等從者並肩作戰，面對連續不斷的衝突與試煉。英雄的理想、神明的意志、人類的生存，三者彼此衝突，讓戰場不斷擴大。這裡不存在單純的正義，只有立場與信念的對立。","北美特異點迫使御主直視「人類在神話中的位置」。唯有重新確立人類的主體性，歷史才能回到正軌。"],"role":["098 庫・夫林〔Alter〕","097 南丁格爾","101 羅摩","085 迦爾納","067 美狄亞〔Lily〕"],"link":"f08095b5-367d-4cc7-8643-dfda851c3edf"},{"h3":"Divine Realm of the Round Table - Camelot","h1":"神聖圓桌領域・卡美洛","p":["沙漠中的卡美洛，被聖光與鐵血秩序所支配。獅子王阿爾托莉亞以「絕對正義」統治一切，圓桌騎士分裂為不同立場，守護與裁決不再區分。人類的價值，被重新定義。","御主在這片土地上，面對高文、蘭斯洛特等騎士的信念衝突，也逐步理解獅子王的理想與其代價。為了保存「理想化的人理」，無數犧牲被視為必然。這場戰役不只是武力對抗，更是對價值觀的全面衝突。","卡美洛考驗的，是御主是否能在絕對正義之前，依然選擇人性。"],"role":["048 蘭斯洛特"],"link":"d1a598be-4814-4ec1-8679-18ea9fca4a25"},{"h3":"Absolute Demonic Front - Babylonia","h1":"絕對魔獸戰線・巴比倫尼亞","p":["人理崩壞的核心，位於神代終焉的古巴比倫。魔獸橫行，神明甦醒，人類文明瀕臨滅絕。烏魯克城成為最後的防線，而統治此地的，是賢王吉爾伽美什。","御主與恩奇都、伊絲塔等從者共同作戰，迎擊不斷來襲的魔獸軍團。這不只是戰爭，更是神與人類告別的時代。每一次防守，都是在為人類爭取存續的可能。","巴比倫尼亞，是人理與神代的最終分界線。"],"role":["012 吉爾伽美什","027 牛若丸"],"link":"94597f3c-2a80-47f9-9de8-d628c57df387"},{"h3":"The Grand Temple of Time - Solomon","h1":"冠位時間神殿・所羅門","p":["所有特異點的源頭，終於顯現。時間神殿成為人理存亡的最終戰場，御主與歷經旅程的從者們再次集結。敵人並非單純的存在，而是對「人類歷史本身」的否定。","在這裡，過去的犧牲與羈絆交織成最後的力量。戰鬥的意義，已超越勝敗本身。這是對人類未來的最終回應，也是御主旅程的終點。","人理是否值得被守護，答案，將在此揭曉。"],"link":"af5f8468-09e0-4f96-bcca-bc366e3a471b"}][evt.srcElement.dataset.chapter];

    document.getElementById("chapter-story").innerHTML = ["p", "h3", "h1"].map((e, i) => i ?  `<${e}>${story[e]}</${e}>` : story[e].map(t => `<p>${t}</p>`).join("")).reverse().join("");

    document.querySelector(".modal-video iframe").setAttribute("src", "https://ntubedutw-my.sharepoint.com/personal/n1146717_ntub_edu_tw/_layouts/15/embed.aspx?UniqueId=" + story.link + "&embed=%7B%22af%22%3Atrue%2C%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create");

    document.querySelectorAll(".modal-servants > *").forEach(el => {
        if (el.tagName == "H3") el.hidden = story.role ? false : true;
        else el.innerHTML = story.role ? story.role.map(x=>{
          let [uid, name] = x.split(" ");
          return `<div class="servant" id="${uid}"><img src="assets/images/servant/head${uid}.png"><span class="fit">${name}</span></div>`;
        }).join("") : "";
    });

    document.getElementById("modal-story").style.display = "block";
    document.body.style.overflow = "hidden"; // 禁止背景捲動
  }
}

    function scrollToStory () {
      document.getElementById("story").scrollIntoView({ behavior: 'smooth' });
    }

    function leaveSite () {
      window.location.href = window.location.href.split("/").slice(0,-2).join("/").concat("/index.html") || "https://google.com/";
    }
