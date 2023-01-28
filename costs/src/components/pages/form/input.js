import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChanche,value}){
    return(
        <div className={styles.form_control}>
            <label htmlfor={name}>{text}:</label>
            <input type={type} id={name} name={name} placeholder={placeholder} onChange={handleOnChanche} value={value}></input>
        </div>
    )
}
export default Input