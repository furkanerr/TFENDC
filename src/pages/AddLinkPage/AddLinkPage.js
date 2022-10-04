import React, { useEffect, useState } from "react";
import AddLinkInput from "../../components/Input/AddLinkInput";
import Buttons from "../../components/Buttons/Buttons";
import "../../styles/index.scss";
import Logo from "../../assets/icons/logo.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import { useData } from "../../context/dataContext";
const AddLinkPage = () => {
  const {addToData} = useData();
  const [values, setValues] = useState({
    nameSurname: "",
    country: "",
    city: "",
    email: "",
  });
  const [canSave, setCanSave] = useState(false);
  const regxName =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{4,60}$/;
  const regxEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regxOther =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,40}$/;
  const inputs = [
    {
      id: 1,
      name: "nameSurname",
      type: "text",
      placeholder: "Enter name and surname",
      errorMessage: "only letters, min 4 – max 60 character",
      label: "Name Surname",
      pattern:
        "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$",
      required: true,
      minlength: "4",
      maxlength: "60",
    },
    {
      id: 2,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "only letters, min 2 – max 40 character",
      label: "Country",
      required: true,
      pattern:
        "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$",
      minlength: "2",
      maxlength: "40",
    },
    {
      id: 3,
      name: "city",
      type: "text",
      placeholder: "City",
      label: "City",
      errorMessage: "(only letters, min 2 – max 40 character)",
      required: true,
      pattern:
        "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$",
      minlength: "2",
      maxlength: "40",
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Enter a e-mail (abc@xyz.com)",
      errorMessage: "Please enter valid email address!",
      label: "Email",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    addToData(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (
      regxName.test(values.nameSurname) == false ||
      regxOther.test(values.country) == false ||
      regxOther.test(values.city) == false ||
      regxEmail.test(values.email) == false
    ) {
      setCanSave(false);
    } else {
      setCanSave(true);
    }
  }, [values]);

  return (
    <div className="add-link-page">
      <div className="header">
        <Link to="/">
          <div>
            <img src={Logo} width="150" />
          </div>
        </Link>
        <Link to="/">
          <div className="go-to-home">
            <span>Return to List Page</span>
          </div>
        </Link>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <AddLinkInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Buttons type={"add"} isDisabled={!canSave}>
            Add
          </Buttons>
        </form>
      </div>
    </div>
  );
};

export default AddLinkPage;
