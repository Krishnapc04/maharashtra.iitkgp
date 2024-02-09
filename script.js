const activepage = window.location.pathname;
const navlink = document.querySelectorAll(".nav-option .opts");

//   make hover effect visible after page change

let myarray = Array.from(navlink);


if (activepage == "/MHM-Project/") {
  myarray.forEach((link) => {
    if (link.firstChild.href.includes(`${activepage}`)) {
      link.classList.remove("active");
    }
  });
} else {
  myarray.forEach((link) => {
    if (link.firstChild.href.includes(`${activepage}`)) {
      link.classList.add("active");
    }
  });
}

// MAke navbars working
const navbar = document.querySelector(".nav-bars");
const navitem = document.querySelector(".nav-option");

navbar.addEventListener("click", () => {
  navitem.classList.toggle("show");
  console.log("clicked");
});

// TEAM CARD  \


const card = document.querySelectorAll(".mycard");
const cardanimation = document.querySelectorAll(".cardanimation");

cardanimation.forEach((e) => {
  e.addEventListener("mouseover", (event) => {
    const hoveredCard = event.target.closest(".mycard");

    if (hoveredCard) {
      hoveredCard.style.boxShadow = " 1px 1px 10px black";
    }
  });
});
cardanimation.forEach((e) => {
  e.addEventListener("mouseout", (event) => {
    const hoveredCard = event.target.closest(".mycard");
    if (hoveredCard) {
      hoveredCard.style.boxShadow = " 0px 0px 0px ";
    }
  });
});





// Gallery Page

const allpage = document.querySelectorAll(".sec-part");
const alltabs = document.querySelectorAll(".tab1");

const ganeshutsav = document.querySelector(".ganeshutsav");
const Aarambh = document.querySelector(".Aarambh");
const Bharari = document.querySelector(".Bharari");
const Shivjayanti = document.querySelector(".Shivjayanti");
const trip = document.querySelector(".Annual-trip");
const general = document.querySelector(".general");
const ganeshtab=document.querySelector('#GaneshUtsav')

const gallery = document.querySelectorAll('.g-images');

// ganeshutsav.style.backgroundColor='var(--tab-bg)'

alltabs.forEach((a)=>{
    ganeshtab.style.backgroundColor='var(--tab-bg)'
})
allpage.forEach((e)=>{
    e.classList.add('hide')
    ganeshutsav.classList.remove('hide')
})


fetch('gallery.json')
.then(response => response.json())
.then(data => {
        const gallery = document.querySelectorAll('.g-images');
    gallery.forEach((e)=>{
        data.GaneshUtsav.forEach(image => {
            allimages=data.GaneshUtsav

            const imgelement = document.createElement('img');
            imgelement.src = image.src;
            imgelement.alt = image.alt;
            e.appendChild(imgelement);
            imgelement.addEventListener('click',()=>{
                enlargeimage(imgelement.src)
                id=image.id
                idx = findIndexInObject(data.GaneshUtsav,id)
                currentindex=idx

                closebtn.addEventListener('click',()=>{
                    imgmodal.classList.add('hide')
                })
                const downloadlink = document.getElementById('downloadLink')
                downloadlink.href=image.src

                let startX = 0;
                let startY = 0;
                let endX = 0;
                let endY = 0;

                // Detect swipe direction and navigate accordingly
                document.addEventListener('touchstart', e => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                });

                document.addEventListener('touchend', e => {
                    endX = e.changedTouches[0].clientX;
                    endY = e.changedTouches[0].clientY;
                    
                    const deltaX = endX - startX;
                    const deltaY = endY - startY;
                    
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        // Horizontal swipe detected
                        if (deltaX > 0) {
                            currentindex= parseInt(currentindex) + 1;
                            
                            if(currentindex>allimages.length-1){
                                    currentindex=0
                                }
                                enlargeimage(allimages[currentindex].src);
                            // Swipe right
                            // navigate('right');
                        } else {
                            // Swipe left
                            currentindex=  (currentindex - 1 + allimages.length) % allimages.length;
                        
                            enlargeimage(allimages[currentindex].src)
                            // navigate('left');
                        }
                    }
                });
            })

        });

    })
    let currentindex= 0
    document.addEventListener('keydown', function (event){
        if(event.key==='ArrowLeft'){
            currentindex-1
            if(currentindex<0){
                currentindex=0
            }
            enlargeimage(' ')
            enlargeimage(allimages[currentindex].src)
        }
        if(event.key==='ArrowRight'){
            currentindex++
            if(currentindex>allimages.length-1){
                currentindex=allimages.length-1
            }
            enlargeimage(allimages[currentindex].src)
        }

    })
    currentindex= idx
    document.addEventListener('keydown', function (event){
        if(event.key==='ArrowLeft'){
            currentindex=  (currentindex - 1 + allimages.length) % allimages.length;
           
            enlargeimage(allimages[currentindex].src)

        }
        if(event.key==='ArrowRight'){
            currentindex= parseInt(currentindex) + 1;
            
            if(currentindex>allimages.length-1){
                    currentindex=0
                }
            console.log(typeof(currentindex))
                enlargeimage(allimages[currentindex].src);

        }
       
    })
});


alltabs.forEach((e) => {
  e.addEventListener("click", () => {
    switch (e.textContent) {
      case "GaneshUtsav":
        gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('GaneshUtsav')

        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

            allpage.forEach((a)=>{
            a.classList.add('hide')
            ganeshutsav.classList.remove('hide')
        })
        break;


      case "Aarambh":
        gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('Aarambh')

        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

        allpage.forEach((a)=>{
            a.classList.add('hide')
            Aarambh.classList.remove('hide')
        })
        break;


      case "Bharari":
gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('Bharari')
        
        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

        allpage.forEach((a)=>{
            a.classList.add('hide')
            Bharari.classList.remove('hide')
        })
        break;


      case "Shivjayanti":
        gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('Shivjayanti')
        
        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

        allpage.forEach((a)=>{
            a.classList.add('hide')
            Shivjayanti.classList.remove('hide')
        })
        break;


      case "Annual Trip":
        gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('Trip')
        
        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

        allpage.forEach((a)=>{
            a.classList.add('hide')
            trip.classList.remove('hide')
        })
        break;


      case "General":
        gallery.forEach((e)=>{
            e.innerHTML=" "
        })
        showimages('General')
        
        alltabs.forEach((tab)=>{
            tab.style.backgroundColor='transparent'
        })
        e.style.backgroundColor='var(--tab-bg)'

        allpage.forEach((a)=>{
            a.classList.add('hide')
            general.classList.remove('hide')
        })
        break;
    }
  });
  
});
// let currentindex=0
const imgmodal = document.getElementById('imageModal')
const imgmodalimg = document.querySelector('.modalimg')
const downloadlink = document.getElementById('downloadLink')

// console.log(typeof(imgmodalimg))
// console.log(imgmodalimg.innerHTML)
const closebtn = document.querySelector('.close')
function enlargeimage (src){
    imgmodal.classList.remove('hide')
    downloadlink.href=src

    imgmodalimg.innerHTML=` <img src="${src} " alt="event">`
   
}

function findIndexInObject(object, searchId) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            if (object[key].id === searchId) {
                return key; // Return the key (or property name) if the id matches
            }
        }
    }
    return -1; // Return -1 if element with the given id is not found
}
let idx=''
showimages = (eventname) => {
fetch('gallery.json')
.then(response => response.json())
.then(data => {
    const gallery = document.querySelectorAll('.g-images');
    allimages=data[eventname]
    gallery.forEach((e)=>{
        data[eventname].forEach(image => {
            const imgelement = document.createElement('img');
            imgelement.src = image.src;
            imgelement.alt = image.alt;
            e.appendChild(imgelement);
            imgelement.addEventListener('click',()=>{
                enlargeimage(imgelement.src)
                // console.log(imgelement)
                id=image.id
                idx = findIndexInObject(data[eventname],id)
                currentindex=idx

                closebtn.addEventListener('click',()=>{
                    imgmodal.classList.add('hide')
                })
                // downloadlink.href=image.src
                    // MOUSE MOVEMENT 
                let startX = 0;
                let startY = 0;
                let endX = 0;
                let endY = 0;

                // Detect swipe direction and navigate accordingly
                document.addEventListener('touchstart', e => {
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                });

                document.addEventListener('touchend', e => {
                    endX = e.changedTouches[0].clientX;
                    endY = e.changedTouches[0].clientY;
                    
                    const deltaX = endX - startX;
                    const deltaY = endY - startY;
                    
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        // Horizontal swipe detected
                        if (deltaX > 0) {
                            currentindex= parseInt(currentindex) + 1;
                            
                            if(currentindex>allimages.length-1){
                                    currentindex=0
                                }
                                enlargeimage(allimages[currentindex].src);
                            // Swipe right
                            // navigate('right');
                        } else {
                            // Swipe left
                            currentindex=  (currentindex - 1 + allimages.length) % allimages.length;
                            downloadlink.href=allimages[currentindex].src
                            enlargeimage(allimages[currentindex].src)
                            // navigate('left');
                        }
                    }
                });

            })
        });
        
    });
    // console.log(allimages)
    currentindex= idx
    document.addEventListener('keydown', function (event){
        if(event.key==='ArrowLeft'){
            currentindex=  (currentindex - 1 + allimages.length) % allimages.length;
           
            enlargeimage(allimages[currentindex].src)

        }
        if(event.key==='ArrowRight'){
            currentindex= parseInt(currentindex) + 1;
            
            if(currentindex>allimages.length-1){
                    currentindex=0
                }
                enlargeimage(allimages[currentindex].src);

        }
       
    })
    // Variables to keep track of touch start and end positions


// Function to navigate between images
// function navigate(direction) {
//     // Your navigation logic here
// }


    
    
}).catch(error =>console.error('Error fetching images' + error));
}


// image slideshow 




// const downloadlink = document.getElementById('downloadLink')
// downloadlink.href='./images/event.jpg'