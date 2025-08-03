/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    /* Math.random gives number bw 0 to 1 
    agar kisi number ko 0 se 1 k bich k number k sath multiply 
    karoge to ans 0 to num-1 k bich m hi aayega 
*/
  }

let Adjectives={
1:"Crazy", 
2:"Amazing",
3:"Fire" 
}
let ShopName={

1:"Engine",
2:"Foods",
3:"Garments"
}
let AnotherWord={
    1:"Bros",
    2:"Limited",
    3:"Hub"
    }

    let num1=getRndInt(1,3)
    let num2=getRndInt(1,3)
    let num3=getRndInt(1,3)


    let businessName=Adjectives[num1]+" "+ShopName[num2]+" "+AnotherWord[num3];
    console.log(businessName);