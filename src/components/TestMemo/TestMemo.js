import React, {useCallback, useMemo, useState} from 'react';
import Info from "../Info/Info";

const TestMemo = (data) => {
    const [count, setCount] = useState (0)
    const [info, setInfo] = useState ([])

    const numberCounter = (number) => {
        console.log ('Loading .....');
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number
    }

    const calculation = useMemo (() => {
        return numberCounter (count)
    }, [count])


    const changeCount = (type) => {
        setCount (type === 'decrement' ? count - 1 : count + 1)
    };

    // const addInfo = () => setInfo ([...info, "new Info"])

    const addInfo = useCallback(()=>{setInfo ([...info, "new Info"])}, [info])


    return (
        <div>
            <button onClick={() => changeCount ('increment')}>Plus</button>
            <button onClick={() => changeCount ('decrement')}>Minus</button>
            <p>Count: {count}</p>
            <p>Calculation: {calculation}</p>
            <Info info={info} addInfo={addInfo}/>

            
        </div>
    );
};

export {TestMemo};