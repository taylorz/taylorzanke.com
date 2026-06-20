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
    <div>
      <Text className="opacity-50">Email</Text>
      <Text>Subscribed</Text>
    </div>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-baseline">
      <Text>&nbsp;</Text>
      <input
        {...register("email", {
          required: "Email required",
          pattern: {
            value:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Invalid email",
          },
        })}
        className="newsletter-input p-0 m-0 focus:outline-none bg-transparent"
        placeholder="email"
        name="email"
      />
      <Text>,&nbsp;</Text>
      <button
        className="p-0 flex w-fit focus:outline-none hover:underline"
        type="submit"
      >
        <Text link>subscribe</Text>
      </button>
      {errors.email ? (
        <Text className="lowercase">&nbsp;({errors.email.message})</Text>
      ) : null}
    </form>
  );
};
export default NewsletterSubscribe;
