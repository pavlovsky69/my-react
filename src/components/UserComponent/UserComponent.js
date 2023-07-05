import styles from "./UserComponent.module.scss"


const UserComponent= (props) =>{
const {name, surname, age, gender}= props
    return(
        <div className={styles.container}>
            <h5>Full name: {name} {surname}</h5>
            <div><h5>Age: {age}</h5>
                <h5>Gender: {gender}</h5></div>
        </div>


    )
}

export default UserComponent;