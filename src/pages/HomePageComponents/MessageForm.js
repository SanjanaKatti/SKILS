import {FormProvider,useForm, Controller} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
const MessageForm = () => {
    const formMethods = useForm({
        mode: "all",
        resolver: yupResolver(),
      });
 return (
    <div>
        <FormProvider>
            <form>
            <Controller/>
            </form>
        </FormProvider>
    </div>
 )
}
export default MessageForm;