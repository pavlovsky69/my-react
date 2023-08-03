import {memo} from 'react';

const Info = ({info, addInfo}) => {
    console.log('child render')
    return (
        <div>
            {info.map((info, idx)=><p key={idx}>{info}</p>)}
            <button onClick={addInfo}> AddInfo</button>
        </div>
    );
};

export default memo(Info)