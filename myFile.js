function getFile(){
    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            document.querySelector('#demo').innerHTML = this.responseText
        }else{
            document.querySelector('h1').innerHTML = this.status
        }
    }
xhr.open('GET','myFile.txt')
xhr.send()
    }

    document.addEventListener("DOMContentLoaded",function(){
        document.querySelector('button').onclick = getFile
    })