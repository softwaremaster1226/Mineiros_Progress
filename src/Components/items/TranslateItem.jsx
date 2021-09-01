// import { useTranslation } from "react-i18next";

// const TranslateItem = () => {
//   const { i18n } = useTranslation();

//   function changeLanguage(e) {
//     i18n.changeLanguage(e.target.value);
//   }

//   return (
//     <div className="footer">
//       <button onClick={changeLanguage} value="en">
//         English
//       </button>
//       <button onClick={changeLanguage} value="es">
//         Español
//       </button>
//     </div>
//   );
// };

// export default TranslateItem;

import { useState } from "react";
import { useTranslation } from "react-i18next";
const TranslateItem = () => {
  const [language, setLanguage] = useState("es");
  const chooseLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const { i18n } = useTranslation();

  return (
    <div>
      <label>
        Select Language:
        <select value={language.value} onChange={chooseLanguage}>
          <option value="en">English</option>
          <option value="es">Spain</option>
        </select>
      </label>
    </div>
  );
};
export default TranslateItem;
