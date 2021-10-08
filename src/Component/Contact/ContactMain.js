import React from "react";
import style from "../../Styles/ContactMain.module.scss";
import { useForm } from "react-hook-form";
const ContactMain = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className={style.contact}>
      <div className={`${style.contactInner} text-center`}>
          <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control" placeholder="your name"{...register("firstName", { required: true, minLength: 5 })} />
          {errors.firstName?.type === "required" && "First name is required"}
          {errors.firstName?.type === "minLength" &&
            "at link fill up 5 character"}

          <input className="form-control" placeholder="your email"
            {...register("email", {
              required: true,
              minLength: 5,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          {errors.email?.type === "required" && "email is required"}
          {errors.email?.type === "pattern" && "please give a valid email"}
          <textarea className="form-control" placeholder="your message"
            {...register("textarea", { required: true, minLength: 10 })}
          ></textarea>
          {errors.textarea?.type === "required" && "textarea is required"}
          {errors.textarea?.type === "minLength" &&
            "please give a valid textarea"}
          <input className="form-control" type="submit" />
        </form>
        <p>Sending to <a href="mailto:rajuahmmad0187@gmail.com">rajuahmmad0187@gmail.com</a></p>
      </div>
    </div>
  );
};

export default ContactMain;
