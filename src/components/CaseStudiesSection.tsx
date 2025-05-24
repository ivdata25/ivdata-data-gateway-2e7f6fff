
import React from 'react';
import { ArrowRight, Target, Wrench, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">Case <span className="gradient-text">Study</span></h2>
          <p className="text-lg text-gray-600">
            Real results from our data engineering partnership with a scaling e-commerce client.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="card-hover border-gray-200">
            <CardHeader className="text-center pb-8">
              <div className="text-sm text-ivdata-secondary font-medium mb-2">E-commerce Data Infrastructure</div>
              <CardTitle className="text-3xl mb-4">🚀 Scaling and Optimizing an Amazon Scraping System</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Scale Amazon data scraping operations from 50,000 to 1 million products/search terms—without increasing costs—while improving flexibility and operational efficiency.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Challenge Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-ivdata-primary mr-3" />
                    <h3 className="text-xl font-semibold">🧩 The Challenge</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                      <span>High third-party scraping costs limited scale</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                      <span>Redundant processing led to inefficiencies</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                      <span>Inflexible architecture made it difficult to switch providers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                      <span>Manual scaling created performance bottlenecks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                      <span>State tracking in shared DB caused performance issues</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-6 w-6 text-ivdata-secondary mr-3" />
                    <h3 className="text-xl font-semibold">🎯 Our Goals</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-secondary mt-2 flex-shrink-0"></div>
                      <span>Decouple scraping from parsing to reduce redundancy</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-secondary mt-2 flex-shrink-0"></div>
                      <span>Support multiple scraping providers with minimal refactoring</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-secondary mt-2 flex-shrink-0"></div>
                      <span>Enable A/B testing for scrapers and parsers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-secondary mt-2 flex-shrink-0"></div>
                      <span>Scale seamlessly to 1M+ products/search terms</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-ivdata-secondary mt-2 flex-shrink-0"></div>
                      <span>Eliminate need for persistent state tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <Wrench className="h-6 w-6 text-ivdata-primary mr-3" />
                  <h3 className="text-xl font-semibold">🛠 Our Solution</h3>
                </div>
                <p className="text-gray-600 mb-6">We redesigned the system with modularity, scalability, and observability at its core:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-ivdata-primary mb-3">Modular Architecture</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Abstracted scraping and parsing providers into plug-and-play components</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Enabled quick integration of new platforms like Walmart</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-ivdata-primary mb-3">Pipeline Redesign</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Introduced two queues: one for scraping, one for parsing</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Scraping workers upload raw data to S3</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Parsing workers process data from S3 and load into BigQuery</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-ivdata-primary mb-3">Smart Autoscaling</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Scraping pods scaled on I/O usage</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Parsing pods scaled on CPU demand</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Load spread evenly using HPA—no DB state tracking needed</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-ivdata-primary mb-3">Built-in A/B Testing</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Benchmarked providers and parsers without re-scraping</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="h-1 w-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></div>
                        <span>Data-driven insights guided provider selection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <div className="flex items-center mb-6">
                  <BarChart3 className="h-6 w-6 text-ivdata-secondary mr-3" />
                  <h3 className="text-xl font-semibold">📊 The Results</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gradient-to-br from-ivdata-primary/5 to-ivdata-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-ivdata-primary mb-2">20x</div>
                    <div className="text-sm text-gray-600">Scale-up from 50K to 1M+ products</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-ivdata-secondary/5 to-ivdata-secondary/10 rounded-lg">
                    <div className="text-2xl font-bold text-ivdata-secondary mb-2">Zero</div>
                    <div className="text-sm text-gray-600">Increase in scraping costs despite scale</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Frictionless A/B testing enabled</div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-ivdata-primary"></div>
                    <span>Autoscaling reduced idle resources and handled spikes seamlessly</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="h-2 w-2 rounded-full bg-ivdata-primary"></div>
                    <span>Fast provider switching unlocked expansion to other platforms</span>
                  </div>
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="bg-gradient-to-r from-ivdata-primary/5 to-ivdata-secondary/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">💡 Key Takeaways</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                    <span>Separation of concerns dramatically increased reliability</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                    <span>Modular design created long-term flexibility and speed</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-ivdata-primary mt-2 flex-shrink-0"></div>
                    <span>Resource-specific autoscaling optimized both cost and performance</span>
                  </div>
                </div>
              </div>

              {/* Future Ready */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">🌱 Future-Ready</h3>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  The revamped architecture laid the foundation for scraping across other major e-commerce platforms. 
                  With minimal code changes, the client is now positioned for rapid growth, experimentation, and operational excellence.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-ivdata-primary text-ivdata-primary hover:bg-ivdata-primary/10">
            Discuss Your Data Engineering Challenge
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
