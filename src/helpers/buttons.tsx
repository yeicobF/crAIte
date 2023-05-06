type ButtonType = "primary" | "secondary";

const BUTTON_BASE_STYLES = "rounded-lg px-4 py-2 text-sm text-white";
const BUTTON_TYPE_CLASSES = {
  primary: "bg-accent-dark hover:bg-accent",
  secondary: "bg-slate-200 hover:bg-slate-100 text-slate-900",
};

const getButtonClasses = (type?: ButtonType) => {
  return `${BUTTON_TYPE_CLASSES[type ?? "primary"]} ${BUTTON_BASE_STYLES}`;
};

export { getButtonClasses, BUTTON_BASE_STYLES, BUTTON_TYPE_CLASSES };

export type { ButtonType };
