/*Project Details Table*/
AOS.init();

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Santa Exploration 圣诞老人寻宝之旅",
    authors:
      "Group Project 小组作业",
    conferences:
      "My Part: Start Scene, End Scene, Level 2",
    researchYr: 2023.12,
    citebox: "popup1",
    image: "assets/images/project-page/santa.gif",
    citation: {
      vancouver:
        "Github link: <br/> https://github.com/Qinweiiii/G4FinalProject_DMT.git",
    },
    abstract:
      "Santa Exploration is a platform game where the story background is that Santa Claus' gifts were all stolen from bad people, but the Christmas is approaching, thus it's a must for the Santa Claus to find back the gifts. Players need to press keys to jump on the platforms while escaping from traps to grab the gifts and pass the levels. The audio sources used are all warm and encouraging, with the hope of players can have a wonderful new year. <br/> 圣诞老人寻宝之旅是一个平台跳跃游戏；圣诞节前夕，圣诞老人要送出的礼物都被坏人偷了，他必须要找回礼物。玩家需要通过按键在平台上不断跳跃和躲避陷阱来获取礼物从而通关。游戏关卡和加载场景中都使用了温暖且鼓励人的音乐，希望在新年即将开始之际为大家带来对新的一年的美好展望。",
    absbox: "absPopup1",
  },

  {
    title: "Thor's Adventure 雷神逃脱之战",
    authors:
      "Individual Project 个人作业",
    conferences:
      "",
    researchYr: 2024.1,
    citebox: "popup2",
    image: "assets/images/project-page/thor.png",
    citation: {
      vancouver:
        "",
    },
    abstract:
      "Thor Adventure is a dungeon game that players need to press different keys to control the Thor to collect materials for passing levels and also kill the enemies while escaping various traps for survival. Thor has three magical skills and two movement ways, aiming to provide rich playing experience for players. The appropriate audio used also helps to increase the intense and excitement. <br/> 雷神逃脱之战是一个地牢游戏，玩家需要通过不同的技能和方向按键控制玩家收集通关所需的物资，并且在过程中躲避陷阱和对抗敌人以保住性命。雷神有三种魔法技能和两种移动形态，希望能给玩家提供丰富的体验。使用地恰到好处的音效也有助于增强过程的紧张和激动感。",
    absbox: "absPopup2",
  },

  {
    title:
      "Duo Odyssey 二重奏奥德赛",
    authors: "Group Project 小组作业",
    conferences:
      "My Part: Start Scene, End Scene, Level 4",
    researchYr: 2023.12,
    citebox: "popup3",
    image: "assets/images/project-page/duo.png",
    citation: {
      vancouver:
        "Github link: <br/> https://github.com/Qinweiiii/JellyPop-Assignment2.git",
    },
    abstract:
      "Duo Odyssey is a platform jumping game developed for double players, who need to cooperate with the other to kill the monsters, escape from traps and fetch the keys for passing level. The appealing and cute aesthetical style is expected to bring players unique playing experience, while the double player mechanism helps to cultivate understanding between players. <br/> 奥德赛双重奏是一个双人游戏，两位玩家需要打配合来击败怪物, 躲避陷阱以拿到钥匙通关。整个游戏的画风有较高的吸引力和可爱性，会为玩家带来不一样的游玩体验；同时玩家们也会在玩游戏过程中培养彼此间的默契。",
    absbox: "absPopup3",
  },
];

const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            INTRODUCTON
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            LINK
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body" style="font-size: 13px;">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body" style="font-size: 13px;">
                            ${citation.vancouver}  
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const websiteTable = document.querySelector(".main2");

const website = [
  {
    title: "Fight With Depression 与抑郁症战斗",
    authors:
      "Individual Project 个人作业",
    conferences:
      "Type: Website 网页开发",
    researchYr: 2024.4,
    citebox: "popup1",
    image: "assets/images/project-page/web.gif",
    citation: {
      vancouver:
        "Github link: <br/> https://github.com/Qinweiiii/G4FinalProject_DMT.git",
    },
    abstract:
      "The website is designed for common people who think they may trap in depression to have a professional PHQ-test for them to know which degree they are at for depression. <br/> 网站是为了一些觉得自己可能得抑郁的人设计的，让他们有机会可以有一个比较专业的PHQ测试来评估自己抑郁的程度。",
    absbox: "absPopup1",
  },
  {
    title: "FitSphere 健身星球",
    authors:
      "Individual Project 个人作业",
    conferences:
      "Type: Mobile App 移动应用开发",
    researchYr: 2024.5,
    citebox: "popup1",
    image: "assets/images/project-page/app.gif",
    citation: {
      vancouver:
        "Github link: <br/> https://github.com/Qinweiiii/G4FinalProject_DMT.git",
    },
    abstract:
      "Fitness is pursued by increasing people recently in terms of both exercise and healthy diets, while fit-lovers also enjoy building up themselves with their friends. Thus, FitSphere is developed fulfilling both professional and social requirements. <br/> 近年来人们越来越注重从运动和饮食两个方面追求健康，同时他们又很享受在朋友的陪伴下一起塑造更好的自己。于是，FitSphere应运而生，同时满足消费者对于专业性和社交性的需求。",
    absbox: "absPopup1",
  },
  {
    title: "RecycleMate 健身星球",
    authors:
      "Individual Part (小组作业里的）个人部分",
    conferences:
      "Type: UI Prototype 用户界面设计图（未开发）",
    researchYr: 2023.6,
    citebox: "popup1",
    image: "assets/images/project-page/figma.gif",
    citation: {
      vancouver:
        '<a href="https://www.figma.com/proto/G7mDOzZDLoLJ84WzlNDmL2/RecycleMate?node-id=137-456&starting-point-node-id=137%3A456&t=vd1IDG54Ol9rumaf-1">Figma Link</a>',
    },
    abstract:
      "Fitness is pursued by increasing people recently in terms of both exercise and healthy diets, while fit-lovers also enjoy building up themselves with their friends. Thus, FitSphere is developed fulfilling both professional and social requirements. <br/> 近年来人们越来越注重从运动和饮食两个方面追求健康，同时他们又很享受在朋友的陪伴下一起塑造更好的自己。于是，FitSphere应运而生，同时满足消费者对于专业性和社交性的需求。",
    absbox: "absPopup1",
  },

];

const fillData2 = () => {
  let output = "";
  website.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            INTRODUCTON
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            LINK
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body" style="font-size: 13px;">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body" style="font-size: 13px;">
                            ${citation.vancouver}  
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  websiteTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData2);
