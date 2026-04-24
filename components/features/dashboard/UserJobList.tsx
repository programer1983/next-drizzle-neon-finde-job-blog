import { getMyJobs } from "@/actions/jobActions";
import { Job } from "@/lib/schema";
import Link from "next/link";
import JobCard from "../job/JobCard";

export default async function UserJobList() {
  const myJobs = await getMyJobs();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">My Jobs</h2>

      {myJobs.length === 0 ? (
        <div className="rounded-lg border p-6 text-muted-foreground text-center">
          <div>You haven&apos;t posted any job yet.</div>
          <Link className="text-primary underline" href="/post-job">
            {" "}
            Post You First Post
          </Link>
        </div>
      ) : (
        <div className="grid gap-6">
          {myJobs.map((job: Job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
