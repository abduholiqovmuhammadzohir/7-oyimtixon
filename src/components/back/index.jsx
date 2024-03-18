import { useNavigate } from "react-router-dom";
import styles from "./index.module.css"

function Back() {

    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <div>
            <h2 className={styles.back} onClick={handleBackClick}>Go Back</h2>
        </div>
    )
}

export default Back