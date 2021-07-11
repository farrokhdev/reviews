import React, { useState } from 'react';
import people from './data';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import { FiCheck } from "react-icons/fi";

const Review = () => {
  const[index,setIndex] = useState(0);
  const{n,job,image,text} = people[index];

  const checkIndex = (indexNum) =>{
    if(indexNum > people.length -1){
      return 0;
    }
    if(indexNum < 0){
      return people.length -1
    }
    return indexNum;
  };

  const prevPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = ()=>{
    setIndex((index)=>{
      let newIndex = index + 1;  
      return checkIndex(newIndex);
    });
  };
  
  const randomPerson = ()=>{
    let randNumber = Math.floor(Math.random() * people.length);
    // console.log(randNumber);
    // console.log(index);
    if(randNumber===index){
      randNumber = index +1;
    }
    setIndex(checkIndex(randNumber));
  }

  return (
    <div className="reviews-container">
        <div className="review">
          <div className="img">
            <img src={image} alt="" />
            <span><FiCheck className="check"/></span>
          </div>
          <div className="name">
            <h3>{n}</h3>
          </div>
          <div className="job">
            <h4>{job}</h4>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div className="arrows">
          <button onClick={prevPerson}><FaArrowLeft className="prev"/></button>
          <button onClick={nextPerson}><FaArrowRight className="next"/></button>
          <button className="random" onClick={randomPerson}>random</button>
        </div>
      </div>    
    </div>
  );
};

export default Review;
