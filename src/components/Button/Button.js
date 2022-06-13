import styles from './Button.module.scss';

const Button = props => 
    <div className={styles.buttonWrapper}>
        <button onClick={props.action} className={styles.button} > {props.children} </button>
    </div>
export default Button;
