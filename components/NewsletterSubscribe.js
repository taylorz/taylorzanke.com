import { useForm } from "react-hook-form";
import Text from "@/components/Text";
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
    <Text>Subscribed!</Text>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="flex flex-col">
          <input
            {...register("email", {
              required: "Please enter a valid email",
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="newsletter-input focus:outline-none bg-transparent w-full"
            placeholder="Email"
            name="email"
          />

          <button className="p-0 flex w-fit focus:outline-none" type="submit">
            <Text link>Subscribe</Text>
          </button>
        </div>
        {errors.email ? (
          <div>
            <Text>{errors.email.message}</Text>
          </div>
        ) : null}
      </div>
    </form>
  );
};
export default NewsletterSubscribe;
