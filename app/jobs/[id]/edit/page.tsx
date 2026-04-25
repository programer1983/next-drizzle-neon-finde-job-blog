import { getSingleJob } from "@/actions/jobActions";
import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import EditJobForm from "@/components/features/job/EditJobForm";
import Container from "@/components/ui/Container";

interface EditJobPageProps {
  params: Promise<{ id: string }>;
}
export default async function EditJobPage({ params }: EditJobPageProps) {
  const { id } = await params;

  const { userId } = await auth();

  const job = await getSingleJob(id);

  if (!job) {
    notFound();
  }

  if (job.userId !== userId) {
    redirect("/dashboard");
  }
  return (
    <Container className="py-16 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3">Edit Job Post</h1>
        <p className="text-muted-foreground text-[18px]">
          Update the details of your job listing.
        </p>
      </div>
      <EditJobForm job={job} />
    </Container>
  );
}
