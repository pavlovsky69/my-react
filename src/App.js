import './App.css';
import UserComponent from "./components/UserComponent/UserComponent";
import Image from "./components/Image/image"

const App = () => {
    return (
        <>
            <h1>Simpson Familys</h1>
            <div className='simpsons'>

                <div>
                    <UserComponent
                        name={'Homer'}
                        surname={'Simpson'}
                        age={34}
                        gender={'male'}
                    />
                    <Image
                        src={'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534'}
                        alt={'photo'}
                    />
                </div>

                <div>
                    <UserComponent
                        name={'Marge'}
                        surname={'Simpson'}
                        age={34}
                        gender={'female'}
                    />
                    <Image
                        src={'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2014/07/marge_simpson.jpg'}
                        alt={'photo'}
                    />
                </div>

                <div>
                    <UserComponent
                        name={'Bart'}
                        surname={'Simpson'}
                        age={12}
                        gender={'male'}
                    />
                    <Image
                        src={'https://easydrawingart.com/wp-content/uploads/2019/08/How-to-draw-Bart-Simpson.jpg'}
                        alt={'photo'}
                    />
                </div>

                <div>
                    <UserComponent
                        name={'Lisa'}
                        surname={'Simpson'}
                        age={10}
                        gender={'female'}
                    />
                    <Image
                        src={'https://www.liveabout.com/thmb/F9fPE5Wv5yfBVf72LAOTdobwgbA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/lisa-56a0099f3df78cafda9fb866.jpg'}
                        alt={'photo'}
                    />
                </div>

                <div>
                    <UserComponent
                        name={'Maggie'}
                        surname={'Simpson'}
                        age={2}
                        gender={'female'}
                    />
                    <Image
                        src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbu4qF0r7ybmDMTuwOy0RFStt5IogLSZVmg&usqp=CAU'}
                        alt={'photo'}
                    />
                </div>
            </div>


        </>
    );
};

export default App;
