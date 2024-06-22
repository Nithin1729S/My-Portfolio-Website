import React from 'react';
import $ from 'jquery';

$(document).ready(function(){
  $('#android-pro').hover(function(){
    $('#footer').addClass("project-card-footer-BtmToUp");
  }, function(){
    $('#footer').removeClass("project-card-footer-BtmToUp");
  });
});


function SkillCard(props) {
  return (
<div className="card bg-transparent border-dark flex justify-center items-center p-4 mt-1 ml-9 w-32 h-20">
  <div className="card-body text-center">
    {/* <a href={props.link} target="_blank" className="block"> */}
      <img src={props.imgSrc} alt={props.alt} className="mx-auto h-8 w-auto" />
    {/* </a> */}
    <h2 className="text-sm font-bold mt-2">{props.title}</h2>
  </div>
</div>


  );
}





export default SkillCard;