

function internalFunctions(){
    window.onresize = function()
    {
    document.location.reload(true);
    }
    
    
    setTimeout(function() {
        
    document.querySelector('.box1 .box1__content').style.opacity = "1";
        
    }, 250 );
     setTimeout(function() {
        
    document.querySelector('.box2 .box2__content').style.opacity = "1";
        
    }, 500 );
    
    setTimeout(function() {
        
    document.querySelector('.box3 .box3-container').style.opacity = "1";
        
    }, 750 ); 
    
    setTimeout(function() {
        
    document.querySelector('.box4 .box4__content').style.opacity = "1";
        
    }, 1000 );

    
    
    $("#fade-in div:nth-child(2n)").delay(1200).animate({ opacity: 1 }, 700);
    $("#fade-in div:nth-child(3n)").delay(1800).animate({ opacity: 1 }, 700);
    $("#fade-in div").delay(2400).animate({ opacity: 1 }, 700);


    




    

    $('.box2').on('click', function(){
       setTimeout(function() {
        
        $('.container').animate([
            
            {opacity: '0'}
        ], {
            duration: 1000
        });
        
        }, 200  );   
           
        setTimeout(function() {
            console.log('clicked');
            $('body').animate({
                transform: 'translateX(200%)'
            }, {
                duration: 1000
            });
        }, 2000  ); 
        
    });


/*
    $(function() {
       $('.box2').on('click', function() {	
           $('body').addClass('animate');
           setTimeout(function() {
                window.open("file:///C:/Users/Wpierdol/Desktop/port-klauza%20-%20main%20pg%202/Photography_page/index2.html");
              
               $('body').removeClass('animate');
               $('body').css({"transform":"translateX(0)"});

           }, 1000  );

       });

    });
    */

}

window.onload = function(){
    setTimeout(function() {
        
        internalFunctions();
        
    }, 250 );
};
