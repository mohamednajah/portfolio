import React from 'react';
import { Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FeedbackType } from '../types/sections';

const FeedbackCard = ({ name, feedback,image }: FeedbackType) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover shadow ml-7 mb-2 mt-4 w-500 h-175 d-flex align-items-center justify-content-center" style={{width: "150%"}}>
        <CardBody>
          <div className=" ">
            <div className="pl-4">
              <h5 className="text-info">{name}</h5>
              <p className="description mt-3">{feedback}</p>
              <img src={image}  style={{width: "100%",height:"10%"}}></img>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
