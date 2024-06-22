import {Form} from "react-router-dom";
import InputMask from 'react-input-mask';


const Contact = () => {
    return (
        <div>
            <div>
                <div>
                    Запечатлейте свою уникальность — записывайтесь на фотосессию и создавайте воспоминания, которые останутся навсегда!
                </div>
                <div></div>
                <div></div>
            </div>
            <div>
                <Form>
                    <input type="text"/>
                    <InputMask mask="+{7}(000)000-00-00" maskChar=" " />
                    <input type="text"/>
                </Form>
            </div>

        </div>
    );
};

export default Contact;