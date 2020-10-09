function optionsshadowpackage(opitons) {
    let images = document.querySelectorAll('.shadow');

    if(opitons.shadow_type == 'hard')
        opitons.shadow_type = '0px'
    else 
        opitons.shadow_type = '15px';
    
    images.forEach(image => {
        image.style.shadow_type = `10px 10px ${opitons.shadow_type} 1px rgba(0, 0, 0, .12)`;

        if(opitons.padding)
        {
            image.style.padding = '1rem';
        }
    })
}

module.exports.optionsshadowpackage = optionsshadowpackage;