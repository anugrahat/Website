"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Award, Microscope, Code } from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-foreground">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-09%20at%2010.09.44_7d37e36a.jpg-QIgZwiwApbLM2vdblt6QnHpIX1YnP9.jpeg"
                alt="Anugraha T K"
                fill
                className="object-cover object-[center_35%]"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold">Anugraha T K</h1>
              <p className="text-xl md:text-2xl mt-2">PhD Candidate Specializing in Computational Biophysics</p>
              <p className="text-lg mt-1">Proficient in Enhanced Sampling Methods</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2"
                  onClick={() =>
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=anu.thyagatur@gmail.com", "_blank")
                  }
                >
                  <Mail size={16} />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="text-muted-foreground" size={18} />
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=anu.thyagatur@gmail.com"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      anu.thyagatur@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-muted-foreground" size={18} />
                    <span>775-200-2523</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      className="text-[#0A66C2]"
                      fill="currentColor"
                    >
                      <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
                    </svg>
                    <a href="https://www.linkedin.com/in/anugraha-thyagatur-54335811a/" className="hover:underline">
                      anugraha-thyagatur-54335811a
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 98 96"
                      width="18"
                      height="18"
                      className="text-muted-foreground"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      />
                    </svg>
                    <a href="https://github.com/anugrahat" className="hover:underline">
                      anugrahat
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-muted-foreground" size={18} />
                    <span>Davis, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <a href="https://scholar.google.com/citations?user=3V44h54AAAAJ" className="hover:underline">
                      Google Scholar Profile
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Technical Skills</h2>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Programming</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>C</Badge>
                    <Badge>Shell Scripting</Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Scientific Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>NumPy</Badge>
                    <Badge>SciPy</Badge>
                    <Badge>Pandas</Badge>
                    <Badge>JAX</Badge>
                    <Badge>MDTraj</Badge>
                    <Badge>MDAnalysis</Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Simulation Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AMBER</Badge>
                    <Badge>OpenMM</Badge>
                    <Badge>GaMD</Badge>
                    <Badge>Weighted Ensemble</Badge>
                    <Badge>Umbrella Sampling</Badge>
                    <Badge>Parallelizable GaMD</Badge>
                    <Badge>GROMACS</Badge>
                    <Badge>LAMMPS</Badge>
                    <Badge>Quantum ESPRESSO</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Atomistic Simulations</Badge>
                    <Badge>Free Energy Calculations</Badge>
                    <Badge>Binding Kinetics</Badge>
                    <Badge>Enhanced Sampling Methods</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Education</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="font-semibold">Ph.D. in Chemical and Materials Science Engineering</h3>
                    </div>
                    <p className="text-muted-foreground">University of California, Davis</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      <span>2021 - Present</span>
                    </div>
                    <p className="text-sm mt-1">GPA: 3.64/4.0</p>
                    <div className="mt-2">
                      <h4 className="text-sm font-medium">Relevant Coursework:</h4>
                      <p className="text-sm text-muted-foreground">
                        Electronic Structure Theory and Applications, Statistical Thermodynamics, Electron Microscopy,
                        Intro to Biomaterials, Phase Transformation and Kinetics, Python
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="font-semibold">M.S. in Materials Science and Engineering</h3>
                    </div>
                    <p className="text-muted-foreground">University of Nevada, Reno</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      <span>2019 - 2021</span>
                    </div>
                    <p className="text-sm mt-1">GPA: 3.9/4.0</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <GraduationCap size={18} className="text-primary" />
                      <h3 className="font-semibold">B.Tech. in Metallurgical and Materials Science Engineering</h3>
                    </div>
                    <p className="text-muted-foreground">National Institute of Technology Karnataka</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar size={14} />
                      <span>2014 - 2018</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grants & Awards - Reorganized in chronological order */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Grants & Awards</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">NSF ACCESS</h3>
                      <p className="text-xs text-muted-foreground">
                        Awarded 40,000 GPU hours ($32,000 value) for implementing and testing ParGaMD
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">Qualifying Exam</h3>
                      <p className="text-xs text-muted-foreground">Completed at first attempt (September 2023)</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">Advanced Photon Source User Proposal Grant</h3>
                      <p className="text-xs text-muted-foreground">Secured beamtime at Argonne National Laboratory</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">
                        Center for Integrated Nanotechnology User Proposal Grant
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Awarded no-cost access at Los Alamos National Laboratory
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">Preliminary Exam</h3>
                      <p className="text-xs text-muted-foreground">Evaluation: Excellent (June 2022)</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">Summer Fellowship Programme</h3>
                      <p className="text-xs text-muted-foreground">
                        Awarded by the Indian Institute of Technology (IIT) Madras, 2017
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Award className="text-primary flex-shrink-0 mt-0.5" size={16} />
                    <div>
                      <h3 className="font-semibold text-sm">Branch Entry Scholarship</h3>
                      <p className="text-xs text-muted-foreground">
                        Awarded by the National Institute of Technology Karnataka, 2014
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Reordered to put Research Experience first */}
          <div className="lg:col-span-2 space-y-8">
            {/* Research Experience */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Research Experience</h2>
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    <h3 className="font-semibold">Doctoral Researcher</h3>
                  </div>
                  <p className="text-muted-foreground">University of California, Davis</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1 mb-3">
                    <Calendar size={14} />
                    <span>2021 - Present</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Parallelizable GaMD</h4>
                      <p className="text-sm text-muted-foreground">
                        Achieved 3.5× sampling speed-up and near-linear GPU scaling by integrating GaMD with Weighted
                        Ensemble via Nvidia MPS, surpassing either method alone for free-energy convergence.
                      </p>
                      <div className="mt-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WESTPA_GaMD_OpenMM_Stylish_Flowchart-rLmJ0WgqLdYj8n9e6ciSy7XjBEE0FV.png"
                          alt="ParGaMD Workflow: From system configuration to results analysis"
                          width={800}
                          height={600}
                          className="rounded-lg bg-white"
                        />
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                          Workflow diagram showing the integration of GaMD with Weighted Ensemble, including system
                          setup, WESTPA initialization, OpenMM simulations with MPS optimization, and analysis pipeline
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Predicting Hotspot Residues in Antigen–Antibody Complexes</h4>
                      <p className="text-sm text-muted-foreground">
                        Developed a computational pipeline for predicting antigen–antibody hotspot residues, ranking the
                        top five residue pairs crucial to binding affinity, and expediting mutational studies for more
                        efficient antibody engineering.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">Machine Learning for Enhanced Sampling</h4>
                      <p className="text-sm text-muted-foreground">
                        Lead an ongoing ML-integrated MD project to enhance sampling efficiency and accuracy, with
                        systematic comparisons aimed at establishing best practices for robust biomolecular simulations.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium">Alpha-1 Antitrypsin (AAT) Deficiency</h4>
                      <p className="text-sm text-muted-foreground">
                        Evaluated plant-derived recombinant AAT via umbrella sampling, showing therapeutic potential
                        comparable to human AAT.
                      </p>
                      <div className="mt-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3GDGncG7CswZ0mRYvloPz5R9lXTqWG.png"
                          alt="AAT-Elastase interaction models and binding energy"
                          width={800}
                          height={450}
                          className="rounded-lg bg-white"
                        />
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                          Figure 1: Cartoon models of AAT-elastase interactions. Figure 2: PMF profile showing binding
                          free energy between human AAT and elastase (~16.2 kcal/mol)
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">Ovarian Cancer Antibodies</h4>
                      <div className="mt-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eOPUsY8xYM6Zp8Kgb7LWybKcBMvWCh.png"
                          alt="Understanding why 2Rab binds to non-glycosylated FAS and not to glycosylated FAS"
                          width={800}
                          height={300}
                          className="rounded-lg bg-white"
                        />
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                          Understanding why 2Rab binds to non-glycosylated FAS and not to glycosylated FAS
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium">HIV-related GI Damage</h4>
                      <p className="text-sm text-muted-foreground">
                        Applied GaMD to reveal dual binding sites of 10-hydroxystearic acid on PPAR-α, demonstrating
                        therapeutic potential in HIV-induced GI injury (Manuscript currently under second review at
                        Nature).
                      </p>
                      <div className="mt-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VzBT1RorBoR4p3WCFHdXXUO3sx9jhB.png"
                          alt="Predicting Ligand Binding visualization showing molecular interactions and binding sites"
                          width={800}
                          height={300}
                          className="rounded-lg"
                        />
                        <p className="text-sm text-muted-foreground mt-2 text-center italic">
                          Predicting Ligand Binding: Visualization of binding site interactions and residue dynamics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Publications */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Publications</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">
                          Dylan Kramer, Clarissa Rocha, Anugraha Thyagatur, Abhaya Dandekar, Roland Faller, Satya
                          Dandekar.
                        </span>
                        "Microbial Metabolite Restores Gut Barrier and Microbiome Diversity in Viral Infection."
                        <span className="italic"> (Under second review at Nature).</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">
                          Anugraha Thyagatur, Minami, S., Shah, P., McDonald, K. A., Nandi, S., & Faller, R.
                        </span>
                        "Modeling the Influence of Glycosylation on the SARS-CoV-2 Spike Protein."
                        <span className="italic">
                          {" "}
                          Paper presented at the 2023 AIChE Annual Meeting, AIChE. (2023, November 7).
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Anugraha Thyagatur, L.T. Mushongera.</span>
                        "Effect of Interface Orientation and Loading Direction on Cu-Nb Multilayered Nanocomposites."
                        <span className="italic">
                          {" "}
                          Journal of Materials Engineering and Performance, 32, 3371–3377 (2023).
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">Anugraha Thyagatur, L.T. Mushongera.</span>
                        "Effects of Interface Orientation on Deformation Mechanism in Cu-Nb Multilayered
                        Nanocomposites."
                        <span className="italic"> Journal of Molecular Modeling, 28, 166 (2022).</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">
                          Anugraha Thyagatur, R. Gakhar, D. Chidambaram, P. Calderoni, M. Buric, L.T. Mushongera.
                        </span>
                        "Thermodynamic Stability of Sapphire in Molten Chloride."
                        <span className="italic"> Journal of the American Ceramic Society, (2022).</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="18"
                      height="18"
                      className="flex-shrink-0 mt-1"
                    >
                      <path fill="#4285f4" d="M256 411.12L0 202.667 256 0z" />
                      <path fill="#356ac3" d="M256 411.12l256-208.453L256 0z" />
                      <circle fill="#a0c3ff" cx="256" cy="362.667" r="149.333" />
                      <path
                        fill="#76a7fa"
                        d="M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z"
                      />
                    </svg>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">
                          M. Jain, K. Yaddanapudi, Anugraha Thyagatur, K.J. Baldwin, M. Knezevic, N.A. Mara, I.J.
                          Beyerlein.
                        </span>
                        "High Strength and Stability of Bcc Nb/Mg Nanolaminates."
                        <span className="italic"> Acta Materialia, (2023).</span>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conferences */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Conferences</h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Microscope className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">BioMADE Workshop 2024</h3>
                      <p className="text-sm text-muted-foreground">Davis, CA, USA</p>
                      <p className="text-sm mt-1">
                        Presented: "Multiscale Modeling of SARS-CoV-2 Spike Protein Antigens: Exploring Conformational
                        Dynamics to Inform Next-Gen Vaccine Designs."
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Microscope className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">2023 AIChE Annual Meeting</h3>
                      <p className="text-sm text-muted-foreground">Orlando, FL, USA, November 2023</p>
                      <p className="text-sm mt-1">
                        Co-authored: "Modeling the Influence of Glycosylation on the SARS-CoV-2 Spike Protein."
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Microscope className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">TMS 2020 Annual Meeting</h3>
                      <p className="text-sm text-muted-foreground">San Diego, CA, USA</p>
                      <p className="text-sm mt-1">
                        Presented: "Ductile vs. Brittle Behavior of Sapphire Using Nano-indentation and Micro-pillar
                        Compression"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Microscope className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">IMECE 2019</h3>
                      <p className="text-sm text-muted-foreground">Salt Lake City, UT, USA</p>
                      <p className="text-sm mt-1">
                        Presented: "Structure and Properties of Pseudomorphically Transformed Bcc Mg in Mg-Nb Multilayer
                        Nanocomposites"
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Microscope className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">Gordon Research Conference (GRC) Physical Metallurgy 2019</h3>
                      <p className="text-sm text-muted-foreground">Hampshire, Boston, USA</p>
                      <p className="text-sm mt-1">
                        Poster: "Structure and Properties of bcc Mg Synthesized under extreme conditions"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold mb-4">Research Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <Code className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">Enhanced Sampling Methods</h3>
                      <p className="text-sm text-muted-foreground">
                        Developing and optimizing computational techniques to improve sampling efficiency in molecular
                        dynamics simulations
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Code className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">Computational Biophysics</h3>
                      <p className="text-sm text-muted-foreground">
                        Applying computational methods to understand biological systems at the molecular level
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Code className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">Machine Learning in MD</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrating machine learning techniques with molecular dynamics to enhance simulation accuracy
                        and efficiency
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Code className="text-primary flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h3 className="font-semibold">Free Energy Calculations</h3>
                      <p className="text-sm text-muted-foreground">
                        Computing free energy landscapes to understand molecular interactions and binding processes
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} Anugraha T K. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anu.thyagatur@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/anugraha-thyagatur-54335811a/"
              className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com/anugrahat"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="20" height="20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

