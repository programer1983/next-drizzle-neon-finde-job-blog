"use client";

import { Controller, useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { jobFormSchema, JobFormValues } from "@/lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createJob } from "@/actions/jobActions";
import { toast } from "sonner";

export default function PostJobForm() {
  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobFormSchema),
    defaultValues: {
      title: "",
      company: "",
      jobType: "Full-time",
      location: "",
      experienceLevel: "Senior",
      salary: "",
      description: "",
      applicationUrl: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: JobFormValues) {
    try {
      const response = await createJob(data);
      if (response.success) {
        toast.success("Tor job has been posted successfully");
        form.reset();
      } else {
        toast.error(response.error || "An error occurred.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An unexpected error occurred. Please tray aggain");
    }
  }

  return (
    <Card>
      <CardContent>
        <form id="post-job-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="title"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="job-title">Job Title</FieldLabel>
                  <Input
                    {...field}
                    id="job-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="eq. Senior Frontend Engineer"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="company-name">Company Name</FieldLabel>
                  <Input
                    {...field}
                    id="company-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="eq. TechCorp"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <div className="flex flex-col md:flex-row">
              <Controller
                name="jobType"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Job Type</FieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        align="start"
                        sideOffset={4}
                      >
                        <SelectItem value="Full-time">Full Time</SelectItem>
                        <SelectItem value="Part-time">Part time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="experienceLevel"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Experience Level</FieldLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        align="start"
                        sideOffset={4}
                      >
                        <SelectItem value="Entry Level">Entry Level</SelectItem>
                        <SelectItem value="Mid-Level">Mid Level</SelectItem>
                        <SelectItem value="Senior">Senior</SelectItem>
                        <SelectItem value="Manager">Manager</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <Controller
                name="location"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="location">Location</FieldLabel>
                    <Input
                      {...field}
                      id="location"
                      aria-invalid={fieldState.invalid}
                      placeholder="eq. Mumbai, India"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="salary"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="salary-range">
                      Salary Range (Optional)
                    </FieldLabel>
                    <Input
                      {...field}
                      id="salary-range"
                      aria-invalid={fieldState.invalid}
                      placeholder="eq.  $100k - $150k"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="description"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="job-description">Description</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      id="job-description"
                      placeholder="Describe the role, responsibilities, qualifications, and benefits..."
                      rows={8}
                      className="min-h-24 resize-none"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/50 characters
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  <FieldDescription>
                    Provide a comprehensine description of the position.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="applicationUrl"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="application-url">
                    Application Url
                  </FieldLabel>
                  <Input
                    {...field}
                    id="application-url"
                    aria-invalid={fieldState.invalid}
                    placeholder="https://example.com/apply"
                  />
                  <FieldDescription>
                    Where should candidates apply for this position?.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex items-center gap-4 mx-4 rounded-xl">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>
        <Button disabled={isSubmitting} type="submit" form="post-job-form">
          {isSubmitting ? "Publishing..." : "Publish Job"}
        </Button>
      </CardFooter>
    </Card>
  );
}
