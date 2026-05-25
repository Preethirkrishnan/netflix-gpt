import { useSelector } from "react-redux"
import lang from "../utils/languageConstants";

const useLanguage = () => {
    const langName = useSelector((store) => store.config.langName);

    return lang[langName];
}

export default useLanguage;