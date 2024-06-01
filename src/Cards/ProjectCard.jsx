import React from 'react';
import $ from 'jquery';

$(document).ready(function () {
  $('#android-pro').hover(function () {
    $('#footer').addClass("project-card-footer-BtmToUp");
  }, function () {
    $('#footer').removeClass("project-card-footer-BtmToUp");
  });
});


function ProjectCard(props) {
  return (
    <div className="card project-card bg-transparent border-dark h-100">
      <div className="card-title project-card-title d-flex">
        <h2 className='fw-bold' style={{ minWidth: '250px' }}>{props.title}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href={props.link} target="_blank">
            <img title='Source Code'src={props.imgSrc} alt={props.alt} />
          </a>
          {props.imgSrc1 && (
            <a href={props.link} target="_blank">
              <img title='Live Demo' style={{ width: '40px', height: '40px', marginLeft: '20px' }} src={props.imgSrc1} alt={props.alt} />
            </a>
          )}
        </div>

      </div>
      <div className="card-body project-card-body">
        <h4 className='fst-italic'>{props.desc}</h4>
      </div>
      <div id='#footer' className='card-footer project-card-footer'>
        {props.ts1 && <img height="72" width="72" src={props.ts1} alt={props.wts1} />}
        {props.ts2 && <img height="72" width="72" src={props.ts2} alt={props.wts2} />}
        {props.ts3 && <img height="72" width="72" src={props.ts3} alt={props.wts3} />}
        {props.ts4 && <img height="72" width="72" src={props.ts4} alt={props.wts4} />}
      </div>
    </div>
  );
}

export default ProjectCard;