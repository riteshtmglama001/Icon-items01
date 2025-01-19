
export const  mode=document.querySelector('#mode');
const Mode=()=>{
    if(mode==='light'){
        console.log('dark');
    }
    else{
        console.log('light');
    }
}
 
mode.addEventListener('click',()=>{

    Mode();

})
