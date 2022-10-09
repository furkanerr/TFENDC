import React, { useEffect, useState } from "react";
import AddLinkInput from "../../components/Input/AddLinkInput";
import Buttons from "../../components/Buttons/Buttons";
import "../../styles/index.scss";
import Logo from "../../assets/icons/logo.svg";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";
import { useData } from "../../context/dataContext";
import Toast from "../../components/Toast/Toast";
const AddLinkPage = () => {
  const {addToData} = useData();
  const [values, setValues] = useState({
    nameSurname: "",
    country: "",
    city: "",
    email: "",
    date: "",
    compony: "",
  });
  const [errors, setErrors] = useState({});

  const  [isSubmitted, setIsSubmitted] = useState(false);
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
      name: "compony",
      type: "text",
      placeholder: "Compony",
      errorMessage: "only letters, min 2 – max 40 character",
      label: "Compony",
      required: true,
      pattern:
        "^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$",
      minlength: "2",
      maxlength: "40",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Enter a e-mail (abc@xyz.com)",
      errorMessage: "Please enter valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "date",
      type: "date",
      placeholder: "Date",
      errorMessage: "Please enter valid date",
      label: "Date",
      required: true,
    },
    {
      id: 5,
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
      id: 6,
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
    
    
  ];
// inputs dizisi ile inputları mapleyerek AddLinkInput komponenti oluşturmak daha kolay olurdu. Ama toastify için şuanki çözüm daha kolay. Ayrıca bu şekilde 
// patternsler dışa açık olduğu için pek güvenli değil. validasyonları js ile yapmak daha mantıklı.
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitted(true);
  };
 
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmitted) {
      addToData(
        [
         values.nameSurname,
          values.compony,
          values.email,
          values.date.split("-").reverse().join("/"),
          values.country,
          values.city,
      ]
       )
    }
  }, [errors]);
  const validate = (values) =>{
      const errors = {}
      if(!values.nameSurname){
          errors.nameSurname = "Name is required"
      }else if(!regxName.test(values.nameSurname)){
          errors.nameSurname = "only letters, min 4 – max 60 character"
      }
      if(!values.compony){
          errors.compony = "Compony is required"
      } else if(!regxOther.test(values.compony)){
          errors.compony = "only letters, min 4 – max 60 character"
      } 
      if(!values.email){
          errors.email = "Email is required"
      } else if(!regxEmail.test(values.email)){
          errors.email = "Email is invalid"
      }
      if(!values.date){
          errors.date = "Date is required"
      }   

      if(!values.country){
          errors.country = "Country is required"
      } else if(!regxOther.test(values.country)){
          errors.country = "only letters, min 2 – max 40 character"
      }

      if(!values.city){ 
          errors.city = "City is required"
      } else if(!regxOther.test(values.city)){
          errors.city = "only letters, min 2 – max 40 character"
      }
      return errors
  }
  return (
    <div className="add-link-page">
      <div className="Toast-container">
        {
          Object.keys(errors).length === 0 && isSubmitted && <Toast message="Link added successfully" type='success' setIsSubmitted={setIsSubmitted} />
         
        }
        {
          Object.keys(errors).length !== 0 && isSubmitted && Object.values(errors).map((error, index) => <Toast key={index} message={error} type='error' setIsSubmitted={setIsSubmitted}/>)
        }
      </div>
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
          {/* {inputs.map((input) => (
            <AddLinkInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))} */}
          <label htmlFor="nameSurname">Name Surname</label>
          <input
            type="text"
            name="nameSurname"
            id="nameSurname"
            placeholder="Name Surname"
            value={values.nameSurname}
            onChange={onChange}
          />
          {errors.nameSurname && <p className="error">{errors.nameSurname}</p>}
          <label htmlFor="compony">Compony</label>
          <input
            type="text"
            name="compony"
            id="compony"
            placeholder="Compony"
            value={values.compony}
            onChange={onChange}
          />
          {errors.compony && <p className="error">{errors.compony}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter a e-mail"
            value={values.email}
            onChange={onChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Date"
            value={values.date}
            onChange={onChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            value={values.country}
            onChange={onChange}
          />
          {errors.country && <p className="error">{errors.country}</p>}
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city" 
            placeholder="City"
            value={values.city}
            onChange={onChange}
          />
          {errors.city && <p className="error">{errors.city}</p>}
          <Buttons type={"add"}>
            Add
          </Buttons>
        </form>
      </div>
    </div>
  );
};

export default AddLinkPage;
