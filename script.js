document.addEventListener('DOMContentLoaded',()=>{
    var btn64gb = document.getElementById('64GB');
    var btn128gb = document.getElementById('128GB');
    var btn256gb = document.getElementById('256GB');
    var btnred = document.getElementById('red');
    var btnblack = document.getElementById('black');
    var btnwhite = document.getElementById('white');
    var btnsubmit = document.getElementById('submitBtn');

    var currentcolor = '';
    var currentmemory = '';
    function updatecolor(color)
    {
        currentcolor = color;
        if(color=='red'&& currentmemory=='128GB')
        currentmemory = '';
        else if(color=='white' && currentmemory!='')
        currentmemory = '';
        else if(color=='black'&& currentmemory=='256GB')
        currentmemory = '';
    }
    function updatememory(memory)
    {
        currentmemory = memory;
        if(memory=='128GB' && (currentcolor=='red' || currentcolor=='white') )
        currentcolor = '';
        else if(memory=='256GB' && (currentcolor=='black' || currentcolor=='white'))
        currentcolor = '';
        else if(memory=='64GB' && currentcolor=='white')
        currentcolor = '';
    }
    function enablebuttons(buttons)
    {
        buttons.forEach(button => {
            button.disabled=false;
        });
    }
    function disablebuttons(buttons)
    {
        buttons.forEach(button => {
            button.disabled=true;
        });
    }
    btn64gb.addEventListener('click',()=>{
        updatememory('64GB');
        disablebuttons([btnwhite]);
        enablebuttons([btnred,btnblack,btn128gb,btn256gb]);
    })
    btn128gb.addEventListener('click',()=>{
        updatememory('128GB');
        disablebuttons([btnwhite,btnred]);
        enablebuttons([btnblack,btn256gb,btn64gb]);
    })
    btn256gb.addEventListener('click',()=>{
        updatememory('256GB');
        disablebuttons([btnwhite,btnblack]);
        enablebuttons([btnred,btn128gb,btn64gb]);
    })
    btnred.addEventListener('click',()=>{
        updatecolor('red');
        disablebuttons([btn128gb]);
        enablebuttons([btnwhite,btnblack,btn256gb,btn64gb]);
    })
    btnwhite.addEventListener('click',()=>{
        updatecolor('white');
        disablebuttons([btn128gb,btn64gb,btn256gb]);
        enablebuttons([btnred,btnblack]);
    })
    btnblack.addEventListener('click',()=>{
        updatecolor('black');
        disablebuttons([btn256gb]);
        enablebuttons([btnred,btnwhite,btn128gb,btn64gb]);
    })
    btnsubmit.addEventListener('click',submit);
    const id ={
        "64GB red":1001,
        "64GB black":1002,
        "256GB red":1003,
        "128GB black":1004,
    }
    function submit()
    {
        if(currentcolor=='' &&  currentmemory=='')
        {
            alert('Please select memory and color');
        }
        else if(currentcolor=='')
        {
            alert('Please select color');
        }
        else if(currentmemory=='')
        {
            alert('Please select memory');
        }
        else{
            const productid = id[currentmemory+' '+currentcolor];
            alert(`product id is ${productid}`);
        }
    }   
})