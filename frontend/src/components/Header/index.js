import "./styles.css";
import { Button } from 'react-bootstrap'
export default function Header(){
    return (
        <div
            className="main d-flex justify-content-center w-100 mt-4 p-4 text-dark flex-column"
        >
            <h1>En tus manos esta el futuro</h1>
            <Button>Ver especies</Button>
        </div>
    )
}