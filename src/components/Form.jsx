import { useState } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const [formStep, setFormStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const onNext = async () => {
    const isValid = await trigger(["client", "name", "tel", "email"]);
    if (isValid) {
      setFormStep(2);
    }
  };

  const onPrevious = () => {
    setFormStep(1);
  };

  return (
    <form
      name="contactForm"
      id="contactForm"
      className="flex flex-col items-center gap-5 bg-white p-4 md:px-8 lg:px-16 lg:py-8 xl:flex-1 xl:rounded-r xl:border xl:border-solid xl:border-indigo-900 xl:p-8"
      action=""
      method="get"
      onSubmit={handleSubmit(onSubmit)}
    >
      {formStep === 1 && (
        <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
          <h4 className="text-pretty font-semibold text-indigo-900 lg:text-lg">
            Ingrese aquí la información del cliente
          </h4>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="client"
            >
              Cliente/Institución:
            </label>
            <input
              {...register("client", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres.",
                },
                maxLength: {
                  value: 40,
                  message: "El nombre no puede tener más de 40 caracteres.",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Instituto Médico"
              type="text"
              form="contactForm"
              minLength={3}
              maxLength={40}
              id="client"
              required
            />
            {errors.client && (
              <span className="text-xs text-red-600">
                {errors.client.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="name"
            >
              Persona de contacto:
            </label>
            <input
              {...register("name", {
                required: "Este campo es requerido.",
                validate: (value) =>
                  !/\d/.test(value) || "Este campo no puede contener números.",
                minLength: {
                  value: 6,
                  message: "El nombre debe tener al menos 6 caracteres.",
                },
                maxLength: {
                  value: 24,
                  message: "El nombre no puede tener más de 24 caracteres.",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Juan Pérez"
              type="text"
              form="contactForm"
              id="name"
              minLength={6}
              maxLength={24}
              required
            />
            {errors.name && (
              <span className="text-xs text-red-600">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="tel"
            >
              Teléfono:
            </label>
            <input
              {...register("tel", {
                required: "Este campo es requerido.",
                validate: (value) =>
                  /^\d+$/.test(value) || "Solo se permiten números.",
                minLength: {
                  value: 10,
                  message:
                    "El número debe tener al menos 10 dígitos. (Ej: 1153334444)",
                },
                maxLength: {
                  value: 14,
                  message:
                    "El número no puede tener más de 14 dígitos. (Ej: +5491153334444)",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="+5491153334444"
              minLength={10}
              maxLength={14}
              type="tel"
              form="contactForm"
              id="tel"
              required
            />
            {errors.tel && (
              <span className="text-xs text-red-600">{errors.tel.message}</span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              {...register("email", {
                required: "Este campo es requerido.",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Por favor ingrese un email válido.",
                },
                minLength: {
                  value: 6,
                  message: "El email debe tener al menos 6 caracteres.",
                },
                maxLength: {
                  value: 40,
                  message: "El email no puede tener más de 40 caracteres.",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="instituto.med@mail.com"
              type="email"
              form="contactForm"
              id="email"
              minLength={6}
              maxLength={40}
              required
            />
            {errors.email && (
              <span className="text-xs text-red-600">
                {errors.email.message}
              </span>
            )}
          </div>
          <button
            className="mt-2 w-full rounded bg-indigo-900 p-4 font-semibold text-white hover:bg-indigo-800"
            type="button"
            onPointerDown={onNext}
          >
            Siguiente
          </button>
        </div>
      )}
      {formStep === 2 && (
        <div className="flex w-full flex-col items-center gap-4 lg:gap-6">
          <h4 className="text-pretty font-semibold text-indigo-900 lg:text-lg">
            Ingrese aquí la información del producto
          </h4>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="model"
            >
              Modelo:
            </label>
            <input
              {...register("model", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 3,
                  message: "El modelo debe tener al menos 3 caracteres.",
                },
                maxLength: {
                  value: 24,
                  message: "El modelo no puede tener más de 24 caracteres.",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Instituto Médico"
              type="text"
              form="contactForm"
              minLength={3}
              maxLength={24}
              id="model"
              required
            />
            {errors.model && (
              <span className="text-xs text-red-600">
                {errors.model.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="serialNumber"
            >
              N° de Serie:
            </label>
            <input
              {...register("serialNumber", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 3,
                  message: "El N° de serie debe tener al menos 3 caracteres.",
                },
                maxLength: {
                  value: 24,
                  message:
                    "El N° de serie no puede tener más de 24 caracteres.",
                },
              })}
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Instituto Médico"
              type="text"
              form="contactForm"
              minLength={3}
              maxLength={24}
              id="serialNumber"
              required
            />
            {errors.serialNumber && (
              <span className="text-xs text-red-600">
                {errors.serialNumber.message}
              </span>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900 lg:text-base"
              htmlFor="description"
            >
              Descripción del Problema:
            </label>
            <textarea
              {...register("description", {
                required: "Este campo es requerido.",
                minLength: {
                  value: 9,
                  message: "La descripción debe tener al menos 9 caracteres.",
                },
                maxLength: {
                  value: 240,
                  message:
                    "La descripción no puede tener más de 240 caracteres.",
                },
              })}
              className="min-h-24 rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Instituto Médico"
              form="contactForm"
              minLength={9}
              maxLength={240}
              id="description"
              required
            />
            {errors.description && (
              <span className="text-xs text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>
          <button
            className="mt-2 w-full rounded bg-indigo-900 p-4 font-semibold text-white hover:bg-indigo-800"
            type="button"
            onPointerDown={onPrevious}
          >
            Volver
          </button>
          <button
            type="submit"
            form="contactForm"
            className="w-full rounded bg-indigo-900 p-4 font-semibold text-white hover:bg-indigo-800"
          >
            Enviar
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
