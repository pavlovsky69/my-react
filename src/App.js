import './App.css';
import {TestMemo} from "./components/TestMemo/TestMemo";
import {TestHooks} from "./components/TestHooks/TestHooks";
import {PostComponent} from "./components/PostComponent/PostComponent";

const App = () => {
    return (
        <div className="App">

            {/*<TestMemo/>*/}
            <TestHooks/>
        </div>
    );
}

export default App;
