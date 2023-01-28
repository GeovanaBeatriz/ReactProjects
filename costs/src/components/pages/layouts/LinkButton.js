import {Link} from 'react-router-dom'

function LinkButton({to, text}){
 return(
    <Link className={StyleSheet.btn} to={to}>
        {text}
    </Link>
 )
}

export default LinkButton