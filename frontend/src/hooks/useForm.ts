import { useState, useCallback } from "react";
import type { FormStatus } from "@/types";

interface UseFormOptions<T extends Record<string, string>> {
  initialValues: T;
  validate?:     (values: T) => Partial<Record<keyof T, string>>;
  onSubmit:      (values: T) => Promise<void>;
}

interface UseFormReturn<T extends Record<string, string>> {
  values:       T;
  errors:       Partial<Record<keyof T, string>>;
  status:       FormStatus;
  focused:      string | null;
  setFocused:   (field: string | null) => void;
  handleChange: (field: keyof T, value: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  reset:        () => void;
}

/**
 * Generic controlled form hook with validation and submission.
 *
 * Usage:
 *   const { values, errors, status, handleChange, handleSubmit, reset } =
 *     useForm({
 *       initialValues: { name: "", email: "", message: "" },
 *       validate: (v) => {
 *         const errs: Partial<...> = {};
 *         if (!v.name) errs.name = "Name is required";
 *         return errs;
 *       },
 *       onSubmit: async (values) => {
 *         await fetch("/api/contact", { ... });
 *       },
 *     });
 */
export function useForm<T extends Record<string, string>>({
  initialValues,
  validate,
  onSubmit,
}: UseFormOptions<T>): UseFormReturn<T> {
  const [values,  setValues]  = useState<T>(initialValues);
  const [errors,  setErrors]  = useState<Partial<Record<keyof T, string>>>({});
  const [status,  setStatus]  = useState<FormStatus>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = useCallback(
    (field: keyof T, value: string) => {
      setValues((prev) => ({ ...prev, [field]: value }));
      // Clear the error for this field as the user types
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Run validation if provided
      if (validate) {
        const errs = validate(values);
        if (Object.keys(errs).length > 0) {
          setErrors(errs);
          return;
        }
      }

      setStatus("submitting");
      try {
        await onSubmit(values);
        setStatus("success");
      } catch {
        setStatus("error");
      }
    },
    [values, validate, onSubmit]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setStatus("idle");
    setFocused(null);
  }, [initialValues]);

  return {
    values,
    errors,
    status,
    focused,
    setFocused,
    handleChange,
    handleSubmit,
    reset,
  };
}