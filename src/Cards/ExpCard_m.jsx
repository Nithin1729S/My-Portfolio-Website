import React from 'react';

function ExpCard_m(props) {
  return (
    <div
      id="Card"
      className="exp-main col-lg-3 col-md-4 col-sm-2 exp-card-super bg-transparent border-0"
      style={{ paddingRight: '560px' }}
    >
      <div style={{ paddingRight: '560px' }}  id="Card-Body" className="card-body exp-card-main" >
        <div className="exp-card-img" >
          <img src={props.imgSrc} alt={props.Where} style={{ width: '250px', height: '250px' }}/>
        </div>
        <div className="exp-card-content" >
          <div className="card-title exp-card-title">
            <h2 style={{ marginRight: '560px' }} >{props.Where}</h2>
            <time className='fw-lighter'>{props.Time}</time>
          </div>
          <div className="card-text exp-card-text">
            <h7 className='fw-bold fst-italic'>{props.Position}</h7><br></br>
            {props.WorkDone1}
            <br></br>
            {props.WorkDone2}
            <br></br>
            {props.WorkDone3}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard_m;
