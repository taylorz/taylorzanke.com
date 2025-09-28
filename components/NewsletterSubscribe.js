import { useForm } from "react-hook-form";

const NewsletterSubscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };
  return isSubmitSuccessful ? (
    <p>Subscribed — Thank you!</p>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="flex flex-col">
          <input
            {...register("fullName", {
              required: "Please enter your name",
            })}
            className="focus:outline-none placeholder:text-neutral-400"
            placeholder="Full Name"
            name="fullName"
          />

          <input
            {...register("email", {
              required: "Please enter a valid email",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="focus:outline-none placeholder:text-neutral-400"
            placeholder="Email"
            name="email"
          />

          <button className="p-0 flex w-fit" type="submit">
            Subscribe
          </button>
        </div>
        {errors.email || errors.fullName ? (
          <div className="mt-2">
            {errors.fullName && <p>{errors.fullName.message}</p>}
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        ) : null}
      </div>
    </form>
  );
};
export default NewsletterSubscribe;
