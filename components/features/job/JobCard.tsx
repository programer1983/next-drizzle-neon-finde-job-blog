import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Job } from "@/lib/schema";
import { Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import JobActionBtn from "./JobActionBtn";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="relative">
      <CardContent>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between gap-x-[10px]">
              <Link href={`/jobs/${job.id}`}>
                <h3 className="font-semibold text-lg leading-tight">
                  {job.title}
                </h3>
              </Link>
              <JobActionBtn jobId={job.id} ownerId={job.userId} />
            </div>
            <Link href={`/jobs/${job.id}`}>
              <p className="text-sm text-muted-foreground mt-1">
                {job.company}
              </p>
            </Link>
          </div>
          <Link href={`/jobs/${job.id}`}>
            <div className="flex flex-wrap text-muted-foreground items-center gap-3 text-sm mb-[20px]">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4" />
                <span>{job.jobType}</span>
              </div>
              {job.salary && (
                <span className="font-medium text-foreground">
                  {job.salary}
                </span>
              )}
            </div>
            <div className="flex items-center justify-between">
              <Badge variant={"secondary"}>{job.experienceLevel}</Badge>
              <span className="text-sm text-muted-foreground">
                {new Date(job.postedAt).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
