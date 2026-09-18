import {
  useState,
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
} from "react";
import { useCart } from "@/src/context/CartContext";

export default function PaymentForm() {
  const { emptyCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    paymentMethod: "credit_card",
    termsAccepted: false,
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
  });

  const isNameValid = form.name.trim().length >= 5;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  const isSubmitDisabled = !isNameValid || !isEmailValid || !form.termsAccepted;
  const showNameError = touched.name && !isNameValid;
  const showEmailError = touched.email && !isEmailValid;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = event.target;

    if (type === "checkbox") {
      const checked = (event.target as HTMLInputElement).checked;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: checked,
      }));
      return;
    }

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name } = event.target;

    if (name === "name" || name === "email") {
      setTouched((prevTouched) => ({
        ...prevTouched,
        [name]: true,
      }));
    }
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitDisabled) {
      return;
    }
    emptyCart();
    alert("Pago realizado con éxito!");
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="John Doe"
          />
          {showNameError && (
            <p className="mt-1 text-sm text-red-600">
              El nombre debe tener al menos 5 caracteres.
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
            placeholder="john.doe@example.com"
          />
          {showEmailError && (
            <p className="mt-1 text-sm text-red-600">
              Debe ingresar un correo electrónico válido.
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium text-gray-700"
          >
            Método de pago
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="text-black mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="credit_card">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            <option value="bank_transfer">Transferencia Bancaria</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={form.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4 rounded border-gray-300 text-red-900 focus:ring-red-500"
          />
          <label
            htmlFor="termsAccepted"
            className="block text-sm font-medium text-gray-700"
          >
            Acepta términos y condiciones
          </label>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition disabled:cursor-not-allowed disabled:bg-red-300 cursor-pointer"
          >
            Pagar
          </button>
        </div>
      </form>
    </div>
  );
}
