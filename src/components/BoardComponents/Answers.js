import React from 'react';

const Answers = (props) => {
    return (
        <div>
            {props.data.map((el, i) =>
             <button
                key={i}
                onClick={()=>props.callback(el)}
             >{el}</button>
            )}
        </div>
    )
};
export default Answers;