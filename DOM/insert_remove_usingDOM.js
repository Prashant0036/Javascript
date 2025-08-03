let div=document.createElement('div')
div.style.height="100px"
div.style.width="200px"
div.style.border="1px solid black"
div.innerHTML="<p>I'm New div append body</p>"
div.style.fontSize="20px"
div.style.display="flex"
div.style.alignItems="center"
div.style.justifyContent="center"
div.style.backgroundColor="green"
div.style.color="white"
div.setAttribute("class","div1")


// add in body
document.body.append(div)


let div1=document.createElement('div')
div1.style.height="100px"
div1.style.width="200px"
div1.style.border="1px solid black"
div1.innerHTML="<p>I'm New Div append h1</p>"
div1.style.display="flex"
div1.style.alignItems="center"
div1.style.justifyContent="center"
div1.style.backgroundColor="red"
div1.style.color="white"

// add after h1
document.body.getElementsByTagName("div")[0].append(div1)
// div k andar sabse last m 
document.body.getElementsByTagName("div")[0].after(div1)
// div k baad m 




let div2=document.createElement('div')
div2.style.height="100px"
div2.style.width="200px"
div2.style.border="1px solid black"
div2.innerHTML="<p>I'm New Div prepand h1</p>"
div2.style.display="flex"
div2.style.alignItems="center"
div2.style.justifyContent="center"
div2.style.backgroundColor="pink"
div2.style.color="white"

// add before h1
document.body.getElementsByTagName("div")[0].prepend(div2)
// div k andar sabse pehle
document.body.getElementsByTagName("div")[0].before(div2)
// div k pehle 

// Replace Node
// document.body.getElementsByTagName("h1")[0].replaceWith(div2)


// Remove any Element
 document.body.getElementsByTagName("h1")[1].remove()












