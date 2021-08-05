function getFile(){
    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);

        }else{
            console.error(this.status+ " Error Conncetion ");
        }
    }
    xhr.open("GET","myFile.txt",true)
    xhr.send()
}
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = getFile
})