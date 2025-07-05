"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import toast from "react-hot-toast";
import { BaseColors } from "@/lib/themeConfig";
import Button from "./ui/button";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(8, "Phone must be at least 8 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),
  budget: z.string().nonempty("Budget is required"),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    toast.success("Message sent successfully!");
    reset();
  };

  return (
    <ContactFormWrapper className="container">
      <h1>Contact Us</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <FormField>
          <label>Name</label>
          <input {...register("name")} />
          {errors.name && <Error>{errors.name.message}</Error>}
        </FormField>

        <FormField>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <Error>{errors.lastName.message}</Error>}
        </FormField>

        <FormField>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <Error>{errors.email.message}</Error>}
        </FormField>

        <FormField>
          <label>Phone</label>
          <input {...register("phone")} />
          {errors.phone && <Error>{errors.phone.message}</Error>}
        </FormField>

        <FormField>
          <label>Budget</label>
          <input {...register("budget")} />
          {errors.budget && <Error>{errors.budget.message}</Error>}
        </FormField>

        <FormField>
          <label>Description (optional)</label>
          <input {...register("description")} />
        </FormField>

        <div className="submitWrapper">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </ContactFormWrapper>
  );
};

export default ContactForm;

const ContactFormWrapper = styled.form`
  padding: 20px 0;

  h1 {
    text-align: center;
  }

  .form {
    max-width: 992px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .submitWrapper {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: calc(50% - 10px);

  label {
    color: ${BaseColors?.textGrey};
    font-weight: 400;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    padding: 0.75rem;
    border: none;
    border-bottom: 1px solid #eee;
    /* border-radius: 6px; */
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #0070f3;
    }
  }
`;

const Error = styled.span`
  color: red;
  font-size: 0.85rem;
  margin-top: 0.3rem;
`;
