console.log('JavaScript from js/js.js: up and running!');

// SELVSTUDIEDAG 2
function toggleNav() {
    var x = document.getElementById('responsive-nav');

    if(x.className === 'responsive-nav')
    {
        x.className += ' responsive';
    }
    else
    {
        x.className = 'responsive-nav';
    }
}





// Bestilling form
// SELVSTUDIEDAG 3

btn1.addEventListener('click', function(){
    tjek.style.display = "block";
    radio.style.display = "none";

})


btn2.addEventListener('click', function(){
    dato.style.display = "block";
    tjek.style.display = "none";
    
})

btn3.addEventListener('click', function(){
    navn.style.display = "block";
    dato.style.display = "none";
    
    
})

btn4.addEventListener('click', function(){
    lastField.style.display = "block";
    navn.style.display = "none";
    
    
})










// UGE DAGE, MÅNED OG TID
// SELVSTUDIEDAG 1
const d = new Date();

      const uge = [
          'Søndag',
          'Mandag',
          'Tirsdag',
          'Onsdag',
          'Torsdag',
          'Fredag',
          'Lørdag',
          
      ]

      const month = [
        'Januar',
        'Februar',
        'Marts',
        'April',
        'Maj',
        'Juni',
        'Juli',
        'August',
        'September',
        'Oktober',
        'November',
        'December'
      ]

      dies.innerHTML = '&copy;' + 'Christoffer Ingemann Madsen ' + uge [ d.getDay() ] + month [ d.getMonth() +1 ] + d.getFullYear () ;

      let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    tid.innerHTML = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();


    // MEDARBEJDERE
    // SELVSTUDIEDAG 1

    let visDen, Medarbejdere = [
        "Lars",
        "Johannes",
        "Maria",
        "Alice",
        "Jakob",
        "Kasper"
    ]

    Medarbejdere.sort();

    for(visDen in Medarbejdere) {
        console.log (Medarbejdere [ visDen ]);
        egen.innerHTML += '<li>' + Medarbejdere [ visDen ] + '</li>';
    }

    // KONTAKT / ADRESSE
    // SELVSTUDIE DAG 1

    function addFooterContact() {
      
        let kontakt = `
        <div class="footer-kontakt">
        <h3>Kontakt</h3>
        <p>Alice's Restaurant</p>
        <p>Klostergade 19, 8000 Aarhus C</p>
        <p>12344321</p>
        </div>
        `;
        
        adresse.innerHTML += kontakt;
      }
  
      addFooterContact();


     // SELVSTUDIEDAG 4 


    let options = {
        root: null,
        rootMargin:'0px',
        threshold:1.0
    };
    
    let callback = (entries, observer)=>{
        entries.forEach(entry => {
            if(entry.target.id =='myVideo'){
                
                if(entry.isIntersecting){
                    entry.target.play();
                }
                else{
                    entry.target.pause();
                }
            }
        });
    }
    
    let observer = new IntersectionObserver(callback,options);
    observer.oberserve(document.querySelector('#myVideo'));