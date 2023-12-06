import { FaArrowLeftLong } from "react-icons/fa6";
import { Container } from "./styles";


export function ButtonText({ title, ...rest}) {
    return (
        <Container 
        type="button"
        {...rest}>
            <FaArrowLeftLong />
            {title}
        </Container>
    );
}