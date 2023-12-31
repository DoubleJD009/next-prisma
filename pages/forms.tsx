import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Forms() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <form>
      <input
        {...register("username")}
        type="text"
        placeholder="Username"
        required
      />
      <input {...register("email")} type="email" placeholder="Email" required />
      <input
        {...register("password")}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
