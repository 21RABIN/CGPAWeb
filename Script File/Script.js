function Calculate(key) {
//semaster 1   
  var s1c1,s1c2,s1c3,s1c4,s1c5,s1c6,s1c7,s1c8,s1tot;
  var crs1c1,crs1c2,crs1c3,crs1c4,crs1c5,crs1c6,crs1c7,crs1c8,crs1c9,crs1c10;
   
//Get Grade Value
   s1c1=document.querySelector('.s1c1').value;
   s1c2=document.querySelector('.s1c2').value;
   s1c3=document.querySelector('.s1c3').value;
   s1c4=document.querySelector('.s1c4').value;
   s1c5=document.querySelector('.s1c5').value;
   s1c6=document.querySelector('.s1c6').value;
   s1c7=document.querySelector('.s1c7').value;
   s1c8=document.querySelector('.s1c8').value;  
   //Get Credit Value Sem1
   crs1c1=document.querySelector('.crs1c1').value;
   crs1c2=document.querySelector('.crs1c2').value;
   crs1c3=document.querySelector('.crs1c3').value;
   crs1c4=document.querySelector('.crs1c4').value;
   crs1c5=document.querySelector('.crs1c5').value;
   crs1c6=document.querySelector('.crs1c6').value;
   crs1c7=document.querySelector('.crs1c7').value;
   crs1c8=document.querySelector('.crs1c8').value;

   //Semaster 2
   var s2c1,s2c2,s2c3,s2c4,s2c5,s2c6,s2c7,s2c8,s2tot;
   var crs2c1,crs2c2,crs2c3,crs2c4,crs2c5,crs2c6,crs2c7,crs2c8;
//Get Grade Value
   s2c1=document.querySelector('.s2c1').value;
   s2c2=document.querySelector('.s2c2').value;
   s2c3=document.querySelector('.s2c3').value;
   s2c4=document.querySelector('.s2c4').value;
   s2c5=document.querySelector('.s2c5').value;
   s2c6=document.querySelector('.s2c6').value;
   s2c7=document.querySelector('.s2c7').value;
   s2c8=document.querySelector('.s2c8').value;

   //Get  Credit Value Sem2
   crs2c1=document.querySelector('.crs2c1').value;
   crs2c2=document.querySelector('.crs2c2').value;
   crs2c3=document.querySelector('.crs2c3').value;
   crs2c4=document.querySelector('.crs2c4').value;
   crs2c5=document.querySelector('.crs2c5').value;
   crs2c6=document.querySelector('.crs2c6').value;
   crs2c7=document.querySelector('.crs2c7').value;
   crs2c8=document.querySelector('.crs2c8').value;

//Semaster 3
   var s3c1,s3c2,s3c3,s3c4,s3c5,s3c6,s3c7,s3c8,s3c9=0,s3c10=0,s3tot;
   var crs3c1,crs3c2,crs3c3,crs3c4,crs3c5,crs3c6,crs3c7,crs3c8,crs3c9,crs3c10;


  s3c1=document.querySelector('.s3c1').value;
   s3c2=document.querySelector('.s3c2').value;
   s3c3=document.querySelector('.s3c3').value;
   s3c4=document.querySelector('.s3c4').value;
   s3c5=document.querySelector('.s3c5').value;
   s3c6=document.querySelector('.s3c6').value;
   s3c7=document.querySelector('.s3c7').value;
   s3c8=document.querySelector('.s3c8').value;
   s3c9=document.querySelector('.s3c9').value;

     
   //Get  Credit Value Sem3
   crs3c1=document.querySelector('.crs3c1').value;
   crs3c2=document.querySelector('.crs3c2').value;
   crs3c3=document.querySelector('.crs3c3').value;
   crs3c4=document.querySelector('.crs3c4').value;
   crs3c5=document.querySelector('.crs3c5').value;
   crs3c6=document.querySelector('.crs3c6').value;
   crs3c7=document.querySelector('.crs3c7').value;
   crs3c8=document.querySelector('.crs3c8').value;
   crs3c9=document.querySelector('.crs3c9').value;



   //Semaster 4
   var s4c1,s4c2,s4c3,s4c4,s4c5,s4c6,s4c7,s4c8,s4c9,s4c10,s4tot;
   var crs4c1,crs4c2,crs4c3,crs4c4,crs4c5,crs4c6,crs4c7,crs4c8,crs4c9,crs4c10;
   s4c1=document.querySelector('.s4c1').value;
   s4c2=document.querySelector('.s4c2').value;
   s4c3=document.querySelector('.s4c3').value;
   s4c4=document.querySelector('.s4c4').value;
   s4c5=document.querySelector('.s4c5').value;
   s4c6=document.querySelector('.s4c6').value;
   s4c7=document.querySelector('.s4c7').value;
   s4c8=document.querySelector('.s4c8').value;
   s4c9=document.querySelector('.s4c9').value;
   
  
   
   

   //Get  Credit Value Sem4
   crs4c1=document.querySelector('.crs4c1').value;
   crs4c2=document.querySelector('.crs4c2').value;
   crs4c3=document.querySelector('.crs4c3').value;
   crs4c4=document.querySelector('.crs4c4').value;
   crs4c5=document.querySelector('.crs4c5').value;
   crs4c6=document.querySelector('.crs4c6').value;
   crs4c7=document.querySelector('.crs4c7').value;
   crs4c8=document.querySelector('.crs4c8').value;
   crs4c9=document.querySelector('.crs4c9').value;



      //Semaster 5
   var s5c1,s5c2,s5c3,s5c4,s5c5,s5c6,s5c7,s5c8,s5c9,s5c10,s5tot;
   var crs5c1,crs5c2,crs5c3,crs5c4,crs5c5,crs5c6,crs5c7,crs5c8,crs5c9,crs5c10;
   s5c1=document.querySelector('.s5c1').value;
   s5c2=document.querySelector('.s5c2').value;
   s5c3=document.querySelector('.s5c3').value;
   s5c4=document.querySelector('.s5c4').value;
   s5c5=document.querySelector('.s5c5').value;
   s5c6=document.querySelector('.s5c6').value;
   s5c7=document.querySelector('.s5c7').value;
   s5c8=document.querySelector('.s5c8').value;
   s5c9=document.querySelector('.s5c9').value;
  
   
   

   //Get  Credit Value Sem5
   crs5c1=document.querySelector('.crs5c1').value;
   crs5c2=document.querySelector('.crs5c2').value;
   crs5c3=document.querySelector('.crs5c3').value;
   crs5c4=document.querySelector('.crs5c4').value;
   crs5c5=document.querySelector('.crs5c5').value;
   crs5c6=document.querySelector('.crs5c6').value;
   crs5c7=document.querySelector('.crs5c7').value;
   crs5c8=document.querySelector('.crs5c8').value;
   crs5c9=document.querySelector('.crs5c8').value;



  
      //Semaster 6
   var s6c1,s6c2,s6c3,s6c4,s6c5,s6c6,s6c7,s6c8,s6c9,s6c10,s6tot;
   var crs6c1,crs6c2,crs6c3,crs6c4,crs6c5,crs6c6,crs6c7,crs6c8,crs6c9,crs6c10;
   s6c1=document.querySelector('.s6c1').value;
   s6c2=document.querySelector('.s6c2').value;
   s6c3=document.querySelector('.s6c3').value;
   s6c4=document.querySelector('.s6c4').value;
   s6c5=document.querySelector('.s6c5').value;
   s6c6=document.querySelector('.s6c6').value;
   s6c7=document.querySelector('.s6c7').value;
   s6c8=document.querySelector('.s6c8').value;

   

   //Get  Credit Value Sem6
   crs6c1=document.querySelector('.crs6c1').value;
   crs6c2=document.querySelector('.crs6c2').value;
   crs6c3=document.querySelector('.crs6c3').value;
   crs6c4=document.querySelector('.crs6c4').value;
   crs6c5=document.querySelector('.crs6c5').value;
   crs6c6=document.querySelector('.crs6c6').value;
   crs6c7=document.querySelector('.crs6c7').value;
   crs6c8=document.querySelector('.crs6c8').value;
   

var totalavg,totalavgg,totalavgs;

var dis=document.querySelector('.cgpa')

const popupbgr = document.querySelector('.popupbgr');
const popupdisplay = document.querySelector('.popupdisplay');

const btnPopUpBox = document.querySelector('.btnPopUpBox');
 var sem=document.getElementById('displaysem').value;

dis.style.display='flex'
    btnPopUpBox.style="flex";
    popupdisplay.style.display="flex";
    popupbgr.style.display="flex";


var key2=0;




          //Semaster 1

s1tot=(s1c1*crs1c1)+(s1c2*crs1c2)+(s1c3*crs1c3)+(s1c4*crs1c4)+(s1c5*crs1c5)+(s1c6*crs1c6)+(s1c7*crs1c7)+(s1c8*crs1c8);
var crtot=parseInt(crs1c1)+parseInt(crs1c2)+parseInt(crs1c3)+parseInt(crs1c4)+parseInt(crs1c5)+parseInt(crs1c6)+parseInt(crs1c7)+parseInt(crs1c8);
s1avg=s1tot/crtot;
s1avgs=s1avg.toFixed(3);



//Semaster 2
s2tot=(s2c1*crs2c1)+(s2c2*crs2c2)+(s2c3*crs2c3)+(s2c4*crs2c4)+(s2c5*crs2c5)+(s2c6*crs2c6)+(s2c7*crs2c7)+(s2c8*crs2c8);
var crtot=parseInt(crs2c1)+parseInt(crs2c2)+parseInt(crs2c3)+parseInt(crs2c4)+parseInt(crs2c5)+parseInt(crs2c6)+parseInt(crs2c7)+parseInt(crs2c8);
s2avg=s2tot/crtot;
s2avgs=s2avg.toFixed(3);

// 1
//CSE Department

if (key==1 && key2==0) {
   //sem4
   s4c10=document.querySelector('.s4c10').value;
   //cr
   crs4c10=document.querySelector('.crs4c10').value;


   //sem6
   s6c9=document.querySelector('.s6c9').value;
   s6c10=document.querySelector('.s6c10').value;
   //cr
   crs6c9=document.querySelector('.crs6c9').value;
   crs6c10=document.querySelector('.crs6c10').value;

//Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8)+parseInt(crs3c9);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

  
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9)+(s4c10*crs4c10);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8)+parseInt(crs4c9)+parseInt(crs4c10);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8)+(s5c9*crs5c9);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8)+parseInt(crs5c9);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8)+(s6c9*crs6c9)+(s6c10*crs6c10);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8)+parseInt(crs6c9)+parseInt(crs6c10);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);


}

// 2
//ECE DEPARTMENT

if (key==2 && key2==0) {


   s6c9=document.querySelector('.s6c9').value;
   s6c10=document.querySelector('.s6c10').value;

   crs6c9=document.querySelector('.crs6c9').value;
   crs6c10=document.querySelector('.crs6c10').value;

    //Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8)+parseInt(crs3c9);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

  
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8)+parseInt(crs4c9);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8)+(s5c9*crs5c9);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8)+parseInt(crs5c9);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8)+(s6c9*crs6c9)+(s6c10*crs6c10);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8)+parseInt(crs6c9)+parseInt(crs6c10);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);

}

// 3
//EEE DEPARTMENT

if (key==3 && key2==0) {


   s6c9=document.querySelector('.s6c9').value;
   s6c10=document.querySelector('.s6c10').value;

   crs6c9=document.querySelector('.crs6c9').value;
   crs6c10=document.querySelector('.crs6c10').value;

   //Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8)+parseInt(crs3c9);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

 
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8)+parseInt(crs4c9);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8)+(s5c9*crs5c9);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8)+parseInt(crs5c9);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8)+(s6c9*crs6c9)+(s6c10*crs6c10);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8)+parseInt(crs6c9)+parseInt(crs6c10);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);

}

//BioMedical DEPARTMENT

if (key==4 && key2==0) {


   //Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

 
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);

}

// 5
//Civil Department

if (key==5 && key2==0) {

   //sem6
   s6c9=document.querySelector('.s6c9').value;
  
   //cr
   crs6c9=document.querySelector('.crs6c9').value;
   

//Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8)+parseInt(crs3c9);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

  
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8)+parseInt(crs4c9);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8)+(s5c9*crs5c9);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8)+parseInt(crs5c9);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8)+(s6c9*crs6c9);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8)+parseInt(crs6c9);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);


}


// 6
//MECH Department

if (key==6 && key2==0) {
   //sem4
   s4c10=document.querySelector('.s4c10').value;
   //cr
   crs4c10=document.querySelector('.crs4c10').value;


   //sem6
   s6c9=document.querySelector('.s6c9').value;
   s6c10=document.querySelector('.s6c10').value;
   //cr
   crs6c9=document.querySelector('.crs6c9').value;
   crs6c10=document.querySelector('.crs6c10').value;

//Semaster 3
s3tot=(s3c1*crs3c1)+(s3c2*crs3c2)+(s3c3*crs3c3)+(s3c4*crs3c4)+(s3c5*crs3c5)+(s3c6*crs3c6)+(s3c7*crs3c7)+(s3c8*crs3c8)+(s3c9*crs3c9);
var crtot=parseInt(crs3c1)+parseInt(crs3c2)+parseInt(crs3c3)+parseInt(crs3c4)+parseInt(crs3c5)+parseInt(crs3c6)+parseInt(crs3c7)+parseInt(crs3c8)+parseInt(crs3c9);
s3avg=s3tot/crtot;
s3avgs=s3avg.toFixed(3);

  
//Semaster 4
s4tot=(s4c1*crs4c1)+(s4c2*crs4c2)+(s4c3*crs4c3)+(s4c4*crs4c4)+(s4c5*crs4c5)+(s4c6*crs4c6)+(s4c7*crs4c7)+(s4c8*crs4c8)+(s4c9*crs4c9)+(s4c10*crs4c10);
var crtot=parseInt(crs4c1)+parseInt(crs4c2)+parseInt(crs4c3)+parseInt(crs4c4)+parseInt(crs4c5)+parseInt(crs4c6)+parseInt(crs4c7)+parseInt(crs4c8)+parseInt(crs4c9)+parseInt(crs4c10);
s4avg=s4tot/crtot;
s4avgs=s4avg.toFixed(3);



//Semaster 5
s5tot=(s5c1*crs5c1)+(s5c2*crs5c2)+(s5c3*crs5c3)+(s5c4*crs5c4)+(s5c5*crs5c5)+(s5c6*crs5c6)+(s5c7*crs5c7)+(s5c8*crs5c8)+(s5c9*crs5c9);
var crtot=parseInt(crs5c1)+parseInt(crs5c2)+parseInt(crs5c3)+parseInt(crs5c4)+parseInt(crs5c5)+parseInt(crs5c6)+parseInt(crs5c7)+parseInt(crs5c8)+parseInt(crs5c9);
s5avg=s5tot/crtot;
s5avgs=s5avg.toFixed(3);


//Semaster 6
s6tot=(s6c1*crs6c1)+(s6c2*crs6c2)+(s6c3*crs6c3)+(s6c4*crs6c4)+(s6c5*crs6c5)+(s6c6*crs6c6)+(s6c7*crs6c7)+(s6c8*crs6c8)+(s6c9*crs6c9)+(s6c10*crs6c10);
var crtot=parseInt(crs6c1)+parseInt(crs6c2)+parseInt(crs6c3)+parseInt(crs6c4)+parseInt(crs6c5)+parseInt(crs6c6)+parseInt(crs6c7)+parseInt(crs6c8)+parseInt(crs6c9)+parseInt(crs6c10);
s6avg=s6tot/crtot;
s6avgs=s6avg.toFixed(3);


}





if (sem==1) {

   totalavg=s1avg/1;
   totalavgs=totalavg.toFixed(3)
   dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}  
                    \nAvarage CGPA: ${parseFloat(totalavgs).toFixed(3)}`
}
else if(sem==2)
{
   totalavg=s1avg+s2avg;
   totalavgg=totalavg/2;
   totalavgs=totalavgg.toFixed(3)

 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)}
                  \n Avarage CGPA: ${parseFloat(totalavgs)}`
}
else if(sem==3)
{

     totalavg=s1avg+s2avg+s3avg;

     if (s1avg!=0 && s2avg!=0){
     totalavgg=totalavg/3
     totalavgs=totalavgg.toFixed(3)
     dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                      \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                      \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                      \n Avarage CGPA: ${parseFloat(totalavgs)}`
                   }

         else
         {

            totalavgg=s3avg/1
     totalavgs=totalavgg.toFixed(3)
     dis.innerText = `                       
                      \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                      \n Avarage CGPA: ${parseFloat(totalavgs)}`

         }  

}
else if(sem==4)
{

 totalavg=s1avg+s2avg+s3avg+s4avg;

 if (s1avg!=0 && s2avg!=0){
 totalavgg=totalavg/4
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }
    else 
    {
      totalavg=s3avg+s4avg;
       totalavgg=totalavg/2
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = ` 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`

    }          

}
else if (sem==5) {

    totalavg=s1avg+s2avg+s3avg+s4avg+s5avg;
     if (s1avg!=0 && s2avg!=0)
     {
 totalavgg=totalavg/5
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s5avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }

               else
               {
                  totalavg=s3avg+s4avg+s5avg;
                   totalavgg=totalavg/3
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = ` 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s5avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }
}
else if (sem==6) {

    totalavg=s1avg+s2avg+s3avg+s4avg+s5avg+s6avg;
    if (s1avg!=0 && s2avg!=0)
    {
 totalavgg=totalavg/6
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s5avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s6avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }

          else
          {
            totalavg=s3avg+s4avg+s5avg+s6avg;
             totalavgg=totalavg/4
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = ` 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s5avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s6avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`

          }     
}
else if (sem==7) {

    totalavg=s1avg+s2avg+s3avg+s4avg+s5avg+s6avg;
     if (s1avg!=0 && s2avg!=0)
     {
 totalavgg=totalavg/7
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 7: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }

               else
               {
                  totalavg=s3avg+s4avg+s5avg+s6avg;
                   totalavgg=totalavg/5
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 7: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`

               }
}
else if (sem==8) {

    totalavg=s1avg+s2avg+s3avg+s4avg+s5avg+s6avg;
    if (s1avg!=0 && s2avg!=0)
    {
 totalavgg=totalavg/8
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = `\nSem 1: ${parseFloat(s1avg).toFixed(3)}
                  \nSem 2: ${parseFloat(s2avg).toFixed(3)} 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 7: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 8: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
               }
      else
      {
         totalavg=s3avg+s4avg+s5avg+s6avg;
          totalavgg=totalavg/6
 totalavgs=totalavgg.toFixed(3)
 dis.innerText = ` 
                  \nSem 3: ${parseFloat(s3avg).toFixed(3)}
                  \nSem 4: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 5: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 6: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 7: ${parseFloat(s4avg).toFixed(3)}
                  \nSem 8: ${parseFloat(s4avg).toFixed(3)}
                  \nAvarage CGPA: ${parseFloat(totalavgs)}`
      }      
}
else
{
   const popup=document.querySelector('.popupbgr')
   alert('Plese Select Semaster')
   popup.style.display='none'
}


}

// --------------------------------------------------------------------------



//What Semastr Display

function displaysemester() {
    
    var sem,sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8;
 sem=document.getElementById('displaysem').value;
 holesem=document.querySelectorAll('.sems')
 sem1=document.querySelector('.container1')
 sem2=document.querySelector('.container2')
 sem3=document.querySelector('.container3')
 sem4=document.querySelector('.container4')
 sem5=document.querySelector('.container5')
 sem6=document.querySelector('.container6')
 sem7=document.querySelector('.container7')
 sem8=document.querySelector('.container8')
if (sem==1) {
         for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
   }
}
else if(sem==2)
{
    for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
      sem2.style.display='block'
   }
}
else if(sem==3)
{

   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
   }

}
else if(sem==4)
{
     for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
      sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
   }
}
else if(sem==5)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
   }

}
else if(sem==6)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
       sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
      sem6.style.display='block'
   }

}
else if(sem==7)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='none'
             sem1.style.display='block'
      sem2.style.display='block'
      sem3.style.display='block'
      sem4.style.display='block'
      sem5.style.display='block'
      sem6.style.display='block'
      sem7.style.display='block'
   }

}
else if(sem==8)
{
   for(var i=0;i<holesem.length;i++)
   {
      holesem[i].style.display='block'
   }

}


}


/*--------------------------------------------------------------------------------------------------*/
//view And Hide Credits Action
  var listid = document.querySelectorAll('.crmenu')

function Changecr()
{

var listid = document.querySelectorAll('.crmenu')
   var button =document.getElementById('creditbtn');
   var text=button.innerText;
   
   if (text=='Change Credit') {

      button.innerText='Hide Credit';
        for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='block';
      }
   }
   else
   {
      button.innerText='Change Credit';
      for(var i=0;i<listid.length;i++)
      {
         listid[i].style.display='none';
      }
      
   }

}

/*-------------------------------------------------------------------------*/

function OpenMenu1() {
   
      let navbar1=document.querySelector('.bar1')
      let navbar2=document.getElementById('bar2')
      let homemenu=document.querySelector('.hmenu')
      navbar2.style.display='flex'
      homemenu.style.display='flex'


}
function OpenMenu2()
{
   let navbar1=document.querySelector('.bar1')
   let  navbar2=document.getElementById('bar2')
     let homemenu=document.querySelector('.hmenu')
   navbar1.style.display='flex'
   navbar2.style.display='none'
   homemenu.style.display='none'
}

function sem2020() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
  sem2020.style.display='block'
   sem2021.style.display='none'
   sem2022.style.display='none'
   sem2023.style.display='none'
   mainmenu.style.display='none'

   // body...
}
function sem2021() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
  sem2020.style.display='none'
   sem2021.style.display='block'
   sem2022.style.display='none'
   sem2023.style.display='none'
   mainmenu.style.display='none'

   // body...
}
function sem2022() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
   sem2020.style.display='none'
   sem2021.style.display='none'
   sem2022.style.display='block'
   sem2023.style.display='none'
   mainmenu.style.display='none'


   // body...
}
function sem2023() {

   const sem2020=document.querySelector('.sem2020')
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
   const sem2023=document.querySelector('.sem2023')
  const mainmenu=document.querySelector('.mainmenu')
   sem2020.style.display='none'
   sem2021.style.display='none'
   sem2022.style.display='none'
   sem2023.style.display='block'
   mainmenu.style.display='none'


   // body...
}


function Closebtn() {

  const popupbgr=document.querySelector('.popupbgr')

          popupbgr.style.display='none'
  
}

/*----------------------------------------------------------------------------------------*/
















/*-------------------------------------------------------------------------------------------*/




function regulation() {
  const sem2021=document.querySelector('.sem2021')
  const sem2022=document.querySelector('.sem2022')
  const mainmenu=document.querySelector('.mainmenu')
  const regulation=document.querySelector('.regulation')

  regulation.style.display='block'
   sem2022.style.display='none'
   sem2021.style.display='none'
    mainmenu.style.display='none'
}