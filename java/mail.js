
//////////////////////////variables/////////////////////////////
let prCoductName=document.getElementById(`productName`);
let productPrice=document.getElementById(`productPrice`);
let productCatageory=document.getElementById(`productCatageory`);
let productDescription=document.getElementById(`productDescription`);
let currentValue=0
let productArray=[]
//////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////add product function////////////////////////

if(localStorage.getItem(`token`) != null)

{
    productArray=JSON.parse(localStorage.getItem(`token`));

    
    display()
}






function addproduct ()
{




    if(document.getElementById(`mainBtn`).innerHTML==`Add Product`)
    {
        let product={


            name:prCoductName.value,
            price:productPrice.value,
            catageory:productCatageory.value,
            description:productDescription.value
    
        }
        productArray.push(product);
        localStorage.setItem(`token`,JSON.stringify(productArray))
        reset();
        display();
    
        console.log(productArray)
    }
    else
    {
        updateProduct()
    }
   

}
//////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////reset funciton///////////////////////////////////////////////

function reset ()
{
    prCoductName.value=``
        productPrice.value=``
        productCatageory.value=``
        productDescription.value=``
}
///////////////////////////////////////////////////////////////////////////////////

///////////////////display function///////////////////////////////////////////////

 function display()
{

    let cartoona=``;
   
    for (let i = 0; i < productArray.length; i++) {
            
        cartoona+=`
        <tr class="  bg-dark">
                        <td >${i+1}</td>
                        <td>${productArray[i].name}</td>
                        <td>${productArray[i].price}</td>
                        <td>${productArray[i].catageory}</td>
                        <td>${productArray[i].description}</td>
                        <td><button  class ="btn btn-info"onclick="update(${i})" >Update</button></td>
                        <td><button  class ="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
                    </tr>
      
        ` 
           
    }

    document.getElementById(`tableBody`).innerHTML=cartoona;
  
}
///////////////////////////////////////////////////////////////////////////////////////////

///////////////////delete function////////////////////////////////////

function deleteProduct (index)
{
    productArray.splice(index,1);
    localStorage.setItem(`token`,JSON.stringify(productArray))
    display();
}
////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////search functiom//////////////////////////////////
function searchProduct (term)
{


    
     let cartoona=``
    for (let i = 0; i < productArray.length; i++) {
        
        if(productArray[i].name.toLowerCase(). includes(term.toLowerCase()))
        {
            
            cartoona+=`
            <tr class="  bg-dark">
                            <td >${i}</td>
                            <td>${productArray[i].name}</td>
                            <td>${productArray[i].price}</td>
                            <td>${productArray[i].catageory}</td>
                            <td>${productArray[i].description}</td>
                            <td><button  class ="btn btn-info" onclick="update(${i})">Update</button></td>
                            <td><button  class ="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
                        </tr>
          
            ` 
        }
       
    }
    document.getElementById(`tableBody`).innerHTML=cartoona;
  
}


///////////////////////////////////////////////////////////////////////////////////////////

/////////////////////update function/////////////////////////

function update(index)
{
  currentValue=index
  
 
    prCoductName.value=productArray[currentValue].name;
    productPrice.value=productArray[currentValue].price;
    productCatageory.value=productArray[currentValue].catageory;
    productDescription.value=productArray[currentValue].description;


   let x= document.getElementById(`mainBtn`).innerHTML=`Update`  
}





function updateProduct ()
{

    
    productArray[currentValue].name=prCoductName.value
    productArray[currentValue].price=productPrice.value
    productArray[currentValue].catageory=productCatageory.value
    productArray[currentValue].description=productDescription.value
    localStorage.setItem(`token`,JSON.stringify(productArray))
    display()
    reset()
    document.getElementById(`mainBtn`).innerHTML=`Add Product`





}








