const data = {
    "add two variables": "(var A) + (var B)",
    "subtract two variables": "(var A) - (var B)",
    "multiply two variables": "(var A) * (var B)",
    "devide two variables": "(var A) / (var B)",
    "increment a number": "var myVar , myVar++",
    "decrement a number": "var myVar , myVar--",
    "remainder of a number": "(var A) % (var B)",
    "escape a string literal": 'escape character / ',
    "length of string length": ".length property",
    "get string character at specific index": "variable[index] property",
    "add data to end of array": ".push() method",
    "remove data from end of array": ".pop() method",
    "add data to front of array": ".unshift() method",
    "remove data from front of array": ".shift() method",
    "access an array": "arr[index] property",
    "turn string into number": `→ parseInt(string) property

                               → parseInt(string, radix/base);`,
    "create an array": `→ var sandwich = [ 'data', 'data', '1', 'Anna', 'true']

                        → var myList = [[ ],[ ],[[ ]],[ ]];`,
    "convert data": `→ function
      
                     → parameters

                     → computataion

                     → return statement`,
    "reverse a string": `→ for loop (decrement i from string length){push elements into new arr}

                        → variable.split().reverse().join()`,
    "link variable with html element": `→ variable = document.getElementById('id')
    
                                        → variable = document.getElementTagName('name')

                                        → variable = document.getElementClassName('name')`,
    "create html element": `→ variable = document.createElement('Element Name')`,

    "add html elements to page": ` → variable[element] = document.getElementById('id/class/tagname')

                                 → variable[element] = document.createElement('Element Name')

                                 → document.body.append("Hello World"/Variable[element]),

                                 → targetElement.appendChild(Element/Variable[element]),
                                 
                                 → targetElement.replaceChild(new,old)`,
    "manipulate html element attributes": ` → variable[element] = document.getElementById('id/class/tagname')
                                  
                                           → console.log(Variable[element].attribute)

                                           → Variable[element].attribute = "newAttribute"
                                           
                                           → Variable[element].removeAttribute(attribute)`,
    "manipulate html element data atttributes": ` → variable[element] = document.getElementById('id/class/tagname')
                                  
                                           → console.log(Variable[element].dataset)

                                           → Variable[element].dataset = "newData"
                                           
                                           → Variable[element].removedataset(data)`,
    "manipulate html element class atttributes": ` → variable[element] = document.getElementById('id/class/tagname')
                                  
                                           → console.log(Variable[element].classList)

                                           → Variable[element].classList.add("new class") 

                                           → Variable[element].toggle("new class")
                                           
                                           → Variable[element].removedclassList(class)`,
    "manipulate html element style atttributes": ` → variable[element] = document.getElementById('id/class/tagname')
 
                                                 → Variable[element].style.cssProperty = newProperty`,
    "add an event": `→ button.onclick(function)

                    → variable[element].onclick(function)

                    → variable[element] = document.getElementById('id/class/tagname')

                    → variable[element].addeventlistener('typeOfevent', e => { }), 

                    → window.onload(Function)`,

    "manipulate text in element": `→variable[element] = document.getElementById('id/class/tagname')

                                  →variable[element].innerText= Text/Variable/NUmber

                                  →variable[element].textContent Text/Variable/NUmber`,
    "manipulate html element": `→ variable[element] = document.getElementById('id/class/tagname')

                               → variable[element].innerHTML = Text/Variable/Number/htmlElement
                               
                               → variable[element].remove()

                               →variable[element].removeChild(variable[element])
                               `,
    'iterate through an array': `→ For loop, 
    
                                 → find() property

                                 → while loop

                                 → do while loop`,
    "iterate through an object": `→ For-in loop 
     
                                 → Look up function`,
    "factorialize a number": `→ Recursive function (number){
        if(base case){break} else {return number * function(number - 1)}}`,
    "if statement logic": `→ if(condition/logic){code}

                     → Logic operators ==, ===, !=, <,>, <=, >=, ||, &&,    

                     → if(){} 
                       elseif(){} 
                       elseif(){} 
                       else{}`,
    "switch statement": ` → switch(param){
                            case (a):
                            break
                            case (b):
                            break
                            default (a):
                            break }`,
    "create an object": ` →  var obj = {
        "name": "Whiskers",
        "legs": 4,
        "tails": 1,
        "enemies": ["Water", "Dogs"] ,
         sayHello() {
            return "Hello! My name is \${this.name}."
         }; `,
    "access an object": `→ obj.key

        →obj[key]

        →var myVar = "key";
         obj[myVar]`,
    "manipulate an object": `→ object.name = "Happy Camper" 

                            → object["name"] = "Happy Camper"

                            → add new prop object.fun = "yes"

                            → object.hasOwnProperty(key)

                            → object.key[1].key
                            
                            → object.delete
                            `,
    "manipulate a string": `   → .slice() 

                            → .splice()

                            → .spli(' ') 

                            → .reverse()

                            → .join()
                            
                            → .concat()
                            `,
    "manipulate an array": `    → loop

                            → arr...args

                            → variable[index] = value

                            → arr.filter(data you dont want)

                            → ...args (expands an array)

                            → arr.sort()
                            `,
    "for loop": `→ for(condition) {
                statement}
                
                → for(condition) {
                    statement
                     for(condition) {
                        statement
                     }
                    } `,
    "while loop": `while(condition)) {
        statement
        increament/decrement;
      }`,
    "do while loop": `do{statement increment}
       while (condition)`,
    "recursive function": `→ function (number){
        if(base case){break} 
        else {return number * function(number - 1)}
    }`,
    "create a random number": `→ Math.random()

                              → Math.floor(Math.random() * 20);`,
    "ternary conditional function": `function (a, b) {
    return a > b ? statement1 : else statement;
  }`,
    "write an arrow function": `→ const/let/var variablename = () => {
                 statement
         }`,
    "write an arrow function": `→ const/let/var variablename = () => {
            statement
    }`,
    "destructure an object": `const user = { name: 'John Doe', age: 34 };
      
                                   const { name, age } = user;
    `,
    "create a string": "→ using backticks ``",
    "create a promise": "const makeServerRequest = new Promise((resolve,reject) =>{ })"

}