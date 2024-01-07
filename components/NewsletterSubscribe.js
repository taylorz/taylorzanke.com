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
    <p>Subscribed!</p>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[320px]">
        <p className="text-rose-500">Newsletter</p>
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            <p>Full Name</p>
            <input
              {...register("fullName", {
                required: "Please enter your full name",
              })}
              name="fullName"
              className="border-b border-black focus:outline-none rounded-none"
            />
          </div>
          <div className="grid grid-cols-2">
            <p>Email</p>

            <input
              {...register("email", {
                required: "Please enter a valid email",
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              name="email"
              className="border-b border-black focus:outline-none rounded-none"
            />
          </div>

          <button className="p-0 flex w-fit" type="submit">
            <span className="hover:animate-blink">Subscribe</span>
          </button>
        </div>
        {errors.email || errors.fullName ? (
          <div className="mt-5">
            {errors.fullName && <p>{errors.fullName.message}</p>}
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        ) : null}
      </div>
    </form>
  );
};
export default NewsletterSubscribe;
