import React, { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  useEffect(() => {
    const doTranslation = async () => {
      const res = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(res.data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, text]);

  return (
    <div>
      <hi className="ui header">{translated}</hi>
    </div>
  );
};

export default Convert;
