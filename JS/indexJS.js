function showImage(imgID){
    var img = document.getElementById(imgID)
    var hideResult = img.nextElementSibling;

    img.style.display = 'block';
    hideResult.style.display = 'block';

}



function hideImage(imgID){
    var img = document.getElementById(imgID)
    var hideResult = img.nextElementSibling;

    img.style.display = 'none';
    hideResult.style.display = 'none';
    
}