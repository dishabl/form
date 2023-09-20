import React from "react";
import { Radio } from "antd";
import { useForm, Controller } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    formState: { errors },
    watch,
    control,
    handleSubmit,
  } = useForm();

  const password = React.useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => {
    alert(JSON.stringify(data) + ": Успешно зарегистрировано");
  };
  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Имя:
          <input
            {...register("firstName", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.firstName && <p>{errors.firstName.message || "Error!"}</p>}
        </div>
        <label>
          Email:
          <input
            {...register("email", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.email && <p>{errors.email.message || "Error!"}</p>}
        </div>
        <label>
          Пароль:
          <input
            {...register("password", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^(?=.*[A-Z]).{6,}$/,
                message: "Введите корректный пароль",
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.password && <p>{errors.password.message || "Error!"}</p>}
        </div>
        <label>
          Подтверждение пароля:
          <input
            {...register("confirm", {
              required: "Поле обязательно для заполнения",
              validate: (value) =>
                value === watch("password") || "Пароли не совпадают",
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.confirm && <p>{errors.confirm.message || "Error!"}</p>}
        </div>
        <label>
          Дата рождения:
          <input
            {...register("birthday", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^\d{2}\.\d{2}\.\d{4}$/,
                message: "Некорректный формат даты рождения",
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.birthday && <p>{errors.birthday.message || "Error!"}</p>}
        </div>
        <div>
          <label>Пол:</label>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value="male" style={{ color: "white" }}>
                  Мужской
                </Radio>
                <Radio value="female" style={{ color: "white" }}>
                  Женский
                </Radio>
              </Radio.Group>
            )}
          />
        </div>

        <label>
          Номер телефона:
          <input
            {...register("phone", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^(80|\+375)\d{2}[1-9]\d{6}$/,
                message: "Некорректный формат номера телефона",
              },
            })}
          />
        </label>
        <div style={{ height: 20 }}>
          {errors.phone && <p>{errors.phone.message || "Error!"}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default RegistrationForm;
