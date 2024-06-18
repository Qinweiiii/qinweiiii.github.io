/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "A Neural Network Model with Better Trade-off Between Generalization, Efficiency and Quality",
    authors:
      "Qin Wei",
    conferences:
      "Final Year Project (Not finished)",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/video.gif",
    citation: {
      vancouver:
        "Style Transfer, VGG-19, Computer Vision, Deep Learning, Convolutional Neural Networks",
    },
    abstract:
      "Style Transfer is a technique in computer vision and graphics that involves generating a new image by combining the content of one image with the style of another image.",
    absbox: "absPopup1",
  },

  {
    title: "Mystical Momentum: The Visible Force Behind Tennis Players",
    authors:
      "Qin Wei, Chen Yulong, Jin Chicheng",
    conferences:
      "Mathematical Contest In Modeling - Meritorious Winner",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/mcm.png",
    citation: {
      vancouver:
        "Tennis Momentum, EWM, Run Test, Chi-Square Test, LGBM, SHAP",
    },
    abstract:
      "A comprehensive model is built to assess the momentum of tennis players, while considering various factors like opposite double faults, ACE, continous score, break_point win and so on.",
    absbox: "absPopup2",
  },

  {
    title:
      "A Model for Potholed Road Detection And Identification Through Transfer Learning towards ResNeXt-50",
    authors: "Qin Wei",
    conferences:
      "MathorCup High College Mathemtical Modelling Contest - Second Prize",
    researchYr: 2023,
    citebox: "popup3",
    image: "assets/images/research-page/Resnet.jpg",
    citation: {
      vancouver:
        "Potholed Road Detection And Identification, Convolutinal Neural Networks, Transfer Learning, ResNeXt50, EfficientNet_B3a",
    },
    abstract:
      "A model is developed through transfer learning towards the ResNeXt-50, which achieves higher accuracy in the task.",
    absbox: "absPopup3",
  },
];
AOS.init();
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
                            KEYWORD
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
