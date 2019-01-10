import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function Launch(props) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': props.launchSuccess,
                'text-danger': !props.launchSuccess
              })}
            >
              {props.missionName}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{props.launchDate}</Moment>
          </p>
        </div>
        <div className="col-md-3">
          {/* <Link to={`/launch/${props.flightNumber}`} className="btn btn-secondary">
            Launch Details
          </Link> */}
        </div>
      </div>
    </div>
  );
}