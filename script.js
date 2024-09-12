// // Read the code it is very easy.... Beacause the operations being done here are just reading operations...that means this app is just reading from the database and not writing anything.... everything is well sorted in this code... 

// var rootRef = firebase.database().ref();//Here I am taking the root reference of the firebase database into the variable rootRef

// var c = 0;
// var answer = 0;
// var lock = 0;
// var i;
// var myData;

//     var ref= firebase.database().ref();
// //The once() function here basically is a function that is triggered, 'once' when your app starts... So here what I did is I took all the data from the database into the array "myData[]" and then I have done some changes in the HTML using that data..

//     ref.once('value', function(snapshot) {
//         myData = snapshot.val();
    
//         document.getElementById("question").innerHTML = myData[0].question;
//         document.getElementById("op1").innerHTML = myData[0].option1;
//         document.getElementById("op2").innerHTML = myData[0].option2;
//         document.getElementById("op3").innerHTML = myData[0].option3;
//         document.getElementById("op4").innerHTML = myData[0].option4;
//         answer = myData[0].answer;
//     });

// $("#next").on("click", function () {
//     c++;
//     console.log(c);
//     ref = firebase.database().ref();
//     //Now here the function on() is a little different from the function once() which means that it does not get triggered once after the app starts but it gets triggered each and everytime there is change being made in the database...
    
//     ref.on('value', function(snapshot) {
    
//         document.getElementById("question").innerHTML = snapshot.child(c + "/question").val();
//         document.getElementById("op1").innerHTML = snapshot.child(c + "/option1").val();
//         document.getElementById("op2").innerHTML = snapshot.child(c + "/option2").val();
//         document.getElementById("op3").innerHTML = snapshot.child(c + "/option3").val();
//         document.getElementById("op4").innerHTML = snapshot.child(c + "/option4").val();
//         answer = snapshot.child(c + "/answer").val();
//     });

//     //stop animation
//     $(".wrapper .spinner").css("animation", "none");
//     $(".wrapper .filler").css("animation", "none");
//     $(".wrapper .mask").css("animation", "none");
    
//     //play music
//     document.getElementById("countdown").currentTime = 0;
//     document.getElementById("questionStart").play();
    
//     document.getElementById("op-image1").src = 'images/blue.png';
//     document.getElementById("op-image2").src = 'images/blue.png';
//     document.getElementById("op-image3").src = 'images/blue.png';
//     document.getElementById("op-image4").src = 'images/blue.png';
// });


// $("#previous").on("click", function () {
//     c--;
//     console.log(c);
//     ref= firebase.database().ref();
//     ref.on('value', function(snapshot) {
    
//         document.getElementById("question").innerHTML = snapshot.child(c + "/question").val();
//         document.getElementById("op1").innerHTML = snapshot.child(c + "/option1").val();
//         document.getElementById("op2").innerHTML = snapshot.child(c + "/option2").val();
//         document.getElementById("op3").innerHTML = snapshot.child(c + "/option3").val();
//         document.getElementById("op4").innerHTML = snapshot.child(c + "/option4").val();
//         answer = snapshot.child(c + "/answer").val();
//     });
    
    
//     //play music
//     document.getElementById("countdown").currentTime = 0;
//     document.getElementById("questionStart").play();
    
//     //stop animation
//     $(".wrapper .spinner").css("animation", "none");
//     $(".wrapper .filler").css("animation", "none");
//     $(".wrapper .mask").css("animation", "none");
    
//     document.getElementById("op-image1").src = 'images/blue.png';
//     document.getElementById("op-image2").src = 'images/blue.png';
//     document.getElementById("op-image3").src = 'images/blue.png';
//     document.getElementById("op-image4").src = 'images/blue.png';
// });

// $("#1").on("click", function(){

//     document.getElementById("countdown").pause();
    
//     $(".wrapper .spinner").css("animation-play-state", "paused");
//     $(".wrapper .filler").css("animation-play-state", "paused");
//     $(".wrapper .mask").css("animation-play-state", "paused");
//     document.getElementById("answerLock").play();
//     document.getElementById("op-image1").src = 'images/green.png';  
//     lock = 1;
    
// });

// $("#2").on("click", function(){

//     document.getElementById("countdown").pause();
    
//     $(".wrapper .spinner").css("animation-play-state", "paused");
//     $(".wrapper .filler").css("animation-play-state", "paused");
//     $(".wrapper .mask").css("animation-play-state", "paused");
//     document.getElementById("answerLock").play();
//     document.getElementById("op-image2").src = 'images/green.png';       
//     lock = 2;
    
// });

// $("#3").on("click", function(){

//     document.getElementById("countdown").pause();
    
//     $(".wrapper .spinner").css("animation-play-state", "paused");
//     $(".wrapper .filler").css("animation-play-state", "paused");
//     $(".wrapper .mask").css("animation-play-state", "paused");
//     document.getElementById("answerLock").play();
//     document.getElementById("op-image3").src = 'images/green.png';       
//     lock = 3;
    
// });

// $("#4").on("click", function(){

//     document.getElementById("countdown").pause();
    
//     $(".wrapper .spinner").css("animation-play-state", "paused");
//     $(".wrapper .filler").css("animation-play-state", "paused");
//     $(".wrapper .mask").css("animation-play-state", "paused");
//     document.getElementById("answerLock").play();
//     document.getElementById("op-image4").src = 'images/green.png';       
//     lock = 4;
    
// });

// $("#check").on("click", function(){
//     i=1;
    
//     answer = myData[c].answer;
//     document.getElementById("op-image"+answer).src = 'images/green.png';
    
//     if(answer === lock){
//         document.getElementById("gameStart").play();
//     }
    
//     while(i <= 4){
//         if(i != answer){
//             document.getElementById("op-image"+i).src = 'images/red.png';
//         }
//         i++;
//     }
// });

$("#icons a:nth-child(1)").on("click", function(){
    document.getElementById("call").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(2)").on("click", function(){
    document.getElementById("dd").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(3)").on("click", function(){
    document.getElementById("skip").src = 'images/Cross.png';
    document.getElementById("lifeline").play();
});


$("#icons a:nth-child(4)").on("click", function(){
    document.getElementById("gameStart").play();
    document.getElementById("call").src = '';
    document.getElementById("dd").src = '';
    document.getElementById("skip").src = '';
});


// $("#pause").on("click", function(){
//     //play music
//     document.getElementById("countdown").pause();
    
//     $(".wrapper .spinner").css("animation-play-state", "paused");
//     $(".wrapper .filler").css("animation-play-state", "paused");
//     $(".wrapper .mask").css("animation-play-state", "paused");
// });




// $("#play").on("click", function(){
//     //play music
//     document.getElementById("countdown").play();
    
//     // restart animation
//     setTimeout(function() {
        
//     $(".wrapper .spinner").css("animation", "rota 30s linear 1");
//     $(".wrapper .filler").css("animation", "opa 30s steps(1, end) 1 reverse");
//     $(".wrapper .mask").css("animation", "opa 30s steps(1, end) 1");
//     }, 10);
    
//     $(".wrapper .spinner").css("animation-play-state", "running");
//     $(".wrapper .filler").css("animation-play-state", "running");
//     $(".wrapper .mask").css("animation-play-state", "running");
// });


// var count=30;

// var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      //counter ended, do something here
//      console.log(count);
//      return;

//   }
//   timer();

//   //Do code for showing the number of seconds here
// }



var data = [
    { q: 'What is JavaScript?', a: 'A language', b: 'A logic', c: 'A platform', d: 'None', ans: 'a' },
    { q: 'What is Java?', a: 'A platform', b: 'A logic', c: 'A language', d: 'None', ans: 'c' },
    { q: 'What is Unix?', a: 'A language', b: 'A logic', c: 'A platform', d: 'None', ans: 'c' },
    { q: 'What is Python?', a: 'A language', b: 'A logic', c: 'A platform', d: 'None', ans: 'a' },
    { q: 'What is SQL?', a: 'A language', b: 'A logic', c: 'A platform', d: 'A database language', ans: 'd' },
    { q: 'What is C?', a: 'A language', b: 'A logic', c: 'A platform', d: 'None', ans: 'a' },
    { q: 'What is Postman?', a: 'A language', b: 'A logic', c: 'A platform', d: 'A tool', ans: 'd' },
    { q: 'What are hooks?', a: 'A language', b: 'A logic', c: 'A platform', d: 'None', ans: 'd' },
    { q: 'What is CSS?', a: 'Cascading style', b: 'A logic', c: 'A platform', d: 'None', ans: 'a' },
    { q: 'What is HTML?', a: 'A tag language', b: 'A logic', c: 'A platform', d: 'None', ans: 'a' }
];
console.log(data[0].a)




var i;
var b=0;
function show()
{
    setTimeout(function()
{
    var a=new Audio('kbc.mp3')
    a.play()
},2000)
   
setTimeout(function(){
    var b=new Audio('countdown.mp3')
    b.play()
},8000)


var c=30;
// setTimeout(function()
// {
//     console.log('show');
    i=setInterval(function(){
        document.getElementById('p').innerText=c;
        c--;
        if(c<0)
        {
            clearInterval(i)
            display();
        }
    },1000);
// },8000)
    
 }
show()

function display()
{

    clearInterval(i);
    document.getElementById('question').innerText=data[b].q;
    document.getElementById('op1').innerText='';
    document.getElementById('op2').innerText='';
    document.getElementById('op3').innerText='';
    document.getElementById('op4').innerText='';
    
    setTimeout(() => {
        document.getElementById('op1').innerText=data[b].a;  
    }, 1000);
    setTimeout(() => {
        document.getElementById('op2').innerText=data[b].b;
    }, 2000);
    setTimeout(() => {
        document.getElementById('op3').innerText=data[b].c;
    }, 3000);
    setTimeout(() => {
        document.getElementById('op4').innerText=data[b++].d;
    }, 4000);

    show();    
}
display();
function value(n)
{
    if(data[0].ans==n)
    {
        alert('correct ans');
    }
    else
    {
        alert('wrong ans');
    }
}

function audio() {
    var audio = document.getElementById('h1');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
audio();



function audio1() {
    var audio = document.getElementById('a2');
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}
audio1();
