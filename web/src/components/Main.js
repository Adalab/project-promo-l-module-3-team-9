import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import Form from "./Form";
import ls from "../services/LocalStorage";

const Main = () => {
  const [cardCreated, setCardCreated] = useState({
    success: null,
    cardURL: "",
    error: "",
  });
  const localStorageData = ls.get("userData") || {};
  const [data, setData] = useState(
    localStorageData.data || {
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    }
  );

  useEffect(() => {
    ls.set("userData", { data });
  }, [data]);

  const handleInputLifting = (inputValue, inputName) => {
    setData({
      ...data,
      [inputName]: inputValue,
    });
  };
  const handleButtonLifting = (card) => {
    setCardCreated(card);
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
    setCardCreated("");
    localStorage.clear();
  };
  return (
    <main className="mainProfile mainProfile__wrapper">
      <PhotoCard data={data} handleReset={handleReset} />
      <Form
        data={data}
        cardCreated={cardCreated}
        handleInputLifting={handleInputLifting}
        handleButtonLifting={handleButtonLifting}
      />
    </main>
  );
};

export default Main;
