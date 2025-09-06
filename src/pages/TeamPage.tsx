import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Users } from "lucide-react";

export const TeamPage = () => {
  const teamSections = [
    {
      title: "RESEARCH & PPT",
      members: [
        { name: "JASIM", role: "Research Lead", contact: "jasim@rockfall.org" },
        { name: "JASIM", role: "Geological Analyst", contact: "jasim@rockfall.org" },
        { name: "TAMMANA", role: "Geological Analyst", contact: "jasim@rockfall.org" }
      ]
    },
    {
      title: "BACKEND", 
      members: [
        { name: "PUSHPARAJ", role: "Lead Developer", contact: "jasim@rockfall.org" },
        { name: "TANISHR", role: "Database Engineer", contact: "jasim@rockfall.org" },
        { name: "TANISHQ", role: "UI/UX Designer", contact: "jasim@rockfall.org" }
      ]
    },
    {
      title: "FRONTEND",
      members: [
        { name: "NITYA", role: "UI/UX Designer", contact: "jasim@rockfall.org" },
        { name: "HARSH", role: "Frontend Developer", contact: "jasim@rockfall.org" }
      ]
    }
  ];

  const collaborationTasks = [
    { task: "Data Ingestion Pipeline", progress: 90 },
    { task: "Forecast Model Refinement", progress: 65 },
    { task: "Mobile Model Development", progress: 40 }
  ];

  return (
    <div className="flex-1 p-6 space-y-6 overflow-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Team Members</h1>
        <Badge variant="secondary" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          8 Team Members
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Team Sections */}
        <div className="lg:col-span-2 space-y-6">
          {teamSections.map((section, sectionIndex) => (
            <Card key={sectionIndex} className="p-6 bg-card/50 backdrop-blur-sm border border-primary/20">
              <h2 className="text-lg font-semibold text-primary mb-4">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {section.members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="p-4 bg-muted/50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <AlertTriangle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      contact: {member.contact}
                    </p>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Collaboration Status */}
        <div className="space-y-6">
          <Card className="p-6 bg-card/50 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">Team Collaboration Status</h2>
            <div className="space-y-4">
              {collaborationTasks.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">Task: {item.task}</span>
                    <span className="text-muted-foreground">{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-foreground font-medium">Current Focus: System Optimization</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};