import styles from "./Image.module.scss"

const Image= ({src, alt,}) =>{
    return(
        <img className={styles.myImages}
            src={src}
            alt={alt}
        />
    );
};

export default Image;

