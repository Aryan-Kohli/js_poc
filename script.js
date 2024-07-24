document.addEventListener('DOMContentLoaded',()=>{
    var memoryOptions = document.querySelectorAll('input[name="memory"]');
    var colorOptions = document.querySelectorAll('input[name="color"]');
    var submitBtn= document.getElementById('submitBtn');
    const products = {
  "red_64gb": 1001,
  "black_64gb": 1002,
  "red_256gb": 1003,
  "black_128gb": 1004,
};
     submitBtn.addEventListener("click", function(){ 
         const colorSelected = document.querySelector('input[name="color"]:checked'); 
         const memorySelected = document.querySelector('input[name="memory"]:checked'); 
         if(colorSelected==null)
         {
            alert("Color is not selected");
            return;
        }
        else if(memorySelected ==null){
            alert("memory is not selected");
            return ;
        }
        const productId = products[`${colorSelected.value}_${memorySelected.value}`];
        console.log(`${colorSelected.value}_${memorySelected.value}`);
        alert(`Iphone ${productId}` );
     });
    function updateOptionSelection()
    {
        const colorSelected = document.querySelector('input[name="color"]:checked'); 
        if(colorSelected)
        {
            var color= colorSelected.value;
            memoryOptions.forEach(memOption => {
                if(color==="red")
                {
                    if(memOption.value === "64gb" || memOption.value==="256gb")
                    memOption.disabled=false;
                    else{
                        memOption.disabled=true;
                        memOption.checked=false;
                    }
            }
            else if (color ==="black")
            {
                    if(memOption.value === "64gb" || memOption.value==="128gb")
                    memOption.disabled=false;
                    else
                    {
                        memOption.disabled=true;
                        memOption.checked=false;
                    }

                }
                else{
                        memOption.checked=false;
                    memOption.disabled=true;
                }
            })
        }
        else{
            memoryOptions.forEach( memOption=> memOption.disabled=false);
            // if the color is not selected then we are make suring that all memory options are enabled
        }
    } 
    colorOptions.forEach(colorOption=> colorOption.addEventListener('change',updateOptionSelection));

});