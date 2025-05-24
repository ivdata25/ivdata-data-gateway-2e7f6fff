
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp, Database, Shield, DollarSign } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    icon: Database,
    title: "Scraping Pipeline Redesign",
    summary: "Scaled from 50K to 1M products while reducing costs",
    outcome: "20x scale increase, zero cost increase",
    challenge: "High third-party scraping costs and inflexible architecture limited scale to 50,000 products.",
    solution: "Redesigned with modular architecture, separated scraping from parsing, implemented smart autoscaling with Kubernetes HPA, and built A/B testing capabilities.",
    results: [
      "Scaled from 50K to 1M+ products/search terms",
      "Zero increase in scraping costs despite 20x scale",
      "Enabled frictionless A/B testing of providers",
      "Improved system reliability and maintainability"
    ],
    lessons: [
      "Separation of concerns dramatically increases reliability",
      "Modular design creates long-term flexibility",
      "Resource-specific autoscaling optimizes both cost and performance"
    ]
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "AWS Resource Inventory Migration",
    summary: "Real-time sync using DynamoDB + PostgreSQL",
    outcome: "99.9% sync accuracy, 50% faster queries",
    challenge: "Legacy system couldn't handle real-time AWS resource changes across multiple accounts, causing data inconsistencies.",
    solution: "Built event-driven architecture using DynamoDB for high-write throughput and PostgreSQL for complex queries, with Lambda-based sync processes.",
    results: [
      "Achieved 99.9% data consistency across environments",
      "Reduced query response times by 50%",
      "Enabled real-time alerting on resource changes",
      "Supported 10x increase in monitored resources"
    ],
    lessons: [
      "Hybrid database approach maximizes strengths of each system",
      "Event-driven architecture scales better than batch processing",
      "Real-time sync is critical for cloud resource management"
    ]
  },
  {
    id: 3,
    icon: Shield,
    title: "Staging Account Isolation for SOC 2",
    summary: "Terraform + CloudWatch for compliance",
    outcome: "SOC 2 compliance achieved in 3 months",
    challenge: "Startup needed SOC 2 compliance but shared staging and production environments violated security requirements.",
    solution: "Implemented infrastructure-as-code with Terraform, created isolated staging accounts, and built comprehensive monitoring with CloudWatch and custom dashboards.",
    results: [
      "Achieved SOC 2 Type II certification",
      "Reduced deployment risks through environment isolation",
      "Automated compliance monitoring and reporting",
      "Improved development team confidence in releases"
    ],
    lessons: [
      "Infrastructure-as-code is essential for compliance at scale",
      "Environment isolation prevents costly production incidents",
      "Automated monitoring reduces compliance overhead"
    ]
  },
  {
    id: 4,
    icon: DollarSign,
    title: "Migrating Lambda to ECS",
    summary: "Cost down 67%, improved observability & scale",
    outcome: "67% cost reduction, 10x better performance",
    challenge: "Lambda cold starts and 15-minute timeout limits were causing data processing failures and high costs for long-running workloads.",
    solution: "Migrated to ECS Fargate with spot instances, implemented proper resource allocation, and added comprehensive monitoring with Prometheus and Grafana.",
    results: [
      "Reduced monthly compute costs by 67%",
      "Eliminated timeout-related processing failures",
      "Improved processing speed by 10x for large datasets",
      "Enhanced observability with detailed metrics and logs"
    ],
    lessons: [
      "Right-sizing compute resources saves significant costs",
      "Container orchestration provides better control than serverless for data workloads",
      "Proper monitoring is crucial for optimization opportunities"
    ]
  }
];

const CaseStudiesSection = () => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);

  const toggleCase = (id: number) => {
    setExpandedCase(expandedCase === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Real Results from Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-xl text-slate-600">
            See how we've helped startups scale their data infrastructure, reduce costs, and improve reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Card 
              key={study.id} 
              className="cursor-pointer hover:shadow-lg transition-all duration-300 border-slate-200 bg-white"
              onClick={() => toggleCase(study.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <study.icon className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                  {expandedCase === study.id ? (
                    <ChevronUp className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                  )}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
                  <p className="text-slate-600">{study.summary}</p>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-lg">
                    <p className="text-sm font-medium text-green-700">Outcome: {study.outcome}</p>
                  </div>
                </div>

                {expandedCase === study.id && (
                  <div className="mt-6 space-y-6 border-t border-slate-200 pt-6 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">The Challenge</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Our Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <div className="h-1.5 w-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Lessons</h4>
                      <ul className="space-y-1">
                        {study.lessons.map((lesson, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
