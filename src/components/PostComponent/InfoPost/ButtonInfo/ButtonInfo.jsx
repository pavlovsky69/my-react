import React, {useEffect} from 'react';

const ButtonInfo = (props) => {
    const {posts}=props
    posts.map((post=>post))
    return (
        <div>
            <h1>(`${posts}`)</h1>
        </div>);
};

export default ButtonInfo;
