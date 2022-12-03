import { Language } from "@customTypes/index";
import EN from "@localization/en";

const LANGUAGE_MAP = {
	[Language.EN]: EN,
};

const translate = (lang: Language, key: string): string => {
	return LANGUAGE_MAP[lang][key];
};

export default translate;
