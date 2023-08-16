import React from 'react';

const NewComponent = () => {


    class User{
        constructor(protected id: number, private name: string, private age: number) {
            this.id = id;
            this.name = name;
            this.age = age;
        }
    }


    const user = new User(50, 'alex', 25);


    return (
        <div>
            <h1>NewComponent</h1>
        </div>
    );
};

export {NewComponent};



