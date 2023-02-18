export interface ApplicationData {
  companyName: string;
  name: string;
  email: string;
  image: string;
  number: string;
  experience: string;
  ctc: number;
  coverLetter: string;
  interviewQsr: string;
  jobId: string;
}

export class Application {
  companyName: string;
  name: string;
  email: string;
  image: string;
  number: string;
  experience: string;
  ctc: number;
  coverLetter: string;
  interviewQsr: string;
  jobId: string;
  constructor({
    companyName,
    name,
    email,
    number,
    image,
    experience,
    ctc,
    coverLetter,
    interviewQsr,
    jobId,
  }: ApplicationData) {
    this.companyName = companyName;
    this.name = name;
    this.email = email;
    this.number = number;
    this.experience = experience;
    this.ctc = ctc;
    this.coverLetter = coverLetter;
    this.image = image;
    this.interviewQsr = interviewQsr;
    this.jobId = jobId;
  }
}
