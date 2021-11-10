const tabsContainer = document.querySelector(".about-tabs");
const aboutSection = document.querySelector(".about-section");


tabsContainer.addEventListener("click", (e) => {

    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
   
        tabsContainer.querySelector(".tab-item.active").classList.remove("active");
        e.target.classList.add('active');
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
})



document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")){
      
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio-popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling")
    document.querySelector(".main").classList.toggle("fade-out")
}

document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup)

document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup()
    }
})

function portfolioItemDetails(e){
    document.querySelector(".pp-thumbnail img").src = e.querySelector(".portfolio-item-thumbnail img").src
    document.querySelector(".pp-header h3").innerHTML = e.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = e.querySelector(".portfolio-item-details").innerHTML;
    document.querySelector(".general-info").innerHTML = e.querySelector(".general-info").innerHTML;


}