import { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  AlertCircle,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Сбрасываем ошибку при изменении любого поля
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Проверка обязательных полей
      if (
        !formData.name ||
        !formData.email ||
        !formData.phone ||
        !formData.message
      ) {
        throw new Error("Please fill in all fields");
      }

      // Валидация email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email");
      }

      // Валидация телефона
      const phoneRegex = /^\+?[0-9]{10,14}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        throw new Error("Please enter a valid phone number.");
      }

      // Имитация отправки на сервер
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Очистка формы после успешной отправки
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Message sent successfully! We will contact you shortly.");
    } catch (error) {
      setError(
        error.message ||
          "There was an error sending your message. Please try again later."
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__noise"></div>
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__label">Start a Conversation</span>
          <h2 className="contact__title">Looking for Answers</h2>
          <p className="contact__description">
            We are always ready to help you with choosing a console and answer
            any questions about the R36S console
          </p>
        </div>

        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit}>
            {error && (
              <div className="form__error">
                <AlertCircle className="form__error-icon" size={16} />
                <span>{error}</span>
              </div>
            )}

            <div className="form__group">
              <label className="form__label" htmlFor="name">
                <MessageCircle size={16} className="form__icon" />
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form__input"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="email">
                <Mail size={16} className="form__icon" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form__input"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="phone">
                <PhoneCall size={16} className="form__icon" />
                Telephone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form__input"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
                disabled={isSubmitting}
                required
              />
            </div>

            <div className="form__group">
              <label className="form__label" htmlFor="message">
                <MessageCircle size={16} className="form__icon" />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="form__textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                disabled={isSubmitting}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="form__button"
              disabled={isSubmitting}
            >
              <Send size={20} className="button__icon" />
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </form>

          <div className="contact__info">
            <div className="info__card">
              <PhoneCall className="info__icon" />
              <h3 className="info__title">Telephone</h3>
              <p className="info__text">+7 (800) 555-35-35</p>
              <p className="info__text">Mon-Fri: 9:00 - 18:00</p>
            </div>

            <div className="info__card">
              <Mail className="info__icon" />
              <h3 className="info__title">Email</h3>
              <p className="info__text">support@R36S.com</p>
              <p className="info__text">sales@R36S.com</p>
            </div>

            <div className="info__card">
              <MapPin className="info__icon" />
              <h3 className="info__title">Address</h3>
              <p className="info__text">Zhejiang, China.</p>
              <p className="info__text">We work all over the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
