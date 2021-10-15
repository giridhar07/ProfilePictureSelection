
const img = document.querySelector('#picture');
const file = document.querySelector('#file');



file.addEventListener('change', function(){
    const choosedFile = this.files[0];

    if(choosedFile){

        var fileName = document.getElementById("file").value;
        var idxDot = fileName.lastIndexOf(".") + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        
        if (extFile=="jpg"){
            const reader = new FileReader();

            reader.addEventListener('load', function(){
                img.setAttribute('src', reader.result);
            })
    
            reader.readAsDataURL(choosedFile)
        }else{
            alert("Only jpg files are allowed!");
        }   
    }
})