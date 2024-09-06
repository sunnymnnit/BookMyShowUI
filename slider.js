
var sliderImplementation=()=>{
    let first=document.getElementById("crousel_elements_1").getElementsByTagName('img');
    
    let second=document.getElementById("crousel_elements_2").getElementsByTagName('img');
    
    let third=document.getElementById("crousel_elements_3").getElementsByTagName('img');
    
    let fourth=document.getElementById("crousel_elements_4").getElementsByTagName('img');


    // style_first = window.getComputedStyle(document.getElementById("crousel_elements_1"));
    // style_second = window.getComputedStyle(document.getElementById("crousel_elements_2"));
    // style_third = window.getComputedStyle(document.getElementById("crousel_elements_3"));
    // style_fourth = window.getComputedStyle(document.getElementById("crousel_elements_4"));
    
    // style_first_image = window.getComputedStyle(first[0]);
    // style_second_image = window.getComputedStyle(second[0]);
    // style_third_image = window.getComputedStyle(third[0]);
    // style_fourth_image = window.getComputedStyle(fourth[0]);


    // style_fourth_width=style_fourth.getPropertyValue('width');
    // style_fourth_margin_right=style_fourth.getPropertyValue('margin-right');

    // style_first_width=style_first.getPropertyValue('width');
    // style_first_margin_right=style_first.getPropertyValue('margin-right');

    // style_second_width=style_second.getPropertyValue('width');
    // style_second_margin_right=style_second.getPropertyValue('margin-right');

    // style_third_width=style_third.getPropertyValue('width');
    // style_third_margin_right=style_third.getPropertyValue('margin-right');


    // document.getElementById("crousel_elements_1").setAttribute('style',`width:${style_fourth_width}; margin-right:${style_fourth_margin_right};`);


    // document.getElementById("crousel_elements_2").setAttribute('style',`width: ${style_first_width}; margin-right:${style_first_margin_right};`);

    // second[0].setAttribute('style',`object-position: ${style_first_image.getPropertyValue('object-position')}; object-fit: ${style_first_image.getPropertyValue('object-fit')};`);


    // document.getElementById("crousel_elements_3").setAttribute('style',`width: ${style_second_width}; margin-right:${style_second_margin_right};`);
    // third[0].setAttribute('style',`object-fit: ${style_second_image.getPropertyValue('object-fit')}; `);


    // document.getElementById("crousel_elements_4").setAttribute('style',`width: ${style_third_width}; margin-right:${style_third_margin_right};`);
    // fourth[0].setAttribute('style',`object-fit: ${style_third_image.getPropertyValue('object-fit')}; object-position: ${style_third_image.getPropertyValue('object-position')};`);



    firstimage=first[0].src;
    secondimage=second[0].src;
    thirdimage=third[0].src;
    fourthimage=fourth[0].src;


    first[0].src=secondimage;
    second[0].src=thirdimage;
    third[0].src=fourthimage;
    fourth[0].src=firstimage;


    setTimeout(sliderImplementation,2000);
}
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(sliderImplementation,2000);
  });