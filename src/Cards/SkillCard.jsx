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
    <div className="card bg-transparent border-dark flex flex-col items-center p-4 w-64 h-55">
      <div className="card-body flex flex-col items-center">
        {/* <a href={props.link} target="_blank" className="block"> */}
          <img src={props.imgSrc} alt={props.alt} className="mx-auto" style={{height:'64px',width:'64px'}}/>
        {/* </a> */}
        <h2 className="text-lg font-bold mt-2">{props.title}</h2>
      </div>
    </div>
  );
}




export default SkillCard;